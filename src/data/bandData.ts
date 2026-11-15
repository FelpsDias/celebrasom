export interface VideoReelItem {
  id: string;
  title: string;
  moment: string;
  duration: string;
  thumbnail: string;
  alt: string;
  /**
   * Caminho do vídeo otimizado (.mp4) ou link embed do YouTube/Shorts.
   */
  videoUrl: string;
  instagramReelUrl: string;
}

export interface GalleryPhotoItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  eventOptionValue: EventTypeOption;
  title: string;
  description: string;
  iconName: 'wedding' | 'corporate' | 'party' | 'backing';
}

export type EventTypeOption =
  | 'Casamento (Cerimônia & Festa)'
  | 'Eventos Corporativos'
  | 'Aniversários & Confraternizações'
  | 'Backing Band para Cantores';

/**
 * ============================================================================
 * CONFIGURAÇÕES PRINCIPAIS DA BANDA (EDITE AQUI FACILMENTE)
 * ============================================================================
 */
export const BAND_CONFIG = {
  name: 'Celebra Som',
  slogan: 'Tornando seu momento ainda mais especial',
  // SUBSTITUA PELO WHATSAPP OFICIAL DA BANDA (55 + DDD + Número, somente dígitos)
  whatsappNumber: '5511999999999',
  // SUBSTITUA PELA CIDADE / REGIÃO DE ATUAÇÃO DA BANDA
  cityRegion: 'São Paulo e Região',
  instagramHandle: '@celebrasom.sonhos',
  instagramUrl: 'https://www.instagram.com/celebrasom.sonhos',
  formationSummary: 'Saxofone · Teclado · Guitarra · Baixo · Bateria',
  visualStandard: 'Padrão Visual All Black',
};

/**
 * Foto principal do Hero (Formação completa da banda ao vivo em cerimônia ao ar livre)
 */
export const HERO_IMAGE = '/assets/aistudio/WhatsApp_Image_2026-11-14_at_21.48.44_d77091a6.jpeg';

/**
 * ============================================================================
 * VITRINE DE VÍDEOS REAIS DA BANDA (FORMATO VERTICAL 9:16)
 * Os vídeos .mp4 foram otimizados para carregar rápido em celulares e desktop.
 * ============================================================================
 */
export const VIDEO_REELS: VideoReelItem[] = [
  {
    id: 'vozes-e-banda',
    title: 'Vozes & Banda na Cerimônia',
    moment: 'Cerimônia & Emoção',
    duration: '0:21',
    thumbnail: '/assets/videos/poster_cerimonia.jpg',
    alt: 'Vocalistas e banda Celebra Som tocando ao vivo em cerimônia de casamento ao ar livre',
    videoUrl: '/assets/videos/celebra_som_cerimonia.mp4',
    instagramReelUrl: 'https://www.instagram.com/celebrasom.sonhos',
  },
  {
    id: 'instrumental-ao-vivo',
    title: 'Harmonia, Groove & Sax',
    moment: 'Instrumental ao Vivo',
    duration: '0:35',
    thumbnail: '/assets/videos/poster_instrumental.jpg',
    alt: 'Tecladista, guitarrista, baixista, baterista e saxofonista da Celebra Som em apresentação ao vivo',
    videoUrl: '/assets/videos/celebra_som_instrumental.mp4',
    instagramReelUrl: 'https://www.instagram.com/celebrasom.sonhos',
  },
  {
    id: 'banda-completa-palco',
    title: 'Celebra Som Completa ao Vivo',
    moment: 'Formação All Black',
    duration: '0:30',
    thumbnail: '/assets/videos/poster_banda_completa.jpg',
    alt: 'Apresentação completa da banda Celebra Som tocando ao vivo em jardim de casamento',
    videoUrl: '/assets/videos/celebra_som_banda_completa.mp4',
    instagramReelUrl: 'https://www.instagram.com/celebrasom.sonhos',
  },
];

/**
 * ============================================================================
 * GALERIA DE FOTOS REAIS DA BANDA (PADRÃO ALL BLACK)
 * ============================================================================
 */
export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'saxofone-all-black',
    title: 'Saxofone & Metais',
    caption: 'Brilho e presença marcante na recepção e na cerimônia',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_21.57.56_cde20055.jpeg',
    alt: 'Saxofonista da banda Celebra Som em traje All Black com dois saxofones dourados ao vivo',
  },
  {
    id: 'cerimonia-visao-palco',
    title: 'Cerimônia ao Ar Livre',
    caption: 'Acompanhamento preciso em cada entrada e voto especial',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_21.55.12_acb43077.jpeg',
    alt: 'Visão do palco da Celebra Som durante cerimônia de casamento ao ar livre',
  },
  {
    id: 'teclado-arranjos',
    title: 'Teclado & Direção Musical',
    caption: 'Timbres envolventes e arranjos sob medida para cada momento',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_21.48.33_3fd4744a.jpeg',
    alt: 'Tecladista da Celebra Som tocando ao vivo em ambiente externo',
  },
  {
    id: 'sintonia-all-black',
    title: 'Padrão Visual All Black',
    caption: 'Elegância discreta que valoriza a estética da sua festa',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_21.48.29_836084ef.jpeg',
    alt: 'Tecladista com bateria, guitarra e saxofone ao fundo em evento diurno',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'casamentos',
    eventOptionValue: 'Casamento (Cerimônia & Festa)',
    title: 'Casamentos (Cerimônia & Festa)',
    description:
      'Trilha personalizada do cortejo à pista cheia, com arranjos emocionantes ao vivo e energia contagiante.',
    iconName: 'wedding',
  },
  {
    id: 'corporativos',
    eventOptionValue: 'Eventos Corporativos',
    title: 'Eventos Corporativos',
    description:
      'Musicalidade elegante, repertório versátil e apresentação All Black alinhada ao padrão de grandes marcas.',
    iconName: 'corporate',
  },
  {
    id: 'aniversarios',
    eventOptionValue: 'Aniversários & Confraternizações',
    title: 'Aniversários & Confraternizações',
    description:
      'Celebrações intimistas ou grandes recepções com banda completa para envolver convidados de todas as idades.',
    iconName: 'party',
  },
  {
    id: 'backing-band',
    eventOptionValue: 'Backing Band para Cantores',
    title: 'Backing Band para Cantores',
    description:
      'Cozinha firme, direção musical precisa e músicos experientes prontos para acompanhar artistas e shows.',
    iconName: 'backing',
  },
];

export function buildWhatsAppUrl(message: string): string {
  const sanitizedPhone = BAND_CONFIG.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;
}
