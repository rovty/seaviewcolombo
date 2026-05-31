import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Take a visual tour of our luxury sea view apartments, rooftop pools, living areas, and stunning ocean views in Colombo.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
