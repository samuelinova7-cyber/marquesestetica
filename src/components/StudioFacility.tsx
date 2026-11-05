import React from 'react';
import { Shield, Sparkles, CheckCircle2, Award, Camera, Thermometer, Lightbulb, Wrench } from 'lucide-react';

interface StudioProps {
  onOpenQuoteModal: () => void;
}

export const StudioFacility: React.FC<StudioProps> = ({ onOpenQuoteModal }) => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Iluminação Hexagonal 6500K & Scangrip',
      description:
        'Matriz de luz técnica com alto índice de reprodução de cor (CRI 96+) que revela qualquer micro-risco invisível sob a luz solar comum.',
    },
    {
      icon: Thermometer,
      title: 'Ambiente Climatizado & Controle de Pó',
      description:
        'Cabine com pressão positiva e filtragem contínua de ar, garantindo ancoragem perfeita de películas PPF sem bolhas de poeira.',
    },
    {
      icon: Wrench,
      title: 'Corte Computadorizado de PPF (Plotter)',
      description:
        'Modelagem milimétrica por software específico para cada chassi e ano, eliminando o uso de estiletes ou lâminas sobre a pintura do veículo.',
    },
    {
      icon: Camera,
      title: 'Acompanhamento em Tempo Real no WhatsApp',
      description:
        'Você recebe fotos em alta resolução e vídeos dos bastidores a cada etapa concluída: descontaminação, polimento, aplicação e cura.',
    },
  ];

  return (
    <section id="estudio" className="py-20 bg-[#080a0e] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
            Sobre a Marques Estética Automotiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Estrutura de Alto Padrão & Rigor Técnico Sem Concessões
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Nascemos da paixão genuína por veículos esportivos e da obsessão pela perfeição em cada reflexo. Nosso
            estúdio foi projetado sob os mais rigorosos padrões internacionais de detalhamento e aplicação de PPF.
          </p>
        </div>

        {/* 2-Column Split: Studio Photos + Team Rigor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl h-[320px] sm:h-[400px]">
              <img
                src="/images/workshop_studio_facility_1793814175901.jpg"
                alt="Instalações do Estúdio Marques Estética Automotiva"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#080a0e]/85 border border-slate-700/80 p-3.5 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#d4af37] uppercase font-bold">
                    Estúdio Marques
                  </span>
                  <div className="text-xs font-bold text-white">
                    Piso Epóxi Industrial & Iluminação Hexagonal 6500K
                  </div>
                </div>
                <span className="text-[11px] text-slate-300 rounded bg-slate-800 px-2 py-1">
                  São Paulo - SP
                </span>
              </div>
            </div>

            {/* Secondary photo & technician closeup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 h-44 relative bg-slate-900">
                <img
                  src="/images/service_paint_correction_1793814175498.jpg"
                  alt="Técnico especialista em polimento e correção de verniz"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  Técnicos Certificados Rupes & IDA
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 h-44 relative bg-slate-900">
                <img
                  src="/images/service_ppf_installation_1793814173987.jpg"
                  alt="Aplicação artesanal de película de proteção"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  Instalação de PPF com Acabamento Invisível
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Pillars of Excellence */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-[#0d1017] p-4 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-[#d4af37]/10 p-2 text-[#d4af37] shrink-0 mt-0.5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{p.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visit invitation card */}
            <div className="rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e5c05b]">
                <Award className="h-4 w-4" />
                <span>Venha Conhecer Nosso Estúdio</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Agende um café no estúdio para realizarmos uma análise técnica de espessura de verniz sem custo no seu
                veículo.
              </p>
              <button
                onClick={onOpenQuoteModal}
                className="mt-4 w-full py-2.5 rounded-lg bg-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#080a0e] hover:brightness-110 cursor-pointer"
              >
                Agendar Visita & Orçamento no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
