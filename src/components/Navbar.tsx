import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export function Navbar({ onQuoteClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0B0B0B]/88 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#inicio"
          className="font-serif-editorial text-lg sm:text-xl tracking-wide text-[#FAF8F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
        >
          <span className="font-semibold tracking-[0.14em] uppercase">Celebra</span>{' '}
          <span className="italic font-medium text-[#D4AF37]">Som</span>
        </a>

        {/* Zone 2: 3 Concise Navigation Links (Desktop) */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FAF8F5]/80"
        >
          <a
            href="#trabalho"
            className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37] hover:text-[#F3D078] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            Nosso Trabalho
          </a>
          <a
            href="#servicos"
            className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37] hover:text-[#F3D078] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            Serviços
          </a>
          <a
            href="#orcamento"
            className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37] hover:text-[#F3D078] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            Orçamento
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onQuoteClick}
            className="gold-gradient-bg text-[#0B0B0B] font-semibold text-xs sm:text-sm px-4 py-2 rounded-md whitespace-nowrap shrink-0 hover:brightness-105 active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D078] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
          >
            Pedir Orçamento
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#FAF8F5] hover:text-[#D4AF37] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu móvel"
          className="md:hidden bg-[#151515] border-t border-[#D4AF37]/20 px-4 py-4 flex flex-col gap-3"
        >
          <a
            href="#trabalho"
            onClick={handleLinkClick}
            className="py-2 text-sm font-medium text-[#FAF8F5]/90 hover:text-[#F3D078] border-b border-white/5"
          >
            Nosso Trabalho
          </a>
          <a
            href="#servicos"
            onClick={handleLinkClick}
            className="py-2 text-sm font-medium text-[#FAF8F5]/90 hover:text-[#F3D078] border-b border-white/5"
          >
            Serviços
          </a>
          <a
            href="#orcamento"
            onClick={handleLinkClick}
            className="py-2 text-sm font-medium text-[#FAF8F5]/90 hover:text-[#F3D078]"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
