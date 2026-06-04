import { motion } from "framer-motion";
import Globe from "./Globe";

export default function FinalCTA() {
  return (
    <section id="begin" className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Star field background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-30 animate-stars" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_2px,transparent_2px)] bg-[length:90px_90px] opacity-20 animate-stars" style={{ animationDuration: '150s' }} />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mb-12 opacity-50"
        >
          <Globe />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8"
        >
          YOUR NEXT <br />
          <span className="italic text-white/80">ADVENTURE</span> <br />
          BEGINS HERE.
        </motion.h2>

        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="group relative px-12 py-5 overflow-hidden bg-primary text-[#05080e] rounded-sm hover:bg-white transition-colors duration-500"
        >
          <span className="relative z-10 text-sm font-sans tracking-[0.2em] font-medium uppercase">
            Request an Invitation
          </span>
        </motion.button>
      </div>
    </section>
  );
}
