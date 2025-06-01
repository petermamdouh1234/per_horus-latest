  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import ScrollReveal from '@/components/ScrollReveal';
  import { Button } from '@/components/ui/button';
  import InstructionsModal from '@/components/InstructionsModal';

  const Circle = () => {
    const [instructionsModalOpen, setInstructionsModalOpen] = useState(false);
    
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
              Ce Silence Qui Trahit
            </h1>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
               Ce n’est plus le moment d’attendre, ni le temps du silence.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="left">
                <img 
                  src="/images/4.jpg" 
                  alt="Incubation des rêves" 
                 className="w-full h-[450px] object-cover rounded-md pharaonic-border"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" className="space-y-4">
                <p className="text-lg">
                   <span className="text-pharaonic-gold text-2xl">𖤍</span> Rejoindre Per Horus ,c’est poser un acte net.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𖤍</span> je ne veux plus consommer du sacré comme un produit,je veux redevenir source.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𖤍</span> C’est choisir de ne plus fuir ce qui m’appartient.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> De ne plus chercher des maîtres lointains alors que mes racines attendent d’être réactivées.
                </p>
                <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𖤍</span> C’est reconnaître que notre tradition Sapientielle n’est pas morte,elle a juste été bâillonnée, travestie, trahie.
                </p>
                 <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𖤍</span> Et surtout :<br />
                    Accepter de se faire remuer la conscience.<br />
                    Là où ça gratte.<br />
                    Là où ça brûle.<br />
                    Là où — enfin —Ça réveille.
                
                </p>
              </ScrollReveal>
            </div>
          </section>

            
             <section>
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
               ✦ Le Cercle est une réponse,Une vraie. 
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="right" className="space-y-4 order-2 md:order-1">
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> On ne va pas faire taire le mental, on va le rééduquer ce Conscient (le principe masculin en nous). 
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𖤍</span> 
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Rencontrer son anima ou son animus en rêve, ce n'est pas "penser au féminin ou au
                  masculin" : c'est incarner une union intérieure entre ce que nous sommes et ce qui nous manque.
                  C'est embrasser le complémentaire, reconnaître l'altérité en soi, et accueillir une
                  transformation.
                </p>
                <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𖤍</span> Chez Per Horus, nous n'analysons pas les rêves. Nous les lisons comme des oracles intérieurs, 
                  et nous guidons chacun dans cette rencontre — réelle, intime, transformatrice — avec l'autre en soi.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" className="order-1 md:order-2">
                <img 
                  src="/images/99.jpeg" 
                  alt="Anima et Animus" 
                  className="w-full h-[450px] object-cover rounded-md pharaonic-border"   // custom height 280px

                />
              </ScrollReveal>
            </div>
          </section>

            
            <section>
               <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                Ce que comprend l'adhésion
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Connaissance de soi  <span className="text-pharaonic-gold text-2xl">𓆓</span></h3>
                  <p className="text-lg">
                  une étude hebdomadaire de textes de la tradition sapientielle + un cours de yoga postural chaque mois
                  </p>
                </div>
                
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Rencontres en présentiel  <span className="text-pharaonic-gold text-2xl">𓆓</span></h3>
                  <p className="text-lg">
                    des ateliers tous les 3 mois pour approfondir et incarner la pratique
                  </p>
                </div>
                
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Avantages exclusifs <span className="text-pharaonic-gold text-2xl">𓆓</span></h3>
                  <p className="text-lg">
                    -15% sur toutes les autres offres de Per Horus
                  </p>
                </div>
                
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Engagement solidaire  <span className="text-pharaonic-gold text-2xl">𓆓</span></h3>
                  <p className="text-lg">
                    participation au financement d’un orphelinat pour enfants handicapés au Caire
                  </p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-2xl font-medium mb-4">Cotisation annuelle : 550 CHF </p>
                <p className="text-lg">
                  50% des cotisations sont reversés à un projet de cœur : la création d'un orphelinat pour
                  enfants handicapés en Égypte.
                </p>
              </div>
              </ScrollReveal>
            </section>
            
            <section>
              <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                Pourquoi ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-md overflow-hidden pharaonic-border">
                  <img 
                    src="/images/Child.jpg" 
                    alt="Enfant égyptien" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pharaonic-charcoal/80 to-transparent"></div>
                </div>
                
                <div className="space-y-4">
                  <ul className="scarab-bullet space-y-3">
                    <li>
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> 25% des enfants égyptiens sont en situation de handicap. Moins de 0,2% d'entre
                      eux sont à l'école. Moins de 3% ont accès aux soins. Beaucoup sont rejetés. Exclus.
                      Effacés. Même par leur propre famille.
                    </li>
                    <li>
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Imaginez maintenant ces enfants abandonnés, maltraités, sans voix, sans toit.
                    </li>
                    <li>
                      <span className="text-pharaonic-gold text-2xl">𓆓</span> Pendant des années, j'ai su. J'ai vu. J'ai lu les rapports. J'ai regardé des vidéos. J'ai pleuré.
                      J'ai fermé l'écran.
                      Et j'ai continué ma vie. En portant ce silence comme une trahison.
                    </li>
                    <li>
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Aujourd'hui, je n'ai plus le droit de me taire. Et vous non plus, peut-être.
                    </li>
                  </ul>
                </div>
              </div>
              </ScrollReveal>
            </section>
            
            <section>
              <ScrollReveal>
                <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                  Pourquoi ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 md:order-1">
                    <ul className="scarab-bullet space-y-3">
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓆓</span> 25% des enfants égyptiens sont en situation de handicap. Moins de 0,2% d'entre
                        eux sont à l'école. Moins de 3% ont accès aux soins. Beaucoup sont rejetés. Exclus.
                        Effacés. Même par leur propre famille.
                      </li>
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓆓</span> Imaginez maintenant ces enfants abandonnés, maltraités, sans voix, sans toit.
                      </li>
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓆓</span> Pendant des années, j'ai su. J'ai vu. J'ai lu les rapports. J'ai regardé des vidéos. J'ai pleuré.
                        J'ai fermé l'écran.
                        Et j'ai continué ma vie. En portant ce silence comme une trahison.
                      </li>
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓆓</span> Aujourd'hui, je n'ai plus le droit de me taire. Et vous non plus, peut-être.
                      </li>
                    </ul>
                  </div>

                  <div className="relative h-[300px] rounded-md overflow-hidden pharaonic-border md:order-2">
                    <img 
                      src="/images/100.jpeg" 
                      alt="Enfant égyptien" 
                      className="w-full h-65 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pharaonic-charcoal/80 to-transparent"></div>
                  </div>
                </div>
                </ScrollReveal>
              </section>

            <section className="text-center">
              <ScrollReveal>
                <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                  Rejoignez-nous
                </h2>
                <p className="text-lg mb-8">
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> Marchons plus droits. Et faisons ce qu'il reste à faire. Ensemble.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://forms.google.com/join-circle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                  >
                    Rejoindre le cercle
                  </a>
                  <Button
                    onClick={() => setInstructionsModalOpen(true)}
                    className="px-8 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider"
                  >
                    Instructions
                  </Button>
                </div>
              </ScrollReveal>
            </section>
          </div>
        </div>
        
        {/* Instructions Modal */}
        <InstructionsModal 
          open={instructionsModalOpen} 
          onOpenChange={setInstructionsModalOpen}
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
        <div className="mt-12 text-center">
      <Link 
          to="/pilgrimages"
          className="inline-flex items-right font-egyptian text-pharaonic-gold hover:text-pharaonic-gold/80 transition-colors group"
        >
          Arche des tranmissions →
        </Link>
        </div>
      </div>
      
    );
  };

  export default Circle;
