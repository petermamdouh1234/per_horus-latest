import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-8">
                <span className="text-pharaonic-gold text-2xl">𓆓</span> Le Seuil
              </h2>

              <div className="hieroglyph-divider">
                <span className="text-pharaonic-gold">𓂀</span>
              </div>

              <div className="my-8">
                <img
                  src="/images/1.jpg"
                  alt="Hermetic Art"
                  className="rounded-md w-full h-85 object-cover pharaonic-border"
                />
              </div>

              <ScrollReveal delay={200}>
                <p className="text-lg mb-6">
                  <span className="text-pharaonic-gold text-2xl">✦</span> L’élan fondateur
                  <br /><br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Nous ne courons pas après le mystère.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Nous venons rappeler qu’il est encore là — intact — mais que l’intelligence pour l’accueillir s’est effondrée.
                  Per Horus est né de cette fracture.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Dans un monde saturé de recettes et de croyances en kit,
                  nous offrons un chemin radical : structuré, sacré, sans compromis.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="text-lg mb-8">
                  <span className="text-pharaonic-gold text-2xl">✦</span> Ce que nous faisons
                  <br /><br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Ici, nous bâtissons des pyramides en nous.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Une architecture intérieure aux trois faces unies : spiritualité, matérialité et philosophie,<br />
                  comme dans l’Égypte des bâtisseurs, seul système vivant à avoir traversé les millénaires sans s'effondrer.
                </p>
              </ScrollReveal>

              <div className="flex justify-center my-8">
                <div className="w-20 h-1 bg-pharaonic-gold"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-pharaonic-charcoal/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="pharaonic-heading text-2xl md:text-3xl mb-8">
                Les Mystères de Per Horus<br />"Voir la présentation"
              </h2>

              <div className="relative rounded-lg overflow-hidden pharaonic-border">
                <video
                  controls
                  className="w-full aspect-video object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://samplelib.com/lib/preview/mp4/sample-30s.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="text-lg font-egyptian text-pharaonic-gold mt-6">
                Voyage au cœur des pratiques spirituelles égyptiennes
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pharaonic-charcoal text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pharaonic-gold/5"></div>
          <div className="h-full w-full bg-[url('/hieroglyph-pattern.png')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <span className="text-pharaonic-gold text-4xl">☥</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-egyptian text-pharaonic-gold mb-6">
                <span className="text-pharaonic-gold text-2xl">✦</span> Là où commence l'œuvre
              </h2>

              <div className="w-16 h-1 bg-pharaonic-gold mx-auto mb-8"></div>

              <div className="my-8">
                <img
                  src="/images/6-bis.jpg"
                  alt="Transformation Journey"
                  className="rounded-md w-full h-[500px] object-cover mx-auto pharaonic-border"
                />
              </div>

              <ScrollReveal delay={200}>
                <p className="text-lg mb-8 leading-relaxed">
                  <span className="text-pharaonic-gold text-2xl">✦</span> Ce n’est ni une méthode ni une nouvelle voie, mais une réponse ancestrale à une crise actuelle — un chantier sacré pour ceux qui refusent le mensonge.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Ici, tout est acte<br />
                  Chaque pas, chaque mot, chaque rêve devient une clé.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Les cercles d’étude vivants, où le texte n’est pas lu — il est habité.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Le cycle des conférences, parole de feu, seuils incarnés, voie unique vers le Kheka Yoga.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> Les voyages initiatiques, pour marcher là où le savoir s’est imprimé dans la pierre.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> L’interprétation des rêves, comme miroir de l’âme et passage vers l’axe.<br />
                  <span className="text-pharaonic-gold text-2xl">☥</span> La bibliomancie vivante, où chaque page devient un signal — et vous répond.<br /><br />
                  <span className="text-pharaonic-gold text-2xl">✦</span> Rien à consommer. Tout à traverser ✦<br /><br />

                  <span className="text-pharaonic-gold text-2xl">✦</span> Pour qui ?<br />
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> Pour ceux que la modernité vide, et que la spiritualité sucrée endort.<br />
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> Pour les cerveaux qui tournent vite — pas par défaut, mais par dessein divin.<br />
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> On leur a dit : tais-toi.<br />
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> On aurait dû dire : trace l’axe.<br />
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> Pour les lucides. Les éveillés sans refuge.<br />
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> Trop pour fuir, gober ou se soumettre.<br />
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> Ceux qui ne cherchent plus, mais construisent de l’intérieur.
                </p>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal>
                <div className="flex flex-col items-center justify-center mt-12 gap-4">
                  <div className="flex flex-col md:flex-row gap-4 w-full md:justify-center">
                    <Link
                      to="/about"
                      className="w-full md:w-[250px] text-center px-2 py-1 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                    >
                      explorer
                    </Link>
                    <Link
                      to="/pilgrimages"
                      className="w-full md:w-[250px] text-center px-2 py-1 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                    >
                      voyager
                    </Link>
                    <Link
                      to="/onirologie"
                      className="w-full md:w-[250px] text-center px-2 py-1 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                    >
                      rêver
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <div className="flex justify-center mt-12">
                <span className="text-pharaonic-gold text-2xl">𓆓</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
