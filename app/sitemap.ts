import { MetadataRoute } from 'next';
import { serviciosData } from '@/lib/data/servicios';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://consultorialazaro.com';

  // Páginas estáticas principales
  const staticPages = [
    '',
    '/servicios',
    '/quienes-somos',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Páginas dinámicas de servicios
  const dynamicServices = serviciosData.map((servicio) => ({
    url: `${baseUrl}/servicios/${servicio.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...dynamicServices];
}
