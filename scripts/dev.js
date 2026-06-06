import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse .env file from the root if it exists, otherwise create it with defaults
const rootDir = path.resolve(__dirname, "..");
const envFile = path.resolve(rootDir, ".env");

const defaultEnv = {
  PORT: "3000",
  API_PORT: "5000",
  BASE_PATH: "/",
  DATABASE_URL: "postgresql://postgres:postgres@localhost:5432/voyage"
};

if (!fs.existsSync(envFile)) {
  console.log(`Creating default .env file at ${envFile}...`);
  const envContent = Object.entries(defaultEnv)
    .map(([key, val]) => `${key}=${val}`)
    .join("\n") + "\n";
  fs.writeFileSync(envFile, envContent, "utf8");
}

const localEnv = { ...process.env };

// Read .env file
const content = fs.readFileSync(envFile, "utf8");
for (const line of content.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const index = trimmed.indexOf("=");
    if (index !== -1) {
      const key = trimmed.substring(0, index).trim();
      const val = trimmed.substring(index + 1).trim().replace(/^['"]|['"]$/g, "");
      localEnv[key] = val;
    }
  }
}

// Ensure defaults are present in localEnv if not specified in .env
for (const [key, val] of Object.entries(defaultEnv)) {
  if (!localEnv[key]) {
    localEnv[key] = val;
  }
}

console.log(`Using environment:`);
console.log(`  PORT (Frontend): ${localEnv.PORT}`);
console.log(`  API_PORT (Backend): ${localEnv.API_PORT}`);
console.log(`  BASE_PATH: ${localEnv.BASE_PATH}`);
console.log(`  DATABASE_URL: ${localEnv.DATABASE_URL.replace(/:[^:@/]+@/, ":****@")}`); // Mask password

const frontendPort = localEnv.PORT || "3000";
const apiPort = localEnv.API_PORT || "5000";

const frontendEnv = {
  ...localEnv,
  PORT: frontendPort,
  API_PORT: apiPort
};

const apiEnv = {
  ...localEnv,
  PORT: apiPort
};

console.log(`Starting backend on port ${apiPort}...`);
const apiProcess = spawn("pnpm", ["--filter", "@workspace/api-server", "run", "dev"], {
  stdio: "inherit",
  shell: true,
  env: apiEnv
});

console.log(`Starting frontend on port ${frontendPort}...`);
const frontendProcess = spawn("pnpm", ["--filter", "@workspace/luxury-travel", "run", "dev"], {
  stdio: "inherit",
  shell: true,
  env: frontendEnv
});

const handleExit = (code) => {
  if (code) {
    process.exit(code);
  }
};

apiProcess.on("exit", handleExit);
frontendProcess.on("exit", handleExit);
