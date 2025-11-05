import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our 4-Step Restaurant Marketing Process (Seattle) | Dineably",
  description: "Proven process: audit, strategy, launch, optimize. We build fast websites, rank restaurants on Google & run profitable ads in Seattle & surrounding areas.",
  openGraph: {
    title: "Our 4-Step Restaurant Marketing Process (Seattle) | Dineably",
    description: "Proven process: audit, strategy, launch, optimize. We build fast websites, rank restaurants on Google & run profitable ads in Seattle & surrounding areas.",
    url: "https://dineably.com/process",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably Marketing Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our 4-Step Restaurant Marketing Process (Seattle) | Dineably",
    description: "Proven process: audit, strategy, launch, optimize. We build fast websites, rank restaurants on Google & run profitable ads in Seattle & surrounding areas.",
  },
};

export default function Process() {
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
        "name": "Process",
        "item": "https://dineably.com/process"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Scale Your Restaurant with Dineably",
    "description": "Our proven 4-step process for scaling restaurant brands through websites, SEO, and digital advertising",
    "totalTime": "P90D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Discovery & Analysis",
        "text": "We conduct a comprehensive audit of your current marketing, identify opportunities, and analyze your competition. This includes reviewing your website, SEO rankings, online presence, and advertising performance.",
        "image": "https://dineably.com/logo-with-text.webp"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Strategy Development",
        "text": "Based on our analysis, we create a custom marketing strategy tailored to your restaurant. This includes website design plans, SEO keyword targeting, content strategy, and advertising campaigns optimized for your local market.",
        "image": "https://dineably.com/logo-with-text.webp"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Implementation",
        "text": "We build your fast, mobile-optimized restaurant website, implement on-page and technical SEO, set up local business profiles, and launch targeted advertising campaigns on Google and social media platforms.",
        "image": "https://dineably.com/logo-with-text.webp"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Optimization & Growth",
        "text": "We continuously monitor performance, optimize campaigns, improve SEO rankings, and scale what works. You receive regular reports showing increased traffic, rankings, and orders.",
        "image": "https://dineably.com/logo-with-text.webp"
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
      
      {/* Structured Data for HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="italic font-serif">Process</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven, step-by-step approach to scaling your restaurant brand.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Placeholder */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Discovery & Analysis</h3>
              <p className="text-gray-400">
                Content coming soon - Explain your initial consultation and analysis process.
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Strategy Development</h3>
              <p className="text-gray-400">
                Content coming soon - Describe how you create custom strategies.
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-400">
                Content coming soon - Outline your implementation approach.
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-2xl font-bold">
              4
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Optimization & Growth</h3>
              <p className="text-gray-400">
                Content coming soon - Explain your ongoing optimization process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

