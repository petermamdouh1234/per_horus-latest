
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import { Menu, X } from 'lucide-react';
import InstructionsModal from '@/components/InstructionsModal';
import { Button } from '@/components/ui/button';

const About = () => {
    const [dreamModalOpen, setDreamModalOpen] = useState(false);
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-8 text-center">
              Mission de Per Horus
            </h1>
          </ScrollReveal>

          <div className="prose prose-lg max-w-none">
            {/* Section 1: Le Pacte Fondateur - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Le Pacte Fondateur
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span>
                    <b> Per Horus – Le Cercle du Savoir Oublié </b> est une association à but non lucratif, fondée à Genève, sous le signe du réveil du VERSEAU.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Nous ne croyons pas que le sens ait disparu. Nous savons qu'il a été oublié, enseveli sous des couches de bruit, de la paresse intellectuelle, et d'outils sans âme. Ce n'est pas le mystère qui a fui — c'est notre capacité à l'accueillir, à le lire, à le bâtir.
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span>  Dans un monde saturé de recettes bien-être et de spiritualités édulcorées, Per Horus trace une autre voie : celle des bâtisseurs de l'invisible, celle des chercheurs qui refusent les dogmes modernes autant que les mirages ésotériques.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <ScrollReveal>
                  <img 
                    src="/images/5.png" 
                    alt="Ancient Egyptian temple with golden lighting" 
                    className="rounded-lg shadow-xl w-full h-65 object-cover"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Section 2: Restaurer la grandeur - Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <img 
                    src="/images/33.jpeg" 
                    alt="Ancient pyramid silhouette against golden sky" 
                    className="rounded-lg shadow-xl w-full h-65 object-cover"
                  />
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Restaurer la grandeur pédagogique des mystères
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> L'Égypte n'est pas un mythe : c'est une méthode. Sa sagesse n'a pas vocation à dormir dans les musées : elle doit vivre dans les écoles, les foyers, les gestes du quotidien.
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Nous transmettons :
                    <ul>
                      <li>La pyramide comme architecture intérieure,</li>
                      <li>Maât comme loi vivante, éthique de l'équilibre,</li>
                      <li>La conscience corporelle, le discernement, l'attention comme arts fondamentaux</li>
                    </ul>
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    Non pour former de jeunes mystiques, mais pour éveiller des êtres humains debout, alignés, souverains.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal>
              <div className="flex justify-center mt-12">
                <a 
                  href="/files/Statuts de l'Association PDF D.pdf"
                  download="Télécharger le PDF"
                    className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider inline-block text-center"
              >
                
                  Télécharger la mission ⬇
                </a>
              </div>
            </ScrollReveal>

            {/* New Kheka Yoga Section */}

            <ScrollReveal>
              <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-8 text-center mt-20">
                L'Arche des Transmissions
              </h1>
            </ScrollReveal>

            {/* Section 3: Kheka Yoga - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Kheka Yoga : Le Yoga de la HAUTE Magie 
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Le corps comme matrice. L'intellect comme feu. La magie comme science des liens.
                    Le corps comme matrice. L'intellect comme feu. La magie comme science des liens.<br></br>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Ce que nous vivons n'est pas une crise de sens.
                    C'est l'effondrement de nos pyramides intérieures.
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Le Kheka Yoga est une science oubliée, une discipline d'architecture spirituelle.<br></br>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Il ne vous propose ni bien-être, ni salut.<br></br>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Il vous propose de reconstruire votre réalité — à partir des courants antagonistes qui vous animent.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <ScrollReveal>
                  <img 
                    src="/images/7.png"
                    alt="Person in yoga pose with golden light" 
                    className="rounded-lg shadow-xl w-full h-70 object-cover"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Section 4: Le corps n'est pas un outil - Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <img 
                    src="/images/8.jpg" 
                    alt="Ancient meditation and spiritual practice" 
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                     Le corps n'est pas un outil. 
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                   <span className="text-pharaonic-gold text-2xl">𓆃</span> Il est matrice.
                    Le mental n'est pas un ennemi.
                    Il est pierre angulaire.
                    Le Kheka Yoga est né d'un refus :<br></br>
                    celui de choisir entre le corps ou l'esprit,
                    entre la science ou le symbole,
                    entre l'intelligence ou la conscience.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Section 5: Double pyramide - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Une seule œuvre : la double pyramide intérieure 
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                   <span className="text-pharaonic-gold text-2xl">𓆃</span>  Le cœur du Kheka Yoga est un travail de géométrie vivante :
                    la construction d'une double pyramide en soi :<br></br>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Une orientée vers la terre : incarnation, structure, maîtrise.<br></br>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Une orientée vers le ciel : intuition, transcendance, vision.
                   <br></br> <span className="text-pharaonic-gold text-2xl">✦</span> Le point d'union ?<br></br>
                   <span className="text-pharaonic-gold text-2xl">𓆃</span>  L'être humain.<br></br>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Le Tétragramme vivant, tel que l'évoquait Léonard de Vinci :
                    À l'image du microcosme contenu dans le macrocosme.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <ScrollReveal>
                  <img 
                    src="/images/9 bis.png" 
                    alt="Sacred geometry and pyramid structures" 
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Section 6: Ce que ce yoga change - Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <img 
                    src="/images/44.jpeg" 
                    alt="Transformation and inner light" 
                    className="rounded-md w-full h-[420px] object-cover mx-auto pharaonic-border"
                  />
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Ce que ce yoga change
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p><span className="text-pharaonic-gold text-2xl">𓆃</span> Tout. Parce qu'il vous réapprend à :</p>
                </ScrollReveal>
                <ScrollReveal>
                  <ul>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> Agir sans vous fuir</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> Penser sans vous fragmenter</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> Sentir sans vous perdre</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> Construire sans vous trahir</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    Le Kheka Yoga est une refondation intérieure,
                    inspirée des Temples, portée par Jung, incarnée dans l'Acte.
                    C'est la magie telle que Giordano Bruno l'entendait quand il a dit : « Le magicien est celui qui sait unir le monde visible et invisible, par la force des analogies »
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Section 7: Pour qui - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Pour qui ? 
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
  <p>
    <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce yoga n’est pas pour s’étirer.<br />
    <span className="text-pharaonic-gold text-2xl">𓆓</span> C’est pour penser droit.<br />
    <span className="text-pharaonic-gold text-2xl">𓆓</span> Pas pour détendre le corps, mais pour éveiller l’intellect incarné.<br />
    <span className="text-pharaonic-gold text-2xl">𓆓</span> Pas pour se vider la tête, mais pour la relier au bassin.<br />
    <span className="text-pharaonic-gold text-2xl">𓆓</span> Chaque posture devient une idée tenue.<br />
    <span className="text-pharaonic-gold text-2xl">𓆓</span> Chaque geste, une pensée ancrée.<br />
    <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce n’est pas du sport,C’est une philosophie debout.<br />
    <span className="text-pharaonic-gold text-2xl">𓆓</span> Pour ceux qui veulent une conscience claire, dans un corps qui tient.
  </p>
</ScrollReveal>

              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <ScrollReveal>
                  <img 
                    src="/images/55.jpeg"
                    alt="Seekers and spiritual journey" 
                    className="rounded-md w-full h-[630px] object-cover mx-auto pharaonic-border"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Section 8: Ce que nous proposons - Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <img 
                    src="/images/77.jpeg" 
                    alt="Ancient wisdom and learning" 
                    className="rounded-lg shadow-xl w-full h-65 object-cover"
                  />
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Ce que nous proposons 
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <p><span className="text-pharaonic-gold text-2xl">𓆃</span> Pas de raccourci, pas de stage, pas de "niveau débutant".</p>
                </ScrollReveal>

                <ScrollReveal>
                  <ul>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> Le Kheka Yoga n'est pas un savoir que l'on consomme.</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                   <span className="text-pharaonic-gold text-2xl">𓆃</span> Ce n'est pas une technique à maîtriser, ni un outil à ajouter à votre boîte à bien-être.<br></br>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> C'est une lignée sans nom, un feu sans maître
                    Un appel lancé à la royauté intérieure.
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> le Cycle des Atelier/Conférences « Réveiller le Pharaon en Soi »
                    Chaque atelier/conférence est une pierre posée.<br></br><span className="text-pharaonic-gold text-2xl">𓆃</span>  Chaque intervalle, un creuset.
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Ceux qui cherchent des réponses ne tiendront pas. Ceux qui cherchent à bâtir tiendront bon.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Section 9: Les Piliers - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Les Piliers du Chantier
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <ul>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> <b>Paroles de feu</b> – conférences incarnées, pensées vivantes, symboles remis en mouvement</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> <b>Silence guidé</b> – Ateliers de descentes en soi</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> <b>Geste sacré</b> – souffle, posture, regard, verbe</li>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> <b>Travail de nuit</b> – devoirs intérieurs entre chaque rencontre : observation, intégration, refondation</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    Chaque rencontre est un seuil.
                    Chaque espace entre les séances est un laboratoire alchimique, où l'élève devient l'ouvrier de sa propre pyramide.
                    Ce n'est pas un cursus.
                    C'est un chantier magique.
                    Et vous êtes la pierre vivante.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <ScrollReveal>
                  <img 
                    src="/images/13.jpg" 
                    alt="Sacred pillars and ancient architecture" 
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Section 10: Rejoindre le cercle - Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <img 
                    src="/images/14.jpg"
                    alt="Sacred circle and community" 
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="font-egyptian text-2xl text-pharaonic-gold mb-4 mt-12">
                    ✦ Rejoindre le cercle Kheka 
                  </h2>
                </ScrollReveal>

                <ScrollReveal>
                  <ul>
                    <li><span className="text-pharaonic-gold text-2xl">𓆃</span> Les inscriptions sont ouvertes pour le prochain cycle.</li>
                  </ul>
                </ScrollReveal>

                <ScrollReveal>
                  <p>
                    <span className="text-pharaonic-gold text-2xl">𓆃</span> Chaque Automne, un cycle de 18 mois commence, un cercle restreint, un processus précis, une transmission vivante.
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <ul>
                    <li><b>TARIF POUR LE CYCLE COMPLET :</b> CHF 570.-</li>
                    <li><b>ADRESSE :</b> 1201, GENÈVE</li>
                  </ul>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal>
              <div className="flex flex-col items-center justify-center mt-12 gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    asChild
                   className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider inline-block text-center"
              >
                    <a
                      href="/files/.pdf"
                      download="RÉVEILLER LE PHARAON EN SOI"
                    >
                      Télécharger le programme Kheka Yoga ⬇
                    </a>
                  </Button>
              <Button onClick={() => setDreamModalOpen(true)}
                 className="inline-block px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
              >
                S'inscrire 𓋹
              </Button>
                </div>
                
                <Link 
                  to="/pilgrimages"
                  className="inline-flex items-center font-egyptian text-pharaonic-gold hover:text-pharaonic-gold/80 transition-colors group"
                >
                 Entrez dans l’expérience →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      {/* Instruction */}
      <InstructionsModal 
        open={dreamModalOpen} 
        onOpenChange={setDreamModalOpen}
        title="Le processus"
      >
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
            <p>
             Merci de bien vouloir remplir ce formulaire pour finaliser votre inscription : <br></br>&nbsp;
              <a 
               href="https://docs.google.com/forms/d/1tjsCw7xwE8MSako35iuEjAdFUZSjM3gPz3ZktJubpDQ/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >dans ce formulaire</a>.
            </p> </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 
            flex-shrink-0 mt-0.5">1</span>
            <p>
            Veuillez régler 570 CHF via ce lien Stripe :<br></br>&nbsp;
              <a 
                href="https://buy.stripe.com/test_5kQfZa0cM21o2PR1CP7AI03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >striplink</a>.
            </p> </li>
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
            <p>
              Veuillez envoyer la capture d'écran du paiement à ce numéro pour confirmation &nbsp;
              <a
                href="https://wa.me/+41764707386
"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >
                01288997778
              </a>
            </p> </li>
        </ol>
        {/*}
        <div className="mt-6 border-t border-pharaonic-gold/30 pt-4">
          <p className="font-egyptian text-xl text-pharaonic-gold">Note :</p>
          <p className="text-lg mt-2">
            Ce n'est pas un service. C'est une clé offerte pour ouvrir un seuil oublié (dans l'ombre
            de l'inconscient). Ce tarif n'achète pas une interprétation. Il honore une transmission rare, un moment 
            suspendu entre le visible et l'invisible. Il soutient un travail patient, ancré, offert dans une écoute totale.
          </p>
        </div>
        */}
      </InstructionsModal>
    </div>
  );
};

export default About;