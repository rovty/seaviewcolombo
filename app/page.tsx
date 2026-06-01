'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin, Waves, Wifi, Car, Users, Shield, Footprints,
  Star, BedDouble, Bath, ArrowRight, Phone, Mail, GlassWater
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apartments, features, attractions, siteConfig } from '@/lib/data';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const featureIcons: Record<string, React.ElementType> = {
  MapPin,
  Waves,
  SwimmingPool: GlassWater,
  Wifi,
  Car,
  Users,
  Shield,
  Footprints,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sea-view-apt/8.jpg"
            alt="Luxury sea view apartment in Colombo"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-sky-900/45 to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.14),transparent_40%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 text-balance leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
            Stay Above the Indian Ocean
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 md:mb-8 max-w-2xl mx-auto px-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            Experience premium sea view apartments in Colombo with rooftop pools, spacious accommodations, modern amenities, and breathtaking ocean views.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-6 sm:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
              <Link href="/apartments">
                View Apartments
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                Contact on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-0.5 h-2.5 md:w-1 md:h-3 bg-white/50 rounded-full mt-1.5 md:mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Apartments Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 md:mb-12 lg:mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4"
            >
              Our Luxury Apartments
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            >
              Spacious and elegantly furnished apartments with stunning ocean views
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {apartments.slice(0, 4).map((apartment) => (
              <motion.div
                key={apartment.id}
                variants={fadeInUp}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/apartments/${apartment.slug}`}>
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                    <Image
                      src={apartment.images[0]}
                      alt={apartment.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/90 backdrop-blur-sm px-2.5 md:px-3 py-1 md:py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900 text-sm">{apartment.rating}</span>
                      <span className="text-gray-600 text-xs hidden sm:inline">/ 10</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
                      <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-1">
                        {apartment.name}
                      </h3>
                      <div className="flex items-center gap-3 md:gap-4 text-white/90 text-xs md:text-sm">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          {apartment.bedrooms} Beds
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          {apartment.bathrooms} Baths
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {apartment.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-sky-50 text-sky-700 px-2 md:px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                      {apartment.description}
                    </p>
                    <div className="mt-3 md:mt-4 flex items-center text-sky-600 font-medium text-sm md:text-base group-hover:gap-2 transition-all">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-10 lg:mt-12"
          >
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 h-11 md:h-12 px-6 md:px-8 text-sm md:text-base">
              <Link href="/apartments">
                View All Apartments
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 md:mb-12 lg:mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4"
            >
              Why Choose Sea View Apartments Colombo
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            >
              Experience luxury living with world-class amenities and unparalleled ocean views
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8"
          >
            {features.map((feature) => {
              const IconComponent = featureIcons[feature.icon];
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="bg-white p-4 md:p-5 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <IconComponent className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-sky-600" />
                  </div>
                  <h3 className="font-serif text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Location Preview Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Prime Location in Colombo 03
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8">
                Our apartments are perfectly positioned in the heart of Colombo, offering easy access to the city&apos;s best attractions, shopping, dining, and entertainment.
              </p>
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 h-11 md:h-12 px-6 md:px-8 text-sm md:text-base">
                <Link href="/location">
                  Explore Location
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 md:gap-4">
              {attractions.slice(0, 4).map((attraction) => (
                <div
                  key={attraction.name}
                  className="bg-white p-3 md:p-4 rounded-lg shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
                    {attraction.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">{attraction.distance}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/attraction-locations/colombo-ocean-view.webp"
            alt="Colombo Ocean View"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-sky-800/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 lg:mb-6">
            Ready For Your Colombo Ocean View Stay?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Contact us today to book your luxury sea view apartment and experience the best of Colombo living.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-gray-100 px-6 md:px-8 py-5 md:py-6 h-auto text-sm md:text-base">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Contact on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-5 md:py-6 h-auto text-sm md:text-base">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-5 md:py-6 h-auto text-sm md:text-base">
              <Link href="/apartments">
                View Apartments
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
