import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

interface QuoteSectionProps {
  onOpenQuoteModal: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl =
    'https://wa.me/5511999999999?text=' +
    encodeURIComponent('Olá Marques Estética Automotiva! Gostaria de solicitar um orçamento para o meu veículo.');

  return (
    <section id="orcamentos" className="py-20 bg-[#06080b] border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background light rays */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#d4af37]/50 bg-gradient-to-br from-[#0d1017] via-slate-900/90 to-[#0a0d13] p-8 sm:p-12 shadow-2xl shadow-[#d4af37]/10 group">
          {/* Luminous aura around the box */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#d4af37]/20 via-[#f5d77f]/15 to-[#d4af37]/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Large Specular Light Sweep (Brilho & Reflexo de Luz) */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
            <div className="h-full w-72 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-80 animate-shine-sweep" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image with high-gloss shine and reflection */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/60 bg-black/80 shadow-2xl group/card">
                {/* User Provided Quote Image */}
                <img
                  src="https://res.cloudinary.com/hd1sahto/image/upload/v1793920950/WhatsApp_Image_2026-11-05_at_8.08.15_PM.jpg"
                  alt="Orçamentos Marques Estética Automotiva"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover/card:scale-105"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/20 to-transparent pointer-events-none" />

                {/* Light reflection sweep across the car image */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
                  <div className="h-full w-44 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-90 animate-shine-sweep" />
                </div>

                {/* Top Lens Flare Highlight */}
                <div className="pointer-events-none absolute top-3 right-6 h-24 w-24 rounded-full bg-white/35 blur-xl animate-pulse" />

                {/* Card tag */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#080a0e]/90 border border-slate-700/80 p-3.5 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#e5c05b]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Orçamentos & Avaliação Técnica
                    </span>
                  </div>
                  <span className="rounded bg-[#d4af37] px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#080a0e]">
                    Online via WhatsApp
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#e5c05b] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Atendimento Consultivo Exclusivo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Solicite seu Orçamento Sob Medida com a Equipe Marques
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Cada veículo possui características únicas de verniz, uso e exposição. Realizamos uma análise personalizada para indicar exatamente o que seu carro necessita: seja a blindagem frontal em PPF contra pedriscos ou o espelhamento vítreo em cerâmica 9H.
              </p>

              {/* Guarantees list */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <span>Proposta detalhada por escrito com prazos e certificados de garantia</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <span>Resposta rápida e acompanhamento direto pelo WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="h-4 w-4 text-[#d4af37] shrink-0" />
                  <span>Avaliação presencial com medição micrométrica de verniz sem custo</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5c05b] to-[#c59b27] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080a0e] shadow-xl shadow-[#d4af37]/20 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Abrir Simulador de Orçamento</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-xs font-semibold text-white hover:border-[#d4af37]/50 hover:bg-slate-700 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366] fill-current" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
