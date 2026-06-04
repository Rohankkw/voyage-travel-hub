import { motion } from "framer-motion";
import alps from "@/assets/alps.png";
import maldives from "@/assets/maldives.png";
import santorini from "@/assets/santorini.png";
import dubai from "@/assets/dubai.png";
import kyoto from "@/assets/kyoto.png";
import bali from "@/assets/bali.png";
import iceland from "@/assets/iceland.png";

const destinations = [
  { name: "Swiss Alps", image: alps, desc: "Silence in the clouds." },
  { name: "Maldives", image: maldives, desc: "The edge of the ocean." },
  { name: "Santorini", image: santorini, desc: "Sunset painted in stone." },
  { name: "Dubai", image: dubai, desc: "Mirages made real." },
  { name: "Kyoto", image: kyoto, desc: "Time stands still." },
  { name: "Bali", image: bali, desc: "Emerald serenity." },
  { name: "Iceland", image: iceland, desc: "Fire meets ice." }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-32 bg-[#05080e] relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 md:w-1/2"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Iconic <br/><span className="text-white/40 italic">Landscapes</span></h2>
          <p className="text-white/50 font-sans tracking-wide text-sm leading-relaxed max-w-md">
            Seven corners of the earth, selected for their profound impact on the soul.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {destinations.map((dest, i) => (
            <motion.div 
              key={dest.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i % 2 === 0 ? 0 : 0.2 }}
              className={`group relative overflow-hidden flex flex-col ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-serif text-white">{dest.name}</h3>
                <span className="text-xs font-sans text-primary tracking-widest uppercase">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-white/50 font-serif italic mt-2">{dest.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
