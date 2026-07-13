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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Rico Samba',
  genre: ['Samba', 'Bossa Nova', 'Choro', 'Pagode', 'MPB'],
  description:
    'Projeto de música brasileira autoral que mistura samba, bossa, choro, pagode moderno e MPB em canções sobre amor, saudade e recomeço.',
  url: 'https://ricosamba.com.br',
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

export default function Home() {
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
