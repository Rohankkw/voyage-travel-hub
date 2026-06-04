import { motion } from "framer-motion";
import Globe from "./Globe";

export default function WorldBeckons() {
  return (
    <section className="relative py-32 md:py-48 bg-[#05080e] overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-primary font-sans tracking-[0.3em] text-xs uppercase mb-12"
        >
          The Awakening
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-16"
        >
          Some places ask you to look.<br/>
          <span className="text-white/60 italic">Others ask you to listen.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="my-16"
        >
          <Globe />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-white/50 font-sans text-sm md:text-base leading-loose tracking-wide">
            We curate moments that linger long after the passport is stamped. 
            Journeys designed not for the sake of moving, but for the sake of being moved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
