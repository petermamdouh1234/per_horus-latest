import React from 'react';

type Props = {
  onAccept: () => void;
};

const GatePopup: React.FC<Props> = ({ onAccept }) => {
  const handleReject = () => {
    window.location.href = "https://www.google.com"; // ← or another link
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 text-[#4B3621] p-8 max-w-2xl rounded-2xl shadow-[0_0_60px_rgba(255,215,0,0.5)] border-4 border-yellow-800 space-y-6 font-['Papyrus','serif']">
        <h2 className="text-2xl font-bold text-center text-yellow-800 flex items-center justify-center gap-2">
          <span>𓂀</span> AVANT D’ALLER PLUS LOIN <span>𓂀</span>
        </h2>
        <p className="text-md leading-relaxed">
          Ce site s’adresse uniquement à ceux qui partagent ce consensus fondamental :<br />
          <strong>L’évolution de la conscience humaine n’est pas un luxe — c’est une urgence.</strong><br />
          Ici, nous considérons que :<br />
          • Les mythes, symboles et textes anciens sont des cartes précises de la psyché.<br />
          • Les allégories sacrées sont des outils d’intelligence intérieure, pas des croyances.<br />
          • La vraie connaissance de soi exige le redressement de l’intellect, non son effacement.<br />
          • La Gnose est une médecine oubliée, une réponse profonde à une époque en ruine.<br />
          Aucun développement personnel.<br />
          Aucune promesse de guérison.<br />
          Aucune dilution du fond.<br /><br />
          Seulement un travail.<br />
          Celui d’étudier notre tradition sapientielle avec rigueur,<br />
          d’en extraire les lois profondes, les repères oubliés.<br />
          Un travail pour ceux qui savent que la liberté commence quand on réapprend à penser.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <button
            onClick={handleReject}
            className="w-full sm:w-auto px-4 py-2 border border-yellow-900 text-yellow-900 rounded hover:bg-yellow-100 transition-all duration-200"
          >
            Je ne suis pas en accord – je quitte le site
          </button>
          <button
            onClick={onAccept}
            className="w-full sm:w-auto px-4 py-2 bg-yellow-900 text-yellow-50 rounded hover:bg-yellow-800 transition-all duration-200"
          >
            Je suis en accord – j’entre et je découvre
          </button>
        </div>
      </div>
    </div>
  );
};

export default GatePopup;
