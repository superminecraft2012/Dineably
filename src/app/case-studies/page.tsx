import Header from "@/components/Header";

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="italic font-serif">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from real restaurants we&apos;ve helped scale.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid Placeholder */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-orange-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 1</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-red-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 2</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-orange-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 3</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-lg p-8">
            <div className="text-sm text-red-400 mb-2">CASE STUDY</div>
            <h3 className="text-2xl font-bold mb-4">Client Name 4</h3>
            <p className="text-gray-400 mb-4">
              Content coming soon - Showcase your success story with metrics and results.
            </p>
            <div className="text-sm text-gray-500">Industry • Location • Timeline</div>
          </div>
        </div>
      </section>
    </main>
  );
}

