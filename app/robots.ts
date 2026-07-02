import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Ocultamos endpoints internos si los hubiera
    },
    sitemap: 'https://consultorialazaro.com/sitemap.xml',
  };
}
