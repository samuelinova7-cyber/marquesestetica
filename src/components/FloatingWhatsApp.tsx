import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingProps {
  onOpenQuoteModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingProps> = ({ onOpenQuoteModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultWhatsAppUrl =
    'https://wa.me/5511999999999?text=' +
    encodeURIComponent('Olá Marques Estética! Gostaria de tirar dúvidas e orçar um serviço para o meu carro.');

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Subtle Greeting Bubble */}
      {showTooltip && (
        <div className="pointer-events-auto relative max-w-[240px] rounded-xl border border-slate-700 bg-[#0d1017]/95 p-3 shadow-2xl backdrop-blur-md animate-fade-in text-xs text-slate-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-500 hover:text-white p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-[#25D366] shrink-0" />
            <span className="font-bold text-white text-[11px] uppercase tracking-wide">
              Especialista Online
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Tem dúvidas sobre PPF ou Vitrificação? Fale agora mesmo com nossa equipe.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="mt-2 w-full py-1 text-[10px] font-bold text-[#d4af37] hover:underline text-left block"
          >
            Ou abra o Simulador Express →
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={defaultWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white shadow">
          1
        </span>
        <MessageCircle className="h-7 w-7 fill-current stroke-1" />
      </a>
    </div>
  );
};
