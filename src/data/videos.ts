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
  label: string;
};

export const videos: Video[] = [
  {
    title: 'Você',
    youtubeId: '',
    poster: '/images/covers/voce.svg',
    label: 'Lyric video',
  },
  {
    title: 'Doce Amor',
    youtubeId: '',
    poster: '/images/covers/doce-amor.svg',
    label: 'Lyric video',
  },
  {
    title: 'Armadilhas do Amor',
    youtubeId: '',
    poster: '/images/covers/armadilhas-do-amor.svg',
    label: 'Lyric video',
  },
  {
    title: 'Mais Você',
    youtubeId: '',
    poster: '/images/covers/mais-voce.svg',
    label: 'Lyric video',
  },
  {
    title: 'Amor e Razão',
    youtubeId: '',
    poster: '/images/covers/amor-e-razao.svg',
    label: 'Lyric video',
  },
  {
    title: 'Fala na Cara',
    youtubeId: '',
    poster: '/images/covers/fala-na-cara.svg',
    label: 'Lyric video',
  },
  {
    title: 'Brigas',
    youtubeId: '',
    poster: '/images/covers/brigas.svg',
    label: 'Lyric video',
  },
  {
    title: 'Saudade',
    youtubeId: '',
    poster: '/images/covers/saudade.svg',
    label: 'Lyric video',
  },
];
