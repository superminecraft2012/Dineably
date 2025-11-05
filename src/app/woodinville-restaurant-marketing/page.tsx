import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woodinville Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Woodinville, WA. Fast websites, local SEO, and ads for restaurants in wine country and downtown. Call 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/woodinville-restaurant-marketing",
  },
  openGraph: {
    title: "Woodinville Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Woodinville restaurants.",
    url: "https://dineably.com/woodinville-restaurant-marketing",
  },
};

export default function WoodinvilleRestaurantMarketing() {
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
        "name": "Woodinville Restaurant Marketing",
        "item": "https://dineably.com/woodinville-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you market restaurants in Woodinville wine country?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in marketing restaurants in Woodinville, including establishments near wineries, Hollywood Hill, and downtown. We understand how to attract wine tourists, locals, and visitors exploring Woodinville's culinary scene."
        }
      },
      {
        "@type": "Question",
        "name": "How do you help new restaurants launch in Woodinville?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We've successfully launched restaurants in competitive Woodinville. Our strategy includes rapid Google Business Profile optimization, review generation, local SEO targeting wine country visitors, and ads reaching Seattle-area wine tourists planning trips to Woodinville."
        }
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
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <div className="text-sm text-gray-400 mb-4">Woodinville, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Woodinville Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Woodinville restaurants attract wine country visitors, locals, and Seattle-area diners with fast websites, dominant local SEO, and targeted advertising in this unique culinary destination.
          </p>
          <Link href="#contact">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30">
              Book Your Free Audit
            </button>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">How We Help Woodinville Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Reservation-Optimized Websites</h3>
              <p className="text-gray-400 mb-4">
                Woodinville diners often plan ahead for wine country visits. We build websites with seamless reservation systems, wine pairing highlights, and beautiful food photography that converts browsing wine tourists into booked tables. Fast load times ensure you capture impulse reservations from visitors at nearby wineries.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Wine Country Local SEO</h3>
              <p className="text-gray-400 mb-4">
                Dominate "restaurants Woodinville," "dinner near Chateau Ste Michelle," and "Thai food Hollywood Hill" searches. We position your restaurant to capture wine tourists planning their day, locals looking for date night, and Seattle visitors exploring Woodinville's dining scene.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Wine Country Visitor Advertising</h3>
              <p className="text-gray-400 mb-4">
                Geo-targeted ads reaching Seattle-area residents planning Woodinville wine tours, tourists searching "things to do Woodinville," and locals within 10 miles. We emphasize wine pairings, romantic ambiance, and proximity to popular wineries to drive weekend reservations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Woodinville Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you market restaurants in Woodinville wine country?</h3>
              <p className="text-gray-400">
                Yes! We specialize in marketing restaurants in Woodinville, including establishments near wineries, Hollywood Hill, and downtown. We understand how to attract wine tourists, locals, and visitors exploring Woodinville&apos;s culinary scene.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you help new restaurants launch in Woodinville?</h3>
              <p className="text-gray-400">
                We&apos;ve successfully launched restaurants in competitive Woodinville. Our strategy includes rapid Google Business Profile optimization, review generation, local SEO targeting wine country visitors, and ads reaching Seattle-area wine tourists planning trips to Woodinville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Woodinville Success Story</h2>
          
          <Link href="/case-studies/racha-woodinville">
            <div className="border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Racha Thai Woodinville</h3>
                  <p className="text-gray-400">New location ranked #2 in local pack within 6 weeks</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-400">#2</div>
                  <div className="text-sm text-gray-400">Local Ranking</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                <div>
                  <span className="text-gray-400">Monthly Orders:</span>
                  <span className="ml-2 font-semibold">120+</span>
                </div>
                <div>
                  <span className="text-gray-400">Traffic Growth:</span>
                  <span className="ml-2 font-semibold">850%</span>
                </div>
                <div>
                  <span className="text-gray-400">Timeline:</span>
                  <span className="ml-2 font-semibold">6 weeks</span>
                </div>
              </div>
              <div className="text-orange-400 text-sm font-semibold">Read Full Case Study →</div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Your <span className="italic font-serif">Woodinville</span> Restaurant
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Attract more wine country visitors and local diners with proven marketing
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
          <div className="mt-8">
            <Link href="/seattle-restaurant-marketing" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Seattle Restaurant Marketing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

