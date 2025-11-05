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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
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

  // Case study pages
  const caseStudies = [
    '/case-studies/thaprachan-thai-seattle',
    '/case-studies/larb-thai-seattle',
    '/case-studies/chada-thai-lynnwood',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...cityPages, ...caseStudies]
}

