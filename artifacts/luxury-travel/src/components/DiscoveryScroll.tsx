import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import expVilla from "@/assets/exp-villa.png";
import expLodge from "@/assets/exp-lodge.png";
import expIsland from "@/assets/exp-island.png";

const experiences = [
  { id: 1, title: "Ocean Villas", image: expVilla, desc: "Suspended above the turquoise lagoon." },
  { id: 2, title: "Mountain Lodges", image: expLodge, desc: "Warmth amidst the frost." },
  { id: 3, title: "Private Islands", image: expIsland, desc: "The world, entirely yours." },
];

export default function DiscoveryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="experiences" ref={containerRef} className="h-[300vh] bg-[#080d16] relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
        
        <div className="absolute top-32 left-12 z-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Curated <br/> <span className="text-primary italic">Experiences</span>
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] items-center h-full px-12 pb-20">
          {experiences.map((exp) => (
            <div key={exp.id} className="w-[100vw] flex items-center justify-center shrink-0 pr-24">
              <div className="relative w-full max-w-4xl aspect-video overflow-hidden shadow-2xl">
                <img src={exp.image} alt={exp.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12">
                  <span className="text-primary text-xs font-sans tracking-[0.2em] uppercase mb-4 block">Experience 0{exp.id}</span>
                  <h3 className="text-5xl font-serif text-white mb-2">{exp.title}</h3>
                  <p className="text-white/60 font-serif italic text-xl">{exp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
