import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#0a0d13] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
              Depoimentos & Avaliações
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              O Que Dizem os Proprietários que Atendemos
            </h2>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Feedbacks reais de clientes que confiaram seus veículos à Marques Estética Automotiva.
            </p>
          </div>

          {/* Aggregate Rating Pill-free stat */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex text-[#d4af37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-white font-bold">5.0 / 5.0</strong> no Google e Instagram
            </div>
          </div>
        </div>

        {/* Featured Google Review Showcase Card with User Image & Reflection Effect */}
        <div className="mb-12 relative overflow-hidden rounded-2xl border border-[#d4af37]/50 bg-gradient-to-r from-[#0d1017] via-slate-900/90 to-[#0d1017] p-6 sm:p-8 shadow-2xl shadow-[#d4af37]/10 group">
          {/* Ambient luminous glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d4af37]/20 via-[#e5c05b]/10 to-[#d4af37]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Specular shine streak passing through the entire banner */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
            <div className="h-full w-60 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-75 animate-shine-sweep" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Container with high-gloss reflection */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-xl border border-[#d4af37]/60 bg-black/60 shadow-xl group/img">
                <img
                  src="https://res.cloudinary.com/hd1sahto/image/upload/v1793920950/WhatsApp_Image_2026-11-05_at_8.08.13_PM.jpg"
                  alt="Avaliação no Google Marques Estética Automotiva"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover/img:scale-105"
                />

                {/* Light reflection over image */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
                  <div className="h-full w-36 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-90 animate-shine-sweep" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#e5c05b] bg-black/70 px-2.5 py-1 rounded border border-[#d4af37]/40">
                    Google Avaliações 5.0 ★
                  </span>
                  <span className="text-[11px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                    100% Verificado
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Call to action */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold text-[#e5c05b] mb-3">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span>Sua Opinião Faz a Diferença</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Avalie Nossa Oficina no Google
                </h3>

                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  A excelência no atendimento e nos acabamentos de PPF e Vitrificação é refletida nas notas máximas que recebemos. Se você já confiou seu veículo à Marques, deixe sua avaliação com fotos e conte sua experiência!
                </p>

                {/* Rating score badge */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-base font-bold text-white font-mono">
                    <span className="text-[#e5c05b] text-xl">5.0</span>
                    <div className="flex text-[#d4af37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-slate-400">·</span>
                  <span>Nota máxima em acabamento, pontualidade e transparência</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5c05b] to-[#c59b27] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080a0e] shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <Star className="h-4 w-4 fill-current" />
                  <span>Deixar Avaliação no Google</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
                >
                  <span>Ver Destaques no Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-[#0d1017] p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#d4af37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{item.date}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">{item.author}</span>
                    <CheckCircle className="h-3.5 w-3.5 text-[#d4af37]" />
                  </div>
                  <div className="text-xs text-[#e5c05b] font-medium">{item.vehicle}</div>
                  <div className="text-[11px] text-slate-400">{item.city}</div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Serviço Realizado
                  </span>
                  <span className="text-xs text-slate-300 font-medium">{item.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
