import { useEffect } from 'react';
import { ExternalLink, Instagram, MessageCircle, X } from 'lucide-react';
import { BAND_CONFIG, GalleryPhotoItem, VideoReelItem } from '../data/bandData';

interface VideoModalProps {
  video: VideoReelItem | null;
  onClose: () => void;
  onRequestQuote: (momentLabel: string) => void;
}

export function VideoModal({ video, onClose, onRequestQuote }: VideoModalProps) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const isMp4 = video.videoUrl.trim().toLowerCase().endsWith('.mp4');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/92 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#151515] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#D4AF37]/20 bg-[#0B0B0B]">
          <div>
            <p className="text-xs text-[#D4AF37] font-medium">
              {video.moment} · {video.duration}
            </p>
            <h3 id="video-modal-title" className="font-serif-editorial text-lg text-[#FAF8F5] font-semibold">
              {video.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#FAF8F5] hover:text-[#F3D078] hover:border-[#D4AF37] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real Video Player Viewport */}
        <div className="relative aspect-[9/16] max-h-[68vh] w-full bg-[#0B0B0B] flex items-center justify-center overflow-hidden">
          {isMp4 ? (
            <video
              key={video.id}
              src={video.videoUrl}
              poster={video.thumbnail}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-[#0B0B0B]"
            />
          ) : (
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Footer Actions inside Modal */}
        <div className="p-4 bg-[#0B0B0B] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-2.5">
          <a
            href={video.instagramReelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#D4AF37]/60 text-[#FAF8F5] hover:bg-[#D4AF37]/10 text-xs font-semibold transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            <span>Ver no {BAND_CONFIG.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-75" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote(video.title);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md gold-gradient-bg text-[#0B0B0B] text-xs font-semibold hover:brightness-105 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Cotar este estilo</span>
          </button>
        </div>
      </div>
    </div>
  );
}

interface PhotoModalProps {
  photo: GalleryPhotoItem | null;
  onClose: () => void;
}

export function PhotoModal({ photo, onClose }: PhotoModalProps) {
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/92 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#151515] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#D4AF37]/20 bg-[#0B0B0B]">
          <div>
            <h3 id="photo-modal-title" className="font-serif-editorial text-lg text-[#FAF8F5] font-semibold">
              {photo.title}
            </h3>
            <p className="text-xs text-[#FAF8F5]/70">{photo.caption}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar foto ampliada"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#FAF8F5] hover:text-[#F3D078] hover:border-[#D4AF37] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#0B0B0B] p-2">
          <img
            src={photo.src}
            alt={photo.alt}
            referrerPolicy="no-referrer"
            className="w-full max-h-[75vh] object-contain mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
