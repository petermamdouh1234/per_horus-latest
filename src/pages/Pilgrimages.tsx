
        import React, { useState, useEffect } from 'react';
        import { Link } from 'react-router-dom';
        import { ArrowRight } from 'lucide-react';
         import ScrollReveal from '@/components/ScrollReveal';

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
        "/images/Alps 1.jpg",
        "/images/Alps 3.JPG"




        ];
        const secondRetreatImages = [
        "/images/2.1.png",
        "/images/2.2.png",
        "/images/2.4.png",
        "/images/2.5.png",
        "/images/2.6.png",
        "/images/2.7.jpg",
        "/images/2.8.png",
        "/images/2.13.png",
        "/images/2.12.jpg",
        "/images/2.15.jpg",



        ];

        const Pilgrimages = () => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
         <ScrollReveal> Les Pèlerinages Alchimiques</ScrollReveal>
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-4">
                Deux voyages. Une seule œuvre intérieure
              </h2>
              <p className="text-xl italic">Incarner l'union des polarités.</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Rien ne peut se manifester sans polarité. Il n'y a pas de lumière sans obscurité.
                Pas de monde sans masculin et féminin. Pas d'incarnation sans tension entre deux pôles.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Tout, dans la tradition sacrée, naît de l'union des contraires.
                Le visible et l'invisible. Le corps et l'âme. Le rêve et l'action. Le féminin et le masculin — non
                pas comme genres, mais comme principes vivants.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce que nous appelons "voyage initiatique" chez Per Horus n'est pas un déplacement
                géographique. C'est un chemin de recomposition intérieure, où les pôles opposés cessent de s'affronter et
                commencent à collaborer.
              </p>
              <p className="text-lg font-medium">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Et c'est là que le couple devient un miroir alchimique absolu.
              </p>
            </div>
            </ScrollReveal>
          </section>

          <section>
            <ScrollReveal>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce n'est pas une thérapie. Ce n'est pas du développement personnel à deux.
                C'est une voie royale vers l'inconscient et la réintégration.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Nous ne sommes jamais en relation "par hasard".
                La personne qui marche à nos côtés est là par loi de résonance,
                non pour nous rassurer — mais pour nous révéler.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Elle porte ce que nous avons refoulé.
                Elle projette ce que nous n'osons pas vivre.
                Elle met en lumière ce que nous n'avions jamais vu.
              </p>
              <p className="text-lg font-medium">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Être en couple, dans ce contexte, c'est marcher dans le désert… avec un miroir.
                Et si l'on sait regarder, on y voit bien plus que soi.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                <div className="text-center">
                  <p className="text-pharaonic-red font-egyptian text-xl">Le rêve vous parle.</p>
                </div>
                <div className="text-center">
                  <p className="text-pharaonic-red font-egyptian text-xl">Le corps vous rappelle.</p>
                </div>
                <div className="text-center">
                  <p className="text-pharaonic-red font-egyptian text-xl">La relation vous montre.</p>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </section>

          <section>
            <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-egyptian text-pharaonic-gold">
                Deux formats. Une même intention : unifier, intégrer, bâtir
              </h2>
            </div>
            
            {/* Alps Retreat */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-md overflow-hidden pharaonic-border">
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
                <div className="absolute inset-0 bg-gradient-to-t from-pharaonic-charcoal/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-egyptian text-pharaonic-gold">Le Week-End Alchimique dans les Alpes</h3>
                  <p className="text-white/90">Là où la matérialité devient noble, et la spiritualité… incarnée</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce n'est pas un choix entre plaisir et profondeur. C'est l'union des deux.
                  Le luxe devient outil. La montagne, un temple. Et l'élévation n'a jamais été aussi concrète.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce week-end n'est pas une retraite ascétique.
                  C'est un chantier sacré à ciel ouvert, où l'on vient pour évoluer sans renoncer à la joie, à la
                  beauté, au confort.
                </p>
                <div className="font-medium text-lg space-y-2">
                  <p><span className="text-pharaonic-gold text-2xl">𖤍</span> Oui, vous allez kiffer.</p>
                  <p><span className="text-pharaonic-gold text-2xl">𖤍</span> Et oui, vous allez être secoués — doucement, mais sûrement.</p>
                </div>
                
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Le lieu n'est pas choisi au hasard.
                  C'est là-haut, dans les Alpes, que tout se passe.
                  Parce que monter physiquement, c'est préparer l'élévation intérieure.
                  Parce que la hauteur désencombre, donne du souffle, et rappelle à l'essentiel.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Ici, vous ne venez pas pour fuir le monde.
                  Vous venez pour le traverser autrement, à deux, dans un lieu clair, rare, aligné.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-egyptian text-lg mb-3"><span className="text-pharaonic-gold text-2xl">✦</span> Pour qui ?</h4>
                  <p className="text-lg">
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce week-end est pour ceux qui ne veulent plus seulement comprendre, mais incarner.
                    Pour les couples lucides, les êtres en lien, qui pressentent que le lien à deux peut devenir
                    une voie initiatique.
                  </p>
                  <p className="text-lg">
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce n'est pas une échappée.
                    Ce n'est pas un pansement relationnel.
                  </p>
                  <div className="font-medium text-lg mt-4 space-y-2">
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Ici, le lien devient miroir.</p>
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Le rêve devient carte.</p>
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Et la colonne vertébrale devient axe sacré.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 pharaonic-border bg-pharaonic-sand/20 rounded-lg">
              <h3 className="text-xl font-egyptian text-pharaonic-gold mb-4"><span className="text-pharaonic-gold text-2xl">✦</span> Ce que comprend l'Œuvre :</h3>
              <ul className="scarab-bullet space-y-3">
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Transport aller-retour depuis Genève</span><br />
                  Pour entrer dans l'espace sacré dès le départ — sans distraction, sans friction.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Hébergement de luxe, noble et silencieux</span><br />
                  Un lieu pensé pour que le confort devienne soutien à la conscience, non fuite.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Chef privé à résidence</span><br />
                  Des repas précis, symboliques, adaptés à votre rythme et vos besoins — car l'alchimie commence dans l'assiette.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Intervenants incarnés</span><br />
                  Pas de gourou. Pas de show. Des praticiens du réel, porteurs de sagesse ancienne, enracinée et transmise avec exigence.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Rituels de rêve et interprétation guidée</span><br />
                  Chaque nuit devient un seuil. Les rêves incubés sont lus, traduits, rendus à leur puissance symbolique, dans un espace confidentiel.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Travail sur la Kundalini réelle</span><br />
                  Danses sacrée, gestes, ancrage : une montée consciente, enracinée dans l'axe, nourrie par la tradition égyptienne — loin des dérives commerciales.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Pratiques de Kheka Yoga et marche rituelle</span><br />
                  Le souffle devient verbe. Le pas devient offrande. Le corps devient temple.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Programme mystique révélé sur place</span><br />
                  Chaque détail est pensé comme une révélation progressive — pour respecter le rythme initiatique.
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <h4 className="font-egyptian text-xl text-pharaonic-gold mb-2">Une proposition unique — radicale, douce, transformatrice</h4>
                <p className="text-2xl font-medium"><span className="text-pharaonic-gold text-2xl">✦</span> CHF 3900.– / couple — tout inclus</p>
                <p className="mt-4 text-lg">
                  Ce n'est ni un séjour bien-être, ni une parenthèse.
                  C'est une architecture initiatique complète, encapsulée dans trois jours de grâce, de rigueur
                  et de feu maîtrisé.
                </p>
                <div className="mt-6 font-medium space-y-2">
                  <p>Trois jours pour vous retrouver.</p>
                  <p>Trois jours pour laisser le rêve descendre.</p>
                  <p>Trois jours pour que l'énergie se lève — en vous, à travers vous, entre vous.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <a
                    href="https://forms.google.com/retreat-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                  >
                    S'inscrire
                  </a>
                  <a 
                    href="/files/Programme_Weekend_Alchimique_PerHorus_PDF_B.pdf" 
                    download="weekend alps _Programme.pdf"
                    className="inline-block px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded
                                hover:bg-pharaonic-gold/90 transition-colors 
                                font-egyptian tracking-wider"
                  >
                Télécharger le programme du weekend
                  </a>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </section>

          {/* Egypt Retreat */}
          <section>
            <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-2">
                <div className="relative h-[500px] rounded-md overflow-hidden pharaonic-border">
                  {secondRetreatImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Egypt retreat location ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-pharaonic-charcoal/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-egyptian text-pharaonic-gold">Le Séjour Mystique en Égypte</h3>
                    <p className="text-white/90">Loin du folklore. Près du feu vivant.</p>
                  </div>
                </div>
              </div>
              
              <div className="order-2 lg:order-1 space-y-4">
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Beaucoup rêvent de l'Égypte. Peu en reviennent éveillés.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Chaque année, des milliers de voyageurs marchent sur les terres de Kheops, Isis et Osiris —
                  et rentrent chez eux... déçus, frustrés, désenchantés.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Non pas parce que l'Égypte a perdu sa magie,
                  mais parce que ce rêve ancien est trop souvent confié à une logistique creuse et à un regard
                  superficiel.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce que l'on vous montre dans les circuits classiques, ce sont des pierres mortes.
                  Des temples vidés de sens. Des hiéroglyphes muets.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Mais l'Égypte n'est pas un décor exotique.
                  Ce n'est pas un conte pour enfants fascinés par les pyramides de leurs manuels scolaires.
                </p>
                
                <div className="font-medium text-lg space-y-2">
                  <p><span className="text-pharaonic-gold text-2xl">𖤍</span> L'Égypte est une civilisation de feu et d'ordre.</p>
                  <p><span className="text-pharaonic-gold text-2xl">𖤍</span> Une sagesse millénaire, codée dans la pierre, transmise par le silence.</p>
                  <p><span className="text-pharaonic-gold text-2xl">𖤍</span> Une école du réel, que l'Occident a oubliée — et pourtant bâtie sur elle.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce que nous appelons aujourd'hui culture européenne — qu'on nomme judéo-chrétienne,
                grecque ou hébraïque — est née sur les rives du Nil, bien avant d'être traduite, interprétée, et souvent déformée.
              </p>
              
              <ul className="scarab-bullet space-y-3">
                <li><span className="text-pharaonic-gold text-2xl">𖤍</span> Moïse fut éduqué dans les temples.</li>
                <li><span className="text-pharaonic-gold text-2xl">𖤍</span> La Kabbale hébraïque plonge ses racines dans les lois cosmiques de Maât.</li>
                <li><span className="text-pharaonic-gold text-2xl">𖤍</span> L'Égypte a offert à la Grèce les fondations de sa philosophie et à Rome l'ossature de sa symbolique impériale.</li>
                <li><span className="text-pharaonic-gold text-2xl">𖤍</span> Même les textes bibliques sont imprégnés du culte osiriaque, matrice d'une sagesse plus ancienne que le mot "religion" lui-même.</li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-egyptian text-lg mb-3"><span className="text-pharaonic-gold text-2xl">✦</span> Pour qui ?</h4>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce voyage n'est pas pour les touristes.
                  Il est pour ceux qui ont été déçus par l'Égypte touristique, mais qui n'ont pas renoncé à
                  l'Égypte véritable.
                </p>
                <p className="text-lg"><span className="text-pharaonic-gold text-2xl">𓆓</span> Ce séjour est fait pour vous si :</p>
                <ul className="scarab-bullet space-y-3 mt-3">
                  <li>• Vous avez pressenti, sans pouvoir l'expliquer, que l'Égypte vous appelle depuis longtemps</li>
                  <li>• Vous sentez que quelque chose vous lie à cette terre, comme une mémoire sans origine</li>
                  <li>• Vous ne cherchez pas des photos : vous cherchez des signes</li>
                  <li>• Vous êtes prêt à marcher en silence, à écouter la pierre, à recevoir plus que ce que vous croyez savoir</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 pharaonic-border bg-pharaonic-sand/20 rounded-lg">
              <h3 className="text-xl font-egyptian text-pharaonic-gold mb-4"><span className="text-pharaonic-gold text-2xl">✦</span> Ce que comprend l'Œuvre :</h3>
              <p className="text-lg font-medium mb-4"><span className="text-pharaonic-gold text-2xl">𓂀</span> 7 jours / 6 nuits — Non pas un voyage, mais une remontée vers l'origine.</p>
              
              <div className="font-medium text-lg space-y-2 mb-6">
                <p><span className="text-pharaonic-gold text-2xl">𓂀</span> Ce que vous avez vu de l'Égypte... n'était que l'ombre de son nom.</p>
                <p><span className="text-pharaonic-gold text-2xl">𓂀</span> Ce que vous avez lu dans les livres... ne vous a livré que la poussière des symboles.</p>
                <p><span className="text-pharaonic-gold text-2xl">𓂀</span> Ce que vous allez vivre ici... est l'Égypte qui vous attendait depuis toujours.</p>
              </div>
              
              <p className="text-lg mb-6">
                <span className="text-pharaonic-gold text-2xl">𓂀</span> Pas celle des circuits épuisés.
                Pas celle des selfies, du marchandage et des bus bondés.
                Mais l'Égypte souterraine, intacte, vibrante — celle que vos cellules reconnaîtront
                avant vos yeux.
              </p>
              
              <h4 className="text-lg font-egyptian mb-3"><span className="text-pharaonic-gold text-2xl">𓂀</span> La structure sacrée du séjour</h4>
              <ul className="mb-6">
                <li>3 nuits au Caire</li>
                <li>3 nuits de croisière sur le Nil</li>
                <li>Une embarcation privatisée. Zéro bakchich, zéro agitation.</li>
                <li>Confort haut de gamme, silence habitable, déplacements fluides.</li>
                <li>Chaque escale : un seuil. Chaque soir : une incubation onirique.</li>
              </ul>
              
              <div className="text-center">
                <p className="text-2xl font-medium mb-4">
        <span className="text-pharaonic-gold text-2xl">✦</span> CHF 8700.– / couple — tout inclus<br />
        <span className="text-pharaonic-gold text-2xl">✦</span> CHF 4700.– / Solo — tout inclus
        </p>

        <ul className="scarab-bullet space-y-3 text-left">
        <li> Vous ne payez pas pour partir. Vous payez pour rentrer différent. Une Égypte qui ne se visite pas, mais qui se dévoile.</li>
        <li>L’exigence spirituelle rencontre l’excellence matérielle. Ce que vous recevrez est à la mesure de ce que vous venez chercher.</li>
        <li>Tout a été pensé pour que rien ne vous retienne : ni fatigue, ni logistique, ni inconfort. Vous venez pour aller profond — alors nous élevons tout le reste.</li>

        <li className="mt-6 font-semibold"><span className="text-pharaonic-gold text-2xl">✦</span> Transport</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Vol direct aller-retour depuis Genève (EgyptAir) — en un seul souffle, sans détour, sans escale.</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Vol domestique + transferts privés haut standing — chaque déplacement est fluide, précis, sans effort.</li>

        <li className="mt-6 font-semibold"><span className="text-pharaonic-gold text-2xl">✦</span>Hébergements</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> 6 nuits en hébergements haut de gamme : 3 nuits au Caire + 3 nuits sur le Nil lors d’une croisière exclusive et élégante, loin du tourisme de masse.</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Des lieux choisis pour leur excellence, leur beauté, leur vibration.</li>

        <li className="mt-6 font-semibold"><span className="text-pharaonic-gold text-2xl">✦</span> Nourriture</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Pension complète – cuisine raffinée, consciente, à base de produits frais, locaux, équilibrée selon les rythmes du travail intérieur.</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Chaque repas devient une respiration, un prolongement de la pratique.</li>

        <li className="mt-6 font-semibold"><span className="text-pharaonic-gold text-2xl">✦</span> Accès aux lieux sacrés</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Accès privilégié aux sites majeurs : Karnak, Louxor, Abydos, Saqqarah, pyramide de Khéops… et bien plus.</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Non pour les “visiter”, mais pour les lire, les habiter, les activer.</li>

        <li className="mt-6 font-semibold"><span className="text-pharaonic-gold text-2xl">✦</span> Pratiques et transmissions</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Rituels quotidiens : souffle, axe, polarité, silence — un travail énergétique et symbolique de haut niveau.</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Kheka Yoga & kundalini égyptienne : le corps comme temple, la posture comme prière active.</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Interprétation guidée des rêves du voyage — car en Égypte, vous rêverez autrement.</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span> Transmissions symboliques & enseignements incarnés par des Maîtres Egyptiens : Maât, Osiris, double pyramide, architecture sacrée du réel.</li>

        <li className="mt-6 font-semibold"><span className="text-pharaonic-gold text-2xl">✦</span> En résumé</li>
        <li><span className="text-pharaonic-gold text-2xl">𓂀</span>Ce n’est pas un voyage organisé. C’est une expérience orchestrée.</li>
        <li> <span className="text-pharaonic-gold text-2xl">𓂀</span> Chaque détail matériel honore le sacré. Chaque moment vécu invite à la reconstruction intérieure.</li>
        </ul>

                
                <p className="text-lg mt-6">
                  Une Égypte qui ne se visite pas.
                  Mais qui se dévoile — si vous venez nu de certitudes, et prêt à écouter la Pierre.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <a
                    href="https://forms.google.com/retreat-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                  >
                    S'inscrire
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider"
                  >
                    Télécharger le programme
                  </a>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </section>
            {/* ard far7 Retreat */}
          <section>
            <ScrollReveal>
             {/* Alps Retreat */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-md overflow-hidden pharaonic-border">
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
                <div className="absolute inset-0 bg-gradient-to-t from-pharaonic-charcoal/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-egyptian text-pharaonic-gold">Le Week-End Alchimique dans les Alpes</h3>
                  <p className="text-white/90">Là où la matérialité devient noble, et la spiritualité… incarnée</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce n'est pas un choix entre plaisir et profondeur. C'est l'union des deux.
                  Le luxe devient outil. La montagne, un temple. Et l'élévation n'a jamais été aussi concrète.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Ce week-end n'est pas une retraite ascétique.
                  C'est un chantier sacré à ciel ouvert, où l'on vient pour évoluer sans renoncer à la joie, à la
                  beauté, au confort.
                </p>
                <div className="font-medium text-lg space-y-2">
                  <p><span className="text-pharaonic-gold text-2xl">𖤍</span> Oui, vous allez kiffer.</p>
                  <p><span className="text-pharaonic-gold text-2xl">𖤍</span> Et oui, vous allez être secoués — doucement, mais sûrement.</p>
                </div>
                
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Le lieu n'est pas choisi au hasard.
                  C'est là-haut, dans les Alpes, que tout se passe.
                  Parce que monter physiquement, c'est préparer l'élévation intérieure.
                  Parce que la hauteur désencombre, donne du souffle, et rappelle à l'essentiel.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">𖤍</span> Ici, vous ne venez pas pour fuir le monde.
                  Vous venez pour le traverser autrement, à deux, dans un lieu clair, rare, aligné.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-egyptian text-lg mb-3"><span className="text-pharaonic-gold text-2xl">✦</span> Pour qui ?</h4>
                  <p className="text-lg">
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce week-end est pour ceux qui ne veulent plus seulement comprendre, mais incarner.
                    Pour les couples lucides, les êtres en lien, qui pressentent que le lien à deux peut devenir
                    une voie initiatique.
                  </p>
                  <p className="text-lg">
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce n'est pas une échappée.
                    Ce n'est pas un pansement relationnel.
                  </p>
                  <div className="font-medium text-lg mt-4 space-y-2">
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Ici, le lien devient miroir.</p>
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Le rêve devient carte.</p>
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Et la colonne vertébrale devient axe sacré.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 pharaonic-border bg-pharaonic-sand/20 rounded-lg">
              <h3 className="text-xl font-egyptian text-pharaonic-gold mb-4"><span className="text-pharaonic-gold text-2xl">✦</span> Ce que comprend l'Œuvre :</h3>
              <ul className="scarab-bullet space-y-3">
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Transport aller-retour depuis Genève</span><br />
                  Pour entrer dans l'espace sacré dès le départ — sans distraction, sans friction.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Hébergement de luxe, noble et silencieux</span><br />
                  Un lieu pensé pour que le confort devienne soutien à la conscience, non fuite.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Chef privé à résidence</span><br />
                  Des repas précis, symboliques, adaptés à votre rythme et vos besoins — car l'alchimie commence dans l'assiette.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Intervenants incarnés</span><br />
                  Pas de gourou. Pas de show. Des praticiens du réel, porteurs de sagesse ancienne, enracinée et transmise avec exigence.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Rituels de rêve et interprétation guidée</span><br />
                  Chaque nuit devient un seuil. Les rêves incubés sont lus, traduits, rendus à leur puissance symbolique, dans un espace confidentiel.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Travail sur la Kundalini réelle</span><br />
                  Danses sacrée, gestes, ancrage : une montée consciente, enracinée dans l'axe, nourrie par la tradition égyptienne — loin des dérives commerciales.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Pratiques de Kheka Yoga et marche rituelle</span><br />
                  Le souffle devient verbe. Le pas devient offrande. Le corps devient temple.
                </li>
                <li>
                  <span className="font-medium"><span className="text-pharaonic-gold text-2xl">𓂀</span> Programme mystique révélé sur place</span><br />
                  Chaque détail est pensé comme une révélation progressive — pour respecter le rythme initiatique.
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <h4 className="font-egyptian text-xl text-pharaonic-gold mb-2">Une proposition unique — radicale, douce, transformatrice</h4>
                <p className="text-2xl font-medium"><span className="text-pharaonic-gold text-2xl">✦</span> CHF 3900.– / couple — tout inclus</p>
                <p className="mt-4 text-lg">
                  Ce n'est ni un séjour bien-être, ni une parenthèse.
                  C'est une architecture initiatique complète, encapsulée dans trois jours de grâce, de rigueur
                  et de feu maîtrisé.
                </p>
                <div className="mt-6 font-medium space-y-2">
                  <p>Trois jours pour vous retrouver.</p>
                  <p>Trois jours pour laisser le rêve descendre.</p>
                  <p>Trois jours pour que l'énergie se lève — en vous, à travers vous, entre vous.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <a
                    href="https://forms.google.com/retreat-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                  >
                    S'inscrire
                  </a>
                  <a 
                    href="/files/Programme_Weekend_Alchimique_PerHorus_PDF_B.pdf" 
                    download="weekend alps _Programme.pdf"
                    className="inline-block px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded
                                hover:bg-pharaonic-gold/90 transition-colors 
                                font-egyptian tracking-wider"
                  >
                Télécharger le programme du weekend
                  </a>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-pharaonic-gold/30 text-center">
          <Link to="/book" className="inline-flex items-center font-egyptian text-pharaonic-gold hover:text-pharaonic-gold/80 transition-colors">
            Découvrir le Livre <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        </div>
        </div>
        );
        };

        export default Pilgrimages;
