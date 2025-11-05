'use client';

import Link from 'next/link';
import { trackOrderClick, trackReserveClick, trackCallClick, trackDirectionsClick, buildUTMParams } from '@/lib/analytics';

/**
 * Example Tracked Buttons Component
 * 
 * Shows how to implement tracking on common CTA buttons.
 * Copy these patterns to your actual buttons throughout the site.
 */

interface TrackedButtonProps {
  buttonLocation: string;
  restaurantName?: string;
  source?: string;
}

/**
 * Order Online Button with Tracking
 */
export function OrderButton({ 
  buttonLocation, 
  restaurantName,
  source = 'organic'
}: TrackedButtonProps) {
  const handleClick = () => {
    trackOrderClick({
      button_location: buttonLocation,
      restaurant_name: restaurantName,
      source,
    });
  };

  // Add UTM parameters to track source
  const utmParams = buildUTMParams('website', 'button', 'order_cta', buttonLocation);

  return (
    <Link
      href={`https://order.example.com?${utmParams}`}
      onClick={handleClick}
      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      Order Online
    </Link>
  );
}

/**
 * Reserve Table Button with Tracking
 */
export function ReserveButton({ 
  buttonLocation, 
  restaurantName,
  source = 'organic'
}: TrackedButtonProps) {
  const handleClick = () => {
    trackReserveClick({
      button_location: buttonLocation,
      restaurant_name: restaurantName,
      source,
    });
  };

  const utmParams = buildUTMParams('website', 'button', 'reserve_cta', buttonLocation);

  return (
    <Link
      href={`https://reserve.example.com?${utmParams}`}
      onClick={handleClick}
      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      Reserve Table
    </Link>
  );
}

/**
 * Call Button with Tracking
 * Use different phone numbers for site vs GBP for call tracking
 */
export function CallButton({ 
  buttonLocation,
  phoneNumber = '(425) 420-7090', // Site-specific tracking number
  displayText = 'Call Now'
}: { buttonLocation: string; phoneNumber?: string; displayText?: string }) {
  const handleClick = () => {
    trackCallClick({
      phone_number: phoneNumber,
      button_location: buttonLocation,
      source: 'website',
    });
  };

  return (
    <a
      href={`tel:+14254207090`}
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      {displayText}
    </a>
  );
}

/**
 * Get Directions Button with Tracking
 */
export function DirectionsButton({ 
  buttonLocation,
  destination = 'restaurant'
}: { buttonLocation: string; destination?: string }) {
  const handleClick = () => {
    trackDirectionsClick({
      button_location: buttonLocation,
      destination,
    });
  };

  const googleMapsUrl = 'https://www.google.com/maps/dir//Dineably'; // Replace with actual address

  return (
    <a
      href={googleMapsUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
      Get Directions
    </a>
  );
}

/**
 * Free Audit CTA Button with UTM Tracking
 * Use this in headers and key conversion points
 */
export function AuditCTAButton({ 
  buttonLocation,
  variant = 'primary'
}: { buttonLocation: string; variant?: 'primary' | 'secondary' }) {
  // Add UTM parameters to track which button was clicked
  const utmParams = buildUTMParams('website', 'cta', 'free_audit', buttonLocation);

  const baseClasses = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all";
  const variantClasses = variant === 'primary'
    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
    : "bg-white text-black hover:bg-gray-100 border border-gray-300";

  return (
    <Link
      href={`/contact?${utmParams}`}
      className={`${baseClasses} ${variantClasses}`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
      Free 15-Minute Audit
    </Link>
  );
}

