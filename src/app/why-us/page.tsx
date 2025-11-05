import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us - Restaurant Marketing Experts (Seattle) | Dineably",
  description: "Proven restaurant marketing agency in Seattle specializing in websites, SEO & ads. 65+ brands scaled. Fast results for Thai, Asian & local restaurants.",
  openGraph: {
    title: "Why Choose Us - Restaurant Marketing Experts (Seattle) | Dineably",
    description: "Proven restaurant marketing agency in Seattle specializing in websites, SEO & ads. 65+ brands scaled. Fast results for Thai, Asian & local restaurants.",
    url: "https://dineably.com/why-us",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Why Choose Dineably",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Us - Restaurant Marketing Experts (Seattle) | Dineably",
    description: "Proven restaurant marketing agency in Seattle specializing in websites, SEO & ads. 65+ brands scaled. Fast results for Thai, Asian & local restaurants.",
  },
};

export default function WhyUs() {
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
        "name": "Why Us",
        "item": "https://dineably.com/why-us"
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
              Why <span className="italic font-serif">Dineably</span>?
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover what sets us apart in scaling restaurant brands to new heights.
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
            <p className="text-gray-400">
              Content coming soon - Add your unique value proposition here.
            </p>
          </div>
          <div className="border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Industry Expertise</h3>
            <p className="text-gray-400">
              Content coming soon - Highlight your experience and knowledge.
            </p>
          </div>
          <div className="border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
            <p className="text-gray-400">
              Content coming soon - Explain your client support approach.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

