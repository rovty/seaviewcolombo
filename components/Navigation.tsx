'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation, siteConfig } from '@/lib/data';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <Waves className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-colors ${
                isScrolled ? 'text-sky-600' : 'text-white'
              }`} />
              <span className={`font-serif text-base md:text-lg lg:text-xl font-semibold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs lg:text-sm font-medium transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-sky-600 hover:bg-sky-700 text-white h-9 lg:h-10 px-4 lg:px-6 text-xs lg:text-sm">
                <Link href="/contact" className="text-white">
                  Book Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors z-50 ${
                isScrolled || isOpen ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col pt-16 px-4 sm:px-6">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-900 border-b border-gray-100 hover:bg-gray-50 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
                className="mt-4 sm:mt-6"
              >
                <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white w-full h-11 sm:h-12 text-base sm:text-lg">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 sm:mt-8 pt-6 border-t border-gray-100"
              >
                <p className="text-xs sm:text-sm text-gray-500 mb-3">Contact Us</p>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sky-600 text-sm sm:text-base mb-2"
                >
                  WhatsApp: {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-sky-600 text-sm sm:text-base"
                >
                  {siteConfig.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
