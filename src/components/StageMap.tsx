import { useTranslations } from 'next-intl';

/**
 * Mapa de palco simples para o formato com banda reduzida.
 * Ilustrativo e responsivo — pode ser substituído por um mapa técnico definitivo.
 */
export function StageMap() {
  const t = useTranslations('stageMap');
  return (
    <svg
      viewBox="0 0 640 360"
      className="w-full rounded-xl border border-white/10 bg-white/[0.02]"
      role="img"
      aria-label={t('aria')}
    >
      <defs>
        <linearGradient id="stageGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a0f09" />
          <stop offset="1" stopColor="#0E0B0A" />
        </linearGradient>
      </defs>

      <rect x="20" y="20" width="600" height="240" rx="14" fill="url(#stageGrad)" stroke="#3A2418" />
      <text x="40" y="48" fill="#C89A3C" fontSize="14" fontFamily="Arial, sans-serif" letterSpacing="3">
        {t('stage')}
      </text>

      {/* Baixo - esquerda */}
      <g>
        <circle cx="150" cy="150" r="40" fill="#5A1018" stroke="#C89A3C" strokeWidth="1.5" />
        <text x="150" y="147" textAnchor="middle" fill="#F3E9CE" fontSize="14" fontFamily="Arial, sans-serif">{t('bass')}</text>
        <text x="150" y="164" textAnchor="middle" fill="#D8C39A" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.7">{t('left')}</text>
      </g>

      {/* Vocal/Violão - centro */}
      <g>
        <circle cx="320" cy="140" r="48" fill="#0E3B24" stroke="#E0A64B" strokeWidth="2" />
        <text x="320" y="135" textAnchor="middle" fill="#F3E9CE" fontSize="15" fontFamily="Arial, sans-serif">{t('vocal')}</text>
        <text x="320" y="153" textAnchor="middle" fill="#F3E9CE" fontSize="13" fontFamily="Arial, sans-serif">{t('guitar')}</text>
      </g>

      {/* Percussão - direita */}
      <g>
        <circle cx="490" cy="150" r="40" fill="#A85F2A" stroke="#C89A3C" strokeWidth="1.5" />
        <text x="490" y="147" textAnchor="middle" fill="#0E0B0A" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="bold">{t('percussion')}</text>
        <text x="490" y="164" textAnchor="middle" fill="#1a0f09" fontSize="10" fontFamily="Arial, sans-serif">{t('right')}</text>
      </g>

      {/* Retornos frontais */}
      <g fill="#3A2418" stroke="#C89A3C" strokeOpacity="0.5">
        <rect x="230" y="222" width="60" height="20" rx="4" />
        <rect x="350" y="222" width="60" height="20" rx="4" />
      </g>
      <text x="320" y="255" textAnchor="middle" fill="#D8C39A" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.7">
        {t('monitors')}
      </text>

      {/* Público */}
      <text x="320" y="315" textAnchor="middle" fill="#C89A3C" fontSize="14" fontFamily="Arial, sans-serif" letterSpacing="4">
        {t('audience')}
      </text>
    </svg>
  );
}
