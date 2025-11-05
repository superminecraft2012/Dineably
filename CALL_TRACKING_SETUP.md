# Call Tracking Setup Guide for Dineably

This guide explains how to implement call tracking to distinguish between calls from your website, Google Business Profile, and ads.

---

## 🎯 Why Call Tracking?

Call tracking allows you to:
- **Attribute calls** to specific marketing channels (website, GBP, Google Ads, Meta Ads)
- **Measure ROI** accurately for each channel
- **Record calls** for quality assurance and training
- **Track conversion rates** from clicks to calls
- **Optimize campaigns** based on call quality and outcomes

---

## 📞 Recommended Call Tracking Strategy

### Three-Number Setup

| Number Type | Location | Purpose |
|------------|----------|---------|
| **Primary Business Line** | Internal use only | Main business number (not published) |
| **Website Tracking Number** | Website (all pages) | Track calls from organic/direct website traffic |
| **GBP Tracking Number** | Google Business Profile | Track calls from Google Maps/Local searches |
| **Ads Tracking Number** | Google Ads, Meta Ads | Track calls from paid advertising |

**Note:** All tracking numbers should forward to your primary business line.

---

## 🔧 Call Tracking Providers (Recommended)

### Option 1: CallRail (Recommended for Restaurants)
- **Price:** $45-$145/month
- **Features:**
  - Dynamic number insertion (DNI)
  - Call recording & transcription
  - Keyword-level tracking
  - Integration with GA4, Google Ads
- **Setup Time:** 30 minutes
- **Website:** https://www.callrail.com

### Option 2: CallTrackingMetrics
- **Price:** $39-$149/month
- **Features:**
  - Multi-channel attribution
  - Form tracking
  - Text message tracking
  - Call scoring with AI
- **Setup Time:** 45 minutes
- **Website:** https://www.calltrackingmetrics.com

### Option 3: DialogTech
- **Price:** Custom (Enterprise)
- **Features:**
  - AI conversation analytics
  - Revenue attribution
  - Integration with CRMs
- **Setup Time:** 1-2 hours
- **Website:** https://www.dialogtech.com

---

## 🚀 Setup Instructions (CallRail Example)

### Step 1: Sign Up & Get Tracking Numbers

1. **Create CallRail account**
2. **Purchase 3 tracking numbers**:
   - 1 for website
   - 1 for GBP
   - 1 for ads (or use dynamic pool for Google Ads)
3. **Set forwarding** to your main business line: `(425) 420-7090`

### Step 2: Add Website Tracking Number

**Current Phone on Website:**
```
(425) 420-7090
```

**Replace with Website Tracking Number:**
```
(425) 555-0101  // Example - use your actual tracking number
```

**Update in these locations:**
- Footer NAP section (`src/components/Footer.tsx`)
- Header CTA button (if applicable)
- Contact page
- Call buttons throughout the site

**Example code update:**
```tsx
// src/components/Footer.tsx
<a href="tel:+14255550101" className="hover:text-orange-500">
  (425) 555-0101
</a>
```

### Step 3: Add GBP Tracking Number

1. **Log in to Google Business Profile**
2. **Navigate to:** Info → Phone
3. **Update primary phone** to your GBP tracking number
4. **Save changes**

**Important:** Wait 24-48 hours for changes to propagate across Google Search and Maps.

### Step 4: Add Ads Tracking Number

**For Google Ads:**
1. **Create Call Extension** in Google Ads
2. **Use your Ads tracking number**
3. **Enable call reporting**
4. **Set minimum call duration** (30 seconds recommended)

**For Meta Ads:**
1. **Use "Call Now" button** in lead ads
2. **Add Ads tracking number**
3. **Enable Facebook Conversions API** for better attribution

### Step 5: Install CallRail Tracking Script

Add the CallRail script to your website for dynamic number insertion:

**Update `src/app/layout.tsx`:**
```tsx
<Script id="callrail" strategy="afterInteractive">
  {`
    (function() {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.callrail.com/companies/YOUR_COMPANY_ID/tracker.js';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    })();
  `}
</Script>
```

Replace `YOUR_COMPANY_ID` with your actual CallRail company ID.

### Step 6: Configure Call Tracking Events in GA4

Send call data to Google Analytics 4:

**In CallRail Dashboard:**
1. Go to **Settings → Integrations → Google Analytics**
2. **Enable GA4 integration**
3. **Enter your GA4 Measurement ID**
4. **Select events to track:** Call started, Call completed, Call duration

---

## 📊 Call Tracking Attribution Setup

### Track Call Source with UTM Parameters

When users click your call button, pass UTM data to CallRail:

**Example Implementation:**
```tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { trackCallClick } from '@/lib/analytics';

export function CallButton() {
  const searchParams = useSearchParams();
  
  const handleCallClick = () => {
    // Get UTM parameters from URL
    const utmSource = searchParams?.get('utm_source') || 'organic';
    const utmMedium = searchParams?.get('utm_medium') || 'direct';
    const utmCampaign = searchParams?.get('utm_campaign') || '';
    
    // Track in GA4
    trackCallClick({
      phone_number: '(425) 555-0101',
      button_location: 'header',
      source: utmSource,
    });
    
    // Pass UTM data to CallRail (if using DNI)
    if (window.CR && window.CR.setTag) {
      window.CR.setTag('utm_source', utmSource);
      window.CR.setTag('utm_medium', utmMedium);
      window.CR.setTag('utm_campaign', utmCampaign);
    }
  };
  
  return (
    <a href="tel:+14255550101" onClick={handleCallClick}>
      Call Now
    </a>
  );
}
```

---

## 🔍 Reporting & Analytics

### Key Metrics to Track

1. **Total Calls by Source**
   - Website: Direct/Organic traffic
   - GBP: Local search & maps
   - Ads: Paid campaigns

2. **Call Quality Metrics**
   - Call duration (>2 minutes = qualified)
   - First-time vs repeat callers
   - Missed calls / voicemail
   - Time of day distribution

3. **Conversion Metrics**
   - Calls to reservations
   - Calls to orders
   - Average order value from phone orders

4. **Cost Per Call (CPC)**
   - Website CPC: (Monthly marketing costs) / (Website calls)
   - Ads CPC: (Ad spend) / (Calls from ads)
   - GBP CPC: (Local SEO costs) / (GBP calls)

---

## 📋 NAP Consistency Checklist

Ensure your phone numbers are consistent across all platforms:

### Website Phone Number
- [ ] Footer: `(425) 555-0101` (Website tracking number)
- [ ] Header CTA: `(425) 555-0101`
- [ ] Contact Page: `(425) 555-0101`
- [ ] Schema.org JSON-LD: `"+1-425-555-0101"`

### Google Business Profile
- [ ] Primary Phone: `(425) 555-0102` (GBP tracking number)
- [ ] Business Hours: 9am - 5pm daily
- [ ] Address: [Your actual address]

### Citations & Directories
- [ ] Yelp: `(425) 555-0101` (Use website number)
- [ ] Facebook: `(425) 555-0102` (Use GBP number if linking from there)
- [ ] Other directories: `(425) 555-0101` (Website number)

**Important:** For local SEO, maintain the same name, address, and phone (NAP) across all directories.

---

## 🎯 Call Tracking Goals & KPIs

### Month 1 Goals
- [ ] Set up 3 tracking numbers
- [ ] Install tracking script on website
- [ ] Update GBP with tracking number
- [ ] Configure GA4 integration
- [ ] Establish baseline metrics

### Month 2-3 Goals
- [ ] Achieve >90% call answer rate
- [ ] Average call duration >3 minutes
- [ ] Track call-to-conversion rate
- [ ] Identify peak call times
- [ ] Optimize ad campaigns based on call quality

### Ongoing Goals
- [ ] Monitor call trends weekly
- [ ] Review call recordings monthly
- [ ] Adjust bidding based on cost per qualified call
- [ ] Test call scripts and greeting
- [ ] Train staff on handling tracked calls

---

## 🚨 Troubleshooting

### Calls Not Being Tracked
- **Check:** Is the tracking script installed correctly?
- **Check:** Is the phone number formatted correctly in `tel:` links?
- **Check:** Are calls being forwarded to the right number?

### GA4 Not Receiving Call Data
- **Check:** Is the CallRail GA4 integration enabled?
- **Check:** Is your GA4 Measurement ID correct?
- **Check:** Are call events showing in CallRail dashboard first?

### GBP Tracking Number Not Showing
- **Wait:** Changes take 24-48 hours to propagate
- **Verify:** Number is verified in GBP dashboard
- **Check:** Business is in good standing (no policy violations)

---

## 📞 Summary: Phone Number Strategy

| Channel | Number | Purpose |
|---------|--------|---------|
| **Main Line** | `(425) 420-7090` | Internal only - receives all forwarded calls |
| **Website** | `(425) 555-0101` | Tracks organic/direct website traffic |
| **GBP** | `(425) 555-0102` | Tracks Google Maps & local search |
| **Ads** | `(425) 555-0103` | Tracks paid advertising calls |

**All tracking numbers forward to:** `(425) 420-7090`

---

## 📚 Next Steps

1. **Sign up** for CallRail or preferred call tracking provider
2. **Purchase** 3 tracking numbers in your area code (425)
3. **Update** website phone number in code
4. **Update** GBP with tracking number
5. **Install** tracking script on website
6. **Configure** GA4 integration
7. **Test** by calling each number
8. **Monitor** dashboard for 1 week
9. **Review** call recordings and optimize

---

**Last Updated:** November 5, 2025  
**Status:** Setup Guide Complete ✅  
**Est. Setup Time:** 2-3 hours  
**Monthly Cost:** $45-$150 (depending on call volume)

