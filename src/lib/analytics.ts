/**
 * Analytics and Tracking Utilities for Dineably
 * 
 * This file contains helper functions for tracking user interactions
 * across Google Analytics 4, Meta Pixel, and Google Ads.
 */

// Type definitions for event parameters
interface OrderClickEvent {
  button_location: string;
  restaurant_name?: string;
  source?: string;
}

interface ReserveClickEvent {
  button_location: string;
  restaurant_name?: string;
  source?: string;
}

interface CallClickEvent {
  phone_number: string;
  button_location: string;
  source?: string;
}

interface DirectionsClickEvent {
  button_location: string;
  destination?: string;
}

interface AuditSubmitEvent {
  form_location: string;
  form_type: string;
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, any>
    ) => void;
    fbq?: (
      command: string,
      eventName: string,
      parameters?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track "Order Online" button clicks
 */
export const trackOrderClick = (params: OrderClickEvent) => {
  // GA4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'order_click', {
      button_location: params.button_location,
      restaurant_name: params.restaurant_name || 'N/A',
      source: params.source || 'organic',
      event_category: 'conversion',
      event_label: `Order - ${params.button_location}`,
    });
  }

  // Meta Pixel Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'OrderClick', {
      button_location: params.button_location,
      restaurant_name: params.restaurant_name,
    });
  }

  // Console log for debugging (remove in production)
  console.log('📊 Order Click Tracked:', params);
};

/**
 * Track "Reserve Table" button clicks
 */
export const trackReserveClick = (params: ReserveClickEvent) => {
  // GA4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'reserve_click', {
      button_location: params.button_location,
      restaurant_name: params.restaurant_name || 'N/A',
      source: params.source || 'organic',
      event_category: 'conversion',
      event_label: `Reserve - ${params.button_location}`,
    });
  }

  // Meta Pixel Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ReserveClick', {
      button_location: params.button_location,
      restaurant_name: params.restaurant_name,
    });
  }

  console.log('📊 Reserve Click Tracked:', params);
};

/**
 * Track phone number clicks
 */
export const trackCallClick = (params: CallClickEvent) => {
  // GA4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'call_click', {
      phone_number: params.phone_number,
      button_location: params.button_location,
      source: params.source || 'organic',
      event_category: 'conversion',
      event_label: `Call - ${params.button_location}`,
    });
  }

  // Meta Pixel Event (Phone leads)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'Contact', {
      contact_type: 'phone',
      button_location: params.button_location,
    });
  }

  console.log('📊 Call Click Tracked:', params);
};

/**
 * Track "Get Directions" clicks
 */
export const trackDirectionsClick = (params: DirectionsClickEvent) => {
  // GA4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'directions_click', {
      button_location: params.button_location,
      destination: params.destination || 'restaurant',
      event_category: 'engagement',
      event_label: `Directions - ${params.button_location}`,
    });
  }

  console.log('📊 Directions Click Tracked:', params);
};

/**
 * Track audit/contact form submissions
 */
export const trackAuditSubmit = (params: AuditSubmitEvent) => {
  // GA4 Conversion Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'audit_submit', {
      form_location: params.form_location,
      form_type: params.form_type,
      event_category: 'conversion',
      event_label: `Audit Submit - ${params.form_location}`,
      value: 1, // Assign a value for conversion tracking
    });

    // Also track as GA4 standard 'generate_lead' event
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: 1000, // Estimated lead value
    });
  }

  // Meta Pixel Lead Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Free Audit',
      content_category: 'Restaurant Marketing',
    });
  }

  console.log('📊 Audit Submit Tracked:', params);
};

/**
 * Build UTM parameters for tracking link sources
 */
export const buildUTMParams = (
  source: string,
  medium: string,
  campaign?: string,
  content?: string
): string => {
  const params = new URLSearchParams();
  
  params.append('utm_source', source);
  params.append('utm_medium', medium);
  
  if (campaign) params.append('utm_campaign', campaign);
  if (content) params.append('utm_content', content);
  
  return params.toString();
};

/**
 * Get UTM parameters from current URL
 */
export const getUTMParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(
    (param) => {
      const value = params.get(param);
      if (value) utmParams[param] = value;
    }
  );
  
  return utmParams;
};

/**
 * Track page views (for SPA navigation)
 */
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: url,
      page_path: url,
    });
  }
};

/**
 * Track generic button clicks with custom event names
 * Now tracks immediately without consent requirements
 */
export const trackButtonClick = (params: {
  button_name: string;
  button_location: string;
  page: string;
  destination?: string;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: params.button_name,
      button_location: params.button_location,
      page: params.page,
      destination: params.destination || 'N/A',
      event_category: 'engagement',
      event_label: `${params.page} - ${params.button_name}`,
    });
  }

  // Meta Pixel Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ButtonClick', {
      button_name: params.button_name,
      button_location: params.button_location,
      page: params.page,
    });
  }

  console.log('📊 Button Click Tracked:', params);
};

/**
 * Track navigation link clicks
 */
export const trackNavigationClick = (params: {
  link_text: string;
  destination: string;
  location: string;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation_click', {
      link_text: params.link_text,
      destination: params.destination,
      location: params.location,
      event_category: 'navigation',
      event_label: `${params.location} - ${params.link_text}`,
    });
  }

  console.log('📊 Navigation Click Tracked:', params);
};

/**
 * Initialize analytics on page load
 */
export const initializeAnalytics = () => {
  // Store UTM parameters in sessionStorage for attribution
  const utmParams = getUTMParams();
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
  
  console.log('📊 Analytics Initialized');
};

