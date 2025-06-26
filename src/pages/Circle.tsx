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
               ✦ Ce n’est plus le moment d’attendre, ni le temps du silence.
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
                   <span className="text-pharaonic-gold text-2xl">𓋹</span> Rejoindre Per Horus ,c’est poser un acte net.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> je ne veux plus consommer du sacré comme un produit,je veux redevenir source.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> C’est choisir de ne plus fuir ce qui m’appartient.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> De ne plus chercher des maîtres lointains alors que mes racines attendent d’être réactivées.
                </p>
                <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> C’est reconnaître que notre tradition Sapientielle n’est pas morte,elle a juste été bâillonnée, travestie, trahie.
                </p>
                 <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Et surtout :<br />
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
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> On ne va pas faire taire le mental, on va le rééduquer ce Conscient (le principe masculin en nous). 
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> L’affûter,Le remettre à sa place, Le redresser.  
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> L’extirper à son impuissance pour qu’il se redresse <br></br>
                  et parvienne enfin à pénétrer notre autre pôle - complétement
                  ignoré et pourtant parfaitement opérant dans notre vie au quotidien - la
                  Matrice Inconsciente (le principe féminin en nous) 
                </p>
                <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Nous sommes chacun tout un microcosme vivant,
                  avec une vie intérieure polarisée extra riche.
                   Pour s'y épanouir, on doit acquérir les éléments de 
                   langages de cette intelligence qui nous habite. 
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
                <span className="text-pharaonic-gold text-2xl">✦</span>  Ce que comprend l'adhésion
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Connaissance de soi  <span className="text-pharaonic-gold text-2xl">𓅓</span></h3>
                  <p className="text-lg">
                  une étude hebdomadaire de textes de la tradition sapientielle + un cours de yoga postural chaque mois
                  </p>
                </div>
                
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Rencontres en présentiel  <span className="text-pharaonic-gold text-2xl">𓅓</span></h3>
                  <p className="text-lg">
                    des ateliers tous les 3 mois pour approfondir et incarner la pratique
                  </p>
                </div>
                
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Avantages exclusifs <span className="text-pharaonic-gold text-2xl">𓅓</span></h3>
                  <p className="text-lg">
                    -15% sur toutes les autres offres de Per Horus
                  </p>
                </div>
                
                <div className="pharaonic-border p-6 bg-pharaonic-sand/10 rounded">
                  <h3 className="font-egyptian text-xl mb-4">Engagement solidaire  <span className="text-pharaonic-gold text-2xl">𓅓</span></h3>
                  <p className="text-lg">
                    participation au financement d’un orphelinat pour enfants handicapés au Caire
                  </p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-2xl font-medium mb-4"> <span className="text-pharaonic-gold text-2xl">𓅓 Cotisation annuelle : 550 CHF</span></p>
                <p className="text-lg"><span className="text-pharaonic-gold text-2xl">𓅓 50% des cotisations sont reversés à un projet de cœur : la création d'un orphelinat pour
                  enfants handicapés en Égypte.</span>
                </p>
              </div>
              </ScrollReveal>
            </section>
            
            <section>
              <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                <span className="text-pharaonic-gold text-2xl">✦</span> Pourquoi ?
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
                  <span className="text-pharaonic-gold text-2xl">✦ À quoi vous devenez cercle </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 md:order-1">
                    <ul className="scarab-bullet space-y-3">
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓋹</span> À un cercle d’étude exigeant, vivant, structurant.
                      </li>
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓋹</span> À un enseignement et un partage régulier, soutenant, clair. 
                      </li>
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓋹</span> À un groupe d’être humains qui visent l’évolution de la conscience humaine.
                      </li>
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓋹</span> Et à la première pierre d’un orphelinat pour des enfants handicapés que personne ne veut regarder.
                      </li>
                       <li>
                        <span className="text-pharaonic-gold text-2xl">𓋹</span> 100 % des droits d’auteur du livre « Il suffit d’observer » y sont dédiés. 
                            Et une part de chaque adhésion au Cercle servira à leur bâtir un lieu digne.  
                          </li>
                      <li>
                        <span className="text-pharaonic-gold text-2xl">𓋹</span> Ce Cercle est une réponse Pas une solution magique, 
                        Mais un lieu d’action symbolique et réelle.
                      </li>
                       <li>
                        <span className="text-pharaonic-gold text-2xl">𓋹</span> Si vous êtes arrivé ici, ce n’est pas un hasard. 
                            Et si vous avez encore un pincement au cœur en lisant tout ça, c’est que vous êtes vivant. 

                      </li>

                    </ul>
                  </div>

                  <div className="relative h-[300px] rounded-md overflow-hidden pharaonic-border md:order-2">
                    <img 
                      src="/images/100.jpeg" 
                      alt="Enfant égyptien" 
                      className="w-full h-full object-cover"
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
                  <Button
                    onClick={() => setInstructionsModalOpen(true)}
                   className="inline-block px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                  >
                  Rejoindre le Cercle 🤝
                  </Button>
                   </div>
          
              </ScrollReveal>
            </section>
          </div>
        </div>
        
      
        <InstructionsModal 
          open={instructionsModalOpen} 
          onOpenChange={setInstructionsModalOpen}
          title="Le processus"
        >
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                <p>
           Merci de bien vouloir remplir ce formulaire pour finaliser votre inscription : <br></br>&nbsp;
              <a 
                href="https://docs.google.com/forms/d/141AlVLiedqN94e-KWL8V0s2OAPhsYs6M0IT4cHuCdZo/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >dans ce formulaire</a>.
            </p>
            </li>
            <li className="flex items-start">
              <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                <p>
              Veuillez régler 550 CHF via ce lien Stripe :<br></br>&nbsp;
              <a 
                href="https://buy.stripe.com/test_5kQ28kaRqcG29efgxJ7AI01" 
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
                href="https://wa.me/2089755668235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >
                01288997778
              </a>
            </p> 
            </li>
          </ol>
        </InstructionsModal>
           {/* 
          <div className="mt-6 border-t border-pharaonic-gold/30 pt-4">
            <p className="font-egyptian text-xl text-pharaonic-gold">Contribution : CHF 90.–</p>
            <p className="text-lg mt-2">
              Ce n'est pas un service. C'est une clé offerte pour ouvrir un seuil oublié (dans l'ombre
              de l'inconscient). Ce tarif n'achète pas une interprétation. Il honore une transmission rare, un moment 
              suspendu entre le visible et l'invisible. Il soutient un travail patient, ancré, offert dans une écoute totale.
            </p>
          </div>
         
        </InstructionsModal>
         */}
        <div className="mt-12 text-center">
      <Link 
          to="/about"
          className="inline-flex items-right font-egyptian text-pharaonic-gold hover:text-pharaonic-gold/80 transition-colors group"
        >
          Arche des tranmissions →
        </Link>
        </div>
      </div>
      
    );
  };

  export default Circle;
