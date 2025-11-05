import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us - Restaurant Marketing Experts (Seattle) | Dineably",
  description: "Proven restaurant marketing agency in Seattle specializing in websites, SEO & ads. 65+ brands scaled. Fast results for Thai, Asian & local restaurants.",
  alternates: {
    canonical: "https://dineably.com/why-us",
  },
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
              Restaurant-focused marketing that delivers measurable results, not vanity metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
                65+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Restaurants Supported</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
                +42%
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Median Order Uplift</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
                &lt;4hr
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
                2.3s
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Avg Site Load Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Makes Us <span className="italic font-serif">Different</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We don&apos;t just &quot;do marketing&quot; — we understand the restaurant business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu-First UX */}
            <div className="border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Menu-First UX Design</h3>
              <p className="text-gray-400 mb-4">
                We design websites around how diners actually browse menus, not generic templates.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Hero images on signature dishes to increase order value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Strategic placement of high-margin items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Mobile-optimized for on-the-go ordering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Sticky order buttons that follow the user</span>
                </li>
              </ul>
            </div>

            {/* Local Maps Dominance */}
            <div className="border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Maps Dominance</h3>
              <p className="text-gray-400 mb-4">
                Our local SEO strategies get you to the top of &quot;near me&quot; and Google Maps results.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>90% of our clients rank in top 3 local pack within 90 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Weekly GBP posts with UTM tracking for ROI proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Review generation that actually works (4.5+ avg rating)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Competitor analysis and conquesting strategies</span>
                </li>
              </ul>
            </div>

            {/* Closed-Loop Tracking */}
            <div className="border border-white/10 rounded-lg p-8 hover:border-orange-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Closed-Loop Tracking</h3>
              <p className="text-gray-400 mb-4">
                We track every dollar spent and every order generated. No guesswork, just data.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Call tracking shows which ads drive phone orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Click-to-order event tracking on all CTAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Attribution reports tie revenue to specific campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Monthly action reports with clear next steps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients <span className="italic font-serif">Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real feedback from restaurant owners we&apos;ve helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-black border border-white/10 rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-orange-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Our online orders went up 45% in the first 90 days. The new website is fast and our customers actually love using it. Best investment we&apos;ve made.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                  T
                </div>
                <div>
                  <div className="font-semibold">Thanaporn S.</div>
                  <div className="text-sm text-gray-400">Owner, Thaprachan Thai</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-black border border-white/10 rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-orange-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Our website was slow and outdated. Dineably rebuilt it, optimized our SEO, and our online orders increased by 250% in just 3 months. Incredible results.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                  L
                </div>
                <div>
                  <div className="font-semibold">Layla N.</div>
                  <div className="text-sm text-gray-400">Owner, Larb Thai Seattle</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-black border border-white/10 rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-orange-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;The analytics dashboard is incredible. We can see exactly where orders come from and the team responds to questions within hours. Worth every penny.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                  C
                </div>
                <div>
                  <div className="font-semibold">Chada L.</div>
                  <div className="text-sm text-gray-400">Owner, Chada Thai Lynnwood</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="italic font-serif">Scale</span> Your Restaurant?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a free 15-minute audit and we&apos;ll show you exactly how to increase your orders
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

