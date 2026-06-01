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
  mapUrl?: string;
  locationNote?: string;
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
      '/images/sea-view-apt/1.jpg',
      '/images/sea-view-apt/2.jpg',
      '/images/sea-view-apt/3.jpg',
      '/images/sea-view-apt/4.jpg',
      '/images/sea-view-apt/5.jpg',
      '/images/sea-view-apt/6.jpg',
      '/images/sea-view-apt/7.jpg',
      '/images/sea-view-apt/8.jpg',
      '/images/sea-view-apt/9.jpg',
      '/images/sea-view-apt/10.jpg',
      '/images/sea-view-apt/11.jpg',
      '/images/sea-view-apt/12.jpg',
      '/images/sea-view-apt/13.jpg',
    ],
    featured: true,
    mapUrl: 'https://maps.app.goo.gl/gDw2gCi8vC2hLeaK9?g_st=iw',
    locationNote: 'Exact Google Maps place link available.',
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
      '/images/next-to-indian/1.jpg',
      '/images/next-to-indian/2.jpg',
      '/images/next-to-indian/3.jpg',
      '/images/next-to-indian/4.jpg',
      '/images/next-to-indian/5.jpg',
      '/images/next-to-indian/6.jpg',
      '/images/next-to-indian/7.jpg',
      '/images/next-to-indian/8.jpg',
      '/images/next-to-indian/9.jpg',
      '/images/next-to-indian/10.jpg',
      '/images/next-to-indian/11.jpg',
      '/images/next-to-indian/12.jpg',
      '/images/next-to-indian/13.jpg',
    ],
    featured: true,
    mapUrl: 'https://maps.app.goo.gl/1HSuXvgmZn3r4DBH7?g_st=iw',
    locationNote: 'Exact Google Maps place link available.',
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
      '/images/lovely-sea-view-apt/1.jpg',
      '/images/lovely-sea-view-apt/2.jpg',
      '/images/lovely-sea-view-apt/3.jpg',
      '/images/lovely-sea-view-apt/4.jpg',
      '/images/lovely-sea-view-apt/5.jpg',
      '/images/lovely-sea-view-apt/6.jpg',
      '/images/lovely-sea-view-apt/7.jpg',
      '/images/lovely-sea-view-apt/8.jpg',
      '/images/lovely-sea-view-apt/9.jpg',
      '/images/lovely-sea-view-apt/10.jpg',
      '/images/lovely-sea-view-apt/11.jpg',
      '/images/lovely-sea-view-apt/12.jpg',
      '/images/lovely-sea-view-apt/13.jpg',
      '/images/lovely-sea-view-apt/14.jpg',
    ],
    featured: true,
    mapUrl: 'https://maps.app.goo.gl/RUnEmFuJSBu5HJzQ7?g_st=iw',
    locationNote: 'Exact Google Maps place link available.',
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
      '/images/In-the-heart-of-clm/1.jpg',
      '/images/In-the-heart-of-clm/2.jpg',
      '/images/In-the-heart-of-clm/3.jpg',
      '/images/In-the-heart-of-clm/4.jpg',
      '/images/In-the-heart-of-clm/5.jpg',
      '/images/In-the-heart-of-clm/6.jpg',
      '/images/In-the-heart-of-clm/7.jpg',
      '/images/In-the-heart-of-clm/8.jpg',
      '/images/In-the-heart-of-clm/9.jpg',
      '/images/In-the-heart-of-clm/10.jpg',
      '/images/In-the-heart-of-clm/11.jpg',
      '/images/In-the-heart-of-clm/12.jpg',
      '/images/In-the-heart-of-clm/13.jpg',
      '/images/In-the-heart-of-clm/14.jpg',
      '/images/In-the-heart-of-clm/15.jpg',
    ],
    featured: true,
    mapUrl: 'https://maps.app.goo.gl/cBuJPGFYdUqodDCe7?g_st=iw',
    locationNote: 'Exact Google Maps place link available.',
  },
];

export const attractions: Attraction[] = [
  {
    name: 'One Galle Face',
    description: 'Premium shopping mall with international brands, dining, and entertainment overlooking the ocean.',
    distance: '5 min walk',
    image: '/images/attraction-locations/one_galle_face.jpg',
  },
  {
    name: 'Colombo City Centre',
    description: 'Modern shopping complex featuring retail stores, food court, and cinema.',
    distance: '10 min walk',
    image: '/images/attraction-locations/colombo-city-centre.jpg',
  },
  {
    name: 'Gangaramaya Temple',
    description: 'One of Sri Lanka\'s most important Buddhist temples with stunning architecture.',
    distance: '15 min walk',
    image: '/images/attraction-locations/gangarama_temple.jpg',
  },
  {
    name: 'Kollupitiya Beach',
    description: 'Beautiful sandy beach perfect for morning walks and sunset views.',
    distance: '2 min walk',
    image: '/images/attraction-locations/kollupitiya_beach.jpg',
  },
  {
    name: 'National Art Gallery',
    description: 'Showcasing Sri Lankan art and contemporary exhibitions.',
    distance: '20 min walk',
    image: '/images/attraction-locations/national_art_gallary.jpg',
  },
  {
    name: 'Colombo Town Hall',
    description: 'Historic colonial building and architectural landmark.',
    distance: '15 min walk',
    image: '/images/attraction-locations/colombo_town_hall.jpg',
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
  // All local images from public/images subfolders
    // Sea View Apt
  // Sea View Apt
  ...Array.from({length: 13}, (_, i) => {
    const n = i + 1;
    const livingAreasSeaView: number[] = [3, 5, 8, 13];
    const bedroomsSeaView: number[] = [4, 9, 12];
    const rooftopPoolSeaView: number[] = [];
    const oceanViewsSeaView: number[] = [10];
    let category = 'Sea View Apartment';
    if (livingAreasSeaView.includes(n)) category = 'Living Areas';
    if (bedroomsSeaView.includes(n)) category = 'Bedrooms';
    if (rooftopPoolSeaView.includes(n)) category = 'Rooftop Pool';
    if (oceanViewsSeaView.includes(n)) category = 'Ocean Views';
    return {
      src: `/images/sea-view-apt/${n}.jpg`,
      category,
      alt: `Sea View Apartment Image ${n}`
    };
  }),
  // Next to Indian Ocean
  ...Array.from({length: 13}, (_, i) => {
    const n = i + 1;
    const livingAreasNextToIndian: number[] = [6, 7, 8];
    const bedroomsNextToIndian: number[] = [1, 5, 9, 10];
    const rooftopPoolNextToIndian: number[] = [2, 3, 11];
    let category = 'Next to Indian Ocean';
    if (livingAreasNextToIndian.includes(n)) category = 'Living Areas';
    if (bedroomsNextToIndian.includes(n)) category = 'Bedrooms';
    if (rooftopPoolNextToIndian.includes(n)) category = 'Rooftop Pool';
    return {
      src: `/images/next-to-indian/${n}.jpg`,
      category,
      alt: `Next to Indian Ocean Image ${n}`
    };
  }),
  // Lovely Sea View Apartment
  ...Array.from({length: 14}, (_, i) => {
    const n = i + 1;
    const livingAreasLovely: number[] = [1, 4, 7, 14];
    const bedroomsLovely: number[] = [3, 5, 6, 11];
    const rooftopPoolLovely: number[] = [2];
    const oceanViewsLovely: number[] = [8, 9];
    let category = 'Lovely Sea View Apartment';
    if (livingAreasLovely.includes(n)) category = 'Living Areas';
    if (bedroomsLovely.includes(n)) category = 'Bedrooms';
    if (rooftopPoolLovely.includes(n)) category = 'Rooftop Pool';
    if (oceanViewsLovely.includes(n)) category = 'Ocean Views';
    return {
      src: `/images/lovely-sea-view-apt/${n}.jpg`,
      category,
      alt: `Lovely Sea View Apartment Image ${n}`
    };
  }),
  // In The Heart Of Colombo
  ...Array.from({length: 15}, (_, i) => {
    const n = i + 1;
    const livingAreasHeart: number[] = [1, 2, 4, 8];
    const bedroomsHeart: number[] = [3, 6, 11];
    const rooftopPoolHeart: number[] = [5];
    const oceanViewsHeart: number[] = [13, 15];
    let category = 'In The Heart Of Colombo';
    if (livingAreasHeart.includes(n)) category = 'Living Areas';
    if (bedroomsHeart.includes(n)) category = 'Bedrooms';
    if (rooftopPoolHeart.includes(n)) category = 'Rooftop Pool';
    if (oceanViewsHeart.includes(n)) category = 'Ocean Views';
    return {
      src: `/images/In-the-heart-of-clm/${n}.jpg`,
      category,
      alt: `In The Heart Of Colombo Image ${n}`
    };
  }),
];

export const siteConfig = {
  name: 'Sea View Apartments Colombo',
  tagline: 'Luxury Sea View Apartments in the Heart of Colombo',
  url: 'https://seaviewapartmentscolombo.com',
  email: 'info@seaviewapartmentscolombo.com',
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
