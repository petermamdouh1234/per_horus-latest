
import React, { useState } from 'react';
import BookOrderModal from './BookOrderModal';

const BookShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="py-16 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12">
            The Book of Kheka Yoga
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* 3D Book */}
            <div className="flex justify-center">
              <div className="book-3d w-64 h-80 relative animate-book-rotate">
                <div  absolute w-full h-full rounded bg-gradient-to-br from-pharaonic-gold to-pharaonic-sandDark overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-egyptian font-bold text-white text-xl mb-4">KHEKA YOGA</h3>
                    <p className="font-egyptian text-white/80 mb-6">THE LOST EGYPTIAN SCIENCE</p>
                    <div className="mt-auto">
                      <p className="font-egyptian text-white/90">By Dr. Kheka</p>
                    </div>
                  </div>
                </div>
                <div className="book-spine"></div>
                <div ack"></div>
              </div>
            </div>
            
            {/* Book Description */}
            <div className="space-y-6">
              <p className="text-lg">
                Discover the ancient wisdom of Egyptian temples and the transformative 
                power of Kheka Yoga in this comprehensive guide. Learn how to master 
                the hermetic principles and begin your journey toward inner 
                transmutation.
              </p>
              
              <p className="text-lg">
                This book combines historical insights, practical techniques, and 
                philosophical teachings to provide a complete introduction to this 
                forgotten art of inner alchemy.
              </p>
              
              <ul className="scarab-bullet space-y-4 my-6">
                <li>Complete guide to Kheka Yoga practices</li>
                <li>Historical background of Egyptian mysticism</li>
                <li>Step-by-step transmutation techniques</li>
                <li>Rare teachings revealed for modern practitioners</li>
              </ul>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <BookOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default BookShowcase;
