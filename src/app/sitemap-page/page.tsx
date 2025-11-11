import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap - Navigate Dineably | Restaurant Marketing",
  description: "Complete sitemap of Dineably's website. Find all pages including services, case studies, city pages, and resources for restaurant marketing in Seattle.",
  alternates: {
    canonical: "https://dineably.com/sitemap-page",
  },
  openGraph: {
    title: "Sitemap - Navigate Dineably | Restaurant Marketing",
    description: "Complete sitemap of Dineably's website. Find all pages including services, case studies, city pages, and resources for restaurant marketing in Seattle.",
    url: "https://dineably.com/sitemap-page",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapPage() {
  const mainPages = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Why Us", url: "/why-us" },
    { name: "Process", url: "/process" },
    { name: "FAQ", url: "/faq" },
  ];

  const cityPages = [
    { name: "Seattle Restaurant Marketing", url: "/seattle-restaurant-marketing" },
    { name: "Bellevue Restaurant Marketing", url: "/bellevue-restaurant-marketing" },
    { name: "Kirkland Restaurant Marketing", url: "/kirkland-restaurant-marketing" },
    { name: "Redmond Restaurant Marketing", url: "/redmond-restaurant-marketing" },
    { name: "Bothell Restaurant Marketing", url: "/bothell-restaurant-marketing" },
    { name: "Woodinville Restaurant Marketing", url: "/woodinville-restaurant-marketing" },
    { name: "Lynnwood Restaurant Marketing", url: "/lynnwood-restaurant-marketing" },
    { name: "Shoreline Restaurant Marketing", url: "/shoreline-restaurant-marketing" },
    { name: "Edmonds Restaurant Marketing", url: "/edmonds-restaurant-marketing" },
    { name: "Renton Restaurant Marketing", url: "/renton-restaurant-marketing" },
  ];

  const caseStudies = [
    { name: "Case Studies", url: "/case-studies" },
    { name: "Thaprachan Thai Seattle", url: "/case-studies/thaprachan-thai-seattle" },
    { name: "Larb Thai Seattle", url: "/case-studies/larb-thai-seattle" },
    { name: "Chada Thai Lynnwood", url: "/case-studies/chada-thai-lynnwood" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Site <span className="italic font-serif">Map</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore all pages on Dineably. Find services, case studies, city pages, and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Pages */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Main Pages</h2>
            </div>
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.url}>
                  <Link 
                    href={page.url}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* City Pages */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">City Pages</h2>
            </div>
            <ul className="space-y-3">
              {cityPages.map((page) => (
                <li key={page.url}>
                  <Link 
                    href={page.url}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Case Studies</h2>
            </div>
            <ul className="space-y-3">
              {caseStudies.map((page) => (
                <li key={page.url}>
                  <Link 
                    href={page.url}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Additional Note */}
        <div className="mt-16 p-8 bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Looking for Something Specific?</h3>
              <p className="text-gray-400 mb-4">
                Can't find what you're looking for? We're here to help. Contact us and we'll guide you to the right resources.
              </p>
              <Link href="/#contact" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                Contact Dineably
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

