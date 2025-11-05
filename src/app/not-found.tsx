import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              404
            </h1>
            <div className="mt-4 text-2xl md:text-3xl font-bold">
              Page Not Found
            </div>
          </div>

          {/* Message */}
          <p className="text-xl text-gray-400 mb-12">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Helpful Links */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-white">Helpful Links:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/" 
                  className="block p-4 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg hover:border-orange-500/50 transition-all"
                >
                  <div className="font-semibold text-white mb-1">Home</div>
                  <div className="text-sm text-gray-400">Back to homepage</div>
                </Link>
                
                <Link 
                  href="/services" 
                  className="block p-4 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg hover:border-orange-500/50 transition-all"
                >
                  <div className="font-semibold text-white mb-1">Services</div>
                  <div className="text-sm text-gray-400">What we offer</div>
                </Link>
                
                <Link 
                  href="/case-studies" 
                  className="block p-4 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg hover:border-orange-500/50 transition-all"
                >
                  <div className="font-semibold text-white mb-1">Case Studies</div>
                  <div className="text-sm text-gray-400">See our results</div>
                </Link>
                
                <Link 
                  href="/faq" 
                  className="block p-4 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg hover:border-orange-500/50 transition-all"
                >
                  <div className="font-semibold text-white mb-1">FAQ</div>
                  <div className="text-sm text-gray-400">Get answers</div>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Link href="/">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30">
                  Return to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

