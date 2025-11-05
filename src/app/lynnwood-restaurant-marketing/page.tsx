import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lynnwood Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Lynnwood, WA. Fast websites, local SEO, and ads for restaurants in Alderwood Mall area, Downtown Lynnwood. Call 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/lynnwood-restaurant-marketing",
  },
  openGraph: {
    title: "Lynnwood Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Lynnwood restaurants.",
    url: "https://dineably.com/lynnwood-restaurant-marketing",
  },
};

export default function LynnwoodRestaurantMarketing() {
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
        "name": "Lynnwood Restaurant Marketing",
        "item": "https://dineably.com/lynnwood-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with restaurants near Alderwood Mall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We work with restaurants throughout Lynnwood including the Alderwood Mall area, City Center, and along Highway 99. We know how to capture mall shoppers, commuters, and local families searching for dining options."
        }
      },
      {
        "@type": "Question",
        "name": "How do you help Lynnwood restaurants compete in this market?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lynnwood has high competition with chain restaurants. We help independent restaurants stand out through superior local SEO, mobile-optimized websites, and targeted advertising that highlights your unique offerings and authentic cuisine."
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
          <div className="text-sm text-gray-400 mb-4">Lynnwood, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Lynnwood Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Lynnwood restaurants compete against chains and dominate local search near Alderwood Mall, City Center, and along the Highway 99 corridor with proven digital marketing.
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
          <h2 className="text-3xl font-bold mb-12">How We Help Lynnwood Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Websites That Beat Chain Restaurants</h3>
              <p className="text-gray-400 mb-4">
                Compete with corporate marketing budgets through superior website speed and UX. We build beautiful, fast-loading sites that highlight your authentic cuisine and family recipes—things chain restaurants can't offer. Perfect for capturing mall shoppers and Lynnwood families searching for real food.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Lynnwood Local SEO & Google Maps</h3>
              <p className="text-gray-400 mb-4">
                Own local searches like "Thai restaurant Lynnwood," "dinner near Alderwood," and "authentic Asian food Highway 99." We optimize your Google Business Profile with professional photos and strategic keywords to outrank chain restaurants in the Maps pack.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Targeted Shopping & Commuter Ads</h3>
              <p className="text-gray-400 mb-4">
                Reach Alderwood Mall shoppers looking for dinner, commuters on I-5 searching for takeout, and local families planning weekend meals. We run geo-targeted ads with special offers that drive immediate orders and foot traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Lynnwood Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with restaurants near Alderwood Mall?</h3>
              <p className="text-gray-400">
                Yes! We work with restaurants throughout Lynnwood including the Alderwood Mall area, City Center, and along Highway 99. We know how to capture mall shoppers, commuters, and local families searching for dining options.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you help Lynnwood restaurants compete in this market?</h3>
              <p className="text-gray-400">
                Lynnwood has high competition with chain restaurants. We help independent restaurants stand out through superior local SEO, mobile-optimized websites, and targeted advertising that highlights your unique offerings and authentic cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stand Out in <span className="italic font-serif">Lynnwood</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Beat chain restaurants and capture more local customers with proven marketing
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

