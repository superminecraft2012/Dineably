import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Marketing Case Studies (Seattle) | Dineably",
  description: "Real results: Thai restaurants in Seattle increased orders 300%+ with our websites, SEO & ads. See case studies from Bellevue, Kirkland & Lynnwood.",
  alternates: {
    canonical: "https://dineably.com/case-studies",
  },
  openGraph: {
    title: "Restaurant Marketing Case Studies (Seattle) | Dineably",
    description: "Real results: Thai restaurants in Seattle increased orders 300%+ with our websites, SEO & ads. See case studies from Bellevue, Kirkland & Lynnwood.",
    url: "https://dineably.com/case-studies",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing Case Studies (Seattle) | Dineably",
    description: "Real results: Thai restaurants in Seattle increased orders 300%+ with our websites, SEO & ads. See case studies from Bellevue, Kirkland & Lynnwood.",
  },
};

export default function CaseStudies() {
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
              <span className="italic font-serif">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from real restaurants we&apos;ve helped scale.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Thaprachan Thai */}
          <Link href="/case-studies/thaprachan-seattle" className="group">
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all h-full">
              <div className="text-xs text-orange-400 mb-3 font-semibold uppercase">Thai Restaurant • Seattle</div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Thaprachan Thai</h3>
              <p className="text-gray-400 mb-6">
                Transformed a slow, outdated website into a conversion machine that increased online orders by 45% in 90 days.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">+45% Online Orders</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">3x Google Maps Impressions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">1.8s Load Time</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                Read Full Case Study
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Racha Thai */}
          <Link href="/case-studies/racha-woodinville" className="group">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all h-full">
              <div className="text-xs text-red-400 mb-3 font-semibold uppercase">Thai Restaurant • Woodinville</div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Racha Thai</h3>
              <p className="text-gray-400 mb-6">
                New location, zero online presence. Ranked #2 in local pack within 6 weeks and generated 120+ monthly orders from search.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Top 3 Local Rankings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">120+ Monthly Orders</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">850% Traffic Increase</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                Read Full Case Study
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Chada Thai */}
          <Link href="/case-studies/chada-lynnwood" className="group">
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all h-full">
              <div className="text-xs text-orange-400 mb-3 font-semibold uppercase">Thai Restaurant • Lynnwood</div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Chada Thai</h3>
              <p className="text-gray-400 mb-6">
                Outdated mobile experience was costing orders. New website boosted conversion rate by 52% and calls by 40%.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">+52% Conversion Rate</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">+40% Phone Calls</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">92 Lighthouse Score</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                Read Full Case Study
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

        </div>
      </section>
      <Footer />
    </main>
  );
}

