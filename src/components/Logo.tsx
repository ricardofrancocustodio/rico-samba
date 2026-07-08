/**
 * Logo tipográfico de Rico Samba com um pandeiro estilizado.
 * Escala conforme o tamanho da fonte do container.
 */
export function Logo({ className = '', showTagline = false }: { className?: string; showTagline?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <PandeiroMark className="h-9 w-9 shrink-0 text-dourado" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-creme sm:text-2xl">
          Rico <span className="text-gold-gradient">Samba</span>
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-creme/50">
            Música brasileira autoral
          </span>
        )}
      </span>
    </span>
  );
}

export function PandeiroMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <circle cx="24" cy="24" r="15.5" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      {/* jingles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const cx = 24 + Math.cos(angle) * 18.2;
        const cy = 24 + Math.sin(angle) * 18.2;
        return <circle key={i} cx={cx} cy={cy} r="2.1" fill="currentColor" opacity="0.85" />;
      })}
      {/* stylized note */}
      <path
        d="M21 16.5v11.2a3.4 3.4 0 1 1-2-3.1V18l7-1.6v7.9a3.4 3.4 0 1 1-2-3.1v-6.3l-3 .6Z"
        fill="currentColor"
      />
    </svg>
  );
}
