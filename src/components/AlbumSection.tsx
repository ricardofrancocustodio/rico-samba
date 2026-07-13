import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/Reveal';
import { ArrowRightIcon, YoutubeIcon } from '@/components/icons';
import { socialLinks, safeLink, hasLink } from '@/data/links';

export function AlbumSection() {
  const t = useTranslations('album');
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-vinho/10 to-transparent" />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/covers/jeito-de-sambar.svg"
                alt={t('imgAlt')}
                className="w-full rounded-2xl shadow-soft ring-1 ring-white/10"
              />
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gold-gradient opacity-20 blur-xl" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="section-label">{t('label')}</p>
            <h2 className="font-display text-4xl font-bold text-creme sm:text-5xl">
              {t('titlePrefix')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-creme/75">
              {t('p1')}
            </p>
            <p className="mt-4 leading-relaxed text-creme/60">
              {t('p2')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={hasLink(socialLinks.smartLink) ? safeLink(socialLinks.smartLink) : '#ouvir'}
                target={hasLink(socialLinks.smartLink) ? '_blank' : undefined}
                rel={hasLink(socialLinks.smartLink) ? 'noopener noreferrer' : undefined}
                className="btn-primary"
              >
                {t('cta1')}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={hasLink(socialLinks.youtube) ? safeLink(socialLinks.youtube) : '#videos'}
                target={hasLink(socialLinks.youtube) ? '_blank' : undefined}
                rel={hasLink(socialLinks.youtube) ? 'noopener noreferrer' : undefined}
                className="btn-secondary"
              >
                <YoutubeIcon className="h-4 w-4" />
                {t('cta2')}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
