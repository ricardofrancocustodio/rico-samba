import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/Reveal';
import { SongCard } from '@/components/SongCard';
import { songs } from '@/data/songs';

export function ReleasesGrid() {
  const t = useTranslations('releases');
  return (
    <section id="lancamentos" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">{t('label')}</p>
          <h2 className="heading-2">{t('title')}</h2>
          <p className="mt-4 text-lg text-creme/70">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {songs.map((song, i) => (
            <Reveal key={song.slug} delay={(i % 4) * 80}>
              <SongCard song={song} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
