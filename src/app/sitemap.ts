import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dineably.com'
  
  // Static pages
  const routes = [
    '',
    '/why-us',
    '/services',
    '/process',
    '/case-studies',
    '/faq',
    '/book-audit',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/book-audit' ? 0.9 : 0.8,
  }))

  // City pages
  const cityPages = [
    '/seattle-restaurant-marketing',
    '/bellevue-restaurant-marketing',
    '/kirkland-restaurant-marketing',
    '/redmond-restaurant-marketing',
    '/lynnwood-restaurant-marketing',
    '/woodinville-restaurant-marketing',
    '/bothell-restaurant-marketing',
    '/shoreline-restaurant-marketing',
    '/edmonds-restaurant-marketing',
    '/renton-restaurant-marketing',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...cityPages]
}

