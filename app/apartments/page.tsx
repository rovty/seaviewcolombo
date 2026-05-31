import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Star, BedDouble, Bath, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apartments, siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Luxury Sea View Apartments in Colombo',
  description: 'Explore our collection of luxury sea view apartments in Colombo. Spacious 2 and 3 bedroom accommodations with rooftop pools and stunning ocean views.',
};

export default function ApartmentsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury apartment interior"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Luxury Apartments
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Experience the best of Colombo living in our handpicked collection of premium sea view apartments
          </p>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {apartments.map((apartment) => (
              <article
                key={apartment.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/apartments/${apartment.slug}`}>
                  <div className="relative h-72 lg:h-96 overflow-hidden">
                    <Image
                      src={apartment.images[0]}
                      alt={apartment.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900 text-lg">{apartment.rating}</span>
                      <span className="text-gray-600">/ 10</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                      <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
                        {apartment.name}
                      </h2>
                      <div className="flex items-center gap-6 text-white/90">
                        <span className="flex items-center gap-2">
                          <BedDouble className="w-5 h-5" />
                          {apartment.bedrooms} Bedrooms
                        </span>
                        <span className="flex items-center gap-2">
                          <Bath className="w-5 h-5" />
                          {apartment.bathrooms} Bathrooms
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {apartment.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-sm bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6">
                    {apartment.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {apartment.amenities.slice(0, 6).map((amenity) => (
                      <span
                        key={amenity}
                        className="flex items-center gap-1 text-sm text-gray-500"
                      >
                        <Check className="w-4 h-4 text-sky-600" />
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-sky-600 hover:bg-sky-700">
                      <Link href={`/apartments/${apartment.slug}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                      <a href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(`Hi, I'm interested in "${apartment.name}". Could you please provide more details?`)}`} target="_blank" rel="noopener noreferrer">
                        Inquire Now
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us directly via WhatsApp for instant booking assistance or fill out our contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                Contact on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
              <Link href="/contact">
                Send Inquiry
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
