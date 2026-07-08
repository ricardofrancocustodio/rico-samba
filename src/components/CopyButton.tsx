'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from '@/components/icons';

/**
 * Botão que copia o `text` informado para a área de transferência,
 * com feedback visual de confirmação.
 */
export function CopyButton({
  text,
  label = 'Copiar',
  className = '',
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded-full border border-dourado/40 px-3.5 py-1.5 text-xs font-semibold text-dourado transition-colors hover:bg-dourado/10 ${className}`}
      aria-label={label}
    >
      {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
      {copied ? 'Copiado!' : label}
    </button>
  );
}
