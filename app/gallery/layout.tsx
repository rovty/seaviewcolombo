import { Metadata } from 'next';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Take a visual tour of our luxury sea view apartments, rooftop pools, living areas, and stunning ocean views in Colombo.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description: 'Take a visual tour of our luxury sea view apartments, rooftop pools, living areas, and stunning ocean views in Colombo.',
    url: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
