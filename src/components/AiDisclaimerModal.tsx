'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

export function AiDisclaimerButton() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('aiDisclaimer');

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-creme/40 underline-offset-2 transition-colors hover:text-dourado hover:underline"
      >
        {t('trigger')}
      </button>
      {open && <AiDisclaimerModal onClose={() => setOpen(false)} />}
    </>
  );
}

function AiDisclaimerModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations('aiDisclaimer');
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

  function handleOverlay(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      className="fixed inset-0 z-50 flex items-center justify-center bg-grafite/80 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-disclaimer-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-grafite shadow-2xl ring-1 ring-white/10">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <h2
            id="ai-disclaimer-title"
            className="font-display text-lg font-semibold text-creme"
          >
            {t('title')}
          </h2>
          <button
            onClick={onClose}
            aria-label={t('closeAria')}
            className="ml-4 shrink-0 rounded-full p-1.5 text-creme/50 transition-colors hover:bg-white/10 hover:text-creme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6 pb-6 text-sm leading-relaxed text-creme/70">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
          <p className="text-xs text-creme/40">{t('p4')}</p>
        </div>
      </div>
    </div>
  );
}
