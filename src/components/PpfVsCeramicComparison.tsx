import React, { useState } from 'react';
import { Shield, Sparkles, Check, Layers, AlertCircle, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const PpfVsCeramicComparison: React.FC<ComparisonProps> = ({ onSelectServiceForQuote }) => {
  const [activeTab, setActiveTab] = useState<'table' | 'combo' | 'guide'>('table');

  const criteria = [
    {
      label: 'Proteção contra pedriscos em rodovia',
      ppf: 'Máxima (Película elástica que absorve o choque)',
      ceramic: 'Nula (Não evita lascas ou mossas mecânicas)',
      ppfScore: 5,
      ceramicScore: 1,
    },
    {
      label: 'Autorregeneração térmica (Self-Healing)',
      ppf: 'Sim (Riscos somem com calor do sol ou água quente)',
      ceramic: 'Não (Exige novo polimento se riscado)',
      ppfScore: 5,
      ceramicScore: 1,
    },
    {
      label: 'Efeito Hidrofóbico & Facilidade de Lavagem',
      ppf: 'Excelente (Com top-coat cerâmico integrado)',
      ceramic: 'Extrema (Ângulo > 115°, repele água e lama)',
      ppfScore: 4,
      ceramicScore: 5,
    },
    {
      label: 'Profundidade de Brilho & "Wet Look"',
      ppf: 'Alto brilho ou opção Satin Fosco Acetinado',
      ceramic: 'Profundidade de brilho vítreo inigualável',
      ppfScore: 4,
      ceramicScore: 5,
    },
    {
      label: 'Espessura média da barreira',
      ppf: '150 a 200 Microns (Camada espessa física)',
      ceramic: '2 a 3 Microns (Fusão nanotecnológica)',
      ppfScore: 5,
      ceramicScore: 2,
    },
    {
      label: 'Proteção contra fezes de aves & seiva ácida',
      ppf: 'Total (A película impede contato com a tinta)',
      ceramic: 'Alta resistência química e proteção UV',
      ppfScore: 5,
      ceramicScore: 4,
    },
    {
      label: 'Durabilidade certificada',
      ppf: '5 a 10 anos',
      ceramic: '3 a 5 anos',
      ppfScore: 5,
      ceramicScore: 4,
    },
  ];

  return (
    <section id="comparativo" className="py-20 bg-[#0a0d13] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37] mb-2">
            Guia Técnico de Decisão
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            PPF ou Vitrificação: Qual a Proteção Certa para Você?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Entenda a diferença técnica entre a blindagem física elástica contra impactos e o coating nanocerâmico de
            brilho espelhado e hidrorrepelência.
          </p>

          {/* Interactive Navigation Control */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            <button
              onClick={() => setActiveTab('table')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'table'
                  ? 'bg-[#d4af37] text-[#080a0e] shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Comparativo Técnico Lado a Lado
            </button>
            <button
              onClick={() => setActiveTab('combo')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'combo'
                  ? 'bg-[#d4af37] text-[#080a0e] shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              O Combo Ideal: PPF Frontal + Vitrificação
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'guide'
                  ? 'bg-[#d4af37] text-[#080a0e] shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Recomendação por Perfil de Uso
            </button>
          </div>
        </div>

        {/* View 1: Technical Comparison Table */}
        {activeTab === 'table' && (
          <div className="rounded-2xl border border-slate-800 bg-[#0d1017] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-800 p-4 sm:p-6 bg-slate-900/50">
              <div className="md:col-span-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Critério de Performance
              </div>
              <div className="md:col-span-4 flex items-center gap-2 mt-2 md:mt-0">
                <div className="rounded p-1 bg-[#d4af37]/20 text-[#e5c05b]">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  PPF (Paint Protection Film)
                </span>
              </div>
              <div className="md:col-span-4 flex items-center gap-2 mt-2 md:mt-0">
                <div className="rounded p-1 bg-blue-500/20 text-blue-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Vitrificação Cerâmica 9H
                </span>
              </div>
            </div>

            <div className="divide-y divide-slate-800/80">
              {criteria.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 hover:bg-slate-800/20 transition-colors"
                >
                  <div className="md:col-span-4 flex items-center">
                    <span className="text-sm font-medium text-slate-200">{item.label}</span>
                  </div>
                  <div className="md:col-span-4 mt-2 md:mt-0 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-[#e5c05b]">{item.ppf}</span>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-6 rounded-full ${
                            i < item.ppfScore ? 'bg-[#d4af37]' : 'bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-4 mt-2 md:mt-0 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-blue-300">{item.ceramic}</span>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-6 rounded-full ${
                            i < item.ceramicScore ? 'bg-blue-400' : 'bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom action banner */}
            <div className="p-6 bg-slate-900/60 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                Dúvida sobre qual a melhor opção para a pintura do seu veículo?
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectServiceForQuote('ppf')}
                  className="px-4 py-2 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#e5c05b] text-xs font-bold uppercase tracking-wider hover:bg-[#d4af37] hover:text-[#080a0e] transition-all cursor-pointer"
                >
                  Orçar PPF
                </button>
                <button
                  onClick={() => onSelectServiceForQuote('vitrificacao')}
                  className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
                >
                  Orçar Vitrificação
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View 2: The Best of Both Worlds Combo */}
        {activeTab === 'combo' && (
          <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900 to-[#0d1017] p-6 sm:p-8 shadow-2xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">
                A Escolha dos Proprietários Mais Exigentes
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Combo Híbrido: PPF Frontal + Vitrificação no Restante
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                90% dos impactos de pedriscos em pistas e rodovias ocorrem na parte frontal do veículo (parachoque,
                capô, paralamas e retrovisores). Nosso pacote híbrido combina a máxima blindagem física nessas áreas de
                choque com o brilho espelhado da vitrificação cerâmica em todo o restante da lataria, vidros e rodas.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/5 p-5">
                <div className="flex items-center gap-2 text-[#e5c05b] font-bold text-base mb-2">
                  <Shield className="h-5 w-5" />
                  <span>Área Frontal em PPF TPU</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Proteção física blindada para parachoque dianteiro, capô integral, faróis e capas dos retrovisores.
                  Você pode acelerar na estrada sem o medo constante de estragar a pintura original.
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/40 bg-blue-500/5 p-5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-base mb-2">
                  <Sparkles className="h-5 w-5" />
                  <span>Portas, Teto e Traseira em Cerâmica 9H</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Brilho uniforme com reflexo espelhado idêntico em todo o veículo, repelência extrema a poeira e
                  facilidade absoluta para lavar o carro aos fins de semana.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Check className="h-4 w-4 text-[#d4af37]" />
                <span>Excelente relação custo-benefício em comparação ao envelopamento total</span>
              </div>
              <button
                onClick={() => onSelectServiceForQuote('combo')}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b38a19] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080a0e] shadow-lg hover:brightness-110 cursor-pointer"
              >
                <span>Simular Pacote Híbrido no WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* View 3: Decision Guide by Driving Profile */}
        {activeTab === 'guide' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-[#0d1017] p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400">Perfil 1</span>
                <h3 className="text-lg font-bold text-white mt-1">Uso Urbano & Executivo</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Carro utilizado primariamente na cidade, garagens cobertas e deslocamentos de rotina.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-[#d4af37] uppercase">Recomendação Marques:</div>
                  <div className="text-sm font-bold text-white mt-0.5">Vitrificação Cerâmica 9H Diamond</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Garante brilho profundo contínuo e impede marcas de lavagens frequentes.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onSelectServiceForQuote('vitrificacao')}
                className="mt-6 w-full py-2.5 rounded-lg border border-slate-700 bg-slate-800/60 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white hover:border-[#d4af37]/40 cursor-pointer"
              >
                Consultar Vitrificação
              </button>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/60 bg-[#0d1017] p-6 relative flex flex-col justify-between shadow-lg shadow-[#d4af37]/5">
              <div className="absolute -top-3 right-4 rounded-full bg-[#d4af37] px-3 py-0.5 text-[10px] font-extrabold uppercase text-[#080a0e]">
                Mais Escolhido
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#e5c05b]">Perfil 2</span>
                <h3 className="text-lg font-bold text-white mt-1">Rodovias & Viagens Frequentes</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Carro que roda em estrada em velocidade de cruzeiro, exposto a caminhões e pedriscos soltos.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-[#d4af37] uppercase">Recomendação Marques:</div>
                  <div className="text-sm font-bold text-white mt-0.5">PPF Frontal Track Pack + Vitrificação</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Elimina o estresse de pedradas no capô e parachoque sem precisar envelopar o carro todo.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onSelectServiceForQuote('combo')}
                className="mt-6 w-full py-2.5 rounded-lg bg-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#080a0e] hover:brightness-110 cursor-pointer"
              >
                Consultar Pacote Frontal
              </button>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0d1017] p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400">Perfil 3</span>
                <h3 className="text-lg font-bold text-white mt-1">Superesportivos & Track Days</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Porsches GT, Ferraris, BMW M e veículos de alta performance que exigem preservação absoluta da pintura original.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-[#d4af37] uppercase">Recomendação Marques:</div>
                  <div className="text-sm font-bold text-white mt-0.5">PPF Full Body Completo</div>
                  <p className="text-xs text-slate-400 mt-1">
                    100% da lataria blindada com película autorregenerativa de 200 microns.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onSelectServiceForQuote('ppf')}
                className="mt-6 w-full py-2.5 rounded-lg border border-slate-700 bg-slate-800/60 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white hover:border-[#d4af37]/40 cursor-pointer"
              >
                Consultar PPF Full Body
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
