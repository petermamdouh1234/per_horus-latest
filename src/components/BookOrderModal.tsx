
import React from 'react';
import { X } from 'lucide-react';

interface BookOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookOrderModal = ({ isOpen, onClose }: BookOrderModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-card w-full max-w-md p-6 rounded-lg border-2 border-pharaonic-gold animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-pharaonic-gold/10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-egyptian text-pharaonic-gold text-center mb-6">
          Order Instructions
        </h2>
        
        <ol className="space-y-4 mb-6">
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
            <p>Please pay on this account: <strong>tony@instapay.com</strong></p>
          </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
            <p>Please send the payment information on this WhatsApp number: <strong>01399887770</strong></p>
          </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
            <p>Please fill out the form below so we can deliver your book.</p>
          </li>
        </ol>
        
        <a 
          href="https://forms.google.com/book-order" 
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 text-center bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
        >
          Fill Order Form
        </a>
      </div>
    </div>
  );
};

export default BookOrderModal;
