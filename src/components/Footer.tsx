import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Logo } from '@/components/Logo';
import { streamingPlatforms, socialPlatforms, externalPlatforms } from '@/data/platforms';
import { safeLink, hasLink } from '@/data/links';
import { AiDisclaimerButton } from '@/components/AiDisclaimerModal';

const navKeys = [
  { key: 'inicio', href: '/#inicio' },
  { key: 'lancamentos', href: '/#lancamentos' },
  { key: 'videos', href: '/#videos' },
  { key: 'sobre', href: '/#sobre' },
  { key: 'epk', href: '/epk' },
  { key: 'contato', href: '/#contato' },
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const year = new Date().getFullYear();
  const platforms = [...socialPlatforms, ...streamingPlatforms, ...externalPlatforms].filter(
    (platform, index, list) => list.findIndex((p) => p.name === platform.name) === index,
  );

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-creme/60">
              {t('description')}
            </p>
          </div>

          <nav aria-label={t('navAria')}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-creme/50">
              {t('navHeading')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navKeys.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-creme/70 transition-colors hover:text-dourado"
                  >
                    {tn(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-creme/50">
              {t('followHeading')}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {platforms.map((platform) => {
                const active = hasLink(platform.url);
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={safeLink(platform.url)}
                    target={active ? '_blank' : undefined}
                    rel={active ? 'noopener noreferrer' : undefined}
                    aria-disabled={!active}
                    aria-label={platform.name}
                    title={platform.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-creme transition-all duration-300 ${
                      active
                        ? 'hover:-translate-y-0.5 hover:border-dourado/40 hover:text-dourado'
                        : 'cursor-default opacity-40'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-creme/50">
            {t('rights', { year })}
          </p>
          <div className="flex flex-col items-center gap-1.5 sm:items-end">
            <p className="text-xs text-creme/40">
              {t('aiNotice')}
            </p>
            <AiDisclaimerButton />
          </div>
          <p className="text-xs text-creme/40">
            {t.rich('madeIn', {
              heart: () => <span className="text-dourado">♪</span>,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
