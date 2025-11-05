import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chada Thai Case Study: 52% Conversion Rate Increase | Dineably",
  description: "How we transformed Chada Thai's mobile experience and increased conversion rate by 52%, phone calls by 40%, with a 92 Lighthouse score.",
  alternates: {
    canonical: "https://dineably.com/case-studies/chada-lynnwood",
  },
  openGraph: {
    title: "Chada Thai Case Study: 52% Conversion Rate Increase | Dineably",
    description: "52% conversion rate increase and 40% more phone calls with mobile-optimized website redesign for Lynnwood Thai restaurant.",
    url: "https://dineably.com/case-studies/chada-lynnwood",
  },
};

export default function ChadaCaseStudy() {
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
        "name": "Chada Thai",
        "item": "https://dineably.com/case-studies/chada-lynnwood"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Chada Thai Lynnwood</h1>
          <p className="text-2xl text-gray-400 mb-8">
            How fixing mobile UX and site speed increased conversion rate by 52% and phone calls by 40%.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Location</div>
              <div className="font-semibold">Lynnwood, WA</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Cuisine</div>
              <div className="font-semibold">Thai</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Timeline</div>
              <div className="font-semibold">60 Days</div>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-sm text-gray-400">Project Date</div>
              <div className="font-semibold">April - June 2024</div>
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
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">+52%</div>
              <div className="text-gray-400">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">+40%</div>
              <div className="text-gray-400">Phone Calls</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">92</div>
              <div className="text-gray-400">Lighthouse Score</div>
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
              Chada Thai had a website stuck in 2015. It was slow, the mobile experience was terrible, and customers were abandoning before placing orders. Analytics showed 68% of traffic was mobile, but the site was unusable on phones.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The menu was a PDF download, ordering required calling (with a hard-to-find phone number), and the site took 8+ seconds to load. Every day, they were losing orders to competitors with modern, fast websites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-400">Before</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>8.4s mobile load time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>PDF menu (not mobile-friendly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>No online ordering integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>2.3% conversion rate</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Technical Debt</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex justify-between">
                  <span>Lighthouse Score:</span>
                  <span className="font-semibold">38/100</span>
                </li>
                <li className="flex justify-between">
                  <span>Mobile Bounce Rate:</span>
                  <span className="font-semibold">61%</span>
                </li>
                <li className="flex justify-between">
                  <span>Time on Site:</span>
                  <span className="font-semibold">47 seconds</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly Phone Orders:</span>
                  <span className="font-semibold">180</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">The Solution</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">1. Mobile-First Redesign</h3>
              <p className="text-gray-400 mb-4">
                Rebuilt the entire website with mobile as the primary focus, since that's where 68% of their traffic came from.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Modern, thumb-friendly navigation and buttons</li>
                <li>• Optimized images (WebP format, lazy loading)</li>
                <li>• Interactive menu with photos (no PDFs)</li>
                <li>• One-tap click-to-call buttons prominently placed</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">2. Performance Optimization</h3>
              <p className="text-gray-400 mb-4">
                Every optimization was focused on speed, since every second of delay was costing them orders.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Next.js with automatic code splitting</li>
                <li>• Cloudflare CDN for instant page loads</li>
                <li>• Reduced JavaScript bundle by 78%</li>
                <li>• Implemented aggressive caching strategy</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">3. Conversion Optimization</h3>
              <p className="text-gray-400 mb-4">
                Made it ridiculously easy for customers to order, whether by phone or online ordering platform.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Sticky header with order/call buttons</li>
                <li>• Simplified menu browsing (filter by dietary needs)</li>
                <li>• Added popular items showcase on homepage</li>
                <li>• Integrated with their existing ordering system</li>
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
                  <span>2.1s mobile load time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Beautiful, browsable online menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>One-click online ordering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>3.5% conversion rate</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">After 60 Days</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex justify-between">
                  <span>Lighthouse Score:</span>
                  <span className="font-semibold text-orange-400">92/100</span>
                </li>
                <li className="flex justify-between">
                  <span>Mobile Bounce Rate:</span>
                  <span className="font-semibold text-orange-400">34%</span>
                </li>
                <li className="flex justify-between">
                  <span>Time on Site:</span>
                  <span className="font-semibold text-orange-400">2m 18s</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly Phone Orders:</span>
                  <span className="font-semibold text-orange-400">252</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-8">
            <p className="text-lg text-gray-300 leading-relaxed italic">
              "The analytics dashboard is incredible. We can see exactly where orders come from and the team responds to questions within hours. Our phone hasn't stopped ringing since the new site launched. Worth every penny."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                C
              </div>
              <div>
                <div className="font-semibold">Chada L.</div>
                <div className="text-sm text-gray-400">Owner, Chada Thai Lynnwood</div>
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
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Frontend</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Next.js 14</li>
                <li>• React 18</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Performance</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Cloudflare CDN</li>
                <li>• WebP image format</li>
                <li>• Code splitting</li>
                <li>• Service worker caching</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Tracking</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Google Analytics 4</li>
                <li>• Hotjar (heatmaps)</li>
                <li>• Call tracking (CallRail)</li>
                <li>• Conversion events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Is Your Website <span className="italic font-serif">Costing</span> You Orders?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get a free website audit and we'll show you exactly what's broken (and how to fix it)
          </p>
          <Link href="#contact">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30 text-lg">
              Get Your Free Audit
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

