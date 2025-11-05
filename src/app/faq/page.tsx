import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Dineably",
  description: "Get answers to common questions about working with Dineably. Learn about our services, pricing, process, and how we help restaurants scale reliably.",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Dineably",
    description: "Get answers to common questions about working with Dineably.",
    url: "https://dineably.com/faq",
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

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
    </main>
  );
}

