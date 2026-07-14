/**
 * Catálogo de músicas de Rico Samba.
 *
 * Editar apenas esta lista para adicionar, remover ou atualizar faixas.
 * Os links podem ficar vazios enquanto não houver URL oficial.
 */

export type Song = {
  /** Título da música — permanece em português (nome próprio da faixa). */
  title: string;
  /** Chave usada para buscar a descrição traduzida em messages: songs.<slug>. */
  slug: string;
  /** Trecho curto/frase de destaque da letra (opcional) — permanece em português. */
  hook?: string;
  cover: string;
  spotifyUrl: string;
  youtubeUrl: string;
  lyricVideoUrl: string;
};

export const songs: Song[] = [
  {
    title: 'Você',
    slug: 'voce',
    hook: 'Você é o samba que ficou em mim.',
    cover: '/images/covers/voce.png',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Doce Amor',
    slug: 'doce-amor',
    hook: 'Doce amor que me embala devagar.',
    cover: '/images/covers/doce-amor.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/3ujndR31qWNsc2v16Or7CD',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Armadilhas do Amor',
    slug: 'armadilhas-do-amor',
    hook: 'Caí de novo nas armadilhas do amor.',
    cover: '/images/covers/armadilhas-do-amor.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/6aPhYxJsxt3eVY3NQ7M5cI',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Mais Você',
    slug: 'mais-voce',
    hook: 'Eu sou mais você.',
    cover: '/images/covers/mais-voce.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/5Grc7w5G3eK6m1BVWRBrV9',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Amor e Razão',
    slug: 'amor-e-razao',
    hook: 'Amor e razão nem sempre caminham juntos.',
    cover: '/images/covers/amor-e-razao.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/6yzuhE3s3BrlYF1Ey0E4Mb',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Fala na Cara',
    slug: 'fala-na-cara',
    hook: 'Se é pra doer, fala na cara.',
    cover: '/images/covers/fala-na-cara.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/74MrKQf66SGJiXsz4euUDR',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Brigas',
    slug: 'brigas',
    hook: 'Nossas brigas cansaram o amor.',
    cover: '/images/covers/brigas.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/3eqsWZCWWnx1wdPqSQKjah',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Saudade',
    slug: 'saudade',
    hook: 'Eu vou morrer de saudade, mas não vou mais te procurar.',
    cover: '/images/covers/saudade.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/2RxfYb2lphPHlTUEoGewaq',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Bem de Leve',
    slug: 'bem-de-leve',
    hook: '',
    cover: '/images/covers/bem-de-leve.png',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Fatalidades',
    slug: 'fatalidades',
    hook: '',
    cover: '/images/covers/fatalidades.png',
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/1RGP2FrsEFMDba1XPJs1j2',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
];
