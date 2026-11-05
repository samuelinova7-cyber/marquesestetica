import React, { useState, useEffect } from 'react';
import {
  Shield,
  Sparkles,
  Car,
  CheckCircle2,
  Clock,
  Award,
  Send,
  X,
  Copy,
  Check,
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialVehicleName?: string;
}

export const QuoteSimulatorModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialVehicleName,
}) => {
  const [vehicleCategory, setVehicleCategory] = useState<'sedan' | 'suv' | 'sports' | 'supercar'>('sports');
  const [serviceType, setServiceType] = useState<string>(initialServiceId || 'combo');
  const [additionalOptions, setAdditionalOptions] = useState<string[]>([]);
  const [vehicleModel, setVehicleModel] = useState<string>(initialVehicleName || '');
  const [clientName, setClientName] = useState<string>('');
  const [clientCity, setClientCity] = useState<string>('São Paulo - SP');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialServiceId) {
      setServiceType(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialVehicleName) {
      setVehicleModel(initialVehicleName);
    }
  }, [initialVehicleName]);

  if (!isOpen) return null;

  const vehicleCategories = [
    { id: 'sedan', label: 'Hatch / Sedan', sub: 'Ex: BMW Série 3, Audi A3/A4, Golf' },
    { id: 'suv', label: 'SUV / Grande Porte', sub: 'Ex: Porsche Cayenne, Macan, Defender, X5' },
    { id: 'sports', label: 'Esportivo / Coupé', sub: 'Ex: Porsche 911, BMW M3/M4, Mustang' },
    { id: 'supercar', label: 'Superesportivo / Exótico', sub: 'Ex: Ferrari, Lamborghini, McLaren, AMG GT' },
  ];

  const mainServices = [
    {
      id: 'combo',
      name: 'Combo Híbrido: PPF Frontal + Vitrificação Restante',
      warranty: 'Até 5 anos de garantia',
      time: '3 a 4 dias úteis',
      popular: true,
      desc: 'Blindagem física no parachoque, capô e retrovisores + coating 9H no restante.',
    },
    {
      id: 'ppf-full',
      name: 'PPF Full Body (Proteção Total 100% da Carroceria)',
      warranty: 'Até 10 anos de garantia',
      time: '4 a 5 dias úteis',
      popular: false,
      desc: 'Película TPU elástica autorregenerativa cobrindo cada centímetro da lataria.',
    },
    {
      id: 'ppf',
      name: 'PPF Frontal Track Pack (Áreas de Choque)',
      warranty: 'Até 10 anos de garantia',
      time: '2 a 3 dias úteis',
      popular: false,
      desc: 'Proteção contra pedriscos no capô integral, parachoque, faróis e retrovisores.',
    },
    {
      id: 'vitrificacao',
      name: 'Vitrificação Cerâmica & Grafeno 9H',
      warranty: '3 a 5 anos de garantia',
      time: '1 a 2 dias úteis',
      popular: false,
      desc: 'Coating nanotecnológico com ângulo de contato > 115° e brilho espelhado profundo.',
    },
    {
      id: 'correcao-pintura',
      name: 'Correção & Restauração de Pintura (Polimento Técnico)',
      warranty: 'Verniz 100% recuperado',
      time: '1 a 2 dias úteis',
      popular: false,
      desc: 'Remoção cirúrgica de micro-riscos, teias de aranha e marcas circulares.',
    },
    {
      id: 'detalhamento-interno',
      name: 'Detalhamento Interno & Higienização a Vapor 160°C',
      warranty: 'Assepsia e proteção de couro',
      time: '1 dia útil',
      popular: false,
      desc: 'Nutrição de bancos de couro, assepsia de dutos de ar e proteção de tecidos.',
    },
  ];

  const optionals = [
    { id: 'wheels', label: 'Proteção Cerâmica para Rodas & Pinças de Freio' },
    { id: 'glass', label: 'Vitrificação de Vidros com Hidrorepelência Anti-Chuva' },
    { id: 'interior-detail', label: 'Tratamento & Hidratação de Couro Nobre Europeu' },
    { id: 'chassis', label: 'Detalhamento Técnico de Caixas de Roda e Suspensão' },
  ];

  const toggleOption = (id: string) => {
    if (additionalOptions.includes(id)) {
      setAdditionalOptions(additionalOptions.filter((item) => item !== id));
    } else {
      setAdditionalOptions([...additionalOptions, id]);
    }
  };

  const selectedServiceObj =
    mainServices.find((s) => s.id === serviceType) || mainServices[0];

  const categoryObj =
    vehicleCategories.find((c) => c.id === vehicleCategory) || vehicleCategories[0];

  // Build formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const lines = [
      `*SOLICITAÇÃO DE ORÇAMENTO — MARQUES ESTÉTICA AUTOMOTIVA*`,
      `👤 *Nome:* ${clientName || 'Cliente'}`,
      `🚗 *Veículo:* ${vehicleModel || 'Veículo a informar'} (${categoryObj.label})`,
      `📍 *Cidade:* ${clientCity || 'A combinar'}`,
      ``,
      `🛠️ *Serviço Solicitado:* ${selectedServiceObj.name}`,
      `🛡️ *Garantia:* ${selectedServiceObj.warranty}`,
      `⏱️ *Tempo de Estúdio:* ${selectedServiceObj.time}`,
    ];

    if (additionalOptions.length > 0) {
      lines.push(``);
      lines.push(`✨ *Opcionais de Interesse:*`);
      additionalOptions.forEach((optId) => {
        const opt = optionals.find((o) => o.id === optId);
        if (opt) lines.push(`- ${opt.label}`);
      });
    }

    lines.push(``);
    lines.push(
      `Olá equipe Marques! Gostaria de confirmar disponibilidade na agenda do estúdio e o valor do projeto para o meu carro.`
    );

    return lines.join('\n');
  };

  const whatsappMessage = generateWhatsAppMessage();
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-[#0d1017] p-5 sm:p-7 my-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d4af37]">
              Simulador Express de Orçamento
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Configure a Proteção para o seu Veículo
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Selecione o perfil do seu carro e receba a proposta formatada diretamente no WhatsApp da equipe Marques.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Provided Quote Banner with Specular Shine Effect */}
        <div className="mt-4 relative overflow-hidden rounded-xl border border-[#d4af37]/60 bg-black/70 shadow-lg group">
          <div className="relative h-32 sm:h-36 w-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/hd1sahto/image/upload/v1793920950/WhatsApp_Image_2026-11-05_at_8.08.15_PM.jpg"
              alt="Orçamento Marques Estética Automotiva"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1017] via-[#0d1017]/40 to-transparent" />

            {/* Animated Light Reflection Beam (Brilho e Reflexo) */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
              <div className="h-full w-36 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-90 animate-shine-sweep" />
            </div>

            {/* Overlay Text info on the image */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-[#d4af37]/25 border border-[#d4af37]/60 px-2.5 py-0.5 text-[10px] font-bold text-[#f5d77f] uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                Estúdio de Alto Padrão
              </span>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-white drop-shadow">
                  Orçamento Sob Medida para o seu Carro
                </div>
                <div className="text-[11px] text-slate-300">
                  Preencha abaixo para gerar sua mensagem personalizada
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="mt-5 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
          {/* Step 1: Vehicle Category */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              1. Categoria do Veículo:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vehicleCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setVehicleCategory(cat.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    vehicleCategory === cat.id
                      ? 'border-[#d4af37] bg-[#d4af37]/10 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{cat.label}</span>
                    {vehicleCategory === cat.id && (
                      <CheckCircle2 className="h-4 w-4 text-[#d4af37]" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{cat.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Main Service */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              2. Escolha o Serviço Principal:
            </label>
            <div className="space-y-2">
              {mainServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setServiceType(service.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    serviceType === service.id
                      ? 'border-[#d4af37] bg-[#d4af37]/10'
                      : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {service.name}
                        </span>
                        {service.popular && (
                          <span className="rounded bg-[#d4af37] px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#080a0e]">
                            Recomendado
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{service.desc}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] text-[#e5c05b] font-mono font-medium block">
                        {service.warranty}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        {service.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Optional Upgrades */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              3. Opcionais & Upgrades Premium (Opcional):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {optionals.map((opt) => {
                const isSelected = additionalOptions.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleOption(opt.id)}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-[#d4af37]/70 bg-[#d4af37]/10 text-white font-medium'
                        : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <div
                      className={`h-4 w-4 rounded flex items-center justify-center shrink-0 ml-2 border ${
                        isSelected
                          ? 'bg-[#d4af37] border-[#d4af37] text-[#080a0e]'
                          : 'border-slate-700'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Vehicle & Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                Modelo e Ano do Carro *
              </label>
              <input
                type="text"
                placeholder="Ex: Porsche 911 2024"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                Seu Nome *
              </label>
              <input
                type="text"
                placeholder="Ex: Carlos Silva"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">
                Cidade / Região
              </label>
              <input
                type="text"
                placeholder="Ex: São Paulo - SP"
                value={clientCity}
                onChange={(e) => setClientCity(e.target.value)}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none"
              />
            </div>
          </div>

          {/* Live Preview of formatted Message */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Pré-visualização da Mensagem para WhatsApp
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="flex items-center gap-1 text-[11px] text-[#e5c05b] hover:text-[#d4af37] cursor-pointer"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono text-slate-300 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
              {whatsappMessage}
            </pre>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-400 text-center sm:text-left">
            <span>Atendimento técnico direto pelo WhatsApp comercial da Marques Estética.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 rounded-lg border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
            >
              Cancelar
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.01] active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              <span>Enviar via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
