import { useState } from 'react';
import { ArrowDown, MessageCircle, Music, Play } from 'lucide-react';
import { BAND_CONFIG, HERO_IMAGE } from '../data/bandData';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export function HeroSection({ onRequestQuote }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Subtle warm radial glow behind the stage frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[520px] h-[520px] rounded-full bg-[#D4AF37]/8 blur-3xl"
      />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Slogan, Value Proposition & Dual CTAs */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#D4AF37] font-medium mb-4">
              {BAND_CONFIG.name} · {BAND_CONFIG.cityRegion}
            </p>

            <h1
              className="font-slogan text-5xl sm:text-6xl md:text-7xl leading-[1.12] text-[#FAF8F5] mb-6"
              style={{ textWrap: 'balance' }}
            >
              {BAND_CONFIG.slogan}
            </h1>

            <p className="text-base sm:text-lg text-[#FAF8F5]/82 leading-relaxed max-w-2xl mb-8 font-normal">
              Música ao vivo com formação completa (Sax, Teclado, Guitarra, Baixo e Bateria) para
              Casamentos, Eventos Corporativos, Aniversários e Backing Band.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-9">
              <button
                type="button"
                onClick={onRequestQuote}
                className="gold-gradient-bg text-[#0B0B0B] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-md inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 hover:brightness-105 active:scale-[0.99] transition-all duration-150 cursor-pointer shadow-lg shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D078]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Solicitar Orçamento Rápido</span>
              </button>

              <a
                href="#trabalho"
                className="border border-[#D4AF37]/80 text-[#FAF8F5] hover:bg-[#D4AF37]/12 hover:border-[#F3D078] font-medium text-sm sm:text-base px-7 py-3.5 rounded-md inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] shrink-0" aria-hidden="true" />
                <span>Ver Banda ao Vivo</span>
              </a>
            </div>

            {/* Unboxed Lineup Metadata Strip */}
            <div className="pt-5 border-t border-[#D4AF37]/25 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#FAF8F5]/75">
              <span className="text-[#F3D078] font-medium">{BAND_CONFIG.visualStandard}</span>
              <span aria-hidden="true" className="text-[#D4AF37]/60">
                ·
              </span>
              <span>{BAND_CONFIG.formationSummary}</span>
              <a
                href="#trabalho"
                className="hidden sm:inline-flex items-center gap-1 ml-auto text-xs text-[#D4AF37] hover:text-[#F3D078] transition-colors"
              >
                <span>Assistir vídeos</span>
                <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Real Band Live Performance Portrait Frame */}
          <div className="lg:col-span-5">
            <a
              href="#trabalho"
              aria-label="Ver vídeos e fotos da Celebra Som ao vivo"
              className="group block relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden bg-[#151515] border border-[#D4AF37]/35 shadow-2xl shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D078]"
            >
              {!imageError ? (
                <img
                  src={HERO_IMAGE}
                  alt="Banda Celebra Som tocando ao vivo ao ar livre com bateria, baixo, saxofone e teclado"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1710] to-[#0B0B0B] p-6 text-center">
                  <Music className="w-12 h-12 text-[#D4AF37]/60 mb-3" aria-hidden="true" />
                  <span className="font-serif-editorial text-xl text-[#FAF8F5]">Celebra Som ao Vivo</span>
                </div>
              )}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-medium mb-1">
                    Registro Real ao Vivo
                  </p>
                  <p className="font-serif-editorial text-lg sm:text-xl text-[#FAF8F5] font-semibold">
                    Banda Completa em Cena
                  </p>
                </div>

                <span className="w-11 h-11 rounded-full bg-[#0B0B0B]/80 border border-[#D4AF37] flex items-center justify-center text-[#F3D078] shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B]">
                  <Play className="w-4 h-4 fill-current ml-0.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
