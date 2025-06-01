
import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const sessionTypes = [
  "Le Cercle Kheka",
  "Interprétation des Rêves",
  "Rejoindre l’Association Per Horus ",
  "Le Livre-Miroir ",
  "Séjour dans les Alpes",
  "Voyages en Égypte "
  
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sessionType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        sessionType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
          Book Your Appointment
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="pharaonic-border p-8 bg-pharaonic-sand/20 rounded">
                <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">Contact Information</h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 text-pharaonic-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p>Rue Philippe-Plaltamour 6 <br></br>1201 Genève</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 text-pharaonic-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p>dinasache320@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 text-pharaonic-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p>+41764707386</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="pharaonic-border p-8 bg-pharaonic-sand/20 rounded">
                <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">Types de sessions</h2>
                <ul className="scarab-bullet space-y-4">
                  <li> Le Cercle Kheka </li>
                  <li> Interprétation des Rêves</li>
                  <li>Rejoindre l’Association Per Horus </li>
                  <li>Le Livre-Miroir </li>
                  <li>Séjour dans les Alpes </li>
                  <li>Voyages en Égypte </li>
                  
                </ul>


              </div>
            </div>
            
            {/* Request Form */}
            <div className="pharaonic-border p-8 bg-card rounded">
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">Request Appointment</h2>
              
              {isSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <p>Votre demande a été envoyée avec succès ! Nous vous contacterons prochainement.</p>
                </div>
              ) : null}
              
              {error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                  <p>{error}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                     Nom complet 
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-pharaonic-gold/30 rounded bg-background focus:border-pharaonic-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                     Adresse e-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-pharaonic-gold/30 rounded bg-background focus:border-pharaonic-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sessionType" className="block mb-2 font-medium">
                     Type de session
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      required
                      value={formData.sessionType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-pharaonic-gold/30 rounded bg-background focus:border-pharaonic-gold focus:outline-none"
                    >
                      <option value="" disabled> Sélectionnez le type de session </option>
                      {sessionTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-pharaonic-gold/30 rounded bg-background focus:border-pharaonic-gold focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting...' : 'Envoyer la demande'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
