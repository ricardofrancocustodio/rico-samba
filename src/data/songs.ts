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
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Armadilhas do Amor',
    slug: 'armadilhas-do-amor',
    hook: 'Caí de novo nas armadilhas do amor.',
    cover: '/images/covers/armadilhas-do-amor.png',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Mais Você',
    slug: 'mais-voce',
    hook: 'Eu sou mais você.',
    cover: '/images/covers/mais-voce.png',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Amor e Razão',
    slug: 'amor-e-razao',
    hook: 'Amor e razão nem sempre caminham juntos.',
    cover: '/images/covers/amor-e-razao.png',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Fala na Cara',
    slug: 'fala-na-cara',
    hook: 'Se é pra doer, fala na cara.',
    cover: '/images/covers/fala-na-cara.png',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Brigas',
    slug: 'brigas',
    hook: 'Nossas brigas cansaram o amor.',
    cover: '/images/covers/brigas.png',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Saudade',
    slug: 'saudade',
    hook: 'Eu vou morrer de saudade, mas não vou mais te procurar.',
    cover: '/images/covers/saudade.png',
    spotifyUrl: '',
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
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
];
