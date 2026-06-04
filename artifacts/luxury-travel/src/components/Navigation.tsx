import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(11, 16, 26, 0)", "rgba(11, 16, 26, 0.9)"]
  );

  const navBackdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: navBackdropFilter,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-20' : 'h-28'}`}>
        <Link href="/" className="text-3xl font-serif tracking-widest text-white hover:text-primary transition-colors">
          VOYAGE
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <a href="#destinations" className="text-sm font-sans tracking-widest text-white/80 hover:text-white transition-colors uppercase">
            Destinations
          </a>
          <a href="#experiences" className="text-sm font-sans tracking-widest text-white/80 hover:text-white transition-colors uppercase">
            Experiences
          </a>
          <a href="#stories" className="text-sm font-sans tracking-widest text-white/80 hover:text-white transition-colors uppercase">
            Stories
          </a>
        </div>

        <div>
          <a href="#begin" className="group relative px-6 py-3 overflow-hidden rounded-sm border border-white/20 hover:border-primary/50 transition-colors">
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative text-xs font-sans tracking-widest text-white uppercase group-hover:text-primary transition-colors">
              Begin Journey
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
