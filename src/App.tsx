import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { ServicesSection } from './components/ServicesSection';
import { QuoteSection } from './components/QuoteSection';
import { FloatingWhatsAppButton, Footer } from './components/Footer';
import { PhotoModal, VideoModal } from './components/MediaModals';
import { EventTypeOption, GalleryPhotoItem, VideoReelItem } from './data/bandData';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoReelItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhotoItem | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<EventTypeOption>(
    'Casamento (Cerimônia & Festa)'
  );
  const [preselectedNote, setPreselectedNote] = useState('');

  const scrollToQuote = () => {
    const el = document.getElementById('orcamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (eventType: EventTypeOption) => {
    setSelectedEventType(eventType);
    scrollToQuote();
  };

  const handleQuoteFromVideo = (videoTitle: string) => {
    setPreselectedNote(`Gostei do vídeo "${videoTitle}" e quero saber mais sobre este formato.`);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FAF8F5]">
      <Navbar onQuoteClick={scrollToQuote} />

      <main>
        <HeroSection onRequestQuote={scrollToQuote} />

        <ShowcaseSection
          onSelectVideo={setSelectedVideo}
          onSelectPhoto={setSelectedPhoto}
        />

        <ServicesSection onSelectService={handleSelectServiceForQuote} />

        <QuoteSection
          preselectedEventType={selectedEventType}
          preselectedNote={preselectedNote}
        />
      </main>

      <Footer />

      <FloatingWhatsAppButton />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onRequestQuote={handleQuoteFromVideo}
      />

      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}
