'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { initializeAnalytics, trackPageView } from '@/lib/analytics';

/**
 * Analytics Component
 * 
 * Handles Google Analytics 4, Meta Pixel, and Google Ads tracking.
 * Add your tracking IDs to environment variables:
 * - NEXT_PUBLIC_GA4_ID
 * - NEXT_PUBLIC_META_PIXEL_ID
 * - NEXT_PUBLIC_GOOGLE_ADS_ID
 */

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get tracking IDs from environment variables
  const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
  const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';

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

  return (
    <>
      {/* Google Analytics 4 */}
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* Google Ads Conversion Tracking */}
      {GOOGLE_ADS_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
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

