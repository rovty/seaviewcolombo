import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Star, BedDouble, Bath, Check, ArrowLeft, Phone, Mail, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { apartments, siteConfig } from '@/lib/data';

interface ApartmentPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ApartmentPageProps): Promise<Metadata> {
  const apartment = apartments.find((a) => a.slug === params.slug);

  if (!apartment) {
    return {
      title: 'Apartment Not Found',
    };
  }

  return {
    title: `${apartment.name} | Sea View Colombo`,
    description: apartment.description,
    openGraph: {
      title: `${apartment.name} | Sea View Colombo`,
      description: apartment.description,
      images: apartment.images.slice(0, 1),
    },
  };
}

export async function generateStaticParams() {
  return apartments.map((apartment) => ({
    slug: apartment.slug,
  }));
}

export default function ApartmentPage({ params }: ApartmentPageProps) {
  const apartment = apartments.find((a) => a.slug === params.slug);

  if (!apartment) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/apartments"
            className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Apartments
          </Link>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={apartment.images[0]}
              alt={apartment.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-gray-900 text-lg">{apartment.rating}</span>
              <span className="text-gray-600">/ 10</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {apartment.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative h-36 lg:h-[242px] rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${apartment.name} - Image ${index + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {apartment.name}
            </h1>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 mb-6 text-gray-600">
              <span className="flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-sky-600" />
                {apartment.bedrooms} Bedrooms
              </span>
              <span className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-sky-600" />
                {apartment.bathrooms} Bathrooms
              </span>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 leading-relaxed">
                {apartment.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Property Features
              </h2>
              <div className="flex flex-wrap gap-3">
                {apartment.features.map((feature) => (
                  <Badge
                    key={feature}
                    className="bg-sky-100 text-sky-700 hover:bg-sky-100 px-4 py-2"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {apartment.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <Check className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Preview */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {apartment.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-48 rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={image}
                      alt={`${apartment.name} - ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">
                Book This Apartment
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Bedrooms</span>
                  <span className="font-medium text-gray-900">{apartment.bedrooms}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Bathrooms</span>
                  <span className="font-medium text-gray-900">{apartment.bathrooms}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-medium text-gray-900 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {apartment.rating}/10
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white py-6">
                  <a href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(`Hi, I'm interested in booking "${apartment.name}". Could you please provide availability and rates?`)}`} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-sky-600 text-sky-600 hover:bg-sky-50 py-6">
                  <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Booking Inquiry: ${apartment.name}`)}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email Inquiry
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full py-6">
                  <Link href="/contact">
                    Fill Inquiry Form
                  </Link>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Contact Priyantha directly for instant booking assistance and best rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Apartments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Explore Other Apartments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apartments
              .filter((a) => a.slug !== apartment.slug)
              .slice(0, 3)
              .map((otherApartment) => (
                <Link
                  key={otherApartment.id}
                  href={`/apartments/${otherApartment.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={otherApartment.images[0]}
                      alt={otherApartment.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900 text-sm">{otherApartment.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {otherApartment.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{otherApartment.bedrooms} Beds</span>
                      <span>{otherApartment.bathrooms} Baths</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
