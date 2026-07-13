import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ListenNow } from '@/components/ListenNow';
import { ReleasesGrid } from '@/components/ReleasesGrid';
import { AlbumSection } from '@/components/AlbumSection';
import { VideoSection } from '@/components/VideoSection';
import { LyricsSection } from '@/components/LyricsSection';
import { AboutSection } from '@/components/AboutSection';
import { AgendaSection } from '@/components/AgendaSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { socialLinks, hasLink } from '@/data/links';

const sameAs = [
  socialLinks.spotify,
  socialLinks.youtube,
  socialLinks.instagram,
  socialLinks.tiktok,
  socialLinks.deezer,
  socialLinks.appleMusic,
].filter(hasLink);

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Rico Samba',
    genre: ['Samba', 'Bossa Nova', 'Choro', 'Pagode', 'MPB'],
    description: t('description'),
    url: 'https://ricosamba.com.br',
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ListenNow />
        <ReleasesGrid />
        <AlbumSection />
        <VideoSection />
        <LyricsSection />
        <AboutSection />
        <AgendaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
