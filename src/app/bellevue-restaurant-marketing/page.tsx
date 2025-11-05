import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bellevue Restaurant Marketing: Websites, SEO & Ads | Dineably",
  description: "Restaurant marketing for Bellevue, WA. Fast websites, local SEO, and ads for restaurants in Downtown Bellevue, Crossroads, and Factoria. Call 425-420-7090",
  openGraph: {
    title: "Bellevue Restaurant Marketing: Websites, SEO & Ads | Dineably",
    description: "Fast websites, local SEO, and profitable ads for Bellevue restaurants.",
    url: "https://dineably.com/bellevue-restaurant-marketing",
  },
};

export default function BellevueRestaurantMarketing() {
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
        "name": "Bellevue Restaurant Marketing",
        "item": "https://dineably.com/bellevue-restaurant-marketing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work with restaurants in Downtown Bellevue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We work with restaurants throughout Bellevue including Downtown Bellevue, Crossroads, Factoria, and Wilburton. We understand the competitive landscape near Bellevue Square and how to help your restaurant stand out in local search."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you improve my Bellevue restaurant's Google rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Bellevue restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like 'restaurants near Bellevue Square' and 'Thai food Crossroads' to capture high-intent local traffic."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Bellevue restaurant marketing different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bellevue has unique demographics with tech workers, upscale diners, and international residents. We tailor campaigns to target lunch crowds in the business district, dinner traffic near Bellevue Collection, and weekend diners exploring Crossroads and Old Bellevue."
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
          <div className="text-sm text-gray-400 mb-4">Bellevue, WA</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bellevue Restaurant <span className="italic font-serif">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            We help Bellevue restaurants dominate local search and turn web traffic into orders. From Downtown Bellevue to Crossroads and Factoria, we know what makes diners click "Order Now."
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
          <h2 className="text-3xl font-bold mb-12">How We Help Bellevue Restaurants</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Fast, Conversion-Optimized Websites</h3>
              <p className="text-gray-400 mb-4">
                Your website is your #1 salesperson. We build lightning-fast sites (sub-2.5s) that work flawlessly on mobile, with sticky "Order Online" buttons and beautiful menu layouts. Perfect for capturing lunch orders from tech workers near Lincoln Square or dinner reservations from shoppers at Bellevue Square.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Local SEO & Google Business Profile</h3>
              <p className="text-gray-400 mb-4">
                Dominate "restaurant near me" searches when customers are in Crossroads, Wilburton, or Downtown Bellevue. We optimize your Google Business Profile, build local citations, and target keywords like "Thai restaurant Bellevue" and "sushi Factoria" to own the top 3 Google Maps positions.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Paid Advertising (Google & Meta)</h3>
              <p className="text-gray-400 mb-4">
                Geo-targeted ads that reach Bellevue diners exactly when they're ready to order. We run campaigns optimized for lunch rushes (11am-2pm) targeting office workers and dinner crowds near the Bellevue Collection. Every dollar is tracked back to actual orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Bellevue Restaurant Marketing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with restaurants in Downtown Bellevue?</h3>
              <p className="text-gray-400">
                Yes! We work with restaurants throughout Bellevue including Downtown Bellevue, Crossroads, Factoria, and Wilburton. We understand the competitive landscape near Bellevue Square and how to help your restaurant stand out in local search.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How quickly can you improve my Bellevue restaurant&apos;s Google rankings?</h3>
              <p className="text-gray-400">
                Most Bellevue restaurants see improved Google Maps rankings within 4-6 weeks. Full organic search results typically take 2-3 months. We optimize for searches like &quot;restaurants near Bellevue Square&quot; and &quot;Thai food Crossroads&quot; to capture high-intent local traffic.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What makes Bellevue restaurant marketing different?</h3>
              <p className="text-gray-400">
                Bellevue has unique demographics with tech workers, upscale diners, and international residents. We tailor campaigns to target lunch crowds in the business district, dinner traffic near Bellevue Collection, and weekend diners exploring Crossroads and Old Bellevue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate <span className="italic font-serif">Bellevue</span> Search?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a free audit and we&apos;ll show you exactly how to increase orders in Bellevue
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

