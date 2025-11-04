import Header from "@/components/Header";

export default function Process() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

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
    </main>
  );
}

