import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redmond Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Redmond, WA. Fast websites, local SEO, and ads for restaurants near Microsoft campus, Downtown Redmond, and Overlake. Call 425-420-7090",
  openGraph: {
    title: "Redmond Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Redmond restaurants.",
    url: "https://dineably.com/redmond-restaurant-marketing",
  },
};

export default function RedmondRestaurantMarketing() {
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
        "name": "Redmond Restaurant Marketing",
        "item": "https://dineably.com/redmond-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you market restaurants near Microsoft campus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in marketing restaurants near Microsoft and other Redmond tech campuses. We understand the lunch rush dynamics and how to capture tech workers searching for quick meals, team lunches, and dinner after work."
        }
      },
      {
        "@type": "Question",
        "name": "How do you target Redmond's tech worker demographic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We optimize for mobile ordering and fast pickup, target ads during lunch hours (11:30am-1:30pm), and emphasize online ordering convenience. Tech workers value speed and quality—we make sure your restaurant appears when they search 'lunch near me' from their desk."
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
          <div className="text-sm text-gray-400 mb-4">Redmond, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Redmond Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Redmond restaurants capture tech workers, families, and downtown diners with fast websites, dominant Google rankings, and lunch-rush advertising near Microsoft and Overlake.
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
          <h2 className="text-3xl font-bold mb-12">How We Help Redmond Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Fast Websites Built for Online Orders</h3>
              <p className="text-gray-400 mb-4">
                Redmond tech workers order online during meetings. We build sub-2.5s websites with seamless online ordering, estimated pickup times, and mobile-optimized checkout. Perfect for capturing lunch orders from Microsoft employees and dinner orders from Overlake families.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Local SEO for Redmond Searches</h3>
              <p className="text-gray-400 mb-4">
                Dominate "restaurant near Microsoft," "lunch Redmond Town Center," and "Thai food Overlake" searches. We optimize your Google Business Profile and build local citations to ensure you're the top result when hungry tech workers search from their desk or commute.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Lunch Rush & Dinner Advertising</h3>
              <p className="text-gray-400 mb-4">
                Geo-targeted Google and Facebook ads optimized for Redmond's unique meal patterns. We target tech campuses during lunch (11:30am-1:30pm), family dinner searches near Grass Lawn Park, and weekend brunch traffic at Redmond Town Center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Redmond Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you market restaurants near Microsoft campus?</h3>
              <p className="text-gray-400">
                Yes! We specialize in marketing restaurants near Microsoft and other Redmond tech campuses. We understand the lunch rush dynamics and how to capture tech workers searching for quick meals, team lunches, and dinner after work.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you target Redmond&apos;s tech worker demographic?</h3>
              <p className="text-gray-400">
                We optimize for mobile ordering and fast pickup, target ads during lunch hours (11:30am-1:30pm), and emphasize online ordering convenience. Tech workers value speed and quality—we make sure your restaurant appears when they search &quot;lunch near me&quot; from their desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Capture More <span className="italic font-serif">Redmond</span> Orders
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get more tech workers, families, and downtown diners with proven marketing
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

