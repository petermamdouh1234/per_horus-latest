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
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="space-y-4 p-6 bg-pharaonic-sand/10 rounded-lg">
                <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-4 flex items-center">
                  <span className="w-8 h-8 mr-2 flex-shrink-0">
                    <img src="/svgs/pharaoh_colorful.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
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
           <ScrollReveal>
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
                <p className="text-lg"><span className="text-pharaonic-gold text-2xl">𓁈</span> Chaque page est une clef.</p>
                <p className="text-lg"><span className="text-pharaonic-gold text-2xl">𓁈</span> Chaque mot est un signal.</p>
                <p className="text-lg"> <span className="text-pharaonic-gold text-2xl">𓁈</span> Ce que vous cherchez est peut-être là, dans une phrase que vous n'avez pas choisie.</p>
              </div>
            </div>
             </ScrollReveal>
          </section>
          
          <section className="p-6 bg-pharaonic-sand/10 rounded-lg">
           <ScrollReveal>
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 flex-shrink-0">
                <img src="/svgs/pharaoh.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
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
                    <img src="/svgs/eye_of_horus.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>Culpabilité, félicité, empathie, mort, peur, souffrance, perversion, abandon originel...</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5">
                    <img src="/svgs/eye_of_horus.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>L'infini, le miroir, le pardon, la liberté, la joie d'exister</span>
                </li>
                 <li className="flex items-start">
                  <span className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5">
                    <img src="/svgs/eye_of_horus.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>Ce livre est un journal d'âme déstructuré, organisé par les silences qu'il provoque.</span>
                </li>
              </ul>
            
            </div>
             </ScrollReveal>
          </section>
          
          <section className="p-6 bg-pharaonic-sand/10 rounded-lg">
           <ScrollReveal>
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 flex-shrink-0">
                <img src="/svgs/pharaoh.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
              </span>
              Comment pratiquer la bibliomancie avec ce livre
            </h2>
              <ul className="space-y-3">
              {["Centrez-vous sur vos sens. Respirez. Ressentez le sol sous vos pieds.",  
                "Laissez venir la question ou l'intention sans la formuler mentalement",  
                "Ouvrez le livre au hasard.", 
                "Lisez la question et la réponse qui apparaissent. Ne les analysez pas : laissez-les résonner." 
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5">
                    <img src="/svgs/eye_of_horus.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg mt-6">
              Chaque fois, un dialogue se rouvre entre vous et votre inconscient.
              Ce livre est une invitation à être traversé.
              Une pratique d'observation sacrée.
              Une rencontre avec ce qui, en vous, demande à être entendu.
            </p>
             </ScrollReveal>
          </section>
          <div className="w-16 h-1 bg-pharaonic-gold mx-auto mb-8"></div>
                
                <div className="my-8">
                   <ScrollReveal>
                  <img 
                    src="/images/45.jpeg"  
                    alt="Transformation Journey"
                    className="rounded-md w-full h-[500px] object-cover mx-auto pharaonic-border"
                  />
                   </ScrollReveal>
                </div>
                
          
          <section className="p-6 bg-pharaonic-sand/10 rounded-lg">
           <ScrollReveal>
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 flex-shrink-0">
                <img src="/svgs/pharaoh.svg" alt="Scarab" className="w-full h-full animate-scarab-glow" />
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
                    <img src="/svgs/eye_of_horus.svg" alt="Scarab" className="w-full h-full" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
             </ScrollReveal>
          </section>
          
          <section className="p-8 bg-gradient-to-r from-pharaonic-gold/20 to-pharaonic-sand/30 rounded-lg text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-4">
                <span className="text-pharaonic-gold text-2xl">✦</span> Disponible maintenant
              </h2>
              <p className="text-lg mb-2"><span className="text-pharaonic-gold text-2xl">𓅓</span> Format : Livre papier</p>
              <p className="text-2xl font-medium mb-6"><span className="text-pharaonic-gold text-2xl">𓅓</span> Prix : 17,50 CHF <br></br><span className="text-pharaonic-gold text-2xl">𓅓</span> frais d’expédition : 5,5 CHF</p>
              <p className="text-lg mb-8">
               <span className="text-pharaonic-gold text-2xl">𓅓</span> Offrez à votre inconscient une porte d'accès claire, libre, et poétique.
                Car parfois, il suffit d'observer.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setOrderModalOpen(true)}
                  className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" /> Commander le livre
                </Button>
                <a
            href="/files/Dossier%20de%20presse%20-%20Il%20suffit%20d'Observer!.pdf"
            download="Dossier_de_presse_Il_suffit_d_Observer.pdf"
            className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider inline-block text-center"
          >
            Télécharger le dossier de presse ⬇
          </a>

              </div>
            </ScrollReveal>
          </section>
          
          <section className="text-center">
             <ScrollReveal>
            <div className="font-medium my-6 space-y-2 bg-pharaonic-gold/10 p-6 rounded-lg">
              <p className="text-lg"> <span className="text-pharaonic-gold text-2xl">𓅓</span>Ce livre est une graine. Un miroir. Un outil de réveil doux.</p>
              <p className="text-lg"><span className="text-pharaonic-gold text-2xl">𓅓</span> C'est la version silencieuse d'un même message :</p>
              <p className="text-xl font-egyptian text-pharaonic-gold"><span className="text-pharaonic-gold text-2xl">𓅓</span> La sagesse n'est pas absente. Elle attend que l'on s'observe 𓅓</p>
            </div>
            </ScrollReveal>
          </section>
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
           <p>
             Merci de bien vouloir remplir ce formulaire pour finaliser votre inscription : <br></br>&nbsp;
              <a 
                href="https://docs.google.com/forms/d/1Elt3qEzHDxh-nKbwuzTDVnCsU36qVW9BUDfyHEoYMVs/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >dans ce formulaire</a>.
            </p>
          </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
             <p>
              Veuillez régler 23.00 CHF via ce lien Stripe :<br></br>&nbsp;
              <a 
                href="https://buy.stripe.com/test_7sY28kcZygWifCDepB7AI00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >striplink</a>.
            </p>
          </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
           <p>
              Veuillez envoyer la capture d'écran du paiement à ce numéro pour confirmation&nbsp;
              <a
                href="https://wa.me/2089755668645"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >
                01288997778
              </a>
            </p>  </li>
        </ol>
        {/* 
  Contribution section explaining the fee:
  - The amount is CHF 90.–
  - Emphasizes that this fee is not for a typical service, but rather a key to accessing a forgotten threshold 
    within the unconscious.
  - The price does not buy an interpretation, but honors a rare transmission — a suspended moment 
    between the visible and invisible.
  - It supports patient, grounded work offered with full attention and listening.
*/}

        
      </InstructionsModal>
    </div>
  );
};

export default BookPage;
