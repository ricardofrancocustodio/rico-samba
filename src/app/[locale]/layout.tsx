import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Playfair_Display, Inter, Parisienne } from 'next/font/google';
import { routing } from '@/i18n/routing';
import '../globals.css';

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  const isDefault = locale === routing.defaultLocale;
  const canonical = isDefault ? siteUrl : `${siteUrl}/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('title'),
      template: '%s | Rico Samba',
    },
    description: t('description'),
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
      canonical,
      languages: {
        'pt-BR': siteUrl,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'pt_BR',
      url: canonical,
      siteName: 'Rico Samba',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: '/images/social/og-image.svg',
          width: 1200,
          height: 630,
          alt: t('ogTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/images/social/og-image.svg'],
    },
    icons: {
      icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
      apple: [{ url: '/favicon.svg' }],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#0E0B0A',
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale === 'en' ? 'en' : 'pt-BR'}
      className={`${playfair.variable} ${inter.variable} ${parisienne.variable}`}
    >
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
