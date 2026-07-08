/**
 * Links oficiais de Rico Samba.
 *
 * Todos os links de plataformas ficam centralizados aqui para facilitar a
 * manutenção. Basta preencher a URL quando ela estiver disponível.
 *
 * TODO: inserir os links oficiais definitivos assim que liberados nas plataformas.
 */

export type SocialLinks = {
  spotify: string;
  youtube: string;
  youtubeMusic: string;
  appleMusic: string;
  deezer: string;
  amazonMusic: string;
  instagram: string;
  tiktok: string;
  kwai: string;
  /** Perfil oficial no Palco MP3. */
  palcoMp3: string;
  /** Perfil oficial no Letras.mus.br. */
  letrasMusBr: string;
  /** Link agregador principal (ex.: linktr.ee / smart link) usado no "Ouvir agora". */
  smartLink: string;
  /** E-mail geral para contato do público. */
  email: string;
  /** E-mail dedicado a contratação e imprensa (pode ser o mesmo do público). */
  emailPro: string;
  /** WhatsApp comercial apenas com dígitos e DDI (ex.: 5511999999999). */
  whatsapp: string;
};

export const socialLinks: SocialLinks = {
  spotify: 'https://open.spotify.com/intl-pt/artist/0JQziV8OZE3o9UhFNSIqD2?si=magMxjZhQHq5NrtVu_YUqw',
  youtube: 'https://www.youtube.com/@ricosamba',
  youtubeMusic: 'https://music.youtube.com/channel/UCDpMY4r6Yromar1WE9Ow8uA?si=-uNAqFf6RDs4NYSj',
  appleMusic: 'https://music.apple.com/us/artist/rico-samba/6778815211',
  deezer: 'https://www.deezer.com/br/artist/348248491',
  amazonMusic: 'https://music.amazon.com.br/artists/B0FT1N5QYC/rico-samba?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=BR&ref=dm_sh_0K2XPkqpIellhJuGin7hNLgKj',
  instagram: '',
  tiktok: '',
  kwai: '',
  palcoMp3: '',
  letrasMusBr: '',
  smartLink: '',
  email: '',
  emailPro: '',
  whatsapp: '',
};

/**
 * Retorna a URL informada ou "#" como fallback seguro enquanto o link
 * definitivo não estiver cadastrado.
 */
export function safeLink(url: string): string {
  return url && url.trim().length > 0 ? url : '#';
}

/**
 * Indica se um link já foi configurado (usado para desabilitar botões vazios).
 */
export function hasLink(url: string): boolean {
  return Boolean(url && url.trim().length > 0);
}

/**
 * Monta o link de conversa do WhatsApp a partir do número em `whatsapp`.
 * Retorna string vazia quando não há número cadastrado.
 */
export function whatsappLink(message?: string): string {
  const digits = socialLinks.whatsapp.replace(/\D/g, '');
  if (!digits) return '';
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}
