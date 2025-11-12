import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Marketing Services Seattle | Dineably",
  description: "Full-service restaurant marketing in Seattle: custom websites, local SEO, Google Ads & social media for restaurants in Bellevue, Kirkland, Redmond.",
  alternates: {
    canonical: "https://dineably.com/services",
  },
  openGraph: {
    title: "Restaurant Marketing Services Seattle | Dineably",
    description: "Full-service restaurant marketing in Seattle: custom websites, local SEO, Google Ads & social media for restaurants in Bellevue, Kirkland, Redmond.",
    url: "https://dineably.com/services",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably Restaurant Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing Services Seattle | Dineably",
    description: "Full-service restaurant marketing in Seattle: custom websites, local SEO, Google Ads & social media for restaurants in Bellevue, Kirkland, Redmond.",
  },
};

export default function Services() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dineably.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://dineably.com/services"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Full-service restaurant marketing designed to drive orders, calls, and foot traffic.
            </p>
          </div>
        </div>
      </section>

      {/* TL;DR Block - Above the fold */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">TL;DR: What We Do</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We build sub-2.5s restaurant websites, optimize your Google Business Profile to rank in the local 3-pack, and run geo-targeted Google & Meta ads during peak dining hours. All services include closed-loop tracking that ties orders back to specific campaigns, so you know exactly what's working.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>2-4 week website launch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>4-6 month SEO results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Same-day ad launches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-20">
          
          {/* Restaurant Websites & CRO */}
          <div className="border-l-4 border-orange-500 pl-8 py-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3">Restaurant Websites & CRO</h2>
                <p className="text-xl text-gray-400 mb-6">
                  Lightning-fast, conversion-optimized websites that turn visitors into orders
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Speed Targets</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Sub-2.5 second load times (Lighthouse 90+ scores)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Image optimization & lazy loading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>CDN delivery for instant global access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Mobile-first responsive design</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Sticky Order Buttons</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Always-visible &quot;Order Online&quot; CTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Click-to-call buttons with tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Integration with major ordering platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Smart positioning for max conversion</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Reservations & Bookings</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>OpenTable, Resy, Yelp Reservations integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Real-time availability display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Email confirmation automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Waitlist management for busy hours</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Menu UX Excellence</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Organized categories with visual appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Hero images for top-selling dishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Clear allergen & dietary information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Strategic placement of high-margin items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Local SEO & GBP */}
          <div className="border-l-4 border-red-500 pl-8 py-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3">Local SEO & Google Business Profile</h2>
                <p className="text-xl text-gray-400 mb-6">
                  Dominate &quot;near me&quot; searches and Google Maps rankings
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Category Setup & Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Primary category selection (Thai, Asian Fusion, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Secondary categories for broader reach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Service attributes (delivery, dine-in, takeout)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Menu URL integration for direct orders</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Services & Attributes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Complete service area setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Health & safety attributes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Amenities (WiFi, parking, outdoor seating)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Accessibility features</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Posts & Content Cadence</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Weekly posts (specials, events, updates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Holiday & seasonal promotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Behind-the-scenes content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>UTM-tracked links for measurement</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Photo Guidelines & Q&A</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Professional food photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Interior/exterior shots (natural lighting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Monthly photo refresh schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Q&A management (hours, menu, parking)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paid Ads */}
          <div className="border-l-4 border-orange-500 pl-8 py-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3">Paid Advertising (Google & Meta)</h2>
                <p className="text-xl text-gray-400 mb-6">
                  Profitable ad campaigns that scale your order volume
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Strategic Dayparting</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Lunch rush campaigns (11am–2pm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Dinner peak targeting (5pm–9pm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Weekend brunch promotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Slow-period offers to fill seats</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Radius & Geo-Targeting</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>3–5 mile radius for dine-in campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>10+ mile radius for delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Zip code exclusions (low performers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Competitor location conquesting</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Branded vs. Non-Brand Split</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Branded: defend your restaurant name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Non-brand: &quot;Thai food near me&quot;, &quot;best pad thai&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Category campaigns (Thai delivery, Asian takeout)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Dish-specific ads (curry, pho, sushi)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Call-Only Campaigns</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Lunch rush: mobile call-only ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Higher conversions for phone orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Call tracking with detailed analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Facebook/Instagram Story ads for awareness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photo/Video */}
          <div className="border-l-4 border-red-500 pl-8 py-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3">Photo & Video Production</h2>
                <p className="text-xl text-gray-400 mb-6">
                  Mouthwatering visuals that stop the scroll and drive orders
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Menu Hero Photography</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Professional food styling & lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Top 10 dishes for website & ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Lifestyle shots (people enjoying meals)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Action shots (noodles being tossed, pours)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Reels & TikTok Ad Cuts</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>15–30 second vertical video ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Behind-the-scenes kitchen footage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Testimonials & customer reactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Trending audio & format optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews & Reputation */}
          <div className="border-l-4 border-orange-500 pl-8 py-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3">Reviews & Reputation Management</h2>
                <p className="text-xl text-gray-400 mb-6">
                  Build trust and visibility with strategic review generation
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">QR Review Flows</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Table tent QR codes for easy reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Receipt integration for takeout orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>SMS follow-up campaigns (post-visit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Email campaigns for delivery customers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Response Playbook</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>24-hour response to all reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Templates for common feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Negative review damage control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Google/Yelp flag & removal requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Analytics & Reporting */}
          <div className="border-l-4 border-red-500 pl-8 py-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3">Analytics & Reporting</h2>
                <p className="text-xl text-gray-400 mb-6">
                  Data-driven insights that inform strategic decisions
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Call & Conversion Tracking</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Dynamic phone number insertion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Call recording & quality monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Order button click event tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Form submissions & reservations</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Monthly Action Reports</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Traffic, rankings, and conversion metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Ad spend ROI and ROAS calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Competitor benchmark comparisons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Recommended optimizations & next steps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Packages Section - Table Format for AEO */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="italic font-serif">Package</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Flexible solutions designed for restaurants at every stage of growth
            </p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto overflow-y-visible pt-20">
            <table className="w-full border-collapse bg-black border border-white/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-orange-900/20 to-red-900/20">
                  <th className="px-6 py-5 text-left text-sm font-bold text-white border-b border-white/10">Feature</th>
                  <th className="px-6 py-5 text-center border-b border-l border-white/10">
                    <div className="text-lg font-bold text-white mb-1">Launch</div>
                    <div className="text-xs text-gray-400 font-normal">For New Restaurants</div>
                  </th>
                  <th className="px-6 py-5 text-center border-b border-l border-white/10 bg-orange-500/10 relative">
                    <div className="animate-bounce absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg shadow-orange-500/50">
                      Most Popular
                    </div>
                    <div className="text-lg font-bold text-white mb-1">Grow</div>
                    <div className="text-xs text-gray-400 font-normal">Best Value</div>
                  </th>
                  <th className="px-6 py-5 text-center border-b border-l border-white/10">
                    <div className="text-lg font-bold text-white mb-1">Scale</div>
                    <div className="text-xs text-gray-400 font-normal">Multi-Location</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="px-6 py-4 text-white font-semibold border-b border-white/10">Pricing</td>
                  <td className="px-6 py-4 text-center text-gray-300 border-b border-l border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">$199<span className="text-base">/mo</span></div>
                    <div className="text-sm text-gray-400">One-time setup $495</div>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300 border-b border-l border-white/10 bg-orange-500/5">
                    <div className="text-2xl font-bold text-white mb-1">$499<span className="text-base">/mo</span></div>
                    <div className="text-sm text-gray-400">One-time setup $995</div>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300 border-b border-l border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">$1,499<span className="text-base">/mo</span></div>
                    <div className="text-sm text-gray-400">One-time setup $4,999</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-white font-semibold border-b border-white/10">Timeline</td>
                  <td className="px-6 py-3 text-center text-gray-300 border-b border-l border-white/10">3-5 days</td>
                  <td className="px-6 py-3 text-center text-gray-300 border-b border-l border-white/10 bg-orange-500/5">7-10 days</td>
                  <td className="px-6 py-3 text-center text-gray-300 border-b border-l border-white/10">3-4 weeks</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Responsive Website</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10">
                    <span className="text-orange-500">✓</span> up to 5 pages
                  </td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5">
                    <span className="text-orange-500">✓</span> up to 10 pages
                  </td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10">
                    <span className="text-orange-500">✓</span> up to 25
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Google Business Profile Setup</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span></td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span></td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Local SEO</td>
                  <td className="px-6 py-3 text-center text-gray-400 border-b border-l border-white/10">Basic</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span> Advanced</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span> Enterprise</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Google Ads Management</td>
                  <td className="px-6 py-3 text-center text-gray-400 border-b border-l border-white/10">—</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span></td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Facebook & Instagram Ads</td>
                  <td className="px-6 py-3 text-center text-gray-400 border-b border-l border-white/10">—</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span></td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Professional Photography</td>
                  <td className="px-6 py-3 text-center text-gray-400 border-b border-l border-white/10">—</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span> 10 dishes</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span> 20+ dishes</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Video Production</td>
                  <td className="px-6 py-3 text-center text-gray-400 border-b border-l border-white/10">—</td>
                  <td className="px-6 py-3 text-center text-gray-400 border-b border-l border-white/10 bg-orange-500/5">—</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span> Reels & ads</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Call Tracking & Analytics</td>
                  <td className="px-6 py-3 text-center text-gray-400 border-b border-l border-white/10">Basic</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span> Full tracking</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span> Multi-location</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300 border-b border-white/10">Monthly Reports</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span></td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span> + Weekly updates</td>
                  <td className="px-6 py-3 text-center border-b border-l border-white/10"><span className="text-orange-500">✓</span> + Real-time dashboard</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-gray-300">Dedicated Account Manager</td>
                  <td className="px-6 py-3 text-center border-l border-white/10"><span className="text-orange-500">✓</span></td>
                  <td className="px-6 py-3 text-center border-l border-white/10 bg-orange-500/5"><span className="text-orange-500">✓</span></td>
                  <td className="px-6 py-3 text-center border-l border-white/10"><span className="text-orange-500">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Launch CTA */}
            <Link href="#contact" className="w-full">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg flex items-center justify-center gap-2">
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
            
            {/* Grow CTA */}
            <Link href="#contact" className="w-full">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2">
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
            
            {/* Scale CTA */}
            <Link href="#contact" className="w-full">
              <button className="w-full bg-transparent border-2 border-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-500/10 transition-all flex items-center justify-center gap-2">
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Keep original cards for mobile fallback */}
          <div className="hidden">
            <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all">
              <div className="text-sm text-orange-400 font-semibold mb-2 uppercase">For New Restaurants</div>
              <h3 className="text-2xl font-bold mb-2">Launch</h3>
              <p className="text-gray-400 mb-6">Get online and start driving orders fast</p>
              
              <div className="mb-6">
                <div className="text-2xl font-bold mb-1">Starting at $3,500</div>
                <div className="text-sm text-gray-500">One-time + $1,500/mo</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">5-page responsive website</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Google Business Profile setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Basic on-page SEO</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Review generation QR codes</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Monthly performance reports</span>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-6">
                Timeline: 3–4 weeks to launch
              </div>

              <Link href="#contact">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Grow Package */}
            <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border-2 border-orange-500/50 rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-sm text-orange-400 font-semibold mb-2 uppercase">For Growing Brands</div>
              <h3 className="text-2xl font-bold mb-2">Grow</h3>
              <p className="text-gray-400 mb-6">Scale orders with SEO and paid ads</p>
              
              <div className="mb-6">
                <div className="text-2xl font-bold mb-1">Starting at $5,000</div>
                <div className="text-sm text-gray-500">One-time + $2,500/mo</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300 font-semibold">Everything in Launch, plus:</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Advanced local SEO campaigns</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Google Ads management ($1,500/mo spend)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Facebook & Instagram ads</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Professional menu photography (10 dishes)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Call tracking & conversion analytics</span>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-6">
                Timeline: 4–6 weeks to full deployment
              </div>

              <Link href="#contact">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Scale Package */}
            <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all">
              <div className="text-sm text-orange-400 font-semibold mb-2 uppercase">For Multi-Location Brands</div>
              <h3 className="text-2xl font-bold mb-2">Scale</h3>
              <p className="text-gray-400 mb-6">Enterprise solutions for maximum growth</p>
              
              <div className="mb-6">
                <div className="text-2xl font-bold mb-1">Custom Pricing</div>
                <div className="text-sm text-gray-500">Based on locations & goals</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300 font-semibold">Everything in Grow, plus:</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Multi-location website management</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Enterprise ad campaigns ($5K+/mo spend)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Video production (Reels & TikTok)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Dedicated account manager</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-300">Weekly strategy calls</span>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-6">
                Timeline: Custom based on scope
              </div>

              <Link href="#contact">
                <button className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Not sure which package is right for you?</p>
            <Link href="#contact" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              Book a Free 15-Minute Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

