
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pharaonic-charcoal text-white/90 egyptian-pattern-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Logo />
            <p className="mt-4">
              L'Art Hermétique de la Transmutation Intérieure, ravivant la sagesse des temples égyptiens.
            </p>
            <div className="mt-6 flex justify-center">
              <img 
                src="/images/per_horus.png"
                alt="Per Horus Logo" 
                className="h-16 w-auto animate-scarab-glow"
              />
            </div>
          </div>
          
          {/* Quick Links */}
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-egyptian text-pharaonic-gold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-pharaonic-gold transition-colors">Le Seuil </Link></li>
              <li><Link to="/about" className="hover:text-pharaonic-gold transition-colors"> L’Arche des Transmissions </Link></li>
              <li><Link to="/onirologie" className="hover:text-pharaonic-gold transition-colors">Onirologie</Link></li>
              <li><Link to="/pilgrimages" className="hover:text-pharaonic-gold transition-colors">Les Pèlerinages Alchimiques </Link></li>
              <li><Link to="/book" className="hover:text-pharaonic-gold transition-colors"> Le Livre </Link></li>
              <li><Link to="/origin" className="hover:text-pharaonic-gold transition-colors">L’origine du feu</Link></li>
              <li><Link to="/circle" className="hover:text-pharaonic-gold transition-colors">Ce Silence Qui Trahit </Link></li>
              <li><Link to="/contact" className="hover:text-pharaonic-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-egyptian text-pharaonic-gold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-pharaonic-gold mr-3 flex-shrink-0 mt-1" />
                <span>Rue Philippe-Plaltamour 6 <br></br>1201 Genève</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-pharaonic-gold mr-3 flex-shrink-0 mt-1" />
                <span>dinasache320@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-pharaonic-gold mr-3 flex-shrink-0 mt-1" />
                <span>+41764707386</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-pharaonic-gold/30 text-center">
          <p className="per-horus-motto">Se souvenir pour évoluer</p>
          <p>© {currentYear} Per Horus. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
