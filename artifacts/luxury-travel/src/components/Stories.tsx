import { motion } from "framer-motion";
import iceland from "@/assets/iceland.png";
import alps from "@/assets/alps.png";
import kyoto from "@/assets/kyoto.png";

const stories = [
  {
    name: "Sarah K.",
    location: "New York",
    quote: "Voyage took us to places we didn't know we needed. Iceland changed everything.",
    image: iceland,
  },
  {
    name: "Marco T.",
    location: "Milan",
    quote: "The Swiss Alps itinerary was flawless. Pure magic. I will go back every year.",
    image: alps,
  },
  {
    name: "Aiko N.",
    location: "Tokyo",
    quote: "Kyoto in cherry blossom season. I cried. Worth every moment.",
    image: kyoto,
  }
];

export default function Stories() {
  return (
    <section id="stories" className="py-32 bg-[#0a1220] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Traveler Stories</h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="space-y-32">
          {stories.map((story, i) => (
            <div key={story.name} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden"
              >
                <img src={story.image} alt={story.name} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <span className="text-6xl font-serif text-primary/40 leading-none mb-4">"</span>
                <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8">
                  {story.quote}
                </p>
                <div>
                  <h4 className="text-sm font-sans tracking-widest text-white uppercase">{story.name}</h4>
                  <span className="text-xs font-sans tracking-widest text-white/50">{story.location}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
