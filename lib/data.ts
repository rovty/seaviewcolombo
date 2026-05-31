export interface Apartment {
  id: string;
  slug: string;
  name: string;
  rating: number;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  description: string;
  longDescription: string;
  amenities: string[];
  images: string[];
  featured: boolean;
}

export interface Attraction {
  name: string;
  description: string;
  distance: string;
  image: string;
}

export const apartments: Apartment[] = [
  {
    id: '1',
    slug: 'spectacular-sea-view-3-bedrooms',
    name: 'Spectacular Sea View 3 Bedrooms Apartment',
    rating: 9.6,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Rooftop Pool', 'Ocean View Balcony', 'Fitness Centre'],
    description: 'Experience unparalleled luxury in this stunning 3-bedroom apartment featuring breathtaking ocean views, a private rooftop pool, and modern amenities.',
    longDescription: 'This spectacular sea view apartment offers the ultimate Colombo luxury experience. Wake up to panoramic views of the Indian Ocean from your private balcony. The apartment features a spacious open-plan living area with floor-to-ceiling windows, a fully equipped modern kitchen, and three beautifully appointed bedrooms. Enjoy exclusive access to the rooftop swimming pool while taking in 360-degree views of the Colombo skyline and ocean.',
    amenities: ['Rooftop Swimming Pool', 'Ocean View Balcony', 'Fitness Centre', 'Air Conditioning', 'Free WiFi', 'Smart TV', 'Fully Equipped Kitchen', 'Washing Machine', 'Private Parking', '24/7 Security', 'Elevator Access'],
    images: [
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'next-to-indian-ocean',
    name: 'Next to an Indian Ocean',
    rating: 9.1,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Ocean View', 'Rooftop Pool'],
    description: 'A spacious 3-bedroom apartment perched above the Indian Ocean with stunning sea views and access to a rooftop pool.',
    longDescription: 'Positioned perfectly to maximize ocean views, this luxurious 3-bedroom apartment puts you right next to the Indian Ocean. The open-concept living space is flooded with natural light, while the private balcony offers the perfect spot for morning coffee or evening cocktails. Guests enjoy access to the building\'s rooftop pool, providing a refreshing escape with spectacular sea views.',
    amenities: ['Rooftop Swimming Pool', 'Ocean View', 'Air Conditioning', 'Free WiFi', 'Smart TV', 'Fully Equipped Kitchen', 'Washing Machine', 'Private Parking', '24/7 Security', 'Elevator Access', 'Sea View Balcony'],
    images: [
      'https://images.pexels.com/photos/2506991/pexels-photo-2506991.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'lovely-sea-view-apartment',
    name: 'Lovely Sea View Apartment',
    rating: 9.2,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Sea View Terrace', 'Private Parking'],
    description: 'A charming 3-bedroom apartment with a private sea view terrace, perfect for families seeking a relaxing coastal retreat.',
    longDescription: 'This lovely sea view apartment combines comfort with stunning vistas. The highlight is the private terrace where you can watch the sunset over the Indian Ocean. Inside, you\'ll find three comfortable bedrooms, a modern kitchen, and a cozy living area. Private parking ensures convenience, while the terrace provides an outdoor sanctuary for relaxation.',
    amenities: ['Sea View Terrace', 'Private Parking', 'Air Conditioning', 'Free WiFi', 'Smart TV', 'Fully Equipped Kitchen', 'Washing Machine', '24/7 Security', 'Elevator Access', 'Outdoor Furniture'],
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260',
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'heart-of-colombo',
    name: 'In The Heart Of Colombo',
    rating: 9.0,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Private Pool', 'Fitness Centre', 'Ocean View Balcony'],
    description: 'A modern 2-bedroom apartment in central Colombo featuring a private pool, fitness centre access, and ocean views.',
    longDescription: 'Located in the vibrant heart of Colombo, this modern 2-bedroom apartment offers the perfect blend of city convenience and coastal relaxation. Enjoy your private pool or work out in the fitness centre. The ocean view balcony provides a peaceful retreat, while Colombo\'s attractions, restaurants, and shopping are just steps away.',
    amenities: ['Private Pool', 'Fitness Centre', 'Ocean View Balcony', 'Air Conditioning', 'Free WiFi', 'Smart TV', 'Fully Equipped Kitchen', 'Washing Machine', 'Private Parking', '24/7 Security', 'City Center Location'],
    images: [
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/2506991/pexels-photo-2506991.jpeg?auto=compress&cs=tinysrgb&w=1260',
    ],
    featured: true,
  },
];

export const attractions: Attraction[] = [
  {
    name: 'One Galle Face',
    description: 'Premium shopping mall with international brands, dining, and entertainment overlooking the ocean.',
    distance: '5 min walk',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Colombo City Centre',
    description: 'Modern shopping complex featuring retail stores, food court, and cinema.',
    distance: '10 min walk',
    image: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Gangaramaya Temple',
    description: 'One of Sri Lanka\'s most important Buddhist temples with stunning architecture.',
    distance: '15 min walk',
    image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Kollupitiya Beach',
    description: 'Beautiful sandy beach perfect for morning walks and sunset views.',
    distance: '2 min walk',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'National Art Gallery',
    description: 'Showcasing Sri Lankan art and contemporary exhibitions.',
    distance: '20 min walk',
    image: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Colombo Town Hall',
    description: 'Historic colonial building and architectural landmark.',
    distance: '15 min walk',
    image: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const features = [
  {
    icon: 'MapPin',
    title: 'Prime Colombo 03 Location',
    description: 'Situated in the heart of Colombo\'s most desirable district',
  },
  {
    icon: 'Waves',
    title: 'Ocean View Apartments',
    description: 'Breathtaking views of the Indian Ocean from every apartment',
  },
  {
    icon: 'SwimmingPool',
    title: 'Rooftop Swimming Pool',
    description: 'Infinity pool with panoramic ocean and city views',
  },
  {
    icon: 'Wifi',
    title: 'Free High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet',
  },
  {
    icon: 'Car',
    title: 'Free Parking',
    description: 'Secure private parking included with every booking',
  },
  {
    icon: 'Users',
    title: 'Family Friendly',
    description: 'Spacious accommodations perfect for families',
  },
  {
    icon: 'Shield',
    title: '24/7 Security',
    description: 'Round-the-clock security for your peace of mind',
  },
  {
    icon: 'Footprints',
    title: 'Walking Distance to Attractions',
    description: 'Major attractions just steps from your door',
  },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Living Areas', alt: 'Modern living room with ocean view' },
  { src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Living Areas', alt: 'Spacious open-plan living space' },
  { src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Bedrooms', alt: 'Luxurious master bedroom' },
  { src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Bedrooms', alt: 'Comfortable guest bedroom' },
  { src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Ocean Views', alt: 'Sunset over Indian Ocean' },
  { src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Ocean Views', alt: 'Stunning ocean panorama' },
  { src: 'https://images.pexels.com/photos/2506991/pexels-photo-2506991.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Rooftop Pool', alt: 'Rooftop infinity pool' },
  { src: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Rooftop Pool', alt: 'Pool with city view' },
  { src: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Building Facilities', alt: 'Building exterior' },
  { src: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Building Facilities', alt: 'Building entrance' },
];

export const siteConfig = {
  name: 'Sea View Apartments Colombo',
  tagline: 'Luxury Sea View Apartments in the Heart of Colombo',
  url: 'https://seaviewapartmentscolombo.com',
  email: 'Priyantha60@hotmail.com',
  phone: '+61 433 824 066',
  whatsappLink: 'https://wa.me/61433824066',
  address: 'Colombo 03, Sri Lanka',
  coordinates: { lat: 6.9271, lng: 79.8612 },
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Apartments', href: '/apartments' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Location', href: '/location' },
  { name: 'Contact', href: '/contact' },
];
