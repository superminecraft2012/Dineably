import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoreline Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Shoreline, WA. Fast websites, local SEO, and ads for restaurants in Aurora Village, Ridgecrest, and Richmond Beach. Call 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/shoreline-restaurant-marketing",
  },
  openGraph: {
    title: "Shoreline Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Shoreline restaurants.",
    url: "https://dineably.com/shoreline-restaurant-marketing",
  },
};

export default function ShorelineRestaurantMarketing() {
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
        "name": "Shoreline Restaurant Marketing",
        "item": "https://dineably.com/shoreline-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with restaurants in Aurora Village and Ridgecrest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We work with restaurants throughout Shoreline including Aurora Village, Ridgecrest, Richmond Beach, and Parkwood. We understand the local dining scene along Aurora Ave and how to help your restaurant capture traffic from both residents and commuters."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you improve my Shoreline restaurant's Google rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Shoreline restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like 'restaurants near Aurora Village' and 'Thai food Shoreline' to capture high-intent local traffic."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Shoreline restaurant marketing different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shoreline has a diverse community with families, Shoreline Community College students, and commuters along Highway 99. We tailor campaigns to target local residents in Ridgecrest neighborhoods, beach-goers near Richmond Beach, and dinner traffic along Aurora Avenue."
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
          <div className="text-sm text-gray-400 mb-4">Shoreline, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shoreline Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Shoreline restaurants dominate local search and turn web traffic into orders. From Aurora Village to Richmond Beach and Ridgecrest, we know what makes diners click "Order Now."
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
          <h2 className="text-3xl font-bold mb-12">How We Help Shoreline Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Fast, Conversion-Optimized Websites</h3>
              <p className="text-gray-400 mb-4">
                Your website is your #1 salesperson. We build lightning-fast sites (sub-2.5s) that work flawlessly on mobile, with sticky "Order Online" buttons and beautiful menu layouts. Perfect for capturing lunch orders from Shoreline Community College students or dinner orders from families in Ridgecrest.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Local SEO & Google Business Profile</h3>
              <p className="text-gray-400 mb-4">
                Dominate "restaurant near me" searches when customers are in Aurora Village, Richmond Beach, or along Highway 99. We optimize your Google Business Profile, build local citations, and target keywords like "Thai restaurant Shoreline" and "Asian food Aurora Village" to own the top 3 Google Maps positions.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Paid Advertising (Google & Meta)</h3>
              <p className="text-gray-400 mb-4">
                Geo-targeted ads that reach Shoreline diners exactly when they're ready to order. We run campaigns optimized for lunch rushes (11am-2pm) targeting local workers and families, plus dinner crowds in Ridgecrest and Parkwood neighborhoods. Every dollar is tracked back to actual orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Shoreline Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with restaurants in Aurora Village and Ridgecrest?</h3>
              <p className="text-gray-400">
                Yes! We work with restaurants throughout Shoreline including Aurora Village, Ridgecrest, Richmond Beach, and Parkwood. We understand the local dining scene along Aurora Ave and how to help your restaurant capture traffic from both residents and commuters.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How quickly can you improve my Shoreline restaurant&apos;s Google rankings?</h3>
              <p className="text-gray-400">
                Most Shoreline restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like &quot;restaurants near Aurora Village&quot; and &quot;Thai food Shoreline&quot; to capture high-intent local traffic.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What makes Shoreline restaurant marketing different?</h3>
              <p className="text-gray-400">
                Shoreline has a diverse community with families, Shoreline Community College students, and commuters along Highway 99. We tailor campaigns to target local residents in Ridgecrest neighborhoods, beach-goers near Richmond Beach, and dinner traffic along Aurora Avenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate <span className="italic font-serif">Shoreline</span> Search?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a free audit and we&apos;ll show you exactly how to increase orders in Shoreline
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

