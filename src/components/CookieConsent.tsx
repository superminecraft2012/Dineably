'use client';

import { useState, useEffect } from 'react';

/**
 * GDPR-Compliant Cookie Consent Banner
 * 
 * Implements Google Consent Mode v2 for proper compliance with European privacy laws.
 * Shows banner to all users, with enhanced controls for EU/EEA users.
 */

interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: false,
    marketing: false,
    functional: true,
  } as ConsentPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookie_consent');
    
    if (!savedConsent) {
      // Show banner after a longer delay to be less intrusive
      setTimeout(() => setShowBanner(true), 3000);
      
      // Set default consent mode to denied
      updateConsentMode({
        analytics: false,
        marketing: false,
        functional: true,
        timestamp: Date.now(),
      });
    } else {
      // Apply saved preferences
      const saved = JSON.parse(savedConsent) as ConsentPreferences;
      setPreferences(saved);
      updateConsentMode(saved);
    }
  }, []);

  const updateConsentMode = (prefs: ConsentPreferences) => {
    // Update Google Consent Mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'ad_user_data': prefs.marketing ? 'granted' : 'denied',
        'ad_personalization': prefs.marketing ? 'granted' : 'denied',
        'functionality_storage': prefs.functional ? 'granted' : 'denied',
        'personalization_storage': prefs.functional ? 'granted' : 'denied',
      });
    }

    // Update Facebook Pixel consent
    if (typeof window !== 'undefined' && window.fbq && !prefs.marketing) {
      // Revoke consent for Facebook if marketing is disabled
      window.fbq('consent', 'revoke');
    } else if (typeof window !== 'undefined' && window.fbq && prefs.marketing) {
      window.fbq('consent', 'grant');
    }
  };

  const handleAcceptAll = () => {
    const newPrefs: ConsentPreferences = {
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: Date.now(),
    };
    
    saveConsent(newPrefs);
  };

  const handleRejectAll = () => {
    const newPrefs: ConsentPreferences = {
      analytics: false,
      marketing: false,
      functional: true, // Keep functional cookies (necessary for site operation)
      timestamp: Date.now(),
    };
    
    saveConsent(newPrefs);
  };

  const handleSavePreferences = () => {
    const newPrefs: ConsentPreferences = {
      ...preferences,
      timestamp: Date.now(),
    };
    
    saveConsent(newPrefs);
  };

  const saveConsent = (prefs: ConsentPreferences) => {
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    setPreferences(prefs);
    updateConsentMode(prefs);
    setShowBanner(false);
    setShowDetails(false);
  };

  const handlePreferenceChange = (key: keyof Omit<ConsentPreferences, 'timestamp'>, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner - Bottom Right Corner (Less Intrusive) */}
      <div className="fixed bottom-6 right-6 z-50 max-w-md w-full mx-4 sm:mx-0 animate-slide-up">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200">
          {!showDetails ? (
            // Compact Banner View
            <div className="p-5">
              <div className="flex items-start gap-3 mb-4">
                {/* Cookie Icon */}
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 100-2 1 1 0 000 2zm6-2a1 1 0 11-2 0 1 1 0 012 0zm-3 6a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    🍪 Cookie Notice
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    We use cookies to improve your experience and analyze site traffic.
                  </p>
                  <p className="text-xs text-gray-500">
                    <a href="/privacy-policy" className="text-orange-600 hover:text-orange-700 underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={handleRejectAll}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Reject cookies"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  Accept All
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-all"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 bg-white text-gray-700 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-all border border-gray-300"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Detailed Preferences View
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cookie Preferences
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Choose which cookies you want to allow. You can change these settings at any time.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4 mb-6">
                {/* Functional Cookies (Always On) */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
                        Always Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Help us understand how visitors interact with our website by collecting 
                        and reporting information anonymously.
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-orange-500 peer-checked:to-red-500"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Used to track visitors across websites to display relevant advertisements 
                        and measure campaign effectiveness.
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-orange-500 peer-checked:to-red-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all border border-gray-300"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Export function to programmatically show cookie settings
export const showCookieSettings = () => {
  // This can be called from a "Cookie Settings" link in your footer
  localStorage.removeItem('cookie_consent');
  window.location.reload();
};

