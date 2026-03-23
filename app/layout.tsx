import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sonadetailing.com'),
  title: {
    default: 'Sona Mobile Detailing | Mobile Auto Detailing in Frisco, TX',
    template: '%s | Sona Mobile Detailing',
  },
  description:
    'Professional mobile auto detailing in Frisco, TX and surrounding DFW suburbs. Interior, exterior, and full detail packages. We come to you — book your appointment today.',
  keywords: [
    'mobile detailing Frisco TX',
    'mobile car detailing Frisco',
    'auto detailing Frisco TX',
    'car detailing McKinney TX',
    'mobile detailing Plano TX',
    'mobile detailing Allen TX',
    'mobile detailing Prosper TX',
    'DFW mobile detailing',
    'interior detailing',
    'exterior detailing',
    'full detail DFW',
  ],
  authors: [{ name: 'Sona Mobile Detailing' }],
  creator: 'Sona Mobile Detailing',
  alternates: {
    canonical: 'https://sonadetailing.com',
  },
  openGraph: {
    title: 'Sona Mobile Detailing | Mobile Auto Detailing in Frisco, TX',
    description:
      'Professional mobile auto detailing in Frisco, TX and surrounding DFW suburbs. We come to you — book your appointment today.',
    url: 'https://sonadetailing.com',
    siteName: 'Sona Mobile Detailing',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'Sona Mobile Detailing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sona Mobile Detailing | Mobile Auto Detailing in Frisco, TX',
    description: 'Professional mobile auto detailing in Frisco, TX. We come to you.',
    images: ['/opengraph-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-VH9TV05JST'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VH9TV05JST');
          `}
        </Script>
      </head>
      <body className='min-h-full flex flex-col bg-[#0d0d0d] text-[#f5f5f5]'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Sona Mobile Detailing',
              description:
                'Professional mobile auto detailing serving Frisco, TX and surrounding DFW suburbs. Interior, exterior, and full detail packages.',
              url: 'https://sonadetailing.com',
              telephone: '+12149950685',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Frisco',
                addressRegion: 'TX',
                postalCode: '75034',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 33.1584,
                longitude: -96.8236,
              },
              areaServed: [
                { '@type': 'City', name: 'Frisco', containedIn: 'Texas' },
                { '@type': 'City', name: 'McKinney', containedIn: 'Texas' },
                { '@type': 'City', name: 'Allen', containedIn: 'Texas' },
                { '@type': 'City', name: 'Plano', containedIn: 'Texas' },
                { '@type': 'City', name: 'Prosper', containedIn: 'Texas' },
                { '@type': 'City', name: 'Little Elm', containedIn: 'Texas' },
              ],
              sameAs: [
                'https://www.facebook.com/profile.php?id=61586097818060',
                'https://www.instagram.com/sona_mobiledetailing/',
              ],
              priceRange: '$$',
              serviceType: 'Mobile Auto Detailing',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
