'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookAudit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    title: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Set page title and meta description
  useEffect(() => {
    document.title = 'Book Free Restaurant Marketing Audit | Dineably';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get a free 15-minute restaurant marketing audit. We analyze your website speed, Google Business Profile, and local SEO to identify quick wins for more orders.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          restaurant_name: formData.restaurantName,
          title: formData.title,
          subject: `New Lead: ${formData.name} (${formData.title}) - ${formData.restaurantName || 'No Restaurant Name'}`,
          from_name: 'Dineably Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          restaurantName: '',
          title: '',
        });
        
        // Track form submission in analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submission', {
            event_category: 'Contact',
            event_label: 'Free Audit Form - Standalone Page',
          });
        }
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again or call us directly at (425) 420-7090.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    }
  };

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
        "name": "Book Free Audit",
        "item": "https://dineably.com/book-audit"
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

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Book Free Audit</li>
            </ol>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg shadow-2xl p-6 sm:p-8 md:p-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Thank You!</h1>
                <p className="text-gray-400 mb-8 text-lg">
                  We&apos;ve received your information and will call you within 24 hours to schedule your free audit.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/">
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                      Return Home
                    </button>
                  </Link>
                  <Link href="/case-studies">
                    <button className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-all">
                      View Case Studies
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Book Your Free <span className="italic font-serif">Audit</span>
                  </h1>
                  <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                    Share your details and we&apos;ll call to schedule your free 15-minute marketing audit. 
                    We&apos;ll analyze your website speed, Google Business Profile, and local SEO performance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="john@restaurant.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="(425) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="restaurantName" className="block text-sm font-semibold text-gray-300 mb-2">
                        Restaurant Name *
                      </label>
                      <input
                        type="text"
                        id="restaurantName"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Your Restaurant"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Title *
                    </label>
                    <select
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select your title</option>
                      <option value="Owner">Owner</option>
                      <option value="Manager">Manager</option>
                      <option value="Marketing Manager">Marketing Manager</option>
                      <option value="General Manager">General Manager</option>
                      <option value="Operations Manager">Operations Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </div>
                </form>

                {/* Additional Trust Signals */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-400 font-semibold">What You&apos;ll Get:</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1 text-white">Website Speed Analysis</h3>
                      <p className="text-sm text-gray-400">Check if slow load times are costing you orders</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1 text-white">GBP Review</h3>
                      <p className="text-sm text-gray-400">See how your Google Business Profile compares</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1 text-white">Growth Opportunities</h3>
                      <p className="text-sm text-gray-400">Quick wins to increase orders immediately</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Contact Alternative */}
          {status !== 'success' && (
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">
                Prefer to call? Reach us at{' '}
                <a href="tel:+14254207090" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                  (425) 420-7090
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

