
        import React, { useState, useEffect } from 'react';
        import { Link } from 'react-router-dom';
        import { ArrowRight, Download } from 'lucide-react';
        import ScrollReveal from '@/components/ScrollReveal';
import InstructionsModal from '@/components/InstructionsModal';
        
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
         const thirdRetreatImages = [
        "/images/311.jpeg",
        "/images/312.jpeg",
        "/images/313.jpeg",
        "/images/314.jpeg",
        "/images/306.jpeg",
        "/images/307.jpeg",
        "/images/308.jpeg",
        "/images/309.jpeg",
        "/images/310.jpeg",



        ];

        const Pilgrimages = () => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const [dreamModalOpen, setDreamModalOpen] = useState(false);
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
        <div className="w-16 h-1 bg-pharaonic-gold mx-auto mb-8"></div>
                
                <div className="my-8">
                   <ScrollReveal>
                  <img 
                    src="/images/717.jpeg"  
                    alt="Transformation Journey"
                    className="rounded-md w-[900px] h-[450px] object-cover mx-auto pharaonic-border"
                  />
                   </ScrollReveal>
                </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-4">
                 trois voyages. Une seule œuvre intérieure
              </h2>
              <p className="text-xl italic">Incarner l'union des polarités.</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">☥</span> Rien ne peut se manifester sans polarité. Il n'y a pas de lumière sans obscurité.
                Pas de monde sans masculin et féminin. Pas d'incarnation sans tension entre deux pôles.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">☥</span> Tout, dans la tradition sacrée, naît de l'union des contraires.
                Le visible et l'invisible. Le corps et l'âme. Le rêve et l'action. Le féminin et le masculin — non
                pas comme genres, mais comme principes vivants.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">☥</span> Ce que nous appelons "voyage initiatique" chez Per Horus n'est pas un déplacement
                géographique. C'est un chemin de recomposition intérieure, où les pôles opposés cessent de s'affronter et
                commencent à collaborer.
              </p>
              <p className="text-lg font-medium">
                <span className="text-pharaonic-gold text-2xl">☥</span> Et c'est là que le couple devient un miroir alchimique absolu.
              </p>
            </div>
            </ScrollReveal>
          </section>

          <section>
            <ScrollReveal>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">☥</span> Ce n'est pas une thérapie. Ce n'est pas du développement personnel à deux.
                C'est une voie royale vers l'inconscient et la réintégration.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">☥</span> Nous ne sommes jamais en relation "par hasard".
                La personne qui marche à nos côtés est là par loi de résonance,
                non pour nous rassurer — mais pour nous révéler.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">☥</span> Elle porte ce que nous avons refoulé.
                Elle projette ce que nous n'osons pas vivre.
                Elle met en lumière ce que nous n'avions jamais vu.
              </p>
              <p className="text-lg font-medium">
                <span className="text-pharaonic-gold text-2xl">☥</span> Être en couple, dans ce contexte, c'est marcher dans le désert… avec un miroir.
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
                trois formats. Une même intention : unifier, intégrer, bâtir
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
                  <span className="text-pharaonic-gold text-2xl">☥</span> Ce n'est pas un choix entre plaisir et profondeur. C'est l'union des deux.
                  Le luxe devient outil. La montagne, un temple. Et l'élévation n'a jamais été aussi concrète.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Ce week-end n'est pas une retraite ascétique.
                  C'est un chantier sacré à ciel ouvert, où l'on vient pour évoluer sans renoncer à la joie, à la
                  beauté, au confort.
                </p>
                <div className="font-medium text-lg space-y-2">
                  <p><span className="text-pharaonic-gold text-2xl">☥</span> Oui, vous allez kiffer.</p>
                  <p><span className="text-pharaonic-gold text-2xl">☥</span> Et oui, vous allez être secoués — doucement, mais sûrement.</p>
                </div>
                
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Le lieu n'est pas choisi au hasard.
                  C'est là-haut, dans les Alpes, que tout se passe.
                  Parce que monter physiquement, c'est préparer l'élévation intérieure.
                  Parce que la hauteur désencombre, donne du souffle, et rappelle à l'essentiel.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Ici, vous ne venez pas pour fuir le monde.
                  Vous venez pour le traverser autrement, à deux, dans un lieu clair, rare, aligné.<br></br>
                  <br></br>
                </p>
                
                
              </div>
            </div>
            <section>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* TEXT FIRST ON DESKTOP, IMAGE SECOND */}
    <ScrollReveal direction="left" className="order-2 md:order-1">

         <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">✦ Pour qui ?</h2> 
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
    </ScrollReveal>

    <ScrollReveal direction="right" className="order-1 md:order-2">
      <img 
        src="/images/1335.jpeg" 
        alt="Miroir de l'âme" 
        className="w-full h-[480px] object-cover rounded-md pharaonic-border"
      />
    </ScrollReveal>
  </div>
</section>

            
            <div className="mt-12 p-6 pharaonic-border bg-pharaonic-sand/20 rounded-lg">
              <ScrollReveal>
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
                  <button
                    type="button"
                    onClick={() => setDreamModalOpen(true)}
                    className="inline-block px-8 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded
                                hover:bg-pharaonic-gold/90 transition-colors 
                                font-egyptian tracking-wider"
                  >
                Informations pratiques 🗒️
                  </button>
                  <a
                    href="/files/Programme_Weekend_Alchimique_PerHorus PDF B.pdf"
                    download="Weekend Alps Programme.pdf"
                    className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider inline-block text-center"
                  >
                    Télécharger le programme du weekend ⬇
                  </a>
                </div>         </div>
              </ScrollReveal>
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
                  <span className="text-pharaonic-gold text-2xl">☥</span> Beaucoup rêvent de l'Égypte. Peu en reviennent éveillés.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Chaque année, des milliers de voyageurs marchent sur les terres de Kheops, Isis et Osiris —
                  et rentrent chez eux... déçus, frustrés, désenchantés.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Non pas parce que l'Égypte a perdu sa magie,
                  mais parce que ce rêve ancien est trop souvent confié à une logistique creuse et à un regard
                  superficiel.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Ce que l'on vous montre dans les circuits classiques, ce sont des pierres mortes.
                  Des temples vidés de sens. Des hiéroglyphes muets.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Mais l'Égypte n'est pas un décor exotique.
                  Ce n'est pas un conte pour enfants fascinés par les pyramides de leurs manuels scolaires.
                </p>
                
                <div className="font-medium text-lg space-y-2">
                  <p><span className="text-pharaonic-gold text-2xl">☥</span> L'Égypte est une civilisation de feu et d'ordre.</p>
                  <p><span className="text-pharaonic-gold text-2xl">☥</span> Une sagesse millénaire, codée dans la pierre, transmise par le silence.</p>
                  <p><span className="text-pharaonic-gold text-2xl">☥</span> Une école du réel, que l'Occident a oubliée — et pourtant bâtie sur elle.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold text-2xl">☥</span> Ce que nous appelons aujourd'hui culture européenne — qu'on nomme judéo-chrétienne,
                grecque ou hébraïque — est née sur les rives du Nil, bien avant d'être traduite, interprétée, et souvent déformée.
              </p>
              
              <ul className="scarab-bullet space-y-3">
                <li><span className="text-pharaonic-gold text-2xl">☥</span> Moïse fut éduqué dans les temples.</li>
                <li><span className="text-pharaonic-gold text-2xl">☥</span> La Kabbale hébraïque plonge ses racines dans les lois cosmiques de Maât.</li>
                <li><span className="text-pharaonic-gold text-2xl">☥</span> L'Égypte a offert à la Grèce les fondations de sa philosophie et à Rome l'ossature de sa symbolique impériale.</li>
                <li><span className="text-pharaonic-gold text-2xl">☥</span> Même les textes bibliques sont imprégnés du culte osiriaque, matrice d'une sagesse plus ancienne que le mot "religion" lui-même.
                <br></br> </li>
                <br></br>
              </ul>
              
            </div>
            <section>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* IMAGE FIRST ON DESKTOP, TEXT SECOND */}
    <ScrollReveal direction="right" className="order-2 md:order-1">
      <img 
        src="/images/1888.jpeg" 
        alt="Miroir de l'âme" 
        className="w-full h-[400px] object-cover rounded-md pharaonic-border"
      />
    </ScrollReveal>

    <ScrollReveal direction="left" className="order-1 md:order-2">
      <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">✦ Pour qui ?</h2>
      
      <p className="text-lg">
        <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce voyage n'est pas pour les touristes.
        Il est pour ceux qui ont été déçus par l'Égypte touristique, mais qui n'ont pas renoncé à
        l'Égypte véritable.
      </p>
      <p className="text-lg">
        <span className="text-pharaonic-gold text-2xl">𓆓</span> Ce séjour est fait pour vous si :
      </p>
      <ul className="scarab-bullet space-y-3 mt-3">
        <li>• Vous avez pressenti, sans pouvoir l'expliquer, que l'Égypte vous appelle depuis longtemps</li>
        <li>• Vous sentez que quelque chose vous lie à cette terre, comme une mémoire sans origine</li>
        <li>• Vous ne cherchez pas des photos : vous cherchez des signes</li>
        <li>• Vous êtes prêt à marcher en silence, à écouter la pierre, à recevoir plus que ce que vous croyez savoir</li>
      </ul>
    </ScrollReveal>
  </div>
</section>

            
            <div className="mt-12 p-6 pharaonic-border bg-pharaonic-sand/20 rounded-lg">
            <ScrollReveal>
              <h3 className="text-xl font-egyptian text-pharaonic-gold mb-4"><span className="text-pharaonic-gold text-2xl">✦</span> Ce que comprend l'Œuvre :</h3>
              <p className="text-lg font-medium mb-4"><span className="text-pharaonic-gold text-2xl">𓂀</span> 8 jours / 7 nuits — Non pas un voyage, mais une remontée vers l'origine.</p>
              
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
                <li>4 nuits au Caire</li>
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
                  <button
                    type="button"
                    onClick={() => setDreamModalOpen(true)}
                    className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                  >
                 Informations pratiques 🗒️
                  </button>
                  <a
                    href="/files/Programme_Voyage_Egypte_PerHorus- PDF C.pdf"
                    download="Programme Voyage Egypte PerHorus.pdf"
                    className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider inline-block text-center"
                  >
                    Télécharger le programme  ⬇
                  </a>
                </div>         </div>
              </ScrollReveal>
            </div>
            </ScrollReveal>
          </section>
                  <section>
            <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-egyptian text-pharaonic-gold">
                trois formats. Une même intention : unifier, intégrer, bâtir
              </h2>
            </div>
            
            {/* ard far7 Retreat */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-md overflow-hidden pharaonic-border">
                {thirdRetreatImages.map((image, index) => (
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
                  <h3 className="text-xl font-egyptian text-pharaonic-gold">Pèlerinage dans un village copte</h3>
                  <p className="text-white/90">Un retour à l’Essentiel</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> On a traversé la planète pour chercher des réponses.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> On est allé jusqu’aux ashrams de l’Himalaya, aux temples balinais. 
                    aux retraites chamaniques de la jungle.
                </p>
                <div className="font-medium text-lg space-y-2">
                  <p><span className="text-pharaonic-gold text-2xl">☥</span> On a pratiqué des traditions qui n’ont rien à voir avec notre histoire.</p>
                  <p><span className="text-pharaonic-gold text-2xl">☥</span> dans l’espoir d’y retrouver ce qui nous manque : un axe ,  Une direction , Une paix intérieure.</p>
                </div>
                
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span>Mais ce que l’on cherche si loin…
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> existe déjà. Et depuis toujours.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Au cœur de l’Égypte, une communauté copte vit encore selon une tradition mystique.
                  simple et incarnée.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Une tradition qui n’a jamais rompu avec ses racines.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> Celle des Pères du désert, fondateurs du christianisme intérieur.
                </p>
                <p className="text-lg">
                  <span className="text-pharaonic-gold text-2xl">☥</span> et véritables gardiens de la première spiritualité occidentale.<br></br>

                </p>
                <br></br>

                
                
              </div>
            </div>
             <section>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* IMAGE FIRST ON DESKTOP, TEXT SECOND */}
    <ScrollReveal direction="right" className="order-2 md:order-2">
      <img 
        src="/images/303.jpeg" 
        alt="Miroir de l'âme" 
        className="w-full h-full object-cover rounded-md pharaonic-border"
      />
    </ScrollReveal>

    <ScrollReveal direction="left" className="order-1 md:order-1">
                  <h2 className="font-egyptian text-lg mb-3"><span className="text-pharaonic-gold text-2xl">✦ Une ouverture exceptionnelle</span> </h2>
                  <p className="text-lg">
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Ces communautés vivent loin du bruit.
      Elles n’ont jamais eu besoin de se montrer.
                  </p>
                  <p className="text-lg">
                    <span className="text-pharaonic-gold text-2xl">𓆓</span> Mais aujourd’hui, elles nous accueillent.
      Pas pour prouver, convaincre ou transmettre un dogme.
      Mais pour nous permettre d’observer, de ressentir, de vivre avec elles — le temps d’un séjour.
                  </p>
                  <div className="font-medium text-lg mt-4 space-y-2">
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> C’est une aubaine,Un privilège rare.</p>
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Et pour beaucoup d’entre nous, ce mode de vie semble presque utopique.
      Mais l’utopie existe déjà.</p>
                    <p><span className="text-pharaonic-gold text-2xl">𓆓</span> Elle respire, elle prie, elle travaille,
      dans ce village aux portes du Caire,
      où la foi structure encore la vie.</p>

                  </div>
                  </ScrollReveal>
                  </div>
                  </section>
            <div className="mt-12 p-6 pharaonic-border bg-pharaonic-sand/20 rounded-lg">
            <ScrollReveal>
              <h3 className="text-xl font-egyptian text-pharaonic-gold mb-4"><span className="text-pharaonic-gold text-2xl">✦</span>   Ce que comprend l'Œuvre :</h3>
              <ul className="scarab-bullet space-y-3">
              <li className="bg-white/5 p-6 rounded-xl shadow-md">
          <p className="mt-4">
           <span className="text-pharaonic-gold text-2xl">𓂀</span>  Pendant cinq jours, nous serons immergés dans une communauté copte vivante. <br />
            <span className="text-pharaonic-gold text-2xl">𓂀</span> Nous partagerons leurs repas. Nous assisterons à leurs prières. <br />
            <span className="text-pharaonic-gold text-2xl">𓂀</span> Nous participerons à la vie du village, à leurs gestes simples et chargés de sens.
          </p>
          <p>
           <span className="text-pharaonic-gold text-2xl">𓂀</span>  Ce n’est pas un stage. C’est une expérience directe d’un mode de vie mystique, structurant, profondément humain. <br />
             <span className="text-pharaonic-gold text-2xl">𓂀</span> Un mode de vie que notre société a oublié, mais qui, ici, reste vivant et clair.
          </p>
        </li>

   <li className="bg-white/5 p-6 rounded-xl shadow-md">
          <span className="font-semibold text-xl flex items-center gap-2">
            <span className="text-pharaonic-gold text-2xl">✦  Autour de nous, des lieux qui murmurent encore</span>
          </span>
                
          <ul className="ml-4 space-y-2">
  <li>
    <strong><span className="text-pharaonic-gold text-2xl">𓂀</span> Gizeh</strong> : trois géantes silencieuses, dressées face à l’éternité
  </li>
  <li>
    <strong><span className="text-pharaonic-gold text-2xl">𓂀</span> Le Caire Copte</strong> : un entrelacs d’églises souterraines, de pierres habitées, de prières toujours vivantes
  </li>
  <li>
    <strong><span className="text-pharaonic-gold text-2xl">𓂀</span> Le Nouveau Grand Musée du Caire</strong> : un chef-d’œuvre architectural où l’Égypte ancienne retrouve sa voix
  </li>
</ul>

        </li>
      <li className="bg-white/5 p-6 rounded-xl shadow-md">
          <p>
            <span className="text-pharaonic-gold text-2xl">𓂀</span> Sur les hauteurs de la citadelle de Saladin où la beauté de l’Islam se déploie dans la pierre et le ciel, et rappelle qu’ici aussi, la foi a su bâtir avec grâce.
          </p>
          <br></br>
          <p>
             <span className="text-pharaonic-gold text-2xl">𓂀</span> Dans les ateliers d’orfèvres coptes, où le feu travaille encore l’or comme on travaille l’âme.
          </p>
          <br></br>
          <p className="italic text-pharaonic-gold font-medium">
                 Une soirée surprise.<br />
             Elle ne figure sur aucun programme.<br />
              Parce que certaines expériences ne se prévoient pas.<br />
              Elles s’offrent quand le moment est juste.
          </p>
        </li>
      {/*
    <li className="bg-white/5 p-6 rounded-xl shadow-md">
          <span className="font-semibold text-xl flex items-center gap-2">
            <span className="text-pharaonic-gold text-2xl">𓂀</span>
            Un éveil qui ne fait pas planer
          </span>
          <p className="mt-4">
            Vivre avec eux, ce n’est pas accéder à un rêve transcendantal. C’est rencontrer la réalité autrement. Pas dans les airs, mais dans les choses simples, solides, nécessaires : le pain qu’on partage, les gestes répétés avec soin, les prières à heure fixe, le rythme lent et dense des jours.
          </p>
          <p>
            Rien ici ne cherche à séduire. Personne ne promet l’illumination en trois phrases ou la paix intérieure en dix respirations. Et pourtant, c’est peut-être là que l’éveil commence vraiment.
          </p>
          <p>
            Non pas celui qu’on nous vend en ligne, en images lisses et paroles sucrées. Mais celui qui prend racine dans le quotidien, dans une vie tissée de foi, de travail, d’écoute et de présence vraie.
          </p>
          <p>
            On ne traverse pas ce lieu sans être touché. Pas de manière spectaculaire. Mais en profondeur. Comme si quelque chose en nous se souvenait d’une façon d’exister plus claire. Et refusait désormais de l’oublier.
          </p>
        </li>
      */}

      <li className="bg-white/5 p-6 rounded-xl shadow-md">
        <span className="text-pharaonic-gold text-2xl"> ✦Un éveil qui ne fait pas planer </span>
        <br></br>
          
          <span className="text-pharaonic-gold text-2xl">𓂀</span> 5 nuits au Caire (dans la communauté)<br />
          <span className="text-pharaonic-gold text-2xl">𓂀</span> Tous les repas — authentiques, nourrissants, partagés<br />
          <span className="text-pharaonic-gold text-2xl">𓂀</span> Accès aux temps spirituels, échanges et vie collective<br />
          <span className="text-pharaonic-gold text-2xl">𓂀</span> Visites guidées et symboliques : Citadelle, Gizeh, Musée, Caire copte et plus<br />
          <span className="text-pharaonic-gold text-2xl">𓂀</span> Transferts internes (aéroport, visites) inclus<br />
          <span className="text-pharaonic-gold text-2xl">𓂀</span> Accompagnement Per Horus + hôte spirituel local<br />
          <span className="text-pharaonic-gold text-2xl">𓂀</span> Cercle préparatoire et intégration symbolique
        </li>

              </ul>
              
              <div className="mt-8 text-center">
                <h4 className="font-egyptian text-xl text-pharaonic-gold mb-2">✦ Contribution</h4>
                  <h4 className="font-egyptian text-xl text-pharaonic-gold mb-2"><span className="text-pharaonic-gold text-2xl">𓅓</span> CHF 2400.– / personne<br></br>(tout inclut hors vol international)</h4>
                  <h4 className="font-egyptian text-xl text-pharaonic-gold mb-2">
                 <span className="text-pharaonic-gold text-2xl">𓅓</span> 12 participants — pas plus.Entretien préalable requis.Départ Décembre 2026
                  </h4>

                 <div className="mt-16 bg-white/5 p-6 rounded-xl shadow-md text-lg leading-relaxed space-y-4">
        <h4 className="text-xl font-semibold text-pharaonic-gold flex items-center gap-2">
          <span className="text-2xl">✦</span>
          Pourquoi partir maintenant
        </h4>
        <p><span className="text-pharaonic-gold text-2xl">𓅓</span> Parce que notre époque a besoin de modèles vivants.</p>
        <p><span className="text-pharaonic-gold text-2xl">𓅓</span> Pas de nouvelles croyances, mais d’autres façons d’habiter le monde.</p>
        <p><span className="text-pharaonic-gold text-2xl">𓅓</span> Vivre simplement, dans le rituel, l’humain et la foi, existe déjà malgré ce que l’on croit impossible.</p>
        <p><span className="text-pharaonic-gold text-2xl">𓅓</span> Il ne reste qu’à y entrer.</p>
        <p><span className="text-pharaonic-gold text-2xl">𓅓</span> À marcher quelques jours aux côtés de ceux qui n’ont jamais quitté l’essentiel.</p>
        <p><span className="text-pharaonic-gold text-2xl">𓅓</span> Et à en revenir… plus lucide. Plus vivant.</p>
      </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setDreamModalOpen(true)}
                    className="px-6 py-3 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                  >
                    Informations pratiques 🗒️
                  </button>
                  <a
                    href="/files/Programme_Séjour_copte.pdf"
                    download="Programme Séjour copte.pdf"
                     className="px-6 py-3 bg-transparent border-2 border-pharaonic-gold text-pharaonic-gold font-medium rounded hover:bg-pharaonic-gold/10 transition-colors font-egyptian tracking-wider inline-block text-center">
                    Télécharger le programme ⬇
                  </a>         </div>         </div>
              </ScrollReveal>
            </div>
            </ScrollReveal>
          </section>
          
        </div>
        </div>

        {/* Retreat Modal */}
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
                href="https://docs.google.com/forms/d/1Qz2x2UTjw6QVMkWh4x5C0YXZadqNIENCdGZU7PTjlt0/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pharaonic-gold underline hover:text-pharaonic-gold/80"
              >dans ce formulaire</a>.
            </p> </li>
          
          <li className="flex items-start">
            <span className="bg-pharaonic-gold text-pharaonic-charcoal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
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
         {/*
        <div className="mt-6 border-t border-pharaonic-gold/30 pt-4">
          <p className="font-egyptian text-xl text-pharaonic-gold">Note :</p>
          <p className="text-lg mt-2">
            this is for peter website
          </p>
        </div>
        */}
      </InstructionsModal>
        </div>
        );
        };


        export default Pilgrimages;
