
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-pharaonic-charcoal/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 z-10 bg-[url('/hieroglyph-pattern.png')] bg-repeat opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6 animate-float">
            <img 
              src="/images/per_horus.png" 
              alt="Per Horus Logo" 
              className="h-24 w-auto animate-scarab-glow"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-egyptian font-bold text-pharaonic-gold mb-6">
            Per Horus - <span className="block mt-2">Le Cercle du Savoir Oublié</span>
          </h1>
          
          <div className="flex justify-center space-x-16 mb-6">
            <span className="text-pharaonic-gold text-2xl">𓂀</span>
            <span className="text-pharaonic-gold text-2xl"> <span className="text-pharaonic-gold">𓆣𓋹𓁈𓃠𓆃☥𓅓☥𓆃𓃠𓁈𓋹𓆣</span></span>
            <span className="text-pharaonic-gold text-2xl">𓂀</span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-egyptian text-white mb-8">
            L'Art Hermétique de la Transmutation Intérieure
          </h2>
          
          <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Se souvenir pour évoluer — Raviver la sagesse des anciens Égyptiens, alliant pragmatisme spirituel
            et maîtrise de l'incarnation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="pharaonic-button group"
            >
              <span className="relative z-10">En Savoir Plus</span>
            </Link>
            <Link
              to="/circle"
              className="pharaonic-button-outline"
            >
              Rejoindre le Cercle
            </Link>
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="w-24 h-1 bg-pharaonic-gold/50"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border with Egyptian Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-pharaonic-gold/20 z-20">
        <div className="h-full w-full bg-[url('/hieroglyph-pattern.png')] bg-repeat-x bg-center opacity-50"></div>
      </div>
    </div>
  );
};

export default HeroSection;
