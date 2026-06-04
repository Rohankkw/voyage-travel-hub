import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#05080d] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Subtle gold glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[200px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="text-4xl font-serif tracking-widest text-white mb-6 inline-block">
              VOYAGE
            </Link>
            <p className="text-white/60 font-serif italic text-xl max-w-sm leading-relaxed">
              The world is a living work of art. <br />
              The world is waiting.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-sans tracking-widest text-white uppercase mb-8 opacity-50">Destinations</h4>
            <ul className="space-y-4">
              {['Swiss Alps', 'Maldives', 'Santorini', 'Dubai'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors font-sans text-sm tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans tracking-widest text-white uppercase mb-8 opacity-50">Experiences</h4>
            <ul className="space-y-4">
              {['Private Islands', 'Mountain Lodges', 'Ocean Villas', 'Expeditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors font-sans text-sm tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs font-sans tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VOYAGE LUXURY TRAVEL.
          </p>
          <div className="flex space-x-8">
            {['Instagram', 'Twitter', 'Journal'].map((social) => (
              <a key={social} href="#" className="text-white/40 hover:text-white text-xs font-sans tracking-widest uppercase transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
