import Link from 'next/link';
import { Waves, Mail, Phone, MapPin } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-sky-400" />
              <span className="font-serif text-xl font-semibold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              {siteConfig.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400" />
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-sky-400" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-400 transition-colors"
                >
                  Inquiry Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2026 {siteConfig.name}. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500">
              Powered by{' '}
              <a
                href="https://rovty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
              >
                Rovty (Pvt) Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
