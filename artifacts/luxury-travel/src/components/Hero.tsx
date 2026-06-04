import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], ["-5%", "5%"]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], ["-5%", "5%"]);
  
  const fgX = useTransform(smoothMouseX, [-0.5, 0.5], ["-2%", "2%"]);
  const fgY = useTransform(smoothMouseY, [-0.5, 0.5], ["-2%", "2%"]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-[#060b13]"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a1220] to-[#2a1708]" />
      
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          x: bgX,
          y: bgY,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale: 1.1
        }}
      />

      {/* SVG Mountain Layers */}
      <motion.div className="absolute bottom-0 left-0 right-0 z-10 w-full h-[60vh]" style={{ x: bgX, y: bgY }}>
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="w-full h-full opacity-60">
          <path d="M0 600V400L200 300L400 450L600 200L800 350L1000 100L1200 300L1440 200V600H0Z" fill="currentColor" className="text-[#0c1322]" />
        </svg>
      </motion.div>
      
      <motion.div className="absolute bottom-0 left-0 right-0 z-20 w-full h-[40vh]" style={{ x: fgX, y: fgY }}>
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-full opacity-80">
          <path d="M0 400V300L300 150L500 250L750 100L950 200L1200 50L1440 150V400H0Z" fill="currentColor" className="text-[#05080e]" />
        </svg>
      </motion.div>

      {/* Clouds / Birds animation layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [1500, -200] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-0 w-32 h-8 bg-white/5 blur-xl rounded-full"
        />
        <motion.div 
          animate={{ x: [-200, 1500] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[35%] left-0 w-64 h-12 bg-white/5 blur-2xl rounded-full"
        />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-primary font-sans tracking-[0.3em] uppercase text-xs mb-8"
        >
          An Invitation to Explore
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-wider mb-8"
        >
          VOYAGE
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </div>
    </section>
  );
}
