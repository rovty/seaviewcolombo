import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seaviewcolombo.com'),
  title: {
    default: `${siteConfig.name} | Luxury Sea View Apartments in Colombo`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Discover luxury sea view apartments in Colombo. Spacious 2 and 3 bedroom accommodations with rooftop pools, ocean views, modern amenities, and prime Colombo location.',
  keywords: ['Colombo apartments', 'sea view apartments', 'luxury accommodation', 'Sri Lanka', 'ocean view', 'rooftop pool', 'Colombo 03'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seaviewcolombo.com',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Luxury Sea View Apartments in Colombo`,
    description: 'Discover luxury sea view apartments in Colombo. Spacious 2 and 3 bedroom accommodations with rooftop pools, ocean views, modern amenities, and prime Colombo location.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Luxury Sea View Apartments in Colombo`,
    description: 'Discover luxury sea view apartments in Colombo with rooftop pools and ocean views.',
    images: ['/og-image.jpg'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
