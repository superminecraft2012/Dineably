import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Scale <span className="italic font-serif">Reliably</span>,<br />
              with <span className="italic font-serif">Dineably</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We partner with successful 6 and 7-figure brands to unlock scalable,<br />
              profitable growth—helping them break past barriers and scale to 8 figures.
            </p>
          </div>

          {/* CTA Buttons - Above the glow */}
          <div className="flex items-center justify-center gap-4 mb-20 relative z-10">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all flex items-center gap-2 shadow-lg shadow-orange-500/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              I&apos;m Ready To Scale
            </button>
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all flex items-center gap-2">
              Free Case Study
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="text-center text-sm text-gray-400 mb-12">Some of our happy partners:</p>
            
            {/* Logos Grid */}
            <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12 lg:gap-16">
              {/* Thaprachan Thai */}
              <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/ThaprachanLogo.webp" 
                  alt="Thaprachan Thai" 
                  width={60} 
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="text-lg font-semibold text-gray-300">Thaprachan Thai</span>
              </div>

              {/* Racha Thai */}
              <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/RachaThaiWoodinvilleLogoBestThaiRestaurant.webp" 
                  alt="Racha Thai" 
                  width={60} 
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="text-lg font-semibold text-gray-300">Racha Thai</span>
              </div>

              {/* Larb Thai */}
              <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/larblogo.webp" 
                  alt="Larb Thai" 
                  width={60} 
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="text-lg font-semibold text-gray-300">Larb Thai</span>
              </div>

              {/* Chada Thai */}
              <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/chadalynnwoodlogo.webp" 
                  alt="Chada Thai" 
                  width={60} 
                  height={60}
                  className="h-8 w-auto"
                />
                <span className="text-lg font-semibold text-gray-300">Chada Thai</span>
              </div>

              {/* Emerald Thai */}
              <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                  src="/partners/emerald-logo.webp" 
                  alt="Emerald Thai" 
                  width={60} 
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="text-lg font-semibold text-gray-300">Emerald Thai</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

