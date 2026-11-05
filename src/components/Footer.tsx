import React from 'react';
import {
  Shield,
  MapPin,
  Clock,
  Phone,
  Instagram,
  MessageCircle,
  ExternalLink,
  Mail,
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl =
    'https://wa.me/5511999999999?text=' +
    encodeURIComponent('Olá! Gostaria de falar com o estúdio Marques Estética Automotiva.');

  return (
    <footer className="border-t border-slate-800 bg-[#06080b] text-slate-300">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-[#0d1017] to-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pronto para Proteger e Valorizar o seu Veículo?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Agende uma consultoria presencial com medição micrométrica de verniz sem custo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-lg bg-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#080a0e] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-[#d4af37]/20"
            >
              Simular Orçamento Express
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-slate-700 bg-slate-800/80 text-xs font-semibold text-white hover:border-[#d4af37]/50 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366] fill-current" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Bio with official illuminated logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative overflow-hidden rounded-xl border border-[#d4af37]/50 bg-[#0d1017] p-1.5 shadow-xl shadow-[#d4af37]/20 group">
                {/* Radiant light halo */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#d4af37]/30 via-[#f5d77f]/20 to-[#d4af37]/30 blur-sm opacity-80 animate-pulse" />

                <img
                  src="https://res.cloudinary.com/hd1sahto/image/upload/v1793920949/WhatsApp_Image_2026-11-05_at_8.08.15_PM_2.jpg"
                  alt="Logo Oficial Marques Estética Automotiva"
                  referrerPolicy="no-referrer"
                  className="relative h-12 w-12 object-contain rounded-lg filter drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]"
                />

                {/* Moving light beam */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
                  <div className="h-full w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-85 animate-shine-sweep" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white">MARQUES</span>
                <span className="text-[10px] tracking-widest uppercase text-[#d4af37] font-semibold">
                  Estética Automotiva Premium
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Referência em proteção contra pedriscos (PPF), nanotecnologia cerâmica 9H, correção cirúrgica de
              pintura e detalhamento boutique para veículos esportivos e de luxo.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-colors"
                aria-label="Instagram Marques Estética Automotiva"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
                aria-label="WhatsApp Marques Estética Automotiva"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Especialidades</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  PPF (Paint Protection Film TPU)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Vitrificação Cerâmica & Grafeno 9H
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Correção de Verniz & Polimento Técnico
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Detalhamento & Higienização Interna
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                  Proteção Cerâmica de Rodas & Pinças
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Horário de Atendimento</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Segunda a Sexta</span>
                  <span>08:00 às 18:30</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Sábados</span>
                  <span>08:30 às 13:00 (Apenas com agendamento prévio)</span>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Domingos e Feriados: Fechado
              </div>
            </div>
          </div>

          {/* Col 4: Studio Location & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Estúdio & Contato</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  Av. das Américas, 1850 — Barra da Tijuca / São Paulo Hub
                  <br />
                  <span className="text-[11px] text-[#e5c05b]">Vagas privativas com segurança 24h</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d4af37] shrink-0" />
                <span className="font-mono text-white">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#d4af37] shrink-0" />
                <span>contato@marquesestetica.com.br</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#e5c05b] hover:text-[#d4af37]"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright without mechanical clutter */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Marques Estética Automotiva. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="#servicos" className="hover:text-slate-300">
              Termos de Garantia
            </a>
            <a href="#estudio" className="hover:text-slate-300">
              Manual de Cuidados
            </a>
            <a href="#comparativo" className="hover:text-slate-300">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
