import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Marketing Case Studies (Seattle) | Dineably",
  description: "Real results: Thai restaurants in Seattle increased orders 300%+ with our websites, SEO & ads. See case studies from Bellevue, Kirkland & Lynnwood.",
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

      {/* Case Studies Grid Placeholder */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-orange-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 1</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-red-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 2</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-orange-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 3</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-red-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 4</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

