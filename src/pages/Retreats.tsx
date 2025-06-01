
import React, { useState, useEffect } from 'react';

const retreatImages = [
  '/retreat-1.jpg',
  '/retreat-2.jpg',
  '/retreat-3.jpg',
];

const retreats = [
  {
    id: 1,
    title: 'Desert Awakening',
    location: 'Luxor, Egypt',
    date: 'June 15-22, 2025',
    spaces: 8,
    description: 'Experience the transformative power of the desert landscape as you practice ancient Egyptian techniques of inner alchemy. This retreat takes place near the temples of Luxor, allowing direct connection to the energetic sites of ancient initiations.',
    highlights: [
      'Daily practice in the shadow of ancient monuments',
      'Exclusive access to temple chambers outside regular hours',
      'Desert meditation at sunrise and sunset',
      'Traditional Egyptian meals prepared with local ingredients',
      'Accommodation in a heritage building with views of the Nile'
    ],
    price: '$2,400 USD'
  },
  {
    id: 2,
    title: 'Nile Valley Immersion',
    location: 'Aswan, Egypt',
    date: 'September 5-12, 2025',
    spaces: 12,
    description: 'Journey along the life-giving Nile as ancient Egyptians did, connecting with the flowing energy of this sacred river. The retreat combines boat experiences with temple visits, creating a complete immersion into Egyptian spiritual practices.',
    highlights: [
      'Traditional Dahabiya sailboat journey on the Nile',
      'Sunrise practices on Elephantine Island',
      'Visits to the temples of Philae and Kom Ombo',
      'Guided transmutation rituals at key energy sites',
      'Star observation and cosmic alignment sessions'
    ],
    price: '$2,800 USD'
  },
  {
    id: 3,
    title: 'Mountain Temple Retreat',
    location: 'Alpine Sanctuary',
    date: 'October 18-25, 2025',
    spaces: 6,
    description: 'Bring Egyptian wisdom to the mountains in this unique retreat that translates ancient practices to a completely different landscape. The high altitude and clear mountain air create ideal conditions for advanced breathing techniques and meditation.',
    highlights: [
      'Purpose-built mountain sanctuary with Egyptian-inspired architecture',
      'Advanced breathing techniques in high-altitude conditions',
      'Silent practice days for deep integration',
      'Hot spring rituals inspired by ancient purification ceremonies',
      'Small group format with personalized instruction'
    ],
    price: '$2,200 USD'
  }
];

const Retreats = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRetreat, setSelectedRetreat] = useState(retreats[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % retreatImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
          Kheka Yoga Retreats
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Immerse yourself in the ancient wisdom of Kheka Yoga with our exclusive retreats. 
            Set in serene environments, these retreats offer an intensive experience of inner 
            transmutation guided by experienced practitioners.
          </p>
          
          {/* Retreat Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {retreats.map((retreat) => (
              <button
                key={retreat.id}
                onClick={() => setSelectedRetreat(retreat)}
                className={`px-4 py-2 rounded-full font-egyptian transition-colors ${
                  selectedRetreat.id === retreat.id
                    ? 'bg-pharaonic-gold text-pharaonic-charcoal'
                    : 'bg-pharaonic-gold/20 hover:bg-pharaonic-gold/30'
                }`}
              >
                {retreat.title}
              </button>
            ))}
          </div>
          
          {/* Selected Retreat Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Retreat Images */}
            <div className="relative h-[400px] rounded-md overflow-hidden pharaonic-border">
              {retreatImages.map((image, index) => (
                <div
                  key={index}
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
              <div className="absolute inset-0 bg-gradient-to-t from-pharaonic-charcoal/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-egyptian text-pharaonic-gold">{selectedRetreat.title}</h3>
                <p className="text-white/90">{selectedRetreat.location} • {selectedRetreat.date}</p>
              </div>
            </div>
            
            {/* Retreat Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-2">{selectedRetreat.title}</h2>
                <p className="text-lg mb-4">{selectedRetreat.description}</p>
              </div>
              
              <div>
                <h3 className="font-egyptian text-xl mb-3">Retreat Highlights:</h3>
                <ul className="scarab-bullet space-y-3">
                  {selectedRetreat.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="pharaonic-border p-6 bg-pharaonic-sand/20 rounded">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Date</h4>
                    <p className="font-medium">{selectedRetreat.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="font-medium">{selectedRetreat.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Price</h4>
                    <p className="font-medium">{selectedRetreat.price}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Availability</h4>
                    <p className="font-medium">{selectedRetreat.spaces} spaces left</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://forms.google.com/retreat-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider text-center"
                >
                  Book This Retreat
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
          
          <div className="mt-16 pt-12 border-t border-pharaonic-gold/30 text-center">
            <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-8">Your Retreat Experience</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Each Kheka Yoga retreat is carefully designed to create a transformative experience that combines theory, 
              practice, and immersion in environments conducive to inner work. Our small group format ensures personalized 
              guidance from experienced teachers.
            </p>
            <p className="text-lg max-w-3xl mx-auto mt-4">
              For private retreats or custom group experiences, please contact us directly to discuss your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retreats;
