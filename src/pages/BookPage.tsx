import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ScrollReveal';
import InstructionsModal from '@/components/InstructionsModal';

const BookPage = () => {
  const { toast } = useToast();
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleDownload = () => {
    toast({
      title: "Téléchargement",
      description: "Le dossier de presse sera bientôt disponible",
    });
  };

  return (
    <div className="py-16 bg-gradient-to-b from-background to-pharaonic-sand/10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            <span className="bg-gradient-to-r from-pharaonic-gold to-pharaonic-brightGold bg-clip-text text-transparent">
              Le Livre
            </span>
          </h1>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="book-3d w-64 h-80 relative mx-auto">
                <div className="book-pages absolute inset-0 m-0 p-0"></div>
                <div className="book-cover absolute inset-0 m-0 p-0 bg-gradient-to-br from-pharaonic-gold to-pharaonic-sandDark overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-pharaonic-charcoal">
                    <h3 className="font-egyptian font-bold text-pharaonic-gold text-xl mb-4">IL SUFFIT D'OBSERVER</h3>
                    <div className="w-16 h-16 bg-pharaonic-gold/30 rounded-full flex items-center justify-center mb-4 animate-pulse-gold">
                      <img src="/scarab-bullet.svg" alt="Scarab" className="w-10 h-10" />
                    </div>
                    <p className="font-egyptian text-pharaonic-gold/80 mt-auto">BIBLIOMANCIE</p>
                  </div>
                </div>
                <div className="book-spine absolute h-full w-[40px] left-0 m-0 p-0"></div>
                <div className="book-edge absolute h-full w-[40px] right-0 m-0 p-0"></div>
                <div className="book-back absolute inset-0 m-0 p-0"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="space-y-4 p-6 bg-pharaonic-sand/10 rounded-lg">
                <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-4 flex items-center">
                  <span className="w-8 h-8 mr-2 flex-shrink-0">
                    <img src="/scarab-bullet.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
                  </span>
                  L'ART DIVINATOIRE OUBLIÉ DE LA BIBLIOMANCIE
                </h2>
                <p className="text-lg font-medium text-pharaonic-gold">
                  "Il suffit d'observer" — Un livre pour dialoguer avec votre inconscient
                </p>
                <p className="text-lg">
                  La bibliomancie est l'un des plus anciens arts divinatoires au monde.
                  Née dans les temples d'Égypte, pratiquée à travers les siècles dans les traditions sacrées,
                  elle consistait à ouvrir un texte saint — à un passage précis, choisi par l'invisible — pour y
                  lire un message, un rappel, une orientation.
                </p>
                <p className="text-lg">
                  Ce que l'on appelle aujourd'hui inconscient, les anciens l'appelaient force subtile, esprit,
                  pneuma, daimôn, ou Netjer.
                  Et la bibliomancie n'était pas un jeu : c'était un dialogue. Une alliance entre soi et plus grand
                  que soi.
                </p>
                <div className="font-medium text-center my-6 space-y-2 bg-pharaonic-gold/10 p-4 rounded-lg">
                  <p>Ce livre s'inscrit dans cette lignée.</p>
                  <p>Il est un pont entre la mémoire ancienne et l'intelligence sensible d'aujourd'hui.</p>
                </div>
              </div>
            </ScrollReveal>
          </section>
          
          <section className="p-6 bg-pharaonic-sand/10 rounded-lg">
            <div className="space-y-4">
              <p className="text-lg">
                "Il suffit d'observer" est un pont vivant entre l'art ancien de la bibliomancie et l'exploration
                contemporaine de soi.
                C'est un livre qui s'ouvre comme un miroir, qui vous pose des questions justes, qui révèle
                des réponses enfouies.
              </p>
              <p className="text-lg">
                À travers un dialogue en questions et réponses, il devient un compagnon d'introspection,
                un guide discret qui vous ramène à votre axe, à votre vérité.
              </p>
              <div className="text-center my-6 space-y-2 bg-gradient-to-r from-pharaonic-gold/20 to-pharaonic-sand/20 p-4 rounded-lg">
                <p className="text-lg">Chaque page est une clef.</p>
                <p className="text-lg">Chaque mot est un signal.</p>
                <p className="text-lg">Ce que vous cherchez est peut-être là, dans une phrase que vous n'avez pas choisie.</p>
              </div>
            </div>
          </section>
          
          <section className="p-6 bg-pharaonic-sand/10 rounded-lg">
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 flex-shrink-0">
                <img src="/scarab-bullet.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
              </span>
              Psychosophie : Sagesse de l'âme
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                "Il suffit d'observer" est un guide psychosophique original, qui marie des intuitions
                anciennes et des clartés modernes.
                On y croise la psychologie, la philosophie, la spiritualité — mais toujours dans une
                langue simple, directe, intuitive.
              </p>
              <p className="text-lg">Vous y explorerez des thèmes essentiels :</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5">
                    <img src="/scarab-bullet.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>Culpabilité, félicité, empathie, mort, peur, souffrance, perversion, abandon originel...</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5">
                    <img src="/scarab-bullet.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>L'infini, le miroir, le pardon, la liberté, la joie d'exister</span>
                </li>
              </ul>
              <p className="text-lg">
                Ce livre est un journal d'âme déstructuré, organisé par les silences qu'il provoque.
              </p>
            </div>
          </section>
          
          <section className="p-6 bg-pharaonic-sand/10 rounded-lg">
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 flex-shrink-0">
                <img src="/scarab-bullet.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
              </span>
              Comment pratiquer la bibliomancie avec ce livre
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                <p className="text-lg">Centrez-vous sur vos sens. Respirez. Ressentez le sol sous vos pieds.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                <p className="text-lg">Laissez venir la question ou l'intention sans la formuler mentalement.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                <p className="text-lg">Ouvrez le livre au hasard.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                <p className="text-lg">Lisez la question et la réponse qui apparaissent. Ne les analysez pas : laissez-les résonner.</p>
              </li>
            </ol>
            <p className="text-lg mt-6">
              Chaque fois, un dialogue se rouvre entre vous et votre inconscient.
              Ce livre est une invitation à être traversé.
              Une pratique d'observation sacrée.
              Une rencontre avec ce qui, en vous, demande à être entendu.
            </p>
          </section>
          
          <section className="p-6 bg-pharaonic-sand/10 rounded-lg">
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 flex-shrink-0">
                <img src="/scarab-bullet.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
              </span>
              Pour qui ?
            </h2>
            <ul className="space-y-3">
              {["Ceux qui recherchent un outil d'introspection unique et pratique", 
                "Ceux qui souhaitent renouer avec leur intuition profonde", 
                "Ceux qui aiment apprendre de manière fluide, sensible et libre", 
                "Ceux qui savent que les réponses sont déjà en eux"
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5">
                    <img src="/scarab-bullet.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>
          
          <section className="p-8 bg-gradient-to-r from-pharaonic-gold/20 to-pharaonic-sand/30 rounded-lg text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-4">
                Disponible maintenant
              </h2>
              <p className="text-lg mb-2">Format : Livre papier</p>
              <p className="text-2xl font-medium mb-6">Prix : 17,50 CHF</p>
              <p className="text-lg mb-8">
                Offrez à votre inconscient une porte d'accès claire, libre, et poétique.
                Car parfois, il suffit d'observer.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setOrderModalOpen(true)}
                  className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" /> Commander le livre
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider flex items-center justify-center"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-2" /> Télécharger le dossier de presse
                </Button>
              </div>
            </ScrollReveal>
          </section>
          
          <section className="text-center">
            <div className="font-medium my-6 space-y-2 bg-pharaonic-gold/10 p-6 rounded-lg">
              <p className="text-lg">Ce livre est une graine. Un miroir. Un outil de réveil doux.</p>
              <p className="text-lg">C'est la version silencieuse d'un même message :</p>
              <p className="text-xl font-egyptian text-pharaonic-gold">La sagesse n'est pas absente. Elle attend que l'on s'observe.</p>
            </div>
          </section>
        </div>
        
        <div className="mt-16 pt-8 border-t border-pharaonic-gold/30 text-center">
          <Link to="/contact" className="inline-flex items-center font-egyptian text-pharaonic-gold hover:text-pharaonic-gold/80 transition-colors">
            Pratiquer la Bibliomancie <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      {/* Order Book Modal */}
      <InstructionsModal 
        open={orderModalOpen} 
        onOpenChange={setOrderModalOpen}
        title="Le processus"
      >
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
            <p>Rédigez votre rêve avec soin. Fidèlement. En détail. Chaque élément est un hiéroglyphe vivant.</p>
          </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
            <p>Envoyez-le par mail à : reves@perhorus.org</p>
          </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
            <p>Nous vous recontacterons pour fixer un rendez-vous en ligne (visioconférence ou appel). Un espace sobre, profond, confidentiel — où le rêve sera traversé, écouté, traduit et intégré.</p>
          </li>
        </ol>
        <div className="mt-6 border-t border-pharaonic-gold/30 pt-4">
          <p className="font-egyptian text-xl text-pharaonic-gold">Contribution : CHF 90.–</p>
          <p className="text-lg mt-2">
            Ce n'est pas un service. C'est une clé offerte pour ouvrir un seuil oublié (dans l'ombre
            de l'inconscient). Ce tarif n'achète pas une interprétation. Il honore une transmission rare, un moment 
            suspendu entre le visible et l'invisible. Il soutient un travail patient, ancré, offert dans une écoute totale.
          </p>
        </div>
      </InstructionsModal>
    </div>
  );
};

export default BookPage;
