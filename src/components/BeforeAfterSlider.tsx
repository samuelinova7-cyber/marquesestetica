import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, Shield, Droplets } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  vehicle: string;
  service: string;
  beforeLabel: string;
  beforeDescription: string;
  afterLabel: string;
  afterDescription: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
}

const cases: CaseStudy[] = [
  {
    id: 'correction',
    title: 'Correção de Pintura & Espelhamento 9H',
    vehicle: 'Porsche 911 GT3 (Preto Metálico)',
    service: 'Polimento Técnico Stage 3 + Ceramic Coating',
    beforeLabel: 'Antes: Micro-riscos & Swirls',
    beforeDescription: 'Verniz opaco com teias de aranha intensas causadas por lavagens inadequadas em lava-rápidos comuns.',
    afterLabel: 'Depois: Nivelamento Óptico 9H',
    afterDescription: 'Reflexo puro sem distorções, profundidade de cor restaurada e proteção vitrificada contra novos riscos.',
    beforeImage: '/images/service_paint_correction_1793814175498.jpg',
    afterImage: '/images/hero_porsche_detailing_1793814173679.jpg',
    technique: 'Medição micrométrica com 3 etapas de corte, refino e lustro com compostos abrasivos alemães.',
  },
  {
    id: 'ppf',
    title: 'Proteção Física PPF vs Verniz Desprotegido',
    vehicle: 'Lamborghini Huracán & Supercars',
    service: 'Película TPU 200 Microns Self-Healing',
    beforeLabel: 'Antes: Pintura Exposta',
    beforeDescription: 'Vulnerável a impactos de pedriscos de rodovia, micro-batidas de portas e fezes ácidas de aves.',
    afterLabel: 'Depois: Película Invisível TPU',
    afterDescription: 'Barreira física de 200 microns que cicatriza riscos sozinha ao entrar em contato com o calor.',
    beforeImage: '/images/workshop_studio_facility_1793814175901.jpg',
    afterImage: '/images/service_ppf_installation_1793814173987.jpg',
    technique: 'Corte computadorizado por plotter específico por chassi, sem uso de lâminas ou estiletes na lataria.',
  },
  {
    id: 'beading',
    title: 'Repelência Extrema & Efeito Lótus',
    vehicle: 'BMW M3 Competition & Sedans Premium',
    service: 'Vitrificação de Grafeno Diamond',
    beforeLabel: 'Antes: Água Estagnada',
    beforeDescription: 'Superfície com baixa tensão superficial retendo lama, fuligem e manchas de água (water spots).',
    afterLabel: 'Depois: Beading Hidrofóbico 115°',
    afterDescription: 'Gotas de água em esferas perfeitas que deslizam e levam toda a sujeira embora instantaneamente.',
    beforeImage: '/images/service_paint_correction_1793814175498.jpg',
    afterImage: '/images/service_ceramic_coating_1793814174351.jpg',
    technique: 'Fusão molecular em microporos do verniz criando um escudo vítreo com repelência estática e química.',
  },
];

interface SliderProps {
  onOpenQuoteModal: () => void;
}

export const BeforeAfterSlider: React.FC<SliderProps> = ({ onOpenQuoteModal }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentCase = cases[activeCaseIndex];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <section id="antes-depois" className="py-20 bg-[#0a0d13] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
            Prova Social Visual
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Antes & Depois Interativo: A Transformação Real
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Arraste o cursor horizontalmente para comparar o estado da pintura antes e depois do nosso tratamento
            técnico especializado.
          </p>

          {/* Case Selectors */}
          <div className="mt-6 flex flex-wrap gap-2">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-[#d4af37] text-[#080a0e] shadow-md font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => updatePosition(e.clientX)}
              className="relative h-[360px] sm:h-[480px] w-full select-none overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl cursor-ew-resize group"
            >
              {/* "After" Image (Right / Background) */}
              <img
                src={currentCase.afterImage}
                alt={currentCase.afterLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
              />

              {/* "Before" Image (Left / Clipped overlay) */}
              <div
                className="absolute inset-0 h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt={currentCase.beforeLabel}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-[1000px] max-w-none sm:w-[1200px] lg:w-[850px] object-cover pointer-events-none"
                  style={{ filter: activeCaseIndex === 0 ? 'grayscale(0.3) contrast(1.1)' : 'none' }}
                />
              </div>

              {/* Scrim labels */}
              <div className="absolute top-4 left-4 rounded-md bg-black/70 border border-slate-700/80 px-3 py-1.5 backdrop-blur-md text-xs font-bold text-slate-200 pointer-events-none">
                {currentCase.beforeLabel}
              </div>

              <div className="absolute top-4 right-4 rounded-md bg-[#d4af37]/90 border border-[#d4af37] px-3 py-1.5 backdrop-blur-md text-xs font-bold text-[#080a0e] pointer-events-none">
                {currentCase.afterLabel}
              </div>

              {/* Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl border-2 border-slate-900 pointer-events-none">
                  <ArrowLeftRight className="h-4 w-4" />
                </div>
              </div>

              {/* Mobile Drag Instruction */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 border border-slate-700 px-4 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md pointer-events-none">
                Arraste para comparar ({Math.round(sliderPosition)}%)
              </div>
            </div>
          </div>

          {/* Details & Specs for this Case */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className="rounded-xl border border-slate-800 bg-[#0d1017] p-6 space-y-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#d4af37] block">Veículo Atendido</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{currentCase.vehicle}</h3>
                <span className="text-xs text-slate-400">{currentCase.service}</span>
              </div>

              <div className="border-t border-slate-800/80 pt-3 space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-400 block">Diagnóstico Inicial:</span>
                  <p className="text-slate-300 mt-0.5 leading-relaxed">{currentCase.beforeDescription}</p>
                </div>
                <div>
                  <span className="font-bold text-[#e5c05b] block">Resultado Técnico:</span>
                  <p className="text-slate-300 mt-0.5 leading-relaxed">{currentCase.afterDescription}</p>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                  Metodologia Aplicada
                </span>
                <p className="text-xs text-slate-300 italic">{currentCase.technique}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3 rounded-lg bg-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#080a0e] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Quero Este Resultado no Meu Carro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
