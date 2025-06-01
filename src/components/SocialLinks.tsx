
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const SocialLinks = ({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) => {
  const baseClasses = "flex items-center justify-center w-10 h-10 rounded-full bg-pharaonic-gold text-pharaonic-charcoal hover:bg-pharaonic-gold/80 transition-colors";
  
  return (
    <div className={`flex ${orientation === "vertical" ? "flex-col" : ""} gap-3`}>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook"
        className={baseClasses}
      >
        <Facebook size={20} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
        className={baseClasses}
      >
        <Instagram size={20} />
      </a>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp"
        className={baseClasses}
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
