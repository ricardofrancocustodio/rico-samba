'use client';

import { useEffect, useRef } from 'react';

type PlayerType = 'spotify' | 'youtube';

interface PlayerModalProps {
  url: string;
  title: string;
  type: PlayerType;
  onClose: () => void;
}

function toEmbedUrl(url: string, type: PlayerType): string {
  if (type === 'spotify') {
    // https://open.spotify.com/track/TRACKID → embed
    const match = url.match(/spotify\.com\/(track|album|playlist)\/([A-Za-z0-9]+)/);
    if (match) return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator&theme=0`;
    return url;
  }
  // YouTube: watch?v=ID ou youtu.be/ID
  const match =
    url.match(/[?&]v=([A-Za-z0-9_-]{11})/) ||
    url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
  return url;
}

export function PlayerModal({ url, title, type, onClose }: PlayerModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  const embedUrl = toEmbedUrl(url, type);
  const isSpotify = type === 'spotify';

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-grafite/80 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-grafite shadow-2xl ring-1 ring-white/10">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <p className="font-display text-base font-semibold text-creme">{title}</p>
          <button
            onClick={onClose}
            aria-label="Fechar player"
            className="rounded-full p-1.5 text-creme/50 transition-colors hover:bg-white/10 hover:text-creme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        {/* Player */}
        <div className={`overflow-hidden rounded-b-2xl ${isSpotify ? 'h-[152px]' : 'aspect-video'}`}>
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title={title}
            className="block border-0"
          />
        </div>
      </div>
    </div>
  );
}
