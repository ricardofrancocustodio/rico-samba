import type { ComponentType, SVGProps } from 'react';
import { socialLinks } from '@/data/links';
import {
  SpotifyIcon,
  YoutubeIcon,
  YoutubeMusicIcon,
  AppleMusicIcon,
  DeezerIcon,
  AmazonMusicIcon,
  InstagramIcon,
  TiktokIcon,
  KwaiIcon,
  PalcoMp3Icon,
  LetrasIcon,
} from '@/components/icons';

export type Platform = {
  name: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Cor de destaque da marca (usada no hover). */
  brand: string;
};

/** Plataformas de streaming, exibidas na seção "Ouça agora". */
export const streamingPlatforms: Platform[] = [
  { name: 'Spotify', url: socialLinks.spotify, icon: SpotifyIcon, brand: '#1DB954' },
  { name: 'YouTube Music', url: socialLinks.youtubeMusic, icon: YoutubeMusicIcon, brand: '#FF0000' },
  { name: 'YouTube', url: socialLinks.youtube, icon: YoutubeIcon, brand: '#FF0000' },
  { name: 'Apple Music', url: socialLinks.appleMusic, icon: AppleMusicIcon, brand: '#FA57C1' },
  { name: 'Deezer', url: socialLinks.deezer, icon: DeezerIcon, brand: '#A238FF' },
  { name: 'Amazon Music', url: socialLinks.amazonMusic, icon: AmazonMusicIcon, brand: '#25D1DA' },
];

/** Redes sociais, exibidas no footer e no contato. */
export const socialPlatforms: Platform[] = [
  { name: 'Instagram', url: socialLinks.instagram, icon: InstagramIcon, brand: '#E1306C' },
  { name: 'TikTok', url: socialLinks.tiktok, icon: TiktokIcon, brand: '#69C9D0' },
  { name: 'YouTube', url: socialLinks.youtube, icon: YoutubeIcon, brand: '#FF0000' },
  { name: 'Kwai', url: socialLinks.kwai, icon: KwaiIcon, brand: '#FF7300' },
];

/** Presença oficial externa (catálogo, letras e demos). */
export const externalPlatforms: Platform[] = [
  { name: 'Palco MP3', url: socialLinks.palcoMp3, icon: PalcoMp3Icon, brand: '#00A859' },
  { name: 'Letras.mus.br', url: socialLinks.letrasMusBr, icon: LetrasIcon, brand: '#00B4E4' },
];

/** Todas as plataformas de presença digital, usadas no EPK. */
export const allPlatforms: Platform[] = [
  ...streamingPlatforms,
  { name: 'Instagram', url: socialLinks.instagram, icon: InstagramIcon, brand: '#E1306C' },
  { name: 'TikTok', url: socialLinks.tiktok, icon: TiktokIcon, brand: '#69C9D0' },
  { name: 'Kwai', url: socialLinks.kwai, icon: KwaiIcon, brand: '#FF7300' },
  ...externalPlatforms,
];
