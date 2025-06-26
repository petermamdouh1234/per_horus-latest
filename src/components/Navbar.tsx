
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Le Seuil', href: '/' },
    { name: 'LArche des Transmissions', href: '/about' },
    { name: 'Onirologie', href: '/onirologie' },
    { name: 'Pèlerinages', href: '/pilgrimages' },
    { name: 'Le Livre', href: '/book' },
    { name: "L'origine du feu", href: '/origin' },
    { name: 'Ce Silence Qui Trahit', href: '/circle' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-pharaonic-gold shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-6 flex-wrap justify-end">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{ maxWidth: '340px' }}
                className={`truncate font-egyptian font-medium tracking-normal transition-colors hover:text-pharaonic-gold text-sm relative ${
                  location.pathname === item.href
                    ? 'text-pharaonic-gold after:content-[""] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-1 after:bg-pharaonic-gold'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="ml-2 p-2 rounded-md text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4 bg-background border-t border-pharaonic-gold/30">
          <div className="container mx-auto px-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 px-3 font-egyptian rounded-md ${
                  location.pathname === item.href
                    ? 'bg-pharaonic-gold/10 text-pharaonic-gold'
                    : 'hover:bg-pharaonic-gold/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
