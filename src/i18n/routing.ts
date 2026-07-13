import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Idiomas suportados: português (padrão) e inglês.
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  // PT fica na raiz ("/"), EN em "/en". Só o idioma não-padrão recebe prefixo.
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
