'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

/**
 * Seletor de idioma (PT / EN). Mantém a rota atual e apenas troca o locale,
 * usando a navegação com reconhecimento de locale do next-intl.
 */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('meta');

  function switchTo(next: string) {
    if (next === locale) return;
    // `pathname` já vem sem o prefixo de locale; o router reaplica o correto.
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label={t('switchLabel')}
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
              active
                ? 'bg-dourado text-grafite'
                : 'text-creme/70 hover:text-creme'
            }`}
          >
            {loc === 'pt' ? 'PT' : 'EN'}
          </button>
        );
      })}
    </div>
  );
}
