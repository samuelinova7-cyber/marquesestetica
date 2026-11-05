import React, { useState } from 'react';
import { portfolioData, PortfolioItem } from '../data/portfolioData';
import { Clock, ShieldCheck, ArrowRight, Eye, Calendar, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onSelectVehicleForQuote: (vehicleName: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioProps> = ({ onSelectVehicleForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCar, setSelectedCar] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'Porsche', label: 'Porsche' },
    { id: 'BMW', label: 'BMW' },
    { id: 'Audi', label: 'Audi' },
    { id: 'Mercedes-AMG', label: 'Mercedes-AMG' },
    { id: 'Supercar', label: 'Superesportivos' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.brand === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[#080a0e] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
              Vitrine de Excelência
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Projetos Recentes Entregues no Estúdio Marques
            </h2>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Confira os acabamentos em veículos de clientes reais que confiam na nossa equipe para a proteção de
              seus investimentos.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-[#d4af37] text-[#080a0e] shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-[#0d1017] overflow-hidden group hover:border-[#d4af37]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.vehicle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent" />

                <div className="absolute top-3 left-3 rounded-md bg-[#080a0e]/80 border border-slate-700/80 px-2.5 py-1 backdrop-blur-md text-[11px] font-mono font-bold text-[#e5c05b]">
                  {item.highlightBadge}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">{item.yearModel}</span>
                  <span className="rounded bg-black/60 px-2 py-0.5 text-[11px] text-slate-300">
                    {item.executionDays} de estúdio
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#e5c05b] transition-colors">
                    {item.vehicle}
                  </h3>
                  <div className="text-xs font-semibold text-[#d4af37] mt-0.5">
                    {item.serviceType}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCar(item)}
                    className="flex-1 py-2 px-3 rounded-lg border border-slate-700 bg-slate-800/50 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5 text-slate-400" />
                    <span>Ver Ficha Técnica</span>
                  </button>

                  <button
                    onClick={() => onSelectVehicleForQuote(item.vehicle)}
                    className="py-2 px-3 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#e5c05b] hover:bg-[#d4af37] hover:text-[#080a0e] text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Orçar Similar</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Inspection Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700 bg-[#0d1017] p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#d4af37]">PROJETO EM DETALHE</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{selectedCar.vehicle}</h3>
                <span className="text-xs text-slate-400">{selectedCar.yearModel}</span>
              </div>
              <button
                onClick={() => setSelectedCar(null)}
                className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden border border-slate-800">
              <img
                src={selectedCar.image}
                alt={selectedCar.vehicle}
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="mt-5 space-y-4 text-xs text-slate-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
                  Serviço Realizado:
                </span>
                <p className="text-sm font-semibold text-white mt-0.5">{selectedCar.serviceType}</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Descrição do Tratamento:
                </span>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedCar.summary}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">Proteção Aplicada</span>
                  <span className="text-xs font-bold text-white">{selectedCar.protectionApplied}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">Tempo de Estúdio</span>
                  <span className="text-xs font-bold text-white">{selectedCar.executionDays}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCar(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  const carName = selectedCar.vehicle;
                  setSelectedCar(null);
                  onSelectVehicleForQuote(carName);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#080a0e] hover:brightness-110 cursor-pointer flex items-center gap-2"
              >
                <span>Solicitar Orçamento para {selectedCar.brand}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
