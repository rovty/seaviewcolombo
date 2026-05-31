import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Priyantha for booking inquiries. Reach us via WhatsApp at +61 433 824 066 or email at Priyantha60@hotmail.com.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
