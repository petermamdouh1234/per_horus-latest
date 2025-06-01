
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const retreatImages = [
  '/images/1.6.jpg',
  '/images/1.3.jpg',
  '/images/1.7.jpg',
  '/images/1.8.jpg',
  '/images/1.10.jpg',
  '/images/1.11.jpg',
  '/images/1.12.jpg',
  '/images/1.9.jpg',
  '/images/1.13.jpg',
];

const retreats = [
  {
    title: 'Desert Awakening',
    location: 'Luxor, Egypt',
    date: 'June 15-22, 2025',
    spaces: 8,
  },
  {
    title: 'Nile Valley Immersion',
    location: 'Aswan, Egypt',
    date: 'September 5-12, 2025',
    spaces: 12,
  },
  {
    title: 'Mountain Temple Retreat',
    location: 'Alpine Sanctuary',
    date: 'October 18-25, 2025',
    spaces: 6,
  },
];

const RetreatsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % retreatImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-background to-pharaonic-nileBlue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-pharaonic-gold text-3xl">𓁢</span>
            <h2 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl">
              Kheka Yoga Retreats
            </h2>
            <span className="text-pharaonic-gold text-3xl">𓁢</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Rotating Images */}
            <div className="relative h-[400px] overflow-hidden rounded-md border-4 border-pharaonic-gold/30">
              {retreatImages.map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Retreat location ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-pharaonic-charcoal/60 to-transparent"></div>
            </div>
            
            {/* Retreat Info */}
            <div>
              <h3 className="text-2xl md:text-3xl font-egyptian text-pharaonic-gold mb-6">
                Transformative Retreats
              </h3>
              <p className="text-lg mb-8">
                Immerse yourself in the ancient wisdom of Kheka Yoga with our exclusive retreats. 
                Set in serene environments, these retreats offer an intensive experience of inner 
                transmutation guided by experienced practitioners.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl font-egyptian text-pharaonic-gold mb-4">
                  Upcoming Retreats:
                </h4>
                
                {retreats.map((retreat, index) => (
                  <div 
                    key={index} 
                    className="border-l-4 border-pharaonic-gold pl-4 py-2"
                  >
                    <h5 className="font-egyptian text-lg">{retreat.title}</h5>
                    <p>{retreat.date} • {retreat.location}</p>
                    <p className="text-sm mt-1">Spaces available: {retreat.spaces}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://forms.google.com/retreat-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider text-center"
                >
                  Book a Retreat
                </a>
                <a
                  href="https://forms.google.com/custom-dates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider text-center"
                >
                  Request Custom Dates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatsSection;
