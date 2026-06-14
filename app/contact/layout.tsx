import { Metadata } from 'next';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact and Booking Enquiries',
  description: `Contact Priyantha for booking inquiries. Reach us via WhatsApp at ${siteConfig.phone} or email at ${siteConfig.email}.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact and Booking Enquiries | ${siteConfig.name}`,
    description: `Contact Priyantha for booking inquiries. Reach us via WhatsApp at ${siteConfig.phone} or email at ${siteConfig.email}.`,
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
