'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { initializeAnalytics, trackPageView } from '@/lib/analytics';

/**
 * Analytics Component with Google Consent Mode v2
 * 
 * Handles Google Analytics 4, Meta Pixel, and Google Ads tracking.
 * Implements consent mode for GDPR compliance.
 * 
 * Add your tracking IDs to environment variables:
 * - NEXT_PUBLIC_GA4_ID (default: G-PBDEBXGEPN)
 * - NEXT_PUBLIC_META_PIXEL_ID
 * - NEXT_PUBLIC_GOOGLE_ADS_ID
 */

// Separate component for tracking that uses useSearchParams
function AnalyticsTracker({ GA4_ID }: { GA4_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (pathname && GA4_ID) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      trackPageView(url, document.title);
    }
  }, [pathname, searchParams, GA4_ID]);

  // Initialize analytics on mount
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return null;
}

export default function Analytics() {
  // HARDCODED GA4 ID - ALWAYS USE THIS
  const GA4_ID = 'G-PBDEBXGEPN';
  
  // Get other tracking IDs from environment variables if needed
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
  const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';

  return (
    <>
      {/* Tracking component for page view tracking */}
      <Suspense fallback={null}>
        <AnalyticsTracker GA4_ID={GA4_ID} />
      </Suspense>

      {/* Note: GA4 base script is loaded in layout.tsx <head> for immediate detection */}

      {/* Google Ads Conversion Tracking */}
      {GOOGLE_ADS_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', '${GOOGLE_ADS_ID}');
            `}
          </Script>
        </>
      )}

      {/* Meta (Facebook) Pixel */}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Meta Pixel NoScript Fallback */}
      {META_PIXEL_ID && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
}

