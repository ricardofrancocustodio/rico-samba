import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, Parisienne } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-parisienne',
  display: 'swap',
});

const siteUrl = 'https://ricosamba.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rico Samba — Samba, Bossa, Choro e Pagode Moderno',
    template: '%s | Rico Samba',
  },
  description:
    'Site oficial de Rico Samba. Samba autoral com influências de bossa, choro, pagode moderno e MPB. Ouça músicas, assista lyric videos e acompanhe o projeto Jeito de Sambar.',
  keywords: [
    'Rico Samba',
    'samba autoral',
    'samba romântico',
    'pagode moderno',
    'samba bossa',
    'música brasileira',
    'choro moderno',
    'MPB brasileira',
    'Jeito de Sambar',
    'lyric video samba',
  ],
  authors: [{ name: 'Rico Samba' }],
  creator: 'Rico Samba',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Rico Samba',
    title: 'Rico Samba — Música Brasileira Autoral',
    description:
      'Samba, bossa, choro e pagode moderno em canções sobre amor, saudade e recomeço.',
    images: [
      {
        url: '/images/social/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Rico Samba — Música Brasileira Autoral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rico Samba — Música Brasileira Autoral',
    description:
      'Samba, bossa, choro e pagode moderno em canções sobre amor, saudade e recomeço.',
    images: ['/images/social/og-image.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicon.svg' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0E0B0A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} ${parisienne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
