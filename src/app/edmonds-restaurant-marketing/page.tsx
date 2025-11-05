import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edmonds Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Edmonds, WA. Fast websites, local SEO, and ads for restaurants in Downtown Edmonds, Five Corners, and the Waterfront. Call 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/edmonds-restaurant-marketing",
  },
  openGraph: {
    title: "Edmonds Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Edmonds restaurants.",
    url: "https://dineably.com/edmonds-restaurant-marketing",
  },
};

export default function EdmondsRestaurantMarketing() {
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
        "name": "Edmonds Restaurant Marketing",
        "item": "https://dineably.com/edmonds-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with restaurants in Downtown Edmonds and the Waterfront?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We work with restaurants throughout Edmonds including Downtown Edmonds, Five Corners, the Waterfront, and Perrinville. We understand the unique tourism-driven dining scene and how to capture both local residents and ferry visitors searching for restaurants."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you improve my Edmonds restaurant's Google rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Edmonds restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like 'restaurants near Edmonds ferry' and 'waterfront dining Edmonds' to capture high-intent local and tourist traffic."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Edmonds restaurant marketing different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Edmonds has a unique mix of local residents, ferry commuters, and weekend tourists exploring the waterfront. We tailor campaigns to target lunch crowds in Downtown Edmonds, dinner seekers near the ferry terminal, and weekend visitors looking for waterfront dining experiences."
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
          <div className="text-sm text-gray-400 mb-4">Edmonds, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Edmonds Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Edmonds restaurants dominate local search and turn web traffic into orders. From Downtown Edmonds to the Waterfront and Five Corners, we know what makes diners click "Order Now."
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
          <h2 className="text-3xl font-bold mb-12">How We Help Edmonds Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Fast, Conversion-Optimized Websites</h3>
              <p className="text-gray-400 mb-4">
                Your website is your #1 salesperson. We build lightning-fast sites (sub-2.5s) that work flawlessly on mobile, with sticky "Order Online" buttons and beautiful menu layouts. Perfect for capturing orders from ferry commuters, waterfront visitors, and downtown shoppers.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Local SEO & Google Business Profile</h3>
              <p className="text-gray-400 mb-4">
                Dominate "restaurant near me" searches when customers are near the ferry terminal, browsing Downtown Edmonds, or exploring the waterfront. We optimize your Google Business Profile, build local citations, and target keywords like "Thai restaurant Edmonds" and "waterfront dining Edmonds" to own the top 3 Google Maps positions.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Paid Advertising (Google & Meta)</h3>
              <p className="text-gray-400 mb-4">
                Geo-targeted ads that reach Edmonds diners exactly when they're ready to order. We run campaigns optimized for lunch rushes (11am-2pm) targeting downtown workers and ferry commuters, plus dinner crowds exploring the waterfront. Every dollar is tracked back to actual orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Edmonds Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with restaurants in Downtown Edmonds and the Waterfront?</h3>
              <p className="text-gray-400">
                Yes! We work with restaurants throughout Edmonds including Downtown Edmonds, Five Corners, the Waterfront, and Perrinville. We understand the unique tourism-driven dining scene and how to capture both local residents and ferry visitors searching for restaurants.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How quickly can you improve my Edmonds restaurant&apos;s Google rankings?</h3>
              <p className="text-gray-400">
                Most Edmonds restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like &quot;restaurants near Edmonds ferry&quot; and &quot;waterfront dining Edmonds&quot; to capture high-intent local and tourist traffic.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What makes Edmonds restaurant marketing different?</h3>
              <p className="text-gray-400">
                Edmonds has a unique mix of local residents, ferry commuters, and weekend tourists exploring the waterfront. We tailor campaigns to target lunch crowds in Downtown Edmonds, dinner seekers near the ferry terminal, and weekend visitors looking for waterfront dining experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate <span className="italic font-serif">Edmonds</span> Search?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a free audit and we&apos;ll show you exactly how to increase orders in Edmonds
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

