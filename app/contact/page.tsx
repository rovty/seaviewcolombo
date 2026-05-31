'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/lib/data';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const WEB3FORMS_ACCESS_KEY = 'f9a82cd9-2963-40a6-b8a4-22221f8f73d4';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('botcheck')) {
      setIsSubmitting(false);
      return;
    }

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        setIsSubmitted(true);
        return;
      }

      setSubmitError(
        result.body?.message ||
        result.message ||
        'Something went wrong while sending your inquiry. Please try again.'
      );
    } catch {
      setSubmitError('Unable to send your inquiry right now. Please try again in a moment or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Luxury apartment contact"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with Priyantha for booking inquiries, availability, and special requests
            </p>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-lg p-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your inquiry. Priyantha will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <a href="/">Return Home</a>
                </Button>
                <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                  <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury apartment contact"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            Contact Us
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Get in touch with Priyantha for booking inquiries, availability, and special requests
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Get in Touch
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                We&apos;re here to help you plan your perfect stay in Colombo. Reach out via WhatsApp for instant responses or fill out the inquiry form.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-50 border-2 border-green-100 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">WhatsApp</h3>
                      <p className="text-gray-600 text-sm md:text-base truncate">{siteConfig.phone}</p>
                    </div>
                    <div className="text-green-600 group-hover:translate-x-1 transition-transform flex-shrink-0">
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3">
                    Fastest response - Usually replies within minutes
                  </p>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block bg-sky-50 border-2 border-sky-100 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Email</h3>
                      <p className="text-gray-600 text-sm md:text-base truncate">{siteConfig.email}</p>
                    </div>
                    <div className="text-sky-600 group-hover:translate-x-1 transition-transform flex-shrink-0">
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3">
                    Best for detailed inquiries - Reply within 24 hours
                  </p>
                </a>

                <div className="bg-gray-50 border-2 border-gray-100 rounded-xl p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Location</h3>
                      <p className="text-gray-600 text-sm md:text-base">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Owner Info */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-3">Your Host</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  <span className="font-medium">Priyantha</span> is dedicated to making your stay in Colombo exceptional. With years of experience in hospitality, he ensures every guest enjoys a memorable experience.
                </p>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-5 md:p-6 lg:p-8 order-1 lg:order-2"
            >
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Send an Inquiry
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value={`New Booking Inquiry - ${siteConfig.name}`} />
                <input type="hidden" name="from_name" value={`${siteConfig.name} Website`} />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm md:text-base">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="mt-1 h-10 md:h-11"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 h-10 md:h-11"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm md:text-base">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-1 h-10 md:h-11"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-sm md:text-base">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      className="mt-1 h-10 md:h-11"
                      placeholder="Number of guests"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <Label htmlFor="checkIn" className="text-sm md:text-base">Check-In Date</Label>
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      className="mt-1 h-10 md:h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut" className="text-sm md:text-base">Check-Out Date</Label>
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      className="mt-1 h-10 md:h-11"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="property" className="text-sm md:text-base">Property Interested In</Label>
                  <Input
                    id="property"
                    name="property"
                    className="mt-1 h-10 md:h-11"
                    placeholder="E.g., Spectacular Sea View 3 Bedrooms"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="mt-1 min-h-[100px] md:min-h-[120px]"
                    rows={4}
                    placeholder="Tell us about your travel plans, special requests, or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 h-11 md:h-12 text-base md:text-lg"
                >
                  {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                {submitError ? (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </p>
                ) : null}

                <p className="text-xs md:text-sm text-gray-500 text-center">
                  By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Prefer Instant Messaging?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Get immediate assistance by reaching out on WhatsApp. Priyantha typically responds within minutes.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg">
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 md:space-y-6">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                What are the check-in and check-out times?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Check-in is from 2:30 PM and check-out is by 11:00 AM. Early check-in or late check-out may be arranged upon request.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                Is airport transfer available?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Yes, we can arrange airport transfers at an additional cost. Please contact us with your flight details.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                Are the apartments suitable for children?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Absolutely! Our apartments are family-friendly with ample space for children. We can provide baby cots upon request.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We accept bank transfers and major credit cards. Payment details will be provided upon booking confirmation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                Can I cancel or modify my booking?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Yes, cancellations and modifications are allowed up to 72 hours before check-in. Please refer to our cancellation policy for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
