import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/Reveal';

// Trechos de letras — permanecem em português (letras originais dos sambas).
const quotes = [
  'Eu vou morrer de saudade, mas não vou mais te procurar.',
  'Eu sou mais você.',
  'Fala na cara.',
  'Amor e razão nem sempre caminham juntos.',
];

export function LyricsSection() {
  const t = useTranslations('lyrics');
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-verde-samba/10 to-transparent" />
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">{t('label')}</p>
          <h2 className="heading-2">{t('title')}</h2>
          <p className="mt-4 text-lg text-creme/70">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {quotes.map((quote, i) => (
            <Reveal key={quote} delay={i * 90}>
              <blockquote className="card-surface flex h-full items-center gap-4 px-7 py-8">
                <span className="font-display text-5xl leading-none text-dourado/40">“</span>
                <p className="font-script text-2xl leading-snug text-creme/90 sm:text-3xl">
                  {quote}
                </p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
