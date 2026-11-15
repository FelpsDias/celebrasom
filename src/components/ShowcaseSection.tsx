import { useState } from 'react';
import { ExternalLink, Instagram, Maximize2, Music, Play } from 'lucide-react';
import {
  BAND_CONFIG,
  GALLERY_PHOTOS,
  GalleryPhotoItem,
  VIDEO_REELS,
  VideoReelItem,
} from '../data/bandData';

interface ShowcaseSectionProps {
  onSelectVideo: (video: VideoReelItem) => void;
  onSelectPhoto: (photo: GalleryPhotoItem) => void;
}

export function ShowcaseSection({ onSelectVideo, onSelectPhoto }: ShowcaseSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="trabalho" className="py-20 md:py-24 bg-[#0B0B0B] border-t border-[#D4AF37]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2">
              Ao Vivo no Palco
            </p>
            <h2
              className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF8F5] font-semibold"
              style={{ textWrap: 'balance' }}
            >
              Veja e Ouça a Celebra Som ao Vivo
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70 max-w-md">
            Toque nos vídeos reais abaixo para assistir e ouvir a sonoridade da banda em apresentação ao vivo.
          </p>
        </div>

        {/* 3 Real Vertical 9:16 Reels Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {VIDEO_REELS.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => onSelectVideo(video)}
              aria-label={`Assistir vídeo real: ${video.title}`}
              className="group relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-[#151515] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D078]"
            >
              {!failedImages[video.id] ? (
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  referrerPolicy="no-referrer"
                  onError={() => markFailed(video.id)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1A1710] to-[#0B0B0B] p-6 text-center">
                  <Music className="w-10 h-10 text-[#D4AF37]/60 mb-3" aria-hidden="true" />
                  <span className="font-serif-editorial text-lg text-[#FAF8F5]">{video.title}</span>
                </div>
              )}

              {/* Scrim for guaranteed legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-[#0B0B0B]/15"
              />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-[#0B0B0B]/75 border border-[#D4AF37] flex items-center justify-center text-[#F3D078] shadow-xl transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B]">
                  <Play className="w-7 h-7 fill-current ml-0.5" aria-hidden="true" />
                </span>
              </div>

              {/* Clean Unboxed Video Metadata */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs text-[#F3D078]/90 mb-1.5 font-medium">
                  <span>{video.moment}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{video.duration}</span>
                </div>
                <h3 className="font-serif-editorial text-xl text-[#FAF8F5] font-semibold leading-snug">
                  {video.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* 4-Column Portrait Photo Gallery (Real All Black Ensemble & Instruments) */}
        <div className="mb-12">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#FAF8F5] font-medium">
              Estética All Black & Bastidores do Evento
            </h3>
            <span className="text-xs text-[#FAF8F5]/60 hidden sm:inline">
              {BAND_CONFIG.formationSummary}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {GALLERY_PHOTOS.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => onSelectPhoto(photo)}
                aria-label={`Ampliar foto: ${photo.title}`}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-[#151515] border border-[#D4AF37]/20 hover:border-[#D4AF37]/70 transition-colors duration-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                {!failedImages[photo.id] ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    onError={() => markFailed(photo.id)}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#151515] p-6">
                    <Music className="w-8 h-8 text-[#D4AF37]/60 mb-2" aria-hidden="true" />
                    <span className="font-serif-editorial text-base text-[#FAF8F5]">{photo.title}</span>
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/20 to-transparent"
                />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0B0B0B]/70 border border-[#D4AF37]/40 flex items-center justify-center text-[#FAF8F5]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h4 className="font-serif-editorial text-base sm:text-lg text-[#FAF8F5] font-semibold leading-snug">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-[#FAF8F5]/75 mt-1 line-clamp-2">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Instagram CTA Below Gallery */}
        <div className="flex justify-center">
          <a
            href={BAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-md border border-[#D4AF37]/60 bg-[#151515] hover:bg-[#D4AF37]/12 hover:border-[#F3D078] text-[#FAF8F5] text-sm sm:text-base font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
            <span>Ver mais vídeos no Instagram {BAND_CONFIG.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]/80 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
