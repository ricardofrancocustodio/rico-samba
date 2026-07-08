/**
 * Catálogo de músicas de Rico Samba.
 *
 * Editar apenas esta lista para adicionar, remover ou atualizar faixas.
 * Os links podem ficar vazios enquanto não houver URL oficial.
 */

export type Song = {
  title: string;
  slug: string;
  description: string;
  /** Trecho curto/frase de destaque da letra (opcional). */
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
    description: 'Canção romântica e afetiva sobre presença, memória e desejo.',
    hook: 'Você é o samba que ficou em mim.',
    cover: '/images/covers/voce.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Doce Amor',
    slug: 'doce-amor',
    description: 'Samba romântico de clima íntimo, com sentimento de paixão e lembrança.',
    hook: 'Doce amor que me embala devagar.',
    cover: '/images/covers/doce-amor.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Armadilhas do Amor',
    slug: 'armadilhas-do-amor',
    description: 'Música sobre os conflitos, ilusões e jogos emocionais de uma relação.',
    hook: 'Caí de novo nas armadilhas do amor.',
    cover: '/images/covers/armadilhas-do-amor.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Mais Você',
    slug: 'mais-voce',
    description: 'Canção sobre escolha, dependência afetiva e medo de perder quem se ama.',
    hook: 'Eu sou mais você.',
    cover: '/images/covers/mais-voce.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Amor e Razão',
    slug: 'amor-e-razao',
    description: 'Faixa sobre o embate entre sentimento e lucidez.',
    hook: 'Amor e razão nem sempre caminham juntos.',
    cover: '/images/covers/amor-e-razao.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Fala na Cara',
    slug: 'fala-na-cara',
    description: 'Samba com atitude sobre sinceridade, coragem e fim de joguinhos emocionais.',
    hook: 'Se é pra doer, fala na cara.',
    cover: '/images/covers/fala-na-cara.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Brigas',
    slug: 'brigas',
    description: 'Música sobre desgaste, orgulho e conflitos dentro de uma relação.',
    hook: 'Nossas brigas cansaram o amor.',
    cover: '/images/covers/brigas.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Saudade',
    slug: 'saudade',
    description: 'Canção sobre aceitar o fim, sentir falta e decidir não procurar mais.',
    hook: 'Eu vou morrer de saudade, mas não vou mais te procurar.',
    cover: '/images/covers/saudade.svg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
];
