import type { MetadataRoute } from 'next';
import { allServices, categories } from '@/lib/services';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/who-we-serve', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const categoryRoutes = categories.map((category) => ({
    path: category.href,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }));

  const serviceRoutes = allServices.map((service) => ({
    path: service.href,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
  ].map((route) => ({
    url: `${site.url}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
