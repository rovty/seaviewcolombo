import { MetadataRoute } from 'next';
import { apartments, siteConfig } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/apartments', '/gallery', '/location', '/contact'];

  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const apartmentRoutes = apartments.map((apartment) => ({
    url: `${siteConfig.url}/apartments/${apartment.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...apartmentRoutes];
}