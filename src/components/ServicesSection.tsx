import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { Shield, Sparkles, Check, Clock, Award, ArrowRight, Eye } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-20 bg-[#080a0e] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
            O Core do Negócio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Nossos Serviços de Estética e Proteção de Alto Padrão
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Cada processo é executado com controle estrito de temperatura, iluminação de inspeção Scangrip e química
            importada de primeira linha mundial.
          </p>
        </div>

        {/* Bento Grid layout with asymmetric hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-800 bg-[#0d1017] overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              {/* Media image container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-[#0d1017]/30 to-transparent" />

                {/* Editorial number tag */}
                <div className="absolute top-4 left-4 rounded-lg bg-[#080a0e]/80 border border-slate-700/80 px-3 py-1 backdrop-blur-md">
                  <span className="text-xs font-mono font-bold text-[#d4af37]">{service.number}</span>
                </div>

                {/* Warranty indicator */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="rounded-md bg-[#080a0e]/80 border border-slate-700 px-2.5 py-1 text-slate-200 font-medium backdrop-blur-md flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#d4af37]" />
                    {service.timeEstimate}
                  </span>
                  <span className="rounded-md bg-[#080a0e]/80 border border-slate-700 px-2.5 py-1 text-[#e5c05b] font-medium backdrop-blur-md flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-[#d4af37]" />
                    {service.warranty}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e5c05b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#d4af37] mt-1 tracking-wide">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <button
                    onClick={() => onSelectServiceForQuote(service.id)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#d4af37] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#080a0e] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Simular Este Serviço</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Eye className="h-3.5 w-3.5 text-slate-400" />
                    <span>Detalhes</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700 bg-[#0d1017] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#d4af37]">
                  {selectedServiceModal.number} · FICHA TÉCNICA
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedServiceModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-5 text-sm text-slate-300">
              <p className="leading-relaxed">{selectedServiceModal.description}</p>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div>
                  <span className="text-[11px] uppercase text-slate-400 font-semibold block">Garantia</span>
                  <span className="text-xs text-white font-bold">{selectedServiceModal.warranty}</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase text-slate-400 font-semibold block">Tempo Estimado</span>
                  <span className="text-xs text-white font-bold">{selectedServiceModal.timeEstimate}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
                  Diferenciais & Etapas Técnicas:
                </h4>
                <div className="space-y-2">
                  {selectedServiceModal.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedServiceModal.packages && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
                    Pacotes Disponíveis:
                  </h4>
                  <div className="space-y-3">
                    {selectedServiceModal.packages.map((pkg, i) => (
                      <div key={i} className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                        <div className="text-xs font-bold text-white">{pkg.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{pkg.coverage}</div>
                        <div className="text-[11px] text-[#e5c05b] mt-1">Ideal: {pkg.ideal}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  const id = selectedServiceModal.id;
                  setSelectedServiceModal(null);
                  onSelectServiceForQuote(id);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#080a0e] hover:brightness-110 cursor-pointer"
              >
                Simular Este Serviço no WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
