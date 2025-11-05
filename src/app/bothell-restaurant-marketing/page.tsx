import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bothell Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Bothell, WA. Fast websites, local SEO, and ads for restaurants in Downtown Bothell, Canyon Park, and Northshore. Call 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/bothell-restaurant-marketing",
  },
  openGraph: {
    title: "Bothell Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Bothell restaurants.",
    url: "https://dineably.com/bothell-restaurant-marketing",
  },
};

export default function BothellRestaurantMarketing() {
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
        "name": "Bothell Restaurant Marketing",
        "item": "https://dineably.com/bothell-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with restaurants in Downtown Bothell?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We work with restaurants throughout Bothell including Downtown Bothell, Canyon Park, Wayne Curve, and Northshore areas. We understand how to capture local families, UW Bothell students, and visitors exploring Main Street."
        }
      },
      {
        "@type": "Question",
        "name": "How do you help Bothell restaurants compete with Seattle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We position Bothell restaurants as convenient local alternatives to Seattle. By optimizing for 'restaurants near UW Bothell' and 'dinner Canyon Park,' we attract customers who prefer staying local over commuting to Seattle."
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
          <div className="text-sm text-gray-400 mb-4">Bothell, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bothell Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Bothell restaurants capture local families, UW Bothell students, and Main Street visitors with fast websites, dominant local SEO, and targeted advertising.
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
          <h2 className="text-3xl font-bold mb-12">How We Help Bothell Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Community-Focused Websites</h3>
              <p className="text-gray-400 mb-4">
                Bothell is a tight-knit community. We build websites that highlight your local roots, family ownership, and connection to Downtown Bothell and Main Street. Fast load times and mobile optimization ensure you capture UW Bothell students and families searching for dinner on their phones.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Bothell Local SEO & Maps</h3>
              <p className="text-gray-400 mb-4">
                Dominate "restaurant Bothell," "Thai food Canyon Park," and "dinner near UW Bothell" searches. We optimize for local landmarks like McMenamins Anderson School and Bothell Landing to ensure you appear when residents and visitors search for nearby dining.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Family & Student-Targeted Ads</h3>
              <p className="text-gray-400 mb-4">
                Geo-targeted advertising reaching Bothell families planning weekend dinners, UW Bothell students looking for quick lunch, and Main Street shoppers browsing restaurants. We emphasize family-friendly atmosphere, student specials, and local favorites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Bothell Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with restaurants in Downtown Bothell?</h3>
              <p className="text-gray-400">
                Yes! We work with restaurants throughout Bothell including Downtown Bothell, Canyon Park, Wayne Curve, and Northshore areas. We understand how to capture local families, UW Bothell students, and visitors exploring Main Street.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you help Bothell restaurants compete with Seattle?</h3>
              <p className="text-gray-400">
                We position Bothell restaurants as convenient local alternatives to Seattle. By optimizing for &quot;restaurants near UW Bothell&quot; and &quot;dinner Canyon Park,&quot; we attract customers who prefer staying local over commuting to Seattle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Your <span className="italic font-serif">Bothell</span> Restaurant
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Attract more local families and students with proven restaurant marketing
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

