import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function JourneyPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-[#05080e] relative min-h-[150vh] flex flex-col items-center">
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-3xl flex justify-center py-24">
        <svg viewBox="0 0 400 800" className="w-full max-w-xs h-auto opacity-40">
          <motion.path
            d="M 200 0 C 200 100, 100 200, 100 400 C 100 600, 300 600, 300 800"
            fill="transparent"
            stroke="url(#journey-grad)"
            strokeWidth="2"
            strokeDasharray="1 1"
            className="opacity-20"
          />
          <motion.path
            d="M 200 0 C 200 100, 100 200, 100 400 C 100 600, 300 600, 300 800"
            fill="transparent"
            stroke="url(#journey-grad)"
            strokeWidth="3"
            style={{ pathLength }}
          />
          
          {/* Pins */}
          <motion.circle cx="200" cy="0" r="4" fill="#f59e0b" style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }} />
          <motion.circle cx="100" cy="400" r="4" fill="#f59e0b" style={{ opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1]) }} />
          <motion.circle cx="300" cy="800" r="4" fill="#f59e0b" style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]) }} />
          
          <defs>
            <linearGradient id="journey-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-1/4 left-10 md:left-24">
          <motion.h4 style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }} className="text-xl font-serif text-white">Departure</motion.h4>
        </div>
        <div className="absolute top-1/2 right-10 md:right-24 text-right">
          <motion.h4 style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]) }} className="text-xl font-serif text-white">Discovery</motion.h4>
        </div>
        <div className="absolute bottom-1/4 left-10 md:left-24">
          <motion.h4 style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }} className="text-xl font-serif text-white">Arrival</motion.h4>
        </div>
      </div>
    </section>
  );
}
