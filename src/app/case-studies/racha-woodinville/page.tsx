import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Racha Thai Case Study: Top 3 Local Rankings in 6 Weeks | Dineably",
  description: "How we took a brand new Woodinville restaurant from zero online presence to top 3 local rankings and 120+ monthly orders from search in just 6 weeks.",
  openGraph: {
    title: "Racha Thai Case Study: Top 3 Local Rankings in 6 Weeks | Dineably",
    description: "Zero to top 3 local rankings in 6 weeks. 120+ monthly orders from search for new Woodinville Thai restaurant.",
    url: "https://dineably.com/case-studies/racha-woodinville",
  },
};

export default function RachaCaseStudy() {
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
        "name": "Racha Thai",
        "item": "https://dineably.com/case-studies/racha-woodinville"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Racha Thai Woodinville</h1>
          <p className="text-2xl text-gray-400 mb-8">
            From zero online presence to top 3 local rankings in 6 weeks—generating 120+ monthly orders from organic search.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Location</div>
              <div className="font-semibold">Woodinville, WA</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Cuisine</div>
              <div className="font-semibold">Thai</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Timeline</div>
              <div className="font-semibold">6 Weeks</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Project Date</div>
              <div className="font-semibold">May - June 2024</div>
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
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">#2</div>
              <div className="text-gray-400">Local Pack Ranking</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">120+</div>
              <div className="text-gray-400">Monthly Orders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">850%</div>
              <div className="text-gray-400">Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
          <div className="bg-gradient-to-br from-red-900/10 to-orange-900/10 border border-red-500/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Racha Thai opened a new location in competitive Woodinville with zero online presence. No website, no Google Business Profile, and no way for potential customers to find them besides driving by.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              They were competing against 12 established restaurants within a 2-mile radius, all with years of reviews and local SEO momentum. The pressure was on to get discovered fast and start filling tables.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-400">Starting Point</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>No website or online ordering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Unclaimed Google Business Profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>0 online reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>High competition area</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Week 0 Metrics</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex justify-between">
                  <span>Local Pack Position:</span>
                  <span className="font-semibold">Not Ranking</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly Organic Traffic:</span>
                  <span className="font-semibold">0 visits</span>
                </li>
                <li className="flex justify-between">
                  <span>GBP Impressions:</span>
                  <span className="font-semibold">0</span>
                </li>
                <li className="flex justify-between">
                  <span>Online Orders:</span>
                  <span className="font-semibold">0/month</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">The Strategy</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Week 1: Foundation Setup</h3>
              <p className="text-gray-400 mb-4">
                Immediately launched a fast, mobile-optimized website and claimed/optimized their Google Business Profile before the grand opening.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Built Next.js website with online ordering integration</li>
                <li>• Claimed and fully optimized GBP with categories and attributes</li>
                <li>• Professional food photography shoot (20 dishes)</li>
                <li>• Set up Google Analytics and Search Console</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Weeks 2-3: Review Generation</h3>
              <p className="text-gray-400 mb-4">
                Implemented an aggressive but authentic review generation strategy to build social proof quickly for the new location.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• QR code table tents for easy Google reviews</li>
                <li>• Post-dining SMS follow-up campaign</li>
                <li>• Incentive for first 50 reviewers (free appetizer)</li>
                <li>• Personal outreach to friends & family</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Weeks 4-6: Local SEO Push</h3>
              <p className="text-gray-400 mb-4">
                Executed targeted local SEO tactics to build authority and relevance for Woodinville-specific searches.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Daily GBP posts with photos and offers</li>
                <li>• Built local citations across 25+ directories</li>
                <li>• Optimized for "Thai restaurant Woodinville" keywords</li>
                <li>• Added Q&A to GBP (parking, hours, specials)</li>
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
              <h3 className="text-xl font-bold mb-4 text-orange-400">After 6 Weeks</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Fully functional website with ordering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>#2 ranking in local pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>38 Google reviews (4.8 stars)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>120+ monthly orders from search</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Week 6 Metrics</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex justify-between">
                  <span>Local Pack Position:</span>
                  <span className="font-semibold text-orange-400">#2</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly Organic Traffic:</span>
                  <span className="font-semibold text-orange-400">2,850 visits</span>
                </li>
                <li className="flex justify-between">
                  <span>GBP Impressions:</span>
                  <span className="font-semibold text-orange-400">18,400/month</span>
                </li>
                <li className="flex justify-between">
                  <span>Online Orders:</span>
                  <span className="font-semibold text-orange-400">120+/month</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-8">
            <p className="text-lg text-gray-300 leading-relaxed italic">
              "We opened in a competitive area and Dineably got us ranking on Google Maps in just 6 weeks. Now we're getting 120+ new orders per month from search alone. It's been incredible for our launch."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                R
              </div>
              <div>
                <div className="font-semibold">Rachel K.</div>
                <div className="text-sm text-gray-400">Owner, Racha Thai Woodinville</div>
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
                <li>• Cloudinary (images)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">SEO & Analytics</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Google Business Profile</li>
                <li>• Brightlocal (citations)</li>
                <li>• Google Analytics 4</li>
                <li>• Local Falcon (tracking)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Marketing</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Online ordering platform</li>
                <li>• SMS review requests</li>
                <li>• Email marketing</li>
                <li>• Social media setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your Restaurant <span className="italic font-serif">Successfully</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Opening a new location? We'll help you dominate local search from day one
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

