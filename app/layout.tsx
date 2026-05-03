import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sineklikavusturya.com'),
  title: 'XXXX Sineklik Avusturya Hızlı Teslimat',
  description:
    'XXXX Avusturya\'ya plise sineklik, jaluzi perde, zip perde sistemleri. 4-10 günde adrese teslim, premium kalite, profesyonel hizmet garantisi.',
  keywords:
    'sineklik avusturya, avusturya sineklik, plise sineklik, plise perde, jaluzi perde, zip perde, honeycomb perde, düet perde',
  authors: [{ name: 'Sineklik Avusturya', url: 'https://sineklikavusturya.com' }],
  creator: 'Sineklik Avusturya',
  publisher: 'Sineklik Avusturya',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sineklikavusturya.com',
    languages: {
      'tr-TR': 'https://sineklikavusturya.com',
      'de-AT': 'https://sineklikavusturya.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'de_AT',
    url: 'https://sineklikavusturya.com',
    title: 'XXXX Sineklik Avusturya Hızlı Teslimat',
    description:
      'XXXX Avusturya\'ya plise sineklik, jaluzi perde, zip perde sistemleri. 4-10 günde adrese teslim, premium kalite, profesyonel hizmet garantisi.',
    siteName: 'Sineklik Avusturya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XXXX Sineklik Avusturya Hızlı Teslimat',
    description:
      'XXXX Avusturya\'ya plise sineklik, jaluzi perde, zip perde sistemleri. 4-10 günde adrese teslim, premium kalite, profesyonel hizmet garantisi.',
    creator: '@SineklikAvusturya',
  },
  verification: {
    google: 'sineklikavusturya-google-verification',
  },
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sineklik Avusturya',
  url: 'https://sineklikavusturya.com',
  logo: 'https://sineklikavusturya.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90-540-336-3873',
    contactType: 'customer service',
    availableLanguage: ['Turkish', 'German'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
    addressLocality: 'Gebze',
    addressRegion: 'Kocaeli',
    addressCountry: 'TR',
  },
  sameAs: [
    'https://sineklikavusturya.com',
  ],
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sineklik Avusturya',
  url: 'https://sineklikavusturya.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://sineklikavusturya.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Sineklik Avusturya',
      item: 'https://sineklikavusturya.com',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
