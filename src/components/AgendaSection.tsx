import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/Reveal';
import { ArrowRightIcon, DownloadIcon } from '@/components/icons';

export function AgendaSection() {
  const t = useTranslations('agenda');
  return (
    <section id="agenda" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="card-surface relative overflow-hidden px-8 py-14 text-center sm:px-14">
            <div className="absolute inset-0 -z-10 bg-radial-warm" />
            <p className="section-label justify-center">{t('label')}</p>
            <h2 className="heading-2">{t('title')}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-creme/70">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/epk" className="btn-primary">
                <DownloadIcon className="h-4 w-4" />
                {t('epkCta')}
              </Link>
              <a href="#contato" className="btn-secondary">
                {t('inviteCta')}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

