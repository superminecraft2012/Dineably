import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Restaurant Marketing Process Seattle | Dineably",
  description: "Proven process: audit, strategy, launch, optimize. We build fast websites, rank restaurants on Google & run profitable ads in Seattle & surrounding areas.",
  alternates: {
    canonical: "https://dineably.com/process",
  },
  openGraph: {
    title: "Our Restaurant Marketing Process Seattle | Dineably",
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
    title: "Our Restaurant Marketing Process Seattle | Dineably",
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
    "description": "Our proven 4-step process for scaling restaurant brands through websites, SEO, and digital advertising in the Seattle area",
    "totalTime": "P90D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "3500"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Discovery",
        "text": "We audit your current website, analyze local SEO rankings, review competitor strategies, and identify quick wins. Deliverables include a comprehensive marketing audit, competitor analysis report, keyword opportunity map, and growth roadmap with prioritized actions. Timeline: 3-5 business days.",
        "url": "https://dineably.com/process#discovery",
        "image": "https://dineably.com/logo-with-text.webp"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Strategy",
        "text": "We create a custom growth plan tailored to your restaurant, budget, and goals. This includes wireframes for your new website, local SEO keyword strategy, GBP optimization plan, and advertising campaign structure with budget allocation. Deliverables include detailed strategy document, mockups & wireframes, content calendar, and ad campaign blueprints.",
        "url": "https://dineably.com/process#strategy",
        "image": "https://dineably.com/logo-with-text.webp"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Implementation",
        "text": "We build your restaurant website, optimize your Google Business Profile, launch SEO campaigns, and activate paid advertising. Deliverables include live responsive website with ordering integration, fully optimized GBP with weekly posts, on-page SEO implementation, and active Google & Meta ad campaigns. Timeline: 3-6 weeks depending on package.",
        "url": "https://dineably.com/process#implementation",
        "image": "https://dineably.com/logo-with-text.webp"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Optimization",
        "text": "We monitor performance daily, optimize campaigns weekly, and provide monthly reports with actionable insights. You'll see continuous improvements in rankings, ad performance, and conversion rates. Deliverables include monthly performance reports, A/B test results, conversion rate optimization updates, and quarterly strategy reviews. Ongoing support ensures sustained growth.",
        "url": "https://dineably.com/process#optimization",
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

      {/* Process Steps */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20">
          
          {/* Step 1: Discovery */}
          <div id="discovery" className="flex gap-8 items-start scroll-mt-24">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-orange-500/30">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Discovery</h2>
              <p className="text-lg text-gray-300 mb-4">
                We audit your current website, analyze local SEO rankings, review competitor strategies, and identify quick wins. This phase typically takes 3–5 business days and gives us a complete picture of where you stand and where the biggest opportunities lie.
              </p>
              <p className="text-gray-400 mb-6">
                Understanding your market position is critical. We look at your website speed, mobile experience, Google Business Profile optimization, local pack rankings, and how your competitors are winning customers.
              </p>
              
              <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Comprehensive marketing audit (website, SEO, GBP, ads)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Competitor analysis report (3–5 main competitors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Keyword opportunity map for local SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Growth roadmap with prioritized actions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Step 2: Strategy */}
          <div id="strategy" className="flex gap-8 items-start scroll-mt-24">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-orange-500/30">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Strategy</h2>
              <p className="text-lg text-gray-300 mb-4">
                We create a custom growth plan tailored to your restaurant, budget, and goals. No cookie-cutter templates—every strategy is built around your unique menu, target customers, and competitive landscape.
              </p>
              <p className="text-gray-400 mb-6">
                This includes wireframes for your new website, a local SEO keyword strategy targeting &quot;near me&quot; searches, a GBP optimization plan with posting schedule, and advertising campaign structure with budget allocation across Google and Meta platforms.
              </p>
              
              <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Detailed strategy document (15–25 pages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Website mockups & wireframes (desktop + mobile)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Content calendar (GBP posts, social, blog)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Ad campaign blueprints (audiences, creatives, budgets)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Step 3: Implementation */}
          <div id="implementation" className="flex gap-8 items-start scroll-mt-24">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-orange-500/30">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Implementation</h2>
              <p className="text-lg text-gray-300 mb-4">
                We build your restaurant website from the ground up, optimize your Google Business Profile for maximum visibility, launch targeted SEO campaigns, and activate paid advertising across Google and Meta. Timeline: 3–6 weeks depending on your package.
              </p>
              <p className="text-gray-400 mb-6">
                Every website is custom-coded for speed (sub-2.5s load times), fully responsive, and optimized for conversions with sticky order buttons. Your GBP gets professional photos, weekly posts with UTM tracking, Q&A setup, and review generation systems. Ads launch with dayparting for lunch/dinner rush and radius targeting for your delivery zone.
              </p>
              
              <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Live responsive website (ordering integration included)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Fully optimized GBP with weekly post schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>On-page SEO (meta tags, schema, internal linking)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Active Google Ads & Meta campaigns (if in package)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Step 4: Optimization */}
          <div id="optimization" className="flex gap-8 items-start scroll-mt-24">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-orange-500/30">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Optimization</h2>
              <p className="text-lg text-gray-300 mb-4">
                We monitor performance daily, optimize campaigns weekly, and provide monthly reports with actionable insights. This isn&apos;t a &quot;set it and forget it&quot; approach—we continuously test, learn, and improve to maximize your ROI.
              </p>
              <p className="text-gray-400 mb-6">
                You&apos;ll see continuous improvements in local rankings, ad performance, and conversion rates. We track every order, call, and click, then use that data to double down on what works and cut what doesn&apos;t. Quarterly strategy reviews ensure we&apos;re always aligned with your growth goals.
              </p>
              
              <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Monthly performance reports (traffic, rankings, conversions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>A/B test results and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Conversion rate optimization updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Quarterly strategy reviews & goal setting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Typical <span className="italic font-serif">Timeline</span>
            </h2>
            <p className="text-gray-400">From kickoff to measurable results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">Week 1</div>
              <div className="text-sm text-gray-400">Discovery & Strategy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">Weeks 2-4</div>
              <div className="text-sm text-gray-400">Design & Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">Week 5-6</div>
              <div className="text-sm text-gray-400">Launch & Activation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">Ongoing</div>
              <div className="text-sm text-gray-400">Optimization & Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="italic font-serif">Started</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book your free audit and we&apos;ll walk you through exactly how we&apos;ll grow your restaurant
          </p>
          <Link href="#contact">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30 text-lg">
              Book Your Free Audit
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

