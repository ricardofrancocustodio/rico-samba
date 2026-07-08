/**
 * Conteúdo estruturado do EPK (Electronic Press Kit) de Rico Samba.
 * Toda a parte profissional lê deste arquivo — basta editar aqui.
 */

/** Bio curta para contratantes, imprensa e produtores copiarem. */
export const shortBio =
  'Rico Samba é um projeto de samba autoral que mistura samba, bossa, choro, pagode moderno e MPB brasileira. Com letras sobre amor, saudade, encontros e despedidas, o artista apresenta um repertório afetivo e popular, com identidade brasileira e linguagem contemporânea.';

/** Bio completa: proposta musical, repertório e o disco Jeito de Sambar. */
export const longBio = [
  'Rico Samba é um projeto de música brasileira autoral nascido da vontade de criar um samba atual, romântico e afetivo, que conversa com o público de hoje sem perder a raiz. A sonoridade combina samba, bossa, choro, pagode moderno e MPB, sempre com o balanço da roda como ponto de partida.',
  'As letras falam de relacionamentos: amor, saudade, desejo, brigas, reconciliação, orgulho e recomeço. São histórias diretas e sentimentais, feitas para cantar, lembrar e compartilhar — do clima intimista de um violão à energia de uma roda de samba.',
  'O repertório autoral reúne canções como “Você”, “Doce Amor”, “Armadilhas do Amor”, “Mais Você”, “Amor e Razão”, “Fala na Cara”, “Brigas” e “Saudade”, todas parte do projeto Jeito de Sambar, um trabalho que reúne encontros e despedidas em um samba moderno, íntimo e brasileiro.',
  'Mais do que músicas, Rico Samba propõe uma experiência: a de reconhecer, em cada canção, um pedaço da própria história. Todo mundo tem um jeito próprio de sambar.',
] as const;

export type Release = {
  id: string;
  title: string;
  /** Texto pronto para copiar/colar em imprensa e agenda cultural. */
  text: string;
};

export const releases: Release[] = [
  {
    id: 'artista',
    title: 'Release do artista',
    text: 'Rico Samba é um projeto de samba autoral que mistura samba, bossa, choro, pagode moderno e MPB brasileira. Com letras sobre amor, saudade, encontros e despedidas, apresenta um repertório afetivo e popular, com identidade brasileira e linguagem contemporânea. O projeto transforma histórias de relacionamento em canções feitas para cantar, lembrar e compartilhar.',
  },
  {
    id: 'album',
    title: 'Release do álbum “Jeito de Sambar”',
    text: 'Com o projeto Jeito de Sambar, Rico Samba apresenta um repertório autoral que une romantismo, brasilidade e sonoridade contemporânea. As músicas falam de relacionamentos, despedidas, brigas, saudade e desejo, sempre com o balanço do samba como ponto de partida. Um trabalho íntimo e brasileiro, feito para quem vive a música como memória, roda e sentimento.',
  },
  {
    id: 'single',
    title: 'Release do single atual',
    text: 'Rico Samba apresenta seu novo single, mais um capítulo do projeto Jeito de Sambar. A faixa reúne a sensibilidade das letras românticas do artista ao balanço do samba moderno, em uma canção sobre amor, saudade e recomeço. Disponível nas principais plataformas de música.',
  },
  {
    id: 'curto',
    title: 'Release curto (Instagram / agenda cultural)',
    text: 'Rico Samba — samba autoral que mistura bossa, choro, pagode moderno e MPB, com letras sobre amor, saudade e recomeço. Projeto Jeito de Sambar.',
  },
];

export type ShowFormat = {
  title: string;
  description: string;
  /** Contexto ideal de contratação. */
  ideal: string;
};

export const showFormats: ShowFormat[] = [
  {
    title: 'Voz e Violão',
    description:
      'Formato intimista com voz e violão, focado no repertório autoral e em clássicos do samba, bossa e MPB.',
    ideal: 'Bares, restaurantes, eventos privados, recepções e ambientes menores.',
  },
  {
    title: 'Samba / Bossa / Pagode Moderno',
    description:
      'Apresentação com acompanhamento ou banda reduzida, unindo repertório autoral e o balanço do samba moderno.',
    ideal: 'Casas de show, eventos culturais e festas com dança.',
  },
  {
    title: 'Roda Rico Samba',
    description:
      'Formato animado em roda, com repertório autoral somado a clássicos do samba, pagode e MPB para o público cantar junto.',
    ideal: 'Rodas de samba, eventos ao ar livre e confraternizações.',
  },
  {
    title: 'Pocket Show',
    description:
      'Apresentação curta e versátil, adaptável ao tempo e ao espaço do evento.',
    ideal: 'Eventos corporativos, lançamentos, confraternizações e eventos culturais.',
  },
];

export type Rider = {
  title: string;
  items: string[];
};

export const riders: Rider[] = [
  {
    title: 'Rider — Voz e Violão',
    items: [
      '1 microfone vocal com pedestal',
      '1 entrada (DI) para violão',
      '1 monitor de retorno',
      'PA adequado ao ambiente',
      'Tomada de energia próxima ao palco',
      'Banco ou cadeira sem braços, se necessário',
    ],
  },
  {
    title: 'Rider — Banda reduzida',
    items: [
      '1 microfone vocal com pedestal',
      '1 entrada para violão / cavaco',
      'Microfonação de percussão (pandeiro, surdo, tantã)',
      '1 canal para baixo, se houver',
      'Monitores de retorno para cada músico',
      'Mesa de som e PA compatíveis com o público',
      'Mapa de palco enviado previamente',
    ],
  },
];

/**
 * Downloads oficiais. Preencha `href` quando o arquivo estiver disponível.
 * Itens sem `href` aparecem como "em breve".
 */
export type DownloadItem = {
  label: string;
  description: string;
  href: string;
};

export const downloads: DownloadItem[] = [
  {
    label: 'EPK completo (PDF)',
    description: 'Apresentação profissional em um único arquivo.',
    href: '',
  },
  {
    label: 'Fotos oficiais',
    description: 'Imagens em alta resolução para divulgação.',
    href: '',
  },
  {
    label: 'Logo Rico Samba',
    description: 'Versão em SVG com fundo transparente.',
    href: '/downloads/rico-samba-logo.svg',
  },
  {
    label: 'Rider técnico',
    description: 'Especificações por formato de show.',
    href: '',
  },
  {
    label: 'Release oficial',
    description: 'Textos prontos para imprensa.',
    href: '',
  },
];

/** Fotos oficiais para divulgação (proporções variadas). */
export type PressPhoto = {
  src: string;
  alt: string;
  ratio: 'landscape' | 'portrait' | 'square';
};

export const pressPhotos: PressPhoto[] = [
  {
    src: '/images/artist/rico-samba-hero.svg',
    alt: 'Rico Samba em ambiente de palco — foto horizontal',
    ratio: 'landscape',
  },
  {
    src: '/images/artist/rico-samba-sobre.svg',
    alt: 'Rico Samba com violão — foto vertical',
    ratio: 'portrait',
  },
  {
    src: '/images/covers/jeito-de-sambar.svg',
    alt: 'Arte do projeto Jeito de Sambar — foto quadrada',
    ratio: 'square',
  },
];
