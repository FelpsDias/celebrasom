import { Instagram, MessageCircle } from 'lucide-react';
import { BAND_CONFIG, buildWhatsAppUrl } from '../data/bandData';

export function Footer() {
  const quickWhatsAppHref = buildWhatsAppUrl(
    'Olá Celebra Som! Vim pelo site e gostaria de conversar sobre um evento.'
  );

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D4AF37]/20 py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a
            href="#inicio"
            className="font-serif-editorial text-xl tracking-wide text-[#FAF8F5] inline-block"
          >
            <span className="font-semibold tracking-[0.14em] uppercase">Celebra</span>{' '}
            <span className="italic font-medium text-[#D4AF37]">Som</span>
          </a>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/65 mt-1.5">
            {BAND_CONFIG.cityRegion} · {BAND_CONFIG.formationSummary}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={BAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#D4AF37]/40 text-xs sm:text-sm font-medium text-[#FAF8F5] hover:border-[#F3D078] hover:text-[#F3D078] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            <span>{BAND_CONFIG.instagramHandle}</span>
          </a>

          <a
            href={quickWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md gold-gradient-bg text-[#0B0B0B] text-xs sm:text-sm font-semibold hover:brightness-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>WhatsApp Direto</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#FAF8F5]/45">
        <p>© {new Date().getFullYear()} {BAND_CONFIG.name}. Todos os direitos reservados.</p>
        <p className="font-slogan text-lg text-[#D4AF37]/80">{BAND_CONFIG.slogan}</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsAppButton() {
  const quickWhatsAppHref = buildWhatsAppUrl(
    'Olá Celebra Som! Vim pelo site e gostaria de verificar disponibilidade e orçamento.'
  );

  return (
    <a
      href={quickWhatsAppHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Celebra Som no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-[#0B0B0B] shadow-xl shadow-black/50 border border-white/25 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D078]"
    >
      {/* Official WhatsApp glyph */}
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6 sm:w-7 sm:h-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.31.61 4.56 1.76 6.55L3 29l6.63-1.73A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm7.58 18.43c-.32.9-1.88 1.72-2.59 1.83-.67.1-1.52.14-2.45-.15-.57-.18-1.3-.42-2.23-.82-3.92-1.69-6.48-5.64-6.68-5.9-.2-.26-1.6-2.13-1.6-4.06 0-1.93 1.01-2.88 1.37-3.27.36-.39.78-.49 1.04-.49.26 0 .52 0 .75.01.24.01.56-.09.88.67.32.77 1.1 2.68 1.2 2.88.1.2.16.43.03.69-.13.26-.2.43-.39.66-.2.23-.41.52-.59.7-.2.2-.4.42-.17.81.23.39 1.02 1.68 2.19 2.72 1.51 1.34 2.78 1.76 3.17 1.96.39.2.62.17.85-.1.23-.26.98-1.14 1.24-1.53.26-.39.52-.33.88-.2.36.13 2.28 1.08 2.67 1.27.39.2.65.29.75.46.1.16.1.95-.22 1.85z" />
      </svg>
    </a>
  );
}
