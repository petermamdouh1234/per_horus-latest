
import React, { useState } from 'react';
import BookOrderModal from './BookOrderModal';
import { ArrowRight } from 'lucide-react';

const Book = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="py-16">
      <div className="page-container">
        <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
          The Book of Kheka Yoga
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Book */}
            <div className="flex justify-center">
              <div className="book-3d w-80 h-96 relative">
                <div className="book-pages absolute inset-0 m-0 p-0"></div>
                <div className="book-cover absolute inset-0 m-0 p-0 overflow-hidden rounded-lg">
  <img 
    src="/images/555.jpeg" 
    alt="Book Cover" 
    className="w-full h-full object-cover"
  />
</div>

                <div className="book-spine absolute h-full w-[40px] left-0 m-0 p-0"></div>
                <div className="book-edge absolute h-full w-[40px] right-0 m-0 p-0"></div>
                <div className="book-back absolute inset-0 m-0 p-0 overflow-hidden rounded-lg">
  <img
    src="/images/666.jpeg"  // your back cover image path here
    alt="Book Back Cover"
    className="w-full h-full object-cover"
  />
</div>

              </div>
            </div>
            
            {/* Book Description */}
            <div className="space-y-6">
              <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4">
                Discover Ancient Egyptian Wisdom
              </h2>
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
              
              <div className="my-8 space-y-6">
                <h3 className="font-egyptian text-xl">What You'll Learn:</h3>
                
                <ul className="scarab-bullet space-y-4">
                  <li>Complete guide to Kheka Yoga practices and their historical origins</li>
                  <li>In-depth exploration of Egyptian mysticism and hermetic principles</li>
                  <li>Step-by-step transmutation techniques for daily practice</li>
                  <li>Rare teachings from ancient temple traditions revealed for modern practitioners</li>
                  <li>How to apply alchemical principles to transform your consciousness</li>
                  <li>Methods for integrating body, mind, and spirit in the Egyptian tradition</li>
                </ul>
              </div>
              
              <div className="pharaonic-border p-6 bg-pharaonic-sand/20 rounded my-8">
                <h3 className="font-egyptian text-xl text-pharaonic-gold mb-4">Limited Edition Hardcover</h3>
                <p>Each book is hand-bound with premium materials and includes exclusive content not available in the standard edition.</p>
                <p className="font-bold mt-2">Price: $49.99 USD</p>
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
              >
                Order Now <ArrowRight className="inline ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-pharaonic-gold/30">
            <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-6 text-center">Reader Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  quote: "This book completely transformed my understanding of ancient Egyptian practices. The exercises are practical and profound."
                },
                {
                  name: "Michael J.",
                  quote: "As someone who has studied various yogic traditions, the Kheka approach offers something truly unique. Highly recommended."
                },
                {
                  name: "Amira T.",
                  quote: "Dr. Kheka has uncovered wisdom that bridges ancient knowledge with modern psychology. A must-read for serious practitioners."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-pharaonic-gold/30">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pharaonic-gold/30 flex items-center justify-center text-pharaonic-gold font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <span className="ml-3 font-medium">{testimonial.name}</span>
                  </div>
                  <p className="italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <BookOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Book;
