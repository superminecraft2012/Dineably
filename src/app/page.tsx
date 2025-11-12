'use client';

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useModal } from "@/components/ModalProvider";

export default function Home() {
  const { openModal } = useModal();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dineably.com"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          {/* Brand Logos and Rating */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {/* Brand Icons */}
            <div className="flex items-center -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-black flex items-center justify-center text-xs font-bold">
                G
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-black flex items-center justify-center text-xs font-bold">
                f
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-black flex items-center justify-center text-xs font-bold">
                X
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-black flex items-center justify-center text-xs font-bold">
                in
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-2 border-black flex items-center justify-center text-xs font-bold">
                IG
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-gray-300">65+ brands scaled</div>
            </div>
          </div>

          {/* Blue Glow Effect - Behind everything */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>

          {/* Main Heading */}
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Scale <span className="italic font-serif">Reliably</span><br />
              with <span className="italic font-serif">Dineably</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              We build fast restaurant websites and run local SEO & ads that turn visits into orders.
            </p>
          </div>

          {/* CTA Buttons - Above the glow */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 relative z-10 px-4 sm:px-0">
            <button 
              onClick={openModal}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
                Book Audit
            </button>
            <Link href="/case-studies" className="w-full sm:w-auto">
            <button className="w-full bg-transparent border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                See Case Study
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            </Link>
          </div>

          {/* Proof Metrics */}
          <div className="text-center relative z-10">
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Avg site speed &lt;2.5s • +30% median rise in &apos;Order Online&apos; clicks
            </p>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="text-center text-sm text-gray-400 mb-12">Some of our happy partners:</p>
            
            {/* Logos Grid */}
            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-12 lg:gap-16">
              {/* Thaprachan Thai */}
              <div className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/ThaprachanLogo.webp" 
                  alt="Thaprachan Thai restaurant logo - Seattle Thai restaurant marketing client" 
                  width={60} 
                  height={60}
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">Thaprachan Thai</span>
              </div>

              {/* Racha Thai */}
              <div className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/RachaThaiWoodinvilleLogoBestThaiRestaurant.webp" 
                  alt="Racha Thai Woodinville logo - Thai restaurant marketing partner" 
                  width={60} 
                  height={60}
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">Racha Thai</span>
              </div>

              {/* Larb Thai */}
              <div className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/larblogo.webp" 
                  alt="Larb Thai restaurant logo - Seattle Thai restaurant SEO client" 
                  width={60} 
                  height={60}
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">Larb Thai</span>
              </div>

              {/* Chada Thai */}
              <div className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/chadalynnwoodlogo.webp" 
                  alt="Chada Thai Lynnwood logo - Restaurant website design client" 
                  width={60} 
                  height={60}
                  className="h-6 sm:h-7 md:h-8 w-auto"
                />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">Chada Thai</span>
              </div>

              {/* Emerald Thai */}
              <div className="flex items-center gap-2 sm:gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/emerald-logo.webp" 
                  alt="Emerald Thai restaurant logo - Local restaurant marketing partner" 
                  width={60} 
                  height={60}
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">Emerald Thai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Definition Snippets - Above the fold */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Definition 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">What is local SEO for restaurants?</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Local SEO helps restaurants appear in "near me" searches and Google Maps results. It includes optimizing your Google Business Profile, managing reviews, building local citations, and targeting location-specific keywords like "Thai food Seattle" to capture customers actively searching for nearby dining options.
              </p>
            </div>

            {/* Definition 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">What is GBP?</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Google Business Profile (GBP) is your restaurant's free listing on Google Search and Maps. A fully optimized GBP with photos, posts, reviews, and accurate hours helps you rank in the local 3-pack and converts searchers into diners by showing menus, directions, and real-time order buttons.
              </p>
            </div>

            {/* Definition 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">What is dayparting?</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Dayparting is scheduling ads to run during specific hours when your restaurant is busiest or has capacity. For example, targeting lunch ads from 11am-1pm or dinner ads from 5pm-8pm maximizes ROI by reaching customers when they're actively deciding where to eat, not at midnight when you're closed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What We <span className="italic font-serif">Do</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
              Three core services that drive measurable results for restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Websites/CRO */}
            <div className="bg-black border border-white/10 rounded-lg p-6 sm:p-8 hover:border-orange-500/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Websites & CRO</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Lightning-fast, mobile-optimized sites that convert visitors into customers
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sub-2.5s load times increase order completions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Clear CTAs drive phone calls & online orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Menu optimization boosts average order value</span>
                </li>
              </ul>
            </div>

            {/* Local SEO & GBP */}
            <div className="bg-black border border-white/10 rounded-lg p-6 sm:p-8 hover:border-orange-500/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Local SEO & GBP</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Dominate local search results and Google Business Profile rankings
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rank for &quot;[cuisine] near me&quot; searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimize GBP for more directions & calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Review management builds trust & visibility</span>
                </li>
              </ul>
            </div>

            {/* Paid Ads */}
            <div className="bg-black border border-white/10 rounded-lg p-6 sm:p-8 hover:border-orange-500/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Paid Ads</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Profitable Google & social ads that scale your order volume
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Google Ads for high-intent &quot;food delivery&quot; searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Facebook & Instagram for brand awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Retargeting campaigns convert previous visitors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Case Highlights */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Real <span className="italic font-serif">Results</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
              See how we&apos;ve helped Seattle-area restaurants grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Case 1 */}
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-5 sm:p-6 md:p-8 hover:border-orange-500/50 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src="/partners/ThaprachanLogo.webp" 
                    alt="Thaprachan Thai restaurant logo" 
                    width={48} 
                    height={48}
                    className="h-10 sm:h-12 w-auto"
                  />
                </div>
                <div className="text-xs text-orange-400 font-semibold mb-3 uppercase">Thai Restaurant • Seattle</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  Thaprachan Thai
                </h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Problem</p>
                    <p className="text-sm sm:text-base text-white">Slow website, low Google visibility, declining online orders</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">90-Day Result</p>
                    <p className="text-sm sm:text-base text-white font-semibold">+45% online orders • 3x Google Maps impressions</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                  View Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case 2 */}
            <Link href="/case-studies/larb-thai-seattle" className="group">
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-5 sm:p-6 md:p-8 hover:border-orange-500/50 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src="/partners/larblogo.webp" 
                    alt="Larb Thai restaurant logo" 
                    width={48} 
                    height={48}
                    className="h-10 sm:h-12 w-auto"
                  />
                </div>
                <div className="text-xs text-red-400 font-semibold mb-3 uppercase">Thai Restaurant • Seattle</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  Larb Thai
                </h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Problem</p>
                    <p className="text-sm sm:text-base text-white">Slow website, poor online visibility, losing customers to competitors</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">90-Day Result</p>
                    <p className="text-sm sm:text-base text-white font-semibold">+250% online orders • +180% organic traffic</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                  View Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case 3 */}
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-5 sm:p-6 md:p-8 hover:border-orange-500/50 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src="/partners/chadalynnwoodlogo.webp" 
                    alt="Chada Thai restaurant logo" 
                    width={48} 
                    height={48}
                    className="h-8 sm:h-8 w-auto"
                  />
                </div>
                <div className="text-xs text-orange-400 font-semibold mb-3 uppercase">Thai Restaurant • Lynnwood</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  Chada Thai
                </h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Problem</p>
                    <p className="text-sm sm:text-base text-white">Outdated site, poor mobile experience, losing customers to competitors</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">90-Day Result</p>
                    <p className="text-sm sm:text-base text-white font-semibold">+52% conversion rate • 40% more phone calls</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                  View Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* GEO Block */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Serving Greater <span className="italic font-serif">Seattle</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
              Serving Greater Seattle—Seattle, Bellevue, Kirkland, Redmond, Bothell, Woodinville, Lynnwood, Shoreline, Edmonds, Renton.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {['Seattle', 'Bellevue', 'Kirkland', 'Redmond', 'Bothell', 'Woodinville', 'Lynnwood', 'Shoreline', 'Edmonds', 'Renton'].map((city) => (
              <Link 
                key={city}
                href={`/${city.toLowerCase()}-restaurant-marketing`}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-black border border-white/10 rounded-lg hover:border-orange-500/50 hover:bg-white/5 transition-all text-gray-300 hover:text-white font-medium"
              >
                {city}
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Don&apos;t see your city? We serve restaurants throughout Washington State and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Common <span className="italic font-serif">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Quick answers to help you get started
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg p-4 sm:p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3">How long does it take to see results?</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Website improvements show results within 2-4 weeks. SEO gains momentum in 2-3 months. Paid ads can drive orders within days of launch.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-4 sm:p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3">What makes your restaurant websites fast?</h3>
              <p className="text-sm sm:text-base text-gray-400">
                We use modern frameworks, optimize images, minimize code, and leverage CDNs. Average load times under 2.5 seconds mean visitors don&apos;t bounce before ordering.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-4 sm:p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Do you work with restaurants outside Seattle?</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Yes! While we specialize in the Seattle area, we work with restaurants throughout Washington State and select markets nationwide.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              View All FAQs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AEO TL;DR Box */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/30 rounded-lg p-5 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">What does Dineably do?</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Dineably builds fast restaurant websites and runs local SEO and ads that increase orders and reservations in the Seattle area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

