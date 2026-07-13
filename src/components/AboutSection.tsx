import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/Reveal';

export function AboutSection() {
  const t = useTranslations('about');
  const traits = t.raw('traits') as string[];
  return (
    <section id="sobre" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/artist/rico-samba-sobre.svg"
                alt={t('imgAlt')}
                className="w-full rounded-2xl shadow-soft ring-1 ring-white/10"
              />
              <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl border border-dourado/30" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="section-label">{t('label')}</p>
            <h2 className="heading-2">{t('title')}</h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-creme/75">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p className="text-creme/60">{t('p3')}</p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {traits.map((trait) => (
                <li
                  key={trait}
                  className="rounded-full border border-dourado/25 bg-dourado/5 px-4 py-1.5 text-sm font-medium text-dourado"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
