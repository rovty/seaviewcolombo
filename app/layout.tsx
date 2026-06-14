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
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  title: {
    default: `${siteConfig.name} | Luxury Sea View Apartments in Colombo`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: ['Colombo apartments', 'sea view apartments', 'luxury accommodation', 'Sri Lanka', 'ocean view', 'rooftop pool', 'Colombo 03'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Luxury Sea View Apartments in Colombo`,
    description: siteConfig.tagline,
    images: [
      {
        url: '/images/sea-view-apt/8.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Luxury sea view apartments in Colombo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Luxury Sea View Apartments in Colombo`,
    description: siteConfig.tagline,
    images: ['/images/sea-view-apt/8.jpg'],
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


const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: siteConfig.address,
  image: `${siteConfig.url}/images/sea-view-apt/8.jpg`,
  description: siteConfig.tagline,
  priceRange: '$$',
  areaServed: 'Colombo, Sri Lanka',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.coordinates.lat,
    longitude: siteConfig.coordinates.lng,
  },
  sameAs: [siteConfig.whatsappLink],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
