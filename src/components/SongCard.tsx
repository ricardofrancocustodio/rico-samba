'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Song } from '@/data/songs';
import { hasLink } from '@/data/links';
import { PlayIcon, YoutubeIcon, ShareIcon } from '@/components/icons';
import { PlayerModal } from '@/components/PlayerModal';

type ModalState = { url: string; title: string; type: 'spotify' | 'youtube' } | null;

export function SongCard({ song }: { song: Song }) {
  const t = useTranslations('songCard');
  const ts = useTranslations('songs');
  const description = ts(song.slug);
  const [copied, setCopied] = useState(false);
  const [modal, setModal] = useState<ModalState>(null);
  const hasSpotify = hasLink(song.spotifyUrl);
  const hasLyric = hasLink(song.lyricVideoUrl);

  async function handleShare() {
    const shareData = {
      title: t('shareTitle', { title: song.title }),
      text: t('shareText', { title: song.title, description }),
      url: typeof window !== 'undefined' ? `${window.location.origin}/#lancamentos` : '',
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      /* usuário cancelou o compartilhamento */
    }
  }

  return (
    <>
    {modal && (
      <PlayerModal
        url={modal.url}
        title={modal.title}
        type={modal.type}
        onClose={() => setModal(null)}
      />
    )}
    <article className="group card-surface flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-dourado/30 hover:shadow-soft">
      <div className="relative aspect-square overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={song.cover}
          alt={t('coverAlt', { title: song.title })}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grafite/90 via-transparent to-transparent" />
        {song.hook && (
          <p className="absolute inset-x-4 bottom-4 font-script text-lg leading-tight text-creme/90 drop-shadow">
            “{song.hook}”
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-creme">{song.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-creme/60">{description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => hasSpotify && setModal({ url: song.spotifyUrl, title: song.title, type: 'spotify' })}
            disabled={!hasSpotify}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              hasSpotify
                ? 'bg-gold-gradient text-grafite hover:brightness-110'
                : 'cursor-default bg-white/5 text-creme/40'
            }`}
          >
            <PlayIcon className="h-3.5 w-3.5" />
            {t('listen')}
          </button>
          <button
            type="button"
            onClick={() => hasLyric && setModal({ url: song.lyricVideoUrl, title: song.title, type: 'youtube' })}
            disabled={!hasLyric}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              hasLyric
                ? 'border-dourado/50 text-dourado hover:bg-dourado/10'
                : 'cursor-default border-white/10 text-creme/40'
            }`}
          >
            <YoutubeIcon className="h-3.5 w-3.5" />
            {t('lyricVideo')}
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full p-2 text-creme/60 transition-colors hover:text-dourado"
            aria-label={t('shareAria', { title: song.title })}
          >
            <ShareIcon className="h-4 w-4" />
            {copied && <span className="text-xs">{t('copied')}</span>}
          </button>
        </div>
      </div>
    </article>
    </>
  );
}
