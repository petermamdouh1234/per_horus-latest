
import React from 'react';
import { Link } from 'react-router-dom';
 import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const Origin = () => {
  return (
    <div className="py-16 egyptian-pattern-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/per_horus.png"
            alt="Per Horus Logo" 
          className="h-[200px] w-auto animate-scarab-glow"/>
        </div>
        
        <h1 className="pharaonic-heading text-3xl md:text-4xl lg:text-5xl mb-12 text-center gold-gradient-text">
         <ScrollReveal> L'origine du feu </ScrollReveal>
        </h1>
        <div className="per-horus-divider flex justify-center">
          <ScrollReveal>
          <img src="/images/scrab_icon.png" alt="Per Horus divider" />
          </ScrollReveal>
        </div>
        <div className="max-w-3xl mx-auto space-y-8 horus-bg">
          <section>
            <ScrollReveal>
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
              <span className="text-pharaonic-gold text-2xl">✦</span>Une voix nue, une histoire sans vernis
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold">☥</span>  Ce projet n'est pas né d'un rêve, ni d'un plan de carrière.
                Il est né d'un cri. Et d'un refus de mourir sans avoir dit ce qui devait l'être.
              </p>
              <p className="text-lg">
                 <span className="text-pharaonic-gold">☥</span>  Je suis née au Caire, le 9 septembre 1986. Fille d'une lignée où les femmes portaient leur
                clitoris dans un sachet autour du bras, comme preuve d'honneur après avoir été
                mutilées. Sous les yeux de leur mère. En silence. Comme une victoire sociale.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold">☥</span>  Moi, j'y ai échappé. Mais le corps porte ce qu'il n'a pas vécu en surface. Les douleurs, je
                les ai eues autrement. Chroniques. Souterraines. Inexplicables. Depuis la puberté, j'ai eu
                mal sans nommer. Jusqu'à ce que le corps, las de parler, crie pour que je l'écoute.
              </p>
              <p className="text-lg">
                 <span className="text-pharaonic-gold">☥</span>  J'ai connu le harcèlement scolaire, l'humiliation, l'isolement. J'étais brillante, mais invisible.
                J'étais différente, et donc dangereuse. On ne m'a jamais tendu la main — on m'a tendu des
                regards lourds.
              </p>
              <p className="text-lg">
                 <span className="text-pharaonic-gold">☥</span>  Alors j'ai fui. D'abord intérieurement, puis géographiquement. Un exil volontaire. France.
                Suisse. Un CV impeccable. Une carrière qui monte. Des hôtels de luxe, des titres, des
                responsabilités. Et un gouffre qui s'élargissait chaque nuit.
              </p>
              <p className="text-lg">
                 <span className="text-pharaonic-gold">☥</span>  Jusqu'au point de rupture. Jusqu'au bord. Jusqu'à cette nuit où j'ai tenté d'en finir. Pas
                par faiblesse. Par lucidité. Parce que plus rien ne faisait sens. Parce que le corps, l'esprit,
                l'âme ne parlaient plus la même langue.
              </p>
              <p className="text-lg">
                 Mais je suis restée. Et c'est là que tout a commencé.
              </p>
              <p className="text-lg">
                 <span className="text-pharaonic-gold">☥</span>  J'ai déconstruit. J'ai appris. J'ai confronté mes ombres. Je me suis formée aux thérapies, aux
                symboles, aux rites. J'ai réuni les extrêmes : neurosciences et chamanisme, polyvagale et
                mystique. Je suis retournée en Égypte et en moi. J'ai marché sur les ruines de mon histoire
                et j'ai décidé d'en faire un sanctuaire.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold"> <span className="text-pharaonic-gold">☥</span></span>  Rien n'est absolument bon. Rien n'est absolument mauvais.
                La circoncision m'a fondée autant qu'elle m'a sauvée. Le suicide m'a détruite autant qu'il m'a
                rendue lucide.
                Le libre arbitre n'est pas un concept. C'est un acte de survie à chaque instant.
              </p>
              <p className="text-lg italic text-center mt-8 text-pharaonic-gold">
                "Celui qui regarde à l'extérieur rêve, celui qui regarde à l'intérieur s'éveille." — Carl Gustav Jung
              </p>
            </div>
            </ScrollReveal>
          </section>
                    
          <section>
            <ScrollReveal>
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
             <span className="text-pharaonic-gold text-2xl">✦</span> Qui suis-je ?
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="text-pharaonic-gold">☥</span>  Je suis le cri des femmes qui n'ont pas pu parler. Et la voix nue de celles qui refusent de se
                taire. Je suis l'excellence construite sur la peur. Et la sagesse née dans les ténèbres.
              </p>
              <p className="text-lg">
                <span className="text-pharaonic-gold">☥</span>  Je suis l'architecte d'un cercle sacré né du chaos. Je suis une synthèse vivante de paradoxes.
                Je ne vous propose pas des réponses.
                Je vous propose un miroir. Et le courage d'y rester face.
              </p>
              <p className="text-lg font-medium">
                <span className="text-pharaonic-gold">☥</span>  Aujourd'hui, je tiens l'espace. Pas parce que j'ai tout guéri, mais parce que j'ai cessé de
                fuir.
              </p>
              <p className="text-lg">
               <span className="text-pharaonic-gold">☥</span>  Per Horus est né de cette nudité. Ce n'est pas une méthode. C'est un acte d'amour âpre, un
                sanctuaire pour celles et ceux qui n'en peuvent plus de trahir ce qu'ils savent déjà :
              </p>
              <div className="font-medium space-y-2 my-6 pharaonic-card">
                <p>Que la vérité ne brille pas toujours.</p>
                <p>Mais qu'elle est le seul endroit où l'on peut enfin respirer.</p>
              </div>
            </div>
            </ScrollReveal>
          </section>
          
          <div className="hieroglyph-divider">
        
          </div>
          
          <section className="text-center">
            <ScrollReveal>
            <h2 className="text-2xl font-egyptian text-pharaonic-gold mb-6">
              <span className="text-pharaonic-gold text-2xl">✦</span>Et si vous êtes arrivé(e) jusqu'ici…
            </h2>
            <p className="text-lg">
              … ce n'est peut-être pas par hasard.
              Peut-être que quelque chose en vous a reconnu quelque chose en moi.
              Peut-être que vous cherchez, vous aussi, un endroit pour déposer le vrai.
            </p>
            <p className="text-lg mt-4">
              Per Horus est un cercle. Mais c'est d'abord une mémoire qui vous attend.
              Une œuvre vivante pour celles et ceux qui ne veulent plus faire semblant.
            </p>
            
            <div className="mt-14">
              <button>
            
                  <Link 
                     to="/circle"
                     className="w-full md:w-[250px] text-center px-2 py-1 bg-pharaonic-gold text-pharaonic-charcoal font-medium rounded hover:bg-pharaonic-gold/90 transition-colors font-egyptian tracking-wider"
                   >
                     Agir →
                   </Link>
             </button>
            </div>
            </ScrollReveal>
          </section>
        </div>
        
        <div className="mt-16 pt-8 border-t border-pharaonic-gold/30 text-center ankh-pattern">
        <ScrollReveal>
          <p className="per-horus-motto">
            À ceux qui marchent seuls : vous n'êtes pas seuls.
            Et à ceux qui doutent encore : le doute est souvent la porte juste avant la vérité.
          </p>
          <div className="flex justify-center mt-4">
            <img 
              src="/images/scrab_icon.png"
              alt="Per Horus Logo" 
              className="h-10 w-auto animate-scarab-glow"
            />
          </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Origin;
