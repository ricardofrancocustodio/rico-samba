/**
 * Lyric videos e vídeos de Rico Samba.
 *
 * Para embutir um vídeo do YouTube, preencha `youtubeId` com o ID do vídeo
 * (a parte após `watch?v=`). Enquanto não houver vídeo, o card mostra um
 * estado "em breve" com a arte da faixa correspondente.
 */

export type Video = {
  title: string;
  /** ID do vídeo no YouTube (ex.: "dQw4w9WgXcQ"). Vazio = em breve. */
  youtubeId: string;
  /** Imagem de fallback enquanto o vídeo não estiver publicado. */
  poster: string;
};

export const videos: Video[] = [
  {
    title: 'Você',
    youtubeId: '',
    poster: '/images/covers/voce.svg',
  },
  {
    title: 'Doce Amor',
    youtubeId: '',
    poster: '/images/covers/doce-amor.svg',
  },
  {
    title: 'Armadilhas do Amor',
    youtubeId: '',
    poster: '/images/covers/armadilhas-do-amor.svg',
  },
  {
    title: 'Mais Você',
    youtubeId: '',
    poster: '/images/covers/mais-voce.svg',
  },
  {
    title: 'Amor e Razão',
    youtubeId: '',
    poster: '/images/covers/amor-e-razao.svg',
  },
  {
    title: 'Fala na Cara',
    youtubeId: '',
    poster: '/images/covers/fala-na-cara.svg',
  },
  {
    title: 'Brigas',
    youtubeId: '',
    poster: '/images/covers/brigas.svg',
  },
  {
    title: 'Saudade',
    youtubeId: '',
    poster: '/images/covers/saudade.svg',
  },
];
