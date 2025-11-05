import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renton Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Renton, WA. Fast websites, local SEO, and ads for restaurants in The Landing, Downtown Renton, and Highlands. Call 425-420-7090",
  alternates: {
    canonical: "https://dineably.com/renton-restaurant-marketing",
  },
  openGraph: {
    title: "Renton Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Renton restaurants.",
    url: "https://dineably.com/renton-restaurant-marketing",
  },
};

export default function RentonRestaurantMarketing() {
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
        "name": "Renton Restaurant Marketing",
        "item": "https://dineably.com/renton-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with restaurants in The Landing and Downtown Renton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We work with restaurants throughout Renton including The Landing, Downtown Renton, Highlands, and East Renton. We understand the diverse dining landscape from shopping center traffic to downtown business crowds and how to help your restaurant capture more local orders."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you improve my Renton restaurant's Google rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Renton restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like 'restaurants near The Landing' and 'Thai food Renton' to capture high-intent local traffic from shoppers and residents."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Renton restaurant marketing different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Renton has a unique mix of retail shoppers at The Landing, Boeing workers, and diverse residential communities. We tailor campaigns to target lunch crowds near Downtown Renton offices, dinner traffic at The Landing, and families in the Highlands and Kennydale neighborhoods."
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
          <div className="text-sm text-gray-400 mb-4">Renton, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Renton Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Renton restaurants dominate local search and turn web traffic into orders. From The Landing to Downtown Renton and the Highlands, we know what makes diners click "Order Now."
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
          <h2 className="text-3xl font-bold mb-12">How We Help Renton Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Fast, Conversion-Optimized Websites</h3>
              <p className="text-gray-400 mb-4">
                Your website is your #1 salesperson. We build lightning-fast sites (sub-2.5s) that work flawlessly on mobile, with sticky "Order Online" buttons and beautiful menu layouts. Perfect for capturing lunch orders from Boeing workers or dinner orders from shoppers at The Landing.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Local SEO & Google Business Profile</h3>
              <p className="text-gray-400 mb-4">
                Dominate "restaurant near me" searches when customers are at The Landing, Downtown Renton, or in the Highlands neighborhoods. We optimize your Google Business Profile, build local citations, and target keywords like "Thai restaurant Renton" and "Asian food The Landing" to own the top 3 Google Maps positions.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Paid Advertising (Google & Meta)</h3>
              <p className="text-gray-400 mb-4">
                Geo-targeted ads that reach Renton diners exactly when they're ready to order. We run campaigns optimized for lunch rushes (11am-2pm) targeting office workers and Boeing employees, plus dinner crowds at The Landing. Every dollar is tracked back to actual orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Renton Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with restaurants in The Landing and Downtown Renton?</h3>
              <p className="text-gray-400">
                Yes! We work with restaurants throughout Renton including The Landing, Downtown Renton, Highlands, and East Renton. We understand the diverse dining landscape from shopping center traffic to downtown business crowds and how to help your restaurant capture more local orders.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How quickly can you improve my Renton restaurant&apos;s Google rankings?</h3>
              <p className="text-gray-400">
                Most Renton restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like &quot;restaurants near The Landing&quot; and &quot;Thai food Renton&quot; to capture high-intent local traffic from shoppers and residents.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What makes Renton restaurant marketing different?</h3>
              <p className="text-gray-400">
                Renton has a unique mix of retail shoppers at The Landing, Boeing workers, and diverse residential communities. We tailor campaigns to target lunch crowds near Downtown Renton offices, dinner traffic at The Landing, and families in the Highlands and Kennydale neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate <span className="italic font-serif">Renton</span> Search?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a free audit and we&apos;ll show you exactly how to increase orders in Renton
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

