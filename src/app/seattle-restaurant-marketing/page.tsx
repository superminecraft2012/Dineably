import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Premier restaurant marketing agency in Seattle. We help Thai and Asian restaurants scale with fast websites, local SEO, and profitable ads. 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/seattle-restaurant-marketing",
  },
  openGraph: {
    title: "Seattle Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Premier restaurant marketing agency in Seattle. Fast websites, local SEO, and profitable ads for Thai and Asian restaurants.",
    url: "https://dineably.com/seattle-restaurant-marketing",
  },
};

export default function SeattleRestaurantMarketing() {
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
        "name": "Seattle Restaurant Marketing",
        "item": "https://dineably.com/seattle-restaurant-marketing"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Seattle Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            We help Seattle restaurants turn web traffic into orders with fast websites, local SEO, and profitable advertising.
          </p>
          <Link href="#contact">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30">
              Book Your Free Audit
            </button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Dineably specializes in restaurant marketing for Seattle's competitive dining scene. We work exclusively with restaurant brands—particularly Thai, Asian, and local establishments—helping them scale from 6 and 7 figures to 8 figures with reliable, profitable digital strategies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Unlike general marketing agencies, we understand the unique challenges Seattle restaurants face: high competition in neighborhoods like Capitol Hill, Fremont, and Ballard; mobile-first customers searching "near me" on their way to dinner; and the need for lightning-fast websites that work flawlessly on phones. Our websites average sub-2.5 second load times, and our local SEO campaigns consistently place clients in the top 3 Google Maps results.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We've helped Seattle restaurants increase online orders by an average of 45% within 90 days. Our proven process combines <Link href="/services" className="text-orange-400 hover:text-orange-300">conversion-optimized websites</Link>, aggressive local SEO to dominate "Thai restaurant Seattle" and related searches, and data-driven advertising campaigns that target lunch rushes in SoDo and dinner crowds near Pike Place Market.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Every client receives transparent reporting showing exactly where orders come from—whether it's organic search, Google Maps, paid ads, or direct traffic. We track phone calls, online orders, and direction requests, tying everything back to revenue. You'll know your exact ROI, not just vanity metrics like impressions or clicks.
            </p>

            <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Seattle Restaurants Choose Dineably</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span><strong>Restaurant-Only Focus:</strong> We only work with restaurants, so we know exactly what drives orders in Seattle's market.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span><strong>Local SEO Expertise:</strong> Dominate "near me" searches and Google Maps in competitive Seattle neighborhoods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span><strong>Speed Obsessed:</strong> Sub-2.5s load times guaranteed. Every second counts when customers are hungry.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span><strong>Transparent ROI:</strong> Track every order back to its source with closed-loop conversion tracking.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">How We Help Seattle Restaurants</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services">
              <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-all h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Restaurant Websites</h3>
                <p className="text-gray-400 mb-4">Fast, mobile-optimized sites that turn visitors into orders with sticky CTAs and beautiful menu UX.</p>
                <div className="text-orange-400 text-sm font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services">
              <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-all h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Local SEO & Google Maps</h3>
                <p className="text-gray-400 mb-4">Dominate "Thai restaurant Seattle" searches and own the top 3 Google Maps positions in your neighborhood.</p>
                <div className="text-orange-400 text-sm font-semibold">Learn More →</div>
              </div>
            </Link>

            <Link href="/services">
              <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-all h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Paid Advertising</h3>
                <p className="text-gray-400 mb-4">Google and Meta ads optimized for lunch rushes and dinner crowds, targeting customers ready to order now.</p>
                <div className="text-orange-400 text-sm font-semibold">Learn More →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Seattle Restaurant Success Stories</h2>
          
          <div className="space-y-6">
            <Link href="/case-studies/thaprachan-seattle">
              <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Thaprachan Thai - Seattle</h3>
                    <p className="text-gray-400">Transformed slow website into conversion machine</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-400">+45%</div>
                    <div className="text-sm text-gray-400">Online Orders</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Load Time:</span>
                    <span className="ml-2 font-semibold">1.8s</span>
                  </div>
                  <div>
                    <span className="text-gray-400">GBP Growth:</span>
                    <span className="ml-2 font-semibold">3x</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Timeline:</span>
                    <span className="ml-2 font-semibold">90 days</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Serving Greater Seattle Area</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We provide specialized restaurant marketing services throughout the Puget Sound region
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/bellevue-restaurant-marketing" className="text-center py-4 px-6 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors">
              <span className="text-lg">Bellevue</span>
            </Link>
            <Link href="/kirkland-restaurant-marketing" className="text-center py-4 px-6 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors">
              <span className="text-lg">Kirkland</span>
            </Link>
            <Link href="/redmond-restaurant-marketing" className="text-center py-4 px-6 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors">
              <span className="text-lg">Redmond</span>
            </Link>
            <Link href="/lynnwood-restaurant-marketing" className="text-center py-4 px-6 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors">
              <span className="text-lg">Lynnwood</span>
            </Link>
            <Link href="/woodinville-restaurant-marketing" className="text-center py-4 px-6 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors">
              <span className="text-lg">Woodinville</span>
            </Link>
            <Link href="/bothell-restaurant-marketing" className="text-center py-4 px-6 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors">
              <span className="text-lg">Bothell</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="italic font-serif">Scale</span> Your Seattle Restaurant?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a free 15-minute audit and we'll show you exactly how to increase your orders
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30 text-lg w-full sm:w-auto">
                Book Your Free Audit
              </button>
            </Link>
            <a href="tel:425-420-7090">
              <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all text-lg w-full sm:w-auto">
                Call (425) 420-7090
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

