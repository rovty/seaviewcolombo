import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apartments, attractions, siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Location',
  description: 'Our apartments are perfectly located in Colombo 03, within walking distance of major attractions like Galle Face, shopping malls, temples, and beaches.',
};

const generalMapUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`;

export default function LocationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/In-the-heart-of-clm/1.jpg"
            alt="Colombo 03 view"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prime Location in Colombo 03
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Experience the best of Colombo living with easy access to beaches, shopping, dining, and cultural attractions
          </p>
        </div>
      </section>

  {/* Map Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Find Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our luxury apartments are located in the prestigious Colombo 03 district, one of the most sought-after addresses in the city. Enjoy the convenience of having everything you need within walking distance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
              <iframe
                src={`https://maps.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=17&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${siteConfig.name} Location Map`}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Apartment Locations */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Each Apartment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The clearest way to show apartment locations is to give every listing its own Google Maps link. Guests can open the exact pin when it&apos;s available, or view the shared Colombo 03 area pin while exact links are still being added.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apartments.map((apartment) => {
              const mapUrl = apartment.mapUrl || generalMapUrl;
              const hasExactMap = Boolean(apartment.mapUrl);

              return (
                <div
                  key={apartment.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-[220px,1fr]">
                    <div className="relative h-52 sm:h-full min-h-[220px]">
                      <Image
                        src={apartment.images[0]}
                        alt={apartment.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 220px"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 mb-2">
                            {hasExactMap ? 'Exact Location' : 'Area Location'}
                          </p>
                          <h3 className="font-serif text-2xl font-bold text-gray-900">
                            {apartment.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {apartment.locationNote}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {apartment.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="bg-sky-600 hover:bg-sky-700">
                          <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Navigation className="w-4 h-4 mr-2" />
                            {hasExactMap ? 'Open Exact Map' : 'Open Area Map'}
                          </a>
                        </Button>

                        <Button asChild variant="outline" className="border-sky-600 text-sky-700 hover:bg-sky-50">
                          <Link href={`/apartments/${apartment.slug}`}>
                            View Apartment
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nearby Attractions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need is just a short walk away from our apartments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sky-600 text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{attraction.distance}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Colombo 03?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why this is Colombo&apos;s most desirable district for both tourists and business travelers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 lg:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/attraction-locations/colombo3.jpg"
                alt="Colombo 03 neighborhood"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    Central Business District
                  </h3>
                  <p className="text-gray-600">
                    Steps away from Colombo&apos;s financial center and corporate offices, ideal for business travelers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    Premium Shopping
                  </h3>
                  <p className="text-gray-600">
                    World-class shopping malls and boutiques within walking distance for all your retail needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    Dining Hub
                  </h3>
                  <p className="text-gray-600">
                    Home to the city&apos;s best restaurants, cafes, and nightlife, offering diverse culinary experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    Ocean Access
                  </h3>
                  <p className="text-gray-600">
                    Front-row access to the Indian Ocean with beautiful beaches and scenic ocean walks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Colombo 03?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book your luxury sea view apartment and explore the best of Colombo right from your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-gray-100">
              <Link href="/apartments">
                View Apartments
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
