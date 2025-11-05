import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Larb Thai Case Study: 250% Order Increase in 90 Days | Dineably",
  description: "How we helped a Seattle Thai restaurant increase online orders by 250% through website optimization, local SEO, and targeted ads in just 90 days.",
  alternates: {
    canonical: "https://dineably.com/case-studies/larb-seattle",
  },
  openGraph: {
    title: "Larb Thai Case Study: 250% Order Increase in 90 Days | Dineably",
    description: "250% increase in online orders through website optimization, local SEO, and targeted ads for Seattle Thai restaurant.",
    url: "https://dineably.com/case-studies/larb-seattle",
  },
};

export default function LarbCaseStudy() {
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
        "name": "Larb Thai",
        "item": "https://dineably.com/case-studies/larb-seattle"
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
          
          <div className="text-sm text-red-400 font-semibold uppercase mb-4">Case Study</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Larb Thai Seattle</h1>
          <p className="text-2xl text-gray-400 mb-8">
            How we increased online orders by 250% in 90 days through website optimization, local SEO, and strategic advertising.
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
              <div className="font-semibold">Mar - June 2024</div>
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
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">+250%</div>
              <div className="text-gray-400">Online Orders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">+180%</div>
              <div className="text-gray-400">Organic Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">#4</div>
              <div className="text-gray-400">Local Pack Ranking</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Larb Thai, an authentic Seattle Thai restaurant known for their traditional Isaan cuisine, 
              was struggling with an outdated website and minimal online visibility. Despite excellent 
              food quality and strong in-person traffic, they were missing out on the growing online ordering market.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 my-8">
              <h3 className="text-2xl font-bold mb-4">Key Problems</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Slow website (5.2s load time) causing high bounce rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Not ranking for key local keywords ("thai restaurant seattle", "pad thai delivery")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Google Business Profile poorly optimized—only 8 photos, no posts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No clear call-to-action—visitors didn't know how to order online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Losing customers to competitors with better online presence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">The Strategy</h2>
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Website Redesign & Speed Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    Built a new mobile-first website focused on conversion, reducing load time from 5.2s to 1.8s.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Sticky "Order Online" button visible on all pages</li>
                    <li>• Menu with high-quality food photography</li>
                    <li>• One-click phone calling and directions</li>
                    <li>• Compressed images and lazy loading for speed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Local SEO & Google Business Profile Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    Completely overhauled their local search presence to dominate "Seattle Thai" searches.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Added 40+ professional photos to GBP</li>
                    <li>• Weekly GBP posts highlighting specials and events</li>
                    <li>• Optimized categories: Thai Restaurant, Asian Restaurant, Takeout</li>
                    <li>• Built local citations across 30+ directories</li>
                    <li>• Implemented review generation system (gained 28 reviews in 90 days)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Targeted Google & Meta Ads</h3>
                  <p className="text-gray-300 mb-4">
                    Launched data-driven ad campaigns targeting hungry Seattle customers during peak meal times.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Google Ads: Search campaigns for "thai food near me", "pad thai delivery seattle"</li>
                    <li>• Dayparting: Higher bids during lunch (11am-2pm) and dinner (5pm-8pm)</li>
                    <li>• Meta Ads: Retargeting website visitors with special offers</li>
                    <li>• 3-mile radius targeting around restaurant location</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">Month 1</div>
              <ul className="space-y-2 text-gray-300">
                <li>• Website traffic: +85%</li>
                <li>• Online orders: +120%</li>
                <li>• Load time: 5.2s → 1.8s</li>
                <li>• 12 new Google reviews</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">Month 3</div>
              <ul className="space-y-2 text-gray-300">
                <li>• Website traffic: +180%</li>
                <li>• Online orders: +250%</li>
                <li>• Local pack ranking: #4 (was #28)</li>
                <li>• 28 new Google reviews (4.7★ avg)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Key Metrics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Monthly Organic Traffic</div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold">1,240 visits</span>
                  <span className="text-green-500 text-sm pb-1">+180% from 445</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Online Orders Per Month</div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold">385 orders</span>
                  <span className="text-green-500 text-sm pb-1">+250% from 110</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Average Order Value</div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold">$48.20</span>
                  <span className="text-green-500 text-sm pb-1">+12% from $43.00</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Google Business Profile Views</div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold">6,840/mo</span>
                  <span className="text-green-500 text-sm pb-1">+220% from 2,140</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">ROI Impact</h3>
            <p className="text-xl text-gray-300 mb-4">
              Estimated additional monthly revenue: <span className="text-orange-500 font-bold">$13,255</span>
            </p>
            <p className="text-gray-400">
              (275 additional orders × $48.20 avg order value = $13,255/month in new revenue)
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-orange-500 mb-3">Website</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Next.js 14 (React framework)</li>
                <li>• Vercel hosting (CDN + auto-scaling)</li>
                <li>• WebP image optimization</li>
                <li>• Mobile-first responsive design</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-orange-500 mb-3">SEO & Analytics</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Google Business Profile optimization</li>
                <li>• Google Analytics 4 + Search Console</li>
                <li>• Schema.org structured data</li>
                <li>• Local citation building (30+ directories)</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-orange-500 mb-3">Advertising</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Google Ads (Search + Local campaigns)</li>
                <li>• Meta Ads (Facebook + Instagram)</li>
                <li>• Dayparting optimization</li>
                <li>• Call tracking (unique numbers)</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-orange-500 mb-3">Conversion Optimization</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Sticky order button</li>
                <li>• Click-to-call integration</li>
                <li>• Online ordering integration</li>
                <li>• Heatmap analysis (Hotjar)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Results Like These
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to increase your restaurant's online orders? Book a free 15-minute audit 
            and we'll show you exactly where you're losing customers—and how to fix it.
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Book Your Free Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

