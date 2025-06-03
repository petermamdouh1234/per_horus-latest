
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = "normal" }: { size?: "small" | "normal" | "large" }) => {
  const sizeClasses = {
    small: "text-xl md:text-2xl",
    normal: "text-2xl md:text-3xl",
    large: "text-3xl md:text-5xl",
  };

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center group-hover:animate-float transition-all duration-300">
          <img 
            src="/images/per_horus.png" 
            alt="Per Horus Logo" 
           className="h-half w-half animate-scarab-glow"

          />
        </div>
      </div>
      <div className={`flex flex-col items-start`}>
        <div className={`font-egyptian font-bold text-pharaonic-gold ${sizeClasses[size]} tracking-wide relative bg-gradient-to-r from-pharaonic-gold to-pharaonic-brightGold bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(255,203,69,0.7)]`}>
            Per Horus
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pharaonic-gold transition-all duration-300 group-hover:w-full"></span>
        </div>
        {/* <div className="text-sm text-pharaonic-gold/80 font-egyptian italic">
          Le Cercle du Savoir Oublié
        </div> */}
      </div>
    </Link>
  );
};

export default Logo;
