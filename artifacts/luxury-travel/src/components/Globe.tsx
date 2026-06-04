import { motion } from "framer-motion";

export default function Globe() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] perspective-1000">
      <div 
        className="w-full h-full rounded-full border border-white/10 shadow-[0_0_80px_rgba(25,80,120,0.15)] relative transform-style-3d group"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(20,40,60,0.4) 0%, rgba(5,10,15,0.8) 100%)',
          animation: 'globe-rotate 40s linear infinite'
        }}
      >
        {/* Meridians */}
        <div className="absolute inset-0 border border-white/5 rounded-full transform rotate-y-45"></div>
        <div className="absolute inset-0 border border-white/5 rounded-full transform rotate-y-90"></div>
        <div className="absolute inset-0 border border-white/5 rounded-full transform rotate-y-135"></div>
        
        {/* Equator */}
        <div className="absolute top-1/2 left-0 w-full border-t border-white/10 transform -translate-y-1/2 rotate-x-90"></div>
        
        {/* Glowing dots (Cities) */}
        <div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,170,50,0.8)]" />
        <div className="absolute top-[60%] left-[30%] w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,170,50,0.8)]" />
        <div className="absolute top-[40%] left-[80%] w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,170,50,0.8)]" />
        
        {/* Arcs (SVG) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <path 
            d="M 60 30 Q 50 10 30 60" 
            fill="transparent" 
            stroke="url(#grad1)" 
            strokeWidth="0.5"
            strokeDasharray="4 2"
            className="opacity-50 group-hover:opacity-100 transition-opacity duration-1000"
          />
          <path 
            d="M 30 60 Q 60 80 80 40" 
            fill="transparent" 
            stroke="url(#grad1)" 
            strokeWidth="0.5"
            strokeDasharray="4 2"
            className="opacity-50 group-hover:opacity-100 transition-opacity duration-1000"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(35, 95%, 55%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(35, 95%, 55%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Hover overlay glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(35,160,200,0.1)_0%,transparent_70%)]" />
      </div>
    </div>
  );
}
