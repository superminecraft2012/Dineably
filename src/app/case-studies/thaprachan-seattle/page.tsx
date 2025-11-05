import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thaprachan Thai Case Study: 45% Order Increase | Dineably",
  description: "How we transformed Thaprachan Thai's slow website into a conversion machine with 45% more online orders, 3x Google Maps impressions, and 1.8s load time.",
  openGraph: {
    title: "Thaprachan Thai Case Study: 45% Order Increase | Dineably",
    description: "45% more online orders in 90 days with website redesign and local SEO optimization for Seattle Thai restaurant.",
    url: "https://dineably.com/case-studies/thaprachan-seattle",
  },
};

export default function ThaprachanCaseStudy() {
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
        "name": "Case Studies",
        "item": "https://dineably.com/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Thaprachan Thai",
        "item": "https://dineably.com/case-studies/thaprachan-seattle"
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
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          
          <div className="text-sm text-orange-400 font-semibold uppercase mb-4">Case Study</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Thaprachan Thai</h1>
          <p className="text-2xl text-gray-400 mb-8">
            How we increased online orders by 45% in 90 days with a complete website redesign and local SEO strategy.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Location</div>
              <div className="font-semibold">Seattle, WA</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Cuisine</div>
              <div className="font-semibold">Thai</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Timeline</div>
              <div className="font-semibold">90 Days</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Project Date</div>
              <div className="font-semibold">March - June 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">+45%</div>
              <div className="text-gray-400">Online Orders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">3x</div>
              <div className="text-gray-400">Google Maps Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">1.8s</div>
              <div className="text-gray-400">Page Load Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">The Problem</h2>
          <div className="bg-gradient-to-br from-red-900/10 to-orange-900/10 border border-red-500/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Thaprachan Thai came to us with a critical issue: their website was costing them money. With a 6.2-second load time and a clunky mobile experience, potential customers were abandoning the site before placing orders.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Their Google Business Profile wasn't optimized, resulting in minimal visibility in local searches. They were barely showing up when hungry customers searched for "Thai food near me" in Seattle, despite having excellent reviews and quality food.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-400">Before</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>6.2s average load time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>32% mobile bounce rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Not showing in local pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Declining online order volume</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Technical Metrics</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex justify-between">
                  <span>Lighthouse Score:</span>
                  <span className="font-semibold">42/100</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly Organic Traffic:</span>
                  <span className="font-semibold">1,200 visits</span>
                </li>
                <li className="flex justify-between">
                  <span>GBP Impressions:</span>
                  <span className="font-semibold">8,500/month</span>
                </li>
                <li className="flex justify-between">
                  <span>Conversion Rate:</span>
                  <span className="font-semibold">2.1%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">What We Did</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">1. Complete Website Redesign</h3>
              <p className="text-gray-400 mb-4">
                Built a new website from scratch using Next.js with speed as the #1 priority. Every element was optimized for conversion and mobile ordering.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Reduced image sizes by 85% with WebP format</li>
                <li>• Implemented lazy loading for below-fold content</li>
                <li>• Added sticky "Order Online" button that follows scroll</li>
                <li>• Redesigned menu with hero images on signature dishes</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">2. Local SEO Optimization</h3>
              <p className="text-gray-400 mb-4">
                Completely overhauled their Google Business Profile and implemented on-page SEO targeting "Thai restaurant Seattle" and related searches.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Optimized GBP with professional food photography</li>
                <li>• Set up weekly post schedule with UTM tracking</li>
                <li>• Added schema markup for Restaurant and LocalBusiness</li>
                <li>• Built citation profile across 15+ local directories</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">3. Conversion Rate Optimization</h3>
              <p className="text-gray-400 mb-4">
                Focused on removing friction from the ordering process and making it as easy as possible for customers to place orders.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Reduced checkout steps from 5 to 3</li>
                <li>• Added one-click reorder for returning customers</li>
                <li>• Implemented exit-intent popup with 10% discount</li>
                <li>• A/B tested CTA button colors and placement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Detail */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">After</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>1.8s average load time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>18% mobile bounce rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>#3 in local pack for key terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>45% increase in online orders</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Final Metrics</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex justify-between">
                  <span>Lighthouse Score:</span>
                  <span className="font-semibold text-orange-400">94/100</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly Organic Traffic:</span>
                  <span className="font-semibold text-orange-400">3,400 visits</span>
                </li>
                <li className="flex justify-between">
                  <span>GBP Impressions:</span>
                  <span className="font-semibold text-orange-400">26,800/month</span>
                </li>
                <li className="flex justify-between">
                  <span>Conversion Rate:</span>
                  <span className="font-semibold text-orange-400">4.8%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-8">
            <p className="text-lg text-gray-300 leading-relaxed italic">
              "Our online orders went up 45% in the first 90 days. The new website is fast and our customers actually love using it. Best investment we've made in years."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                T
              </div>
              <div>
                <div className="font-semibold">Thanaporn S.</div>
                <div className="text-sm text-gray-400">Owner, Thaprachan Thai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Technology Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Website</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Next.js 14</li>
                <li>• Tailwind CSS</li>
                <li>• Vercel (hosting)</li>
                <li>• Cloudflare CDN</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">SEO & Analytics</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Google Search Console</li>
                <li>• Google Analytics 4</li>
                <li>• Schema.org markup</li>
                <li>• Semrush (tracking)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Ordering & CRM</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• ChowNow integration</li>
                <li>• Call tracking (CallRail)</li>
                <li>• Email automation</li>
                <li>• Review generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Similar <span className="italic font-serif">Results</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a free audit and we'll show you exactly how to increase your orders
          </p>
          <Link href="#contact">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30 text-lg">
              Book Your Free Audit
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

