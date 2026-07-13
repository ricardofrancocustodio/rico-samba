import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { CopyButton } from '@/components/CopyButton';
import { ProContactForm } from '@/components/ProContactForm';
import { StageMap } from '@/components/StageMap';
import {
  releaseIds,
  showFormatIds,
  riderIds,
  downloads,
  pressPhotos,
} from '@/data/epk';
import { songs } from '@/data/songs';
import { allPlatforms } from '@/data/platforms';
import { hasLink, safeLink } from '@/data/links';
import {
  DownloadIcon,
  PlayIcon,
  YoutubeIcon,
  LetrasIcon,
  ArrowRightIcon,
} from '@/components/icons';

const siteUrl = 'https://ricosamba.com.br';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.epk' });
  const isDefault = locale === routing.defaultLocale;
  const canonical = isDefault ? `${siteUrl}/epk` : `${siteUrl}/${locale}/epk`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: {
        'pt-BR': `${siteUrl}/epk`,
        en: `${siteUrl}/en/epk`,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

const ratioClass: Record<string, string> = {
  landscape: 'aspect-video',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
};

export default async function EpkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'epk' });
  const ts = await getTranslations({ locale, namespace: 'songs' });

  const longBio = t.raw('longBio') as string[];

  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="absolute inset-0 -z-10 bg-radial-warm" />
          <div className="container-x">
            <Reveal>
              <nav className="mb-6 flex items-center gap-2 text-sm text-creme/50" aria-label={t('breadcrumbAria')}>
                <Link href="/" className="transition-colors hover:text-dourado">
                  {t('home')}
                </Link>
                <span>/</span>
                <span className="text-creme/80">{t('breadcrumbCurrent')}</span>
              </nav>
              <p className="section-label">{t('heroLabel')}</p>
              <h1 className="font-display text-4xl font-bold leading-tight text-creme sm:text-6xl">
                {t('heroTitle')} <span className="text-gold-gradient">{t('heroTitleHighlight')}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-creme/75">
                {t('heroSubtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contratar" className="btn-primary">
                  {t('hireShow')}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href="#downloads" className="btn-secondary">
                  <DownloadIcon className="h-4 w-4" />
                  {t('officialDownloads')}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="card-surface h-full p-7 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold text-creme">{t('shortBioHeading')}</h2>
                  <CopyButton text={t('shortBio')} />
                </div>
                <p className="text-lg leading-relaxed text-creme/75">{t('shortBio')}</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card-surface h-full p-7 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold text-creme">{t('longBioHeading')}</h2>
                  <CopyButton text={longBio.join('\n\n')} />
                </div>
                <div className="space-y-4 leading-relaxed text-creme/70">
                  {longBio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Presença digital */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('digitalLabel')}</p>
              <h2 className="heading-2">{t('digitalTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('digitalSubtitle')}
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {allPlatforms.map((platform, i) => {
                const active = hasLink(platform.url);
                const Icon = platform.icon;
                return (
                  <Reveal key={platform.name} delay={(i % 4) * 50}>
                    <a
                      href={safeLink(platform.url)}
                      target={active ? '_blank' : undefined}
                      rel={active ? 'noopener noreferrer' : undefined}
                      aria-disabled={!active}
                      className={`group card-surface flex items-center gap-3 px-4 py-4 transition-all duration-300 ${
                        active
                          ? 'hover:-translate-y-1 hover:border-dourado/40'
                          : 'cursor-default opacity-55'
                      }`}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-creme transition-colors group-hover:text-[var(--brand)]"
                        style={{ ['--brand' as string]: platform.brand }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-creme">{platform.name}</span>
                        <span className="text-[11px] text-creme/50">
                          {active ? t('officialProfile') : t('soon')}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfólio musical */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('portfolioLabel')}</p>
              <h2 className="heading-2">{t('portfolioTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('portfolioSubtitle')}
              </p>
            </Reveal>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/5">
              <ul className="divide-y divide-white/5">
                {songs.map((song) => (
                  <li
                    key={song.slug}
                    className="flex flex-col gap-4 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={song.cover}
                        alt={t('songCoverAlt', { title: song.title })}
                        loading="lazy"
                        className="h-16 w-16 shrink-0 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-creme">
                          {song.title}
                        </h3>
                        <p className="text-sm text-creme/60">{ts(song.slug)}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <PortfolioLink url={song.spotifyUrl} label="Spotify" icon={<PlayIcon className="h-3.5 w-3.5" />} />
                      <PortfolioLink url={song.youtubeUrl} label="YouTube" icon={<YoutubeIcon className="h-3.5 w-3.5" />} />
                      <PortfolioLink url={song.lyricVideoUrl} label={t('lyricVideo')} icon={<YoutubeIcon className="h-3.5 w-3.5" />} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Propostas de show */}
        <section id="contratar" className="scroll-mt-20 py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('formatsLabel')}</p>
              <h2 className="heading-2">{t('formatsTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('formatsSubtitle')}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {showFormatIds.map((id, i) => (
                <Reveal key={id} delay={(i % 2) * 90}>
                  <article className="card-surface h-full p-7">
                    <h3 className="font-display text-xl font-semibold text-dourado">
                      {t(`showFormats.${id}.title`)}
                    </h3>
                    <p className="mt-3 leading-relaxed text-creme/75">{t(`showFormats.${id}.description`)}</p>
                    <p className="mt-4 text-sm text-creme/55">
                      <span className="font-semibold text-creme/70">{t('idealFor')}</span> {t(`showFormats.${id}.ideal`)}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Rider técnico + mapa de palco */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('riderLabel')}</p>
              <h2 className="heading-2">{t('riderTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('riderSubtitle')}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {riderIds.map((id, i) => {
                const items = t.raw(`riders.${id}.items`) as string[];
                return (
                  <Reveal key={id} delay={i * 90}>
                    <article className="card-surface h-full p-7">
                      <h3 className="font-display text-xl font-semibold text-creme">{t(`riders.${id}.title`)}</h3>
                      <ul className="mt-4 space-y-2.5">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-creme/75">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dourado" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-6">
              <div className="card-surface p-7">
                <h3 className="font-display text-xl font-semibold text-creme">{t('stageMapHeading')}</h3>
                <p className="mt-2 text-sm text-creme/60">
                  {t('stageMapNote')}
                </p>
                <div className="mt-6">
                  <StageMap />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Fotos oficiais */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('photosLabel')}</p>
              <h2 className="heading-2">{t('photosTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('photosSubtitle')}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pressPhotos.map((photo, i) => {
                const alt = t(`pressPhotos.${photo.id}`);
                return (
                  <Reveal key={photo.src} delay={(i % 3) * 80}>
                    <figure className="card-surface overflow-hidden">
                      <div className={`${ratioClass[photo.ratio]} overflow-hidden`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <figcaption className="px-4 py-3 text-xs text-creme/55">{alt}</figcaption>
                    </figure>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Releases */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('releasesLabel')}</p>
              <h2 className="heading-2">{t('releasesTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('releasesSubtitle')}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {releaseIds.map((id, i) => (
                <Reveal key={id} delay={(i % 2) * 90}>
                  <article className="card-surface flex h-full flex-col p-7">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold text-dourado">
                        {t(`releaseItems.${id}.title`)}
                      </h3>
                      <CopyButton text={t(`releaseItems.${id}.text`)} />
                    </div>
                    <p className="leading-relaxed text-creme/75">{t(`releaseItems.${id}.text`)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Na mídia */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal>
              <div className="card-surface flex flex-col items-center gap-3 px-8 py-14 text-center">
                <LetrasIcon className="h-8 w-8 text-dourado" />
                <p className="section-label justify-center">{t('mediaLabel')}</p>
                <h2 className="heading-2">{t('mediaTitle')}</h2>
                <p className="mx-auto mt-2 max-w-xl text-creme/70">
                  {t('mediaSubtitle')}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Downloads */}
        <section id="downloads" className="scroll-mt-20 py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('downloadsLabel')}</p>
              <h2 className="heading-2">{t('downloadsTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('downloadsSubtitle')}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {downloads.map((item, i) => {
                const available = hasLink(item.href);
                return (
                  <Reveal key={item.id} delay={(i % 3) * 70}>
                    <a
                      href={available ? item.href : undefined}
                      download={available || undefined}
                      aria-disabled={!available}
                      className={`group card-surface flex items-center gap-4 p-5 transition-all duration-300 ${
                        available
                          ? 'hover:-translate-y-1 hover:border-dourado/40'
                          : 'cursor-default opacity-55'
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-dourado">
                        <DownloadIcon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-medium text-creme">{t(`downloadItems.${item.id}.label`)}</span>
                        <span className="text-xs text-creme/55">
                          {available ? t(`downloadItems.${item.id}.description`) : t('soon')}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contato profissional */}
        <section id="contratar-form" className="scroll-mt-20 py-16 sm:py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">{t('proContactLabel')}</p>
              <h2 className="heading-2">{t('proContactTitle')}</h2>
              <p className="mt-4 text-creme/70">
                {t('proContactSubtitle')}
              </p>
            </Reveal>

            <Reveal className="mt-10" delay={100}>
              <ProContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PortfolioLink({
  url,
  label,
  icon,
}: {
  url: string;
  label: string;
  icon: React.ReactNode;
}) {
  const active = hasLink(url);
  return (
    <a
      href={safeLink(url)}
      target={active ? '_blank' : undefined}
      rel={active ? 'noopener noreferrer' : undefined}
      aria-disabled={!active}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? 'border-dourado/50 text-dourado hover:bg-dourado/10'
          : 'cursor-default border-white/10 text-creme/40'
      }`}
    >
      {icon}
      {label}
    </a>
  );
}
