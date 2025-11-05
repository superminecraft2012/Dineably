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
          "text": "We specialize in 6 and 7-figure restaurant brands, particularly Thai, Asian, and local restaurants in Greater Seattle (Bellevue, Kirkland, Redmond, Lynnwood, Woodinville). Our clients want to scale to 8 figures with reliable, profitable marketing strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Websites launch in 2-4 weeks. SEO shows improved rankings in 2-3 months, significant results in 4-6 months. Paid ads generate orders within days. We provide regular progress reports to track your growth every step of the way."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website design starts at $3,000 one-time. Monthly SEO management starts at $1,500/month. Advertising management is a percentage of ad spend. We offer Launch, Grow, and Scale packages. Contact us for a free audit and custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build with Next.js and React for speed, hosted on Vercel with Cloudflare CDN. Analytics via Google Analytics 4 and Search Console. Call tracking through CallRail. Integrations with ChowNow, Toast, and major ordering platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track online orders, phone calls, direction requests, website traffic, local rankings, and Google Business Profile impressions. You receive monthly reports showing exact ROI with conversion tracking tied to revenue, not just vanity metrics."
        }
      },
      {
        "@type": "Question",
        "name": "What do you need from me as a client?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Menu details, high-quality food photos (or we arrange a shoot), logo files, current login credentials, and your business goals. Weekly 15-minute check-ins during launch, then monthly. We handle everything technical—you focus on running your restaurant."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monthly services require 30 days notice. Website projects have milestone-based payments. No long-term contracts or hidden fees. We earn your business every month by delivering results. Most clients stay because the ROI is clear."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the website and assets after?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You own everything. The website code, domain, hosting accounts, Google Business Profile, analytics—all yours. If you leave, we provide full export and transition support. You're never locked in or held hostage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work outside the Seattle area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our expertise is Greater Seattle and Puget Sound local SEO. We occasionally work with restaurants in Tacoma, Everett, and Olympia. For locations outside Washington, we focus on website and paid ads only, not local SEO."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Restaurant-only focus means we know what works. Menu-first UX design. Sub-2.5s load times guaranteed. Local SEO specialists, not generalists. Closed-loop tracking shows exactly which orders came from our work. Real case studies with transparent results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All clients receive ongoing support including website maintenance, SEO monitoring, ad optimization, and monthly reports. Average response time under 4 hours. We're your long-term growth partner, not a one-time vendor."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a free 15-minute audit through our website. We'll review your current marketing, identify opportunities, and create a custom growth plan. No sales pressure or commitment required for the initial consultation."
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

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">What types of restaurants do you work with?</h3>
            <p className="text-gray-400 leading-relaxed">
              We specialize in 6 and 7-figure restaurant brands, particularly Thai, Asian, and local restaurants in Greater Seattle (Bellevue, Kirkland, Redmond, Lynnwood, Woodinville). Our clients want to scale to 8 figures with reliable, profitable marketing strategies.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">How long does it take to see results?</h3>
            <p className="text-gray-400 leading-relaxed">
              Websites launch in 2-4 weeks. SEO shows improved rankings in 2-3 months, significant results in 4-6 months. Paid ads generate orders within days. We provide regular progress reports to track your growth every step of the way.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">What is your pricing structure?</h3>
            <p className="text-gray-400 leading-relaxed">
              Website design starts at $3,000 one-time. Monthly SEO management starts at $1,500/month. Advertising management is a percentage of ad spend. We offer Launch, Grow, and Scale packages. Contact us for a free audit and custom quote.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">What tech stack do you use?</h3>
            <p className="text-gray-400 leading-relaxed">
              We build with Next.js and React for speed, hosted on Vercel with Cloudflare CDN. Analytics via Google Analytics 4 and Search Console. Call tracking through CallRail. Integrations with ChowNow, Toast, and major ordering platforms.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">How do you measure success?</h3>
            <p className="text-gray-400 leading-relaxed">
              We track online orders, phone calls, direction requests, website traffic, local rankings, and Google Business Profile impressions. You receive monthly reports showing exact ROI with conversion tracking tied to revenue, not just vanity metrics.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">What do you need from me as a client?</h3>
            <p className="text-gray-400 leading-relaxed">
              Menu details, high-quality food photos (or we arrange a shoot), logo files, current login credentials, and your business goals. Weekly 15-minute check-ins during launch, then monthly. We handle everything technical—you focus on running your restaurant.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">Can I cancel anytime?</h3>
            <p className="text-gray-400 leading-relaxed">
              Monthly services require 30 days notice. Website projects have milestone-based payments. No long-term contracts or hidden fees. We earn your business every month by delivering results. Most clients stay because the ROI is clear.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">Who owns the website and assets after?</h3>
            <p className="text-gray-400 leading-relaxed">
              You own everything. The website code, domain, hosting accounts, Google Business Profile, analytics—all yours. If you leave, we provide full export and transition support. You&apos;re never locked in or held hostage.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">Do you work outside the Seattle area?</h3>
            <p className="text-gray-400 leading-relaxed">
              Our expertise is Greater Seattle and Puget Sound local SEO. We occasionally work with restaurants in Tacoma, Everett, and Olympia. For locations outside Washington, we focus on website and paid ads only, not local SEO.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">What makes you different from other agencies?</h3>
            <p className="text-gray-400 leading-relaxed">
              Restaurant-only focus means we know what works. Menu-first UX design. Sub-2.5s load times guaranteed. Local SEO specialists, not generalists. Closed-loop tracking shows exactly which orders came from our work. Real case studies with transparent results.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">Do you offer ongoing support?</h3>
            <p className="text-gray-400 leading-relaxed">
              Yes. All clients receive ongoing support including website maintenance, SEO monitoring, ad optimization, and monthly reports. Average response time under 4 hours. We&apos;re your long-term growth partner, not a one-time vendor.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3">How do I get started?</h3>
            <p className="text-gray-400 leading-relaxed">
              Book a free 15-minute audit through our website. We&apos;ll review your current marketing, identify opportunities, and create a custom growth plan. No sales pressure or commitment required for the initial consultation.
            </p>
          </div>
          
        </div>
      </section>
      <Footer />
    </main>
  );
}

