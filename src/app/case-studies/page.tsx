import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners & Process (Seattle Restaurants) | Dineably",
  description: "See how we work with Seattle-area restaurants to build fast websites, optimize local SEO, and manage digital marketing. Partners in Bellevue, Kirkland & Lynnwood.",
  alternates: {
    canonical: "https://dineably.com/case-studies",
  },
  openGraph: {
    title: "Our Partners & Process (Seattle Restaurants) | Dineably",
    description: "See how we work with Seattle-area restaurants to build fast websites, optimize local SEO, and manage digital marketing.",
    url: "https://dineably.com/case-studies",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Partners & Process (Seattle Restaurants) | Dineably",
    description: "See how we work with Seattle-area restaurants to build fast websites, optimize local SEO, and manage digital marketing.",
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
              <span className="italic font-serif">Our Partners</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Working with Seattle-area restaurants to build their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Thaprachan Thai */}
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all h-full">
            <div className="text-xs text-orange-400 mb-3 font-semibold uppercase">Thai Restaurant • Seattle</div>
            <h3 className="text-3xl font-bold mb-4">Thaprachan Thai</h3>
            <p className="text-gray-400 mb-6">
              Complete website redesign with mobile-first approach, optimized menu presentation, and local SEO strategy.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Website Redesign</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Local SEO Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">GBP Management</span>
              </div>
            </div>
          </div>

          {/* Larb Thai */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all h-full">
            <div className="text-xs text-red-400 mb-3 font-semibold uppercase">Thai Restaurant • Seattle</div>
            <h3 className="text-3xl font-bold mb-4">Larb Thai</h3>
            <p className="text-gray-400 mb-6">
              Fast-loading website with integrated ordering, comprehensive local SEO, and Google & Meta ad campaigns.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Website Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Local SEO & GBP</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Paid Advertising</span>
              </div>
            </div>
          </div>

          {/* Chada Thai */}
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all h-full">
            <div className="text-xs text-orange-400 mb-3 font-semibold uppercase">Thai Restaurant • Lynnwood</div>
            <h3 className="text-3xl font-bold mb-4">Chada Thai</h3>
            <p className="text-gray-400 mb-6">
              Mobile-first website redesign with streamlined user journey, clear CTAs, and call tracking implementation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Mobile-First Redesign</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">CRO & UX Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Call Tracking Setup</span>
              </div>
            </div>
          </div>

          {/* Racha Thai */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all h-full">
            <div className="text-xs text-red-400 mb-3 font-semibold uppercase">Thai Restaurant • Woodinville</div>
            <h3 className="text-3xl font-bold mb-4">Racha Thai</h3>
            <p className="text-gray-400 mb-6">
              Complete digital presence overhaul with modern website, enhanced local visibility, and ongoing SEO optimization.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Website Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Local SEO Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">GBP Optimization</span>
              </div>
            </div>
          </div>

          {/* Emerald */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-white/10 rounded-lg p-8 hover:border-emerald-500/50 transition-all h-full">
            <div className="text-xs text-emerald-400 mb-3 font-semibold uppercase">Restaurant • Seattle Area</div>
            <h3 className="text-3xl font-bold mb-4">Emerald</h3>
            <p className="text-gray-400 mb-6">
              Strategic digital marketing partnership with focus on brand visibility, customer engagement, and growth.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-300">Digital Marketing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-300">Brand Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-300">Local SEO</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}

