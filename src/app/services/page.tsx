import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Restaurant Growth Solutions | Dineably",
  description: "Comprehensive solutions to scale your restaurant brand reliably. Discover our expert services designed to help restaurants achieve profitable, sustainable growth.",
  openGraph: {
    title: "Our Services - Restaurant Growth Solutions | Dineably",
    description: "Comprehensive solutions to scale your restaurant brand reliably.",
    url: "https://dineably.com/services",
  },
};

export default function Services() {
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
        "name": "Services",
        "item": "https://dineably.com/services"
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
              Our <span className="italic font-serif">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions to scale your restaurant brand reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Services Placeholder */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="border-l-4 border-orange-500 pl-8 py-4">
            <h3 className="text-3xl font-bold mb-4">Service 1</h3>
            <p className="text-gray-400 text-lg">
              Content coming soon - Describe your first key service offering.
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-8 py-4">
            <h3 className="text-3xl font-bold mb-4">Service 2</h3>
            <p className="text-gray-400 text-lg">
              Content coming soon - Describe your second key service offering.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-8 py-4">
            <h3 className="text-3xl font-bold mb-4">Service 3</h3>
            <p className="text-gray-400 text-lg">
              Content coming soon - Describe your third key service offering.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

