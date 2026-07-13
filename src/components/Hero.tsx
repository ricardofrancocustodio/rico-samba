import { useTranslations } from 'next-intl';
import { PlayIcon, YoutubeIcon, ArrowRightIcon } from '@/components/icons';
import { socialLinks, safeLink, hasLink } from '@/data/links';

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background artwork */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/artist/rico-samba-hero.svg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-70 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grafite via-grafite/80 to-grafite/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-grafite via-grafite/70 to-transparent" />
      </div>

      <div className="container-x relative w-full pt-28 pb-16">
        <div className="max-w-2xl">
          <p className="animate-fade-up section-label" style={{ animationDelay: '0.1s' }}>
            {t('label')}
          </p>

          <h1
            className="animate-fade-up font-display text-5xl font-bold leading-[1.05] text-creme sm:text-7xl md:text-8xl"
            style={{ animationDelay: '0.2s' }}
          >
            Rico <span className="text-gold-gradient">Samba</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-creme/80 sm:text-xl"
            style={{ animationDelay: '0.35s' }}
          >
            {t('subtitle')}
          </p>

          <p
            className="animate-fade-up mt-4 inline-flex items-center gap-2 rounded-full border border-dourado/30 bg-dourado/5 px-4 py-1.5 text-sm text-dourado"
            style={{ animationDelay: '0.45s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dourado opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-dourado" />
            </span>
            {t('badgeNew')} <strong className="font-semibold">{t('projectName')}</strong>
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: '0.55s' }}
          >
            <a
              href={hasLink(socialLinks.smartLink) ? safeLink(socialLinks.smartLink) : '#ouvir'}
              target={hasLink(socialLinks.smartLink) ? '_blank' : undefined}
              rel={hasLink(socialLinks.smartLink) ? 'noopener noreferrer' : undefined}
              className="btn-primary"
            >
              <PlayIcon className="h-4 w-4" />
              {t('listenPlatforms')}
            </a>
            <a
              href={hasLink(socialLinks.youtube) ? safeLink(socialLinks.youtube) : '#videos'}
              target={hasLink(socialLinks.youtube) ? '_blank' : undefined}
              rel={hasLink(socialLinks.youtube) ? 'noopener noreferrer' : undefined}
              className="btn-secondary"
            >
              <YoutubeIcon className="h-4 w-4" />
              {t('watchYoutube')}
            </a>
            <a href="#lancamentos" className="btn-ghost">
              {t('knowSongs')}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#ouvir"
        aria-label={t('scrollAria')}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-creme/50 transition-colors hover:text-dourado sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t('explore')}</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-creme/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-dourado" />
        </span>
      </a>
    </section>
  );
}
