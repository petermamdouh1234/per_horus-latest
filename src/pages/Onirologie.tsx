
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import InstructionsModal from '@/components/InstructionsModal';

const Onirologie = () => {
  const [dreamModalOpen, setDreamModalOpen] = useState(false);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            Onirologie
          </h1>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
               ✦ Incubation des rêves – sagesse onirique égyptienne
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="left">
                <img 
                  src="/images/15.jpg" 
                  alt="Incubation des rêves" 
                 className="w-full h-[580px] object-cover rounded-md pharaonic-border"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" className="space-y-4">
                <p className="text-lg">
                   <span className="text-pharaonic-gold text-2xl">𓋹</span> Dormir était un acte rituel. Rêver, un art sacré. L'Égypte ne s'endormait pas : elle plongeait.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> L'incubation onirique, pratiquée dans les temples égyptiens, était bien plus qu'une simple
                  attente de visions nocturnes. C'était une science intérieure, un processus structuré : silence, 
                  purification, intention, offrande, sommeil guidé.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Le rêve n'était pas un hasard. Il était appelé, préparé, accueilli.
                  À travers cette pratique, le rêveur entrait dans un sanctuaire invisible, où les dieux
                  devenaient symboles, et les symboles devenaient messages.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> Chaque rêve reçu dans cet état était un hiéroglyphe vivant, une réponse du monde subtil à
                  une quête posée.
                </p>
                <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Chez Per Horus, nous réveillons cette sagesse. Nous enseignons l'incubation comme un art rigoureux.
                </p>
              </ScrollReveal>
            </div>
          </section>

          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                ✦ Rencontre de l'anima ou de l'animus
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="right" className="space-y-4 order-2 md:order-1">
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> Tout rêve profond est une rencontre. Et parfois, une confrontation.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Carl Jung appelait anima (principe féminin) et animus (principe masculin) les forces
                  inconscientes qui équilibrent notre psyché. En Égypte, ces forces prenaient forme divine : 
                  Isis, Horus, Sekhmet, Osiris… non pas comme des mythes, mais comme visages de notre propre totalité.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> Rencontrer son anima ou son animus en rêve, ce n'est pas "penser au féminin ou au
                  masculin" : c'est incarner une union intérieure entre ce que nous sommes et ce qui nous manque.
                  C'est embrasser le complémentaire, reconnaître l'altérité en soi, et accueillir une
                  transformation.
                </p>
                <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Chez Per Horus, nous n'analysons pas les rêves. Nous les lisons comme des oracles intérieurs, 
                  et nous guidons chacun dans cette rencontre — réelle, intime, transformatrice — avec l'autre en soi.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" className="order-1 md:order-2">
                <img 
                  src="/images/16.jpg" 
                  alt="Anima et Animus" 
                  className="w-full h-[580px] object-cover rounded-md pharaonic-border"   // custom height 280px

                />
              </ScrollReveal>
            </div>
          </section>

          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
               ✦ Outil d'individuation, miroir de l'âme
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="left">
                <img 
                  src="/images/17_taller.jpg" 
                  alt="Miroir de l'âme" 
                  className="w-full h-[580px] object-cover rounded-md pharaonic-border"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" className="space-y-4">
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Ce n'est pas le rêve qui a besoin d'interprétation. C'est nous qui avons besoin de redevenir lisibles.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> Le rêve est un miroir sans mensonge. Il montre ce que nous ne voulons pas voir, ce que
                  nous ignorons, ce que nous avons refoulé. Mais il montre aussi ce que nous sommes appelés à devenir.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> C'est pourquoi Jung parlait de l'individuation : ce processus alchimique où l'être humain
                  cesse d'imiter, de fuir ou de plaire — et commence à s'unifier, à redevenir un, à habiter son axe intérieur.
                </p>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Les rêves sont alors des alliés puissants, des éclaireurs de nuit, des souffleurs de vérité.
                  À travers eux, l'âme se dévoile — non dans la clarté, mais dans la profondeur.
                </p>
                <p className="text-lg font-medium">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Chez Per Horus, nous faisons du rêve un outil de reconstruction intérieure,
                  un atelier sacré où l'ego factis se dissout, le mythe se révèle, et l'être se rassemble.
                </p>
              </ScrollReveal>
            </div>
          </section>

          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                 ✦ Pour qui ?
              </h2>
              <p className="text-lg mb-4">Ce travail est pour :</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal direction="up" delay={200}>
                <ul className="scarab-bullet space-y-3">
                  <li> <span className="text-pharaonic-gold text-2xl">𓆓</span> Aux bâtisseurs d'eux-mêmes, qui sentent que la nuit aussi porte des outils</li>
                  <li> <span className="text-pharaonic-gold text-2xl">𓆓</span> À ceux qui ne veulent plus ignorer les signes</li>
                  <li> <span className="text-pharaonic-gold text-2xl">𓆓</span> Les héritiers d'un souvenir ancien, en quête d'une grammaire sacrée pour leur vie intérieure</li>
                  <li> <span className="text-pharaonic-gold text-2xl">𓆓</span> Et pour tous ceux qui savent, sans savoir pourquoi, que ce rêve-là n'était pas comme les autres</li>
                </ul>
              </ScrollReveal>
              <ScrollReveal direction="left">
                <img 
                  src="/images/19 bis.jpg" 
                  alt="Pour qui ?" 
                 className="w-full h-[400px] object-cover rounded-md pharaonic-border"
                />
              </ScrollReveal>
            </div>
          </section>

          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
                ✦ Ce que nous proposons
              </h2>
            </ScrollReveal>
            <div className="space-y-4">
              <ScrollReveal delay={100}>
                <p className="text-lg">
                 <span className="text-pharaonic-gold text-2xl">𓋹</span> Le rêve vous connaît mieux que vous-même. Il ne parle pas pour distraire. Il guide.
                  Mais encore faut-il savoir l'écouter — et le lire dans sa langue : le symbole.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓋹</span> Chez Per Horus, l'interprétation d'un rêve est une œuvre sacrée, jamais automatisée, jamais
                  standardisée. C'est un travail de traduction subtile, fondé sur :
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <ul className="scarab-bullet space-y-3">
                    <li><span className="text-pharaonic-gold text-2xl">𓂀</span> La tradition de l'incubation onirique égyptienne</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓂀</span> L'enseignement de Carl Jung sur l'inconscient et l'individuation</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Une lecture structurée, intuitive et symbolique</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Une pratique éprouvée, transmise et incarnée</li>
                  </ul>
                  <img 
                    src="/images/19.jpg" 
                    alt="Ce que nous proposons" 
                    className="w-full h-64 object-cover rounded-md pharaonic-border"
                  />
                </div>
              </ScrollReveal>
            </div>
          </section>

          <section className="text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-4">
                𓁈 À vous
              </h2>
              <p className="text-lg">
                Si un rêve vous a cherché — c'est qu'il vous appelle.
              </p>
              <p className="text-lg mb-8">
                Si vous sentez qu'il vous parle encore — c'est que vous êtes prêt à l'entendre.
                Le rêve ne disparaît jamais. Il attend.
              </p>
              
              <Button 
                onClick={() => setDreamModalOpen(true)}
                className="inline-block px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
              >
              
                Faire parler mon rêve 🧠
              </Button>
            </ScrollReveal>
          </section>
        </div>
       
       {/* 
<div className="mt-16 pt-8 border-t border-pharaonic-gold/30 text-center">
  <Link to="/pilgrimages" className="inline-flex items-center font-egyptian text-pharaonic-gold hover:text-pharaonic-gold/80 transition-colors">
    Explorer les Pèlerinages Alchimiques <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</div> 
*/}

        
      </div>

      {/* Dream Modal */}
      <InstructionsModal 
        open={dreamModalOpen} 
        onOpenChange={setDreamModalOpen}
        title="Le processus"
      >
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
            <p>
              Notez votre rêve avec soin. Fidèlement. Détaillément. Chaque élément est un hiéroglyphe vivant. 
              Remplissez-le <br></br>&nbsp;
              <a 
                href="https://docs.google.com/forms/d/1ruj8QU5wNeJJPFCcokhmhvCBKzwOiza4Wu7RTbPHYrM/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >dans ce formulaire</a>.
            </p> </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 
            flex-shrink-0 mt-0.5">2</span>
            <p>
              Veuillez régler 90 CHF via ce lien Stripe :<br></br>&nbsp;
              <a 
                href="https://buy.stripe.com/test_8x23coe3CcG2gGH5T57AI02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >striplink</a>.
            </p> </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
            <p>
            Veuillez prendre rendez-vous avec la docteure en utilisant ce lien :&nbsp;
              <a
                href="https://calendly.com/dinasache320/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >
               calendly
              </a>
            </p> </li>
        </ol>
        <div className="mt-6 border-t border-pharaonic-gold/30 pt-4">
          <p className="font-egyptian text-xl text-pharaonic-gold">Note :</p>
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

export default Onirologie;
