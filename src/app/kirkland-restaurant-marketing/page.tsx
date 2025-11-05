import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kirkland Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Kirkland, WA. Fast websites, local SEO, and ads for restaurants in Downtown Kirkland, Juanita, and Totem Lake. Call 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/kirkland-restaurant-marketing",
  },
  openGraph: {
    title: "Kirkland Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Kirkland restaurants.",
    url: "https://dineably.com/kirkland-restaurant-marketing",
  },
};

export default function KirklandRestaurantMarketing() {
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
        "name": "Kirkland Restaurant Marketing",
        "item": "https://dineably.com/kirkland-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with waterfront restaurants in Kirkland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in marketing for Kirkland waterfront restaurants, Downtown Kirkland establishments, and venues in Juanita and Totem Lake. We understand how to capture tourists, locals, and lake visitors searching for dining options."
        }
      },
      {
        "@type": "Question",
        "name": "How do you help Kirkland restaurants compete with Seattle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We position Kirkland restaurants as premier Eastside destinations. By optimizing for 'Kirkland waterfront dining' and 'restaurants Lake Washington,' we attract diners who prefer Kirkland's atmosphere over crossing the bridge to Seattle."
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
          <div className="text-sm text-gray-400 mb-4">Kirkland, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kirkland Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Kirkland restaurants capture waterfront diners, Downtown Kirkland shoppers, and Totem Lake crowds with fast websites, dominant local SEO, and targeted advertising.
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
          <h2 className="text-3xl font-bold mb-12">How We Help Kirkland Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Mobile-First Restaurant Websites</h3>
              <p className="text-gray-400 mb-4">
                Kirkland diners browse on their phones while walking the waterfront or shopping at Totem Lake Village. We build ultra-fast websites with one-tap ordering and click-to-call buttons that capture impulse orders from tourists and locals exploring Marina Park.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Kirkland Local SEO & Maps Domination</h3>
              <p className="text-gray-400 mb-4">
                Own the top spots for "waterfront restaurants Kirkland," "Thai food Juanita," and "dinner Downtown Kirkland." We optimize your Google Business Profile with stunning photos and manage reviews to ensure you appear when visitors search near Lake Washington or Juanita Beach Park.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Geo-Targeted Paid Advertising</h3>
              <p className="text-gray-400 mb-4">
                Reach Kirkland residents, Eastside shoppers, and Seattle visitors exploring the area. We run Google and Facebook ads targeting peak hours and weekends when waterfront foot traffic is highest, driving reservations and takeout orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Kirkland Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with waterfront restaurants in Kirkland?</h3>
              <p className="text-gray-400">
                Absolutely! We specialize in marketing for Kirkland waterfront restaurants, Downtown Kirkland establishments, and venues in Juanita and Totem Lake. We understand how to capture tourists, locals, and lake visitors searching for dining options.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you help Kirkland restaurants compete with Seattle?</h3>
              <p className="text-gray-400">
                We position Kirkland restaurants as premier Eastside destinations. By optimizing for &quot;Kirkland waterfront dining&quot; and &quot;restaurants Lake Washington,&quot; we attract diners who prefer Kirkland&apos;s atmosphere over crossing the bridge to Seattle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Own <span className="italic font-serif">Kirkland</span> Local Search
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get more waterfront diners and downtown customers with proven restaurant marketing
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

