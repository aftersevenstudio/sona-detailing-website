import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sona Mobile Detailing | Frisco, TX',
  description:
    'Professional mobile auto detailing in Frisco, TX and surrounding DFW suburbs. We come to you — book your appointment today.',
  keywords: 'mobile detailing, Frisco TX, auto detailing, car detailing, DFW detailing',
  openGraph: {
    title: 'Sona Mobile Detailing | Frisco, TX',
    description: 'Professional mobile auto detailing in Frisco, TX. We come to you.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col bg-[#0d0d0d] text-[#f5f5f5]'>{children}</body>
    </html>
  );
}
