/**
 * Estrutura do EPK (Electronic Press Kit) de Rico Samba.
 *
 * Aqui ficam apenas os dados NÃO traduzíveis (ids, links, imagens e proporções).
 * Todo o texto (bios, releases, formatos, riders, downloads, fotos) vive nos
 * arquivos de mensagens `messages/pt.json` e `messages/en.json`, indexado por
 * estes mesmos ids.
 */

/** Ordem dos releases prontos para imprensa (texto em messages: epk.releaseItems.<id>). */
export const releaseIds = ['artista', 'album', 'single', 'curto'] as const;

/** Ordem dos formatos de show (texto em messages: epk.showFormats.<id>). */
export const showFormatIds = [
  'voz-violao',
  'samba-bossa-pagode',
  'roda',
  'pocket',
] as const;
export type ShowFormatId = (typeof showFormatIds)[number];

/** Ordem dos riders técnicos (texto em messages: epk.riders.<id>). */
export const riderIds = ['voz-violao', 'banda-reduzida'] as const;

/**
 * Downloads oficiais. Preencha `href` quando o arquivo estiver disponível.
 * Itens sem `href` aparecem como "em breve". Texto em messages: epk.downloadItems.<id>.
 */
export type DownloadItem = {
  id: string;
  href: string;
};

export const downloads: DownloadItem[] = [
  { id: 'epk-pdf', href: '' },
  { id: 'fotos', href: '' },
  { id: 'logo', href: '/downloads/rico-samba-logo.svg' },
  { id: 'rider', href: '' },
  { id: 'release', href: '' },
];

/** Fotos oficiais para divulgação. Texto (alt) em messages: epk.pressPhotos.<id>. */
export type PressPhoto = {
  id: string;
  src: string;
  ratio: 'landscape' | 'portrait' | 'square';
};

export const pressPhotos: PressPhoto[] = [
  { id: 'hero', src: '/images/artist/rico-samba-hero.svg', ratio: 'landscape' },
  { id: 'sobre', src: '/images/artist/rico-samba-sobre.svg', ratio: 'portrait' },
  { id: 'capa', src: '/images/covers/jeito-de-sambar.svg', ratio: 'square' },
];
