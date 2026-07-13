'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/Reveal';
import { videos, type Video } from '@/data/videos';
import { socialLinks, safeLink, hasLink } from '@/data/links';
import { PlayIcon, YoutubeIcon, ArrowRightIcon } from '@/components/icons';

function VideoCard({ video, featured = false }: { video: Video; featured?: boolean }) {
  const t = useTranslations('video');
  const [playing, setPlaying] = useState(false);
  const available = Boolean(video.youtubeId);
  const label = t('lyricVideoLabel');

  return (
    <div
      className={`group card-surface relative overflow-hidden ${
        featured ? 'aspect-video' : 'aspect-video'
      }`}
    >
      {playing && available ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={`${label} — ${video.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => available && setPlaying(true)}
          disabled={!available}
          className="absolute inset-0 h-full w-full"
          aria-label={available ? t('watchAria', { title: video.title }) : t('soonAria', { title: video.title })}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.poster}
            alt={`${label} — ${video.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafite/90 via-grafite/20 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full bg-grafite/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-dourado backdrop-blur">
            {label}
          </span>

          <span className="absolute inset-0 flex items-center justify-center">
            <span
              className={`flex items-center justify-center rounded-full backdrop-blur transition-all duration-300 ${
                available
                  ? 'h-16 w-16 bg-dourado/90 text-grafite group-hover:scale-110 group-hover:bg-dourado'
                  : 'h-14 w-14 border border-white/20 bg-white/5 text-creme/60'
              }`}
            >
              <PlayIcon className={featured ? 'h-7 w-7' : 'h-6 w-6'} />
            </span>
          </span>

          <span className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <span className="font-display text-lg font-semibold text-creme">{video.title}</span>
            {!available && (
              <span className="text-xs font-medium uppercase tracking-wide text-creme/50">
                {t('soon')}
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoSection() {
  const t = useTranslations('video');
  const [featured, ...rest] = videos;

  return (
    <section id="videos" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">{t('label')}</p>
          <h2 className="heading-2">{t('title')}</h2>
          <p className="mt-4 text-lg text-creme/70">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <VideoCard video={featured} featured />
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {rest.slice(0, 4).map((video, i) => (
              <Reveal key={video.title} delay={i * 70}>
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {rest.slice(4).map((video, i) => (
            <Reveal key={video.title} delay={i * 70}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={hasLink(socialLinks.youtube) ? safeLink(socialLinks.youtube) : '#contato'}
            target={hasLink(socialLinks.youtube) ? '_blank' : undefined}
            rel={hasLink(socialLinks.youtube) ? 'noopener noreferrer' : undefined}
            className="btn-secondary"
          >
            <YoutubeIcon className="h-4 w-4" />
            {t('watchChannel')}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
