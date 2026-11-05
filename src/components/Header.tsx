import React, { useState } from 'react';
import { Shield, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'PPF vs Vitrificação', href: '#comparativo' },
    { label: 'Antes & Depois', href: '#antes-depois' },
    { label: 'Vitrine', href: '#portfolio' },
    { label: 'Orçamentos', href: '#orcamentos' },
    { label: 'Estrutura', href: '#estudio' },
    { label: 'Avaliações', href: '#depoimentos' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#080a0e]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark & Official Logo with light reflection */}
        <a href="#" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative overflow-hidden rounded-xl border border-[#d4af37]/40 bg-[#0d1017] p-1 shadow-lg shadow-[#d4af37]/15 transition-all duration-300 group-hover:border-[#e5c05b] group-hover:shadow-[#d4af37]/35">
            {/* Ambient golden glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 via-transparent to-[#e5c05b]/25 opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Logo Image */}
            <img
              src="https://res.cloudinary.com/hd1sahto/image/upload/v1793920949/WhatsApp_Image_2026-11-05_at_8.08.15_PM_2.jpg"
              alt="Logo Marques Estética Automotiva"
              referrerPolicy="no-referrer"
              className="relative h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-lg filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform"
            />

            {/* Specular Light Sweep / Shine Beam */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
              <div className="h-full w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-90 animate-shine-sweep" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-wider text-white group-hover:text-[#e5c05b] transition-colors">
                MARQUES
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/15 px-1.5 py-0.5 rounded border border-[#d4af37]/30">
                STUDIO
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
              Estética Automotiva Premium
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean single line) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-[#d4af37] text-xs uppercase tracking-wider font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5c05b] to-[#c59b27] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080a0e] shadow-md shadow-[#d4af37]/20 transition-all hover:brightness-110 active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 fill-current stroke-1" />
            <span>Orçamento WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden items-center justify-center p-2 text-slate-300 hover:text-white"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0d1017] px-5 py-4 transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-medium text-slate-200 hover:text-[#d4af37] border-b border-slate-800/40"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#d4af37] py-3 text-xs font-bold uppercase tracking-wider text-[#080a0e]"
              >
                <MessageCircle className="h-4 w-4 fill-current stroke-1" />
                <span>Simular Orçamento via WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
