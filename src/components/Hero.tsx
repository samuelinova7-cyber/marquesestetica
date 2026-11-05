import React from 'react';
import { ShieldCheck, Sparkles, MessageCircle, ArrowRight, Award, Gauge } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const defaultWhatsAppUrl =
    'https://wa.me/5511999999999?text=' +
    encodeURIComponent(
      'Olá Marques Estética Automotiva! Gostaria de informações e um orçamento para proteção e estética do meu veículo.'
    );

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-[#080a0e]">
      {/* Background Graphic & Glows */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-semibold text-[#e5c05b] tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Estética Automotiva & Blindagem de Superfície</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Proteção e Brilho Extremo para o seu{' '}
              <span className="bg-gradient-to-r from-[#f5d77f] via-[#d4af37] to-[#b38a19] bg-clip-text text-transparent">
                Veículo Premium
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Especialistas em <strong className="text-white font-semibold">PPF (Paint Protection Film)</strong>,{' '}
              <strong className="text-white font-semibold">Vitrificação Cerâmica 9H</strong> e correção de verniz de alto
              padrão. Tecnologia de autorregeneração térmica e proteção hidrofóbica com durabilidade de até 10 anos.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5c05b] to-[#c59b27] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#080a0e] shadow-xl shadow-[#d4af37]/20 transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
              >
                <span>Simular Orçamento Instantâneo</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:text-white hover:border-[#d4af37]/40"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366] fill-current" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            {/* Micro proof indicators */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-[#d4af37]">✓</span> Películas TPU com corte computadorizado
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#d4af37]">✓</span> Estúdio climatizado com filtragem de ar
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#d4af37]">✓</span> Garantia com certificado oficial
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Feature Card with light reflection effect */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/50 bg-slate-900/60 shadow-2xl shadow-[#d4af37]/15 group">
              {/* Outer ambient glow halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#d4af37]/25 via-transparent to-amber-500/20 blur-md pointer-events-none" />

              {/* Main Car Image provided by user */}
              <img
                src="https://res.cloudinary.com/hd1sahto/image/upload/v1793920949/WhatsApp_Image_2026-11-05_at_8.08.15_PM_1.jpg"
                alt="Veículo atendido no estúdio Marques Estética Automotiva"
                referrerPolicy="no-referrer"
                className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Measured Scrim Overlay for crisp contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/30 to-transparent pointer-events-none" />

              {/* Efeito de Reflexo de Luz (Specular light sweep beam) */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
                <div className="h-full w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-80 animate-shine-sweep" />
              </div>

              {/* Top ambient lens flare / light reflection point */}
              <div className="pointer-events-none absolute top-4 right-8 h-32 w-32 rounded-full bg-gradient-to-br from-white/40 via-[#f5d77f]/20 to-transparent blur-2xl animate-pulse" />

              {/* Floating Highlight Card on image */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-700/80 bg-[#0d1017]/95 p-4 backdrop-blur-md shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#e5c05b]" />
                      Trabalho Real do Estúdio Marques
                    </span>
                    <h2 className="text-base font-bold text-white mt-0.5">Acabamento Espelhado & PPF</h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Vitrificação cerâmica de dureza 9H com reflexo óptico puro e repelência extrema.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/50 px-2.5 py-1 text-xs font-mono font-bold text-[#e5c05b] shadow-sm">
                    100% Brilho
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Technical Metrics Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <div className="rounded-xl border border-slate-800 bg-[#0d1017]/80 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-[#d4af37]/10 p-2 text-[#d4af37]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">Proteção Física</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">100% TPU</div>
            <p className="text-xs text-slate-400 mt-1">Autorregeneração térmica contra pedriscos e riscos</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0d1017]/80 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-[#d4af37]/10 p-2 text-[#d4af37]">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">Hidrorepelência</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">115° Grau</div>
            <p className="text-xs text-slate-400 mt-1">Coating 9H com efeito lótus e escorrimento instantâneo</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0d1017]/80 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-[#d4af37]/10 p-2 text-[#d4af37]">
                <Award className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">Garantia Técnica</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">Até 10 Anos</div>
            <p className="text-xs text-slate-400 mt-1">Certificação com inspeções semestrais de manutenção</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0d1017]/80 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-[#d4af37]/10 p-2 text-[#d4af37]">
                <Gauge className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">Rigor Técnico</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">Micrométrico</div>
            <p className="text-xs text-slate-400 mt-1">Medição de espessura de verniz e cabine com pressão positiva</p>
          </div>
        </div>
      </div>
    </section>
  );
};
