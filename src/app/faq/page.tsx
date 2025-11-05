import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Marketing FAQ - Pricing, Timeline, Results | Dineably",
  description: "Common questions about restaurant websites, SEO & ads in Seattle. Learn about pricing, timelines, and what to expect from Dineably's services.",
  openGraph: {
    title: "Restaurant Marketing FAQ - Pricing, Timeline, Results | Dineably",
    description: "Common questions about restaurant websites, SEO & ads in Seattle. Learn about pricing, timelines, and what to expect from Dineably's services.",
    url: "https://dineably.com/faq",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing FAQ - Pricing, Timeline, Results | Dineably",
    description: "Common questions about restaurant websites, SEO & ads in Seattle. Learn about pricing, timelines, and what to expect from Dineably's services.",
  },
};

export default function FAQ() {
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
        "name": "FAQ",
        "item": "https://dineably.com/faq"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of restaurants do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in working with 6 and 7-figure restaurant brands, particularly Thai, Asian, and local restaurants in the Seattle area including Bellevue, Kirkland, Redmond, and Lynnwood. Our clients typically want to scale to 8 figures with reliable, profitable marketing strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website launches typically occur within 2-4 weeks. For SEO, you'll start seeing improved rankings in 2-3 months, with significant results in 4-6 months. Paid advertising campaigns can generate orders within days of launch. We provide regular progress reports to track your growth."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer customized packages based on your restaurant's needs. Services include website design (starting at $3,000), monthly SEO management (starting at $1,500/month), and advertising management (percentage of ad spend). Contact us for a free 15-minute audit to get a custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our clients receive ongoing support including website maintenance, SEO monitoring, advertising optimization, and regular performance reports. We're your long-term growth partner, not just a one-time service provider."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a free 15-minute audit through our website. We'll review your current marketing, identify opportunities, and create a custom growth plan for your restaurant. No commitment required for the initial consultation."
        }
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
      
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Frequently Asked <span className="italic font-serif">Questions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about working with Dineably.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">What types of restaurants do you work with?</h3>
            <p className="text-gray-400">
              Content coming soon - Answer this common question about your ideal clients.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">How long does it take to see results?</h3>
            <p className="text-gray-400">
              Content coming soon - Set expectations about timelines and outcomes.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">What is your pricing structure?</h3>
            <p className="text-gray-400">
              Content coming soon - Explain your pricing model and packages.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">Do you offer ongoing support?</h3>
            <p className="text-gray-400">
              Content coming soon - Describe your support and maintenance offerings.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">How do I get started?</h3>
            <p className="text-gray-400">
              Content coming soon - Outline the onboarding process and next steps.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

