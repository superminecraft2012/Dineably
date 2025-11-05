# Analytics, Tracking & Conversion Setup Guide

Complete guide to setting up all analytics and conversion tracking for Dineably.

---

## 📋 Overview

This guide covers:
1. **GA4 Event Tracking** - Custom events for conversions
2. **Meta Pixel** - Facebook/Instagram retargeting
3. **Google Ads Conversion Tracking** - Paid search ROI
4. **UTM Parameters** - Source attribution
5. **Call Tracking** - Phone call attribution
6. **Monthly Reporting** - KPI tracking

---

## 🚀 Quick Start (30 minutes)

### Step 1: Get Your Tracking IDs

1. **Google Analytics 4:**
   - Go to https://analytics.google.com
   - Create property → Get Measurement ID (format: `G-XXXXXXXXXX`)

2. **Meta Pixel:**
   - Go to https://business.facebook.com/events_manager
   - Create Pixel → Get Pixel ID (format: `123456789012345`)

3. **Google Ads:**
   - Go to Google Ads → Tools → Conversions
   - Get Conversion ID (format: `AW-XXXXXXXXXX`)

### Step 2: Add Tracking IDs to Environment Variables

1. **Copy the template:**
   ```bash
   cp env.template .env.local
   ```

2. **Add your tracking IDs:**
   ```bash
   # .env.local
   NEXT_PUBLIC_GA4_ID=G-YOUR-ACTUAL-ID
   NEXT_PUBLIC_META_PIXEL_ID=YOUR-ACTUAL-PIXEL-ID
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-YOUR-ACTUAL-ID
   ```

3. **Restart your dev server:**
   ```bash
   npm run dev
   ```

### Step 3: Verify Tracking is Working

1. **Open your site** in a browser
2. **Open DevTools** (F12 or Right-click → Inspect)
3. **Go to Console tab**
4. **Look for:** `📊 Analytics Initialized`
5. **Test events** by clicking buttons

**Verify GA4:**
- Go to GA4 → Reports → Realtime
- You should see your session

**Verify Meta Pixel:**
- Install Meta Pixel Helper Chrome extension
- Visit your site, icon should turn green

---

## 📊 GA4 Event Tracking

### Events Implemented

| Event Name | Trigger | Parameters | Use Case |
|-----------|---------|-----------|----------|
| `order_click` | User clicks "Order Online" | button_location, restaurant_name, source | Track order intent |
| `reserve_click` | User clicks "Reserve Table" | button_location, restaurant_name, source | Track reservation intent |
| `call_click` | User clicks phone number | phone_number, button_location, source | Track call leads |
| `directions_click` | User clicks "Get Directions" | button_location, destination | Track foot traffic intent |
| `audit_submit` | User submits audit form | form_location, form_type | Track lead generation |

### How to Use Event Tracking

**Example: Track Order Button Click**

```tsx
import { trackOrderClick } from '@/lib/analytics';

export function OrderButton() {
  const handleClick = () => {
    trackOrderClick({
      button_location: 'header',
      restaurant_name: 'Thaprachan Thai',
      source: 'organic',
    });
  };

  return (
    <a href="https://order.example.com" onClick={handleClick}>
      Order Online
    </a>
  );
}
```

**All tracking functions are in:** `src/lib/analytics.ts`

### View Events in GA4

1. Go to **Reports → Engagement → Events**
2. Look for: `order_click`, `reserve_click`, `call_click`, etc.
3. Click event name to see parameters

---

## 🎯 Conversion Tracking

### Set Up GA4 Conversions

1. **Go to:** GA4 → Admin → Events
2. **Find your custom events:** `audit_submit`, `order_click`, etc.
3. **Toggle "Mark as conversion"**
4. **Set conversion value** (optional, e.g., $50 for audit submit)

### Set Up Google Ads Conversions

1. **Go to:** Google Ads → Tools → Conversions
2. **Create conversion action:** "Audit Form Submit"
3. **Copy Conversion ID and Label**
4. **Update** `src/components/Analytics.tsx` with conversion label

**Example:**
```tsx
// Track Google Ads conversion
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXXX/CONVERSION-LABEL',
    'value': 1000,
    'currency': 'USD'
  });
}
```

---

## 🔗 UTM Parameter Tracking

### What are UTM Parameters?

UTM parameters track the source, medium, and campaign of your traffic.

**Format:**
```
https://dineably.com/?utm_source=facebook&utm_medium=social&utm_campaign=spring_promo
```

### UTM Structure

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `utm_source` | Traffic source | facebook, google, email, gbp |
| `utm_medium` | Marketing medium | social, cpc, email, organic |
| `utm_campaign` | Campaign name | spring_promo, lunch_special |
| `utm_content` | Content variant | button_header, button_footer |
| `utm_term` | Keyword (ads) | thai_restaurant_seattle |

### How to Use UTMs

**Example 1: Social Media Post**
```
https://dineably.com/case-studies/thaprachan-seattle?utm_source=facebook&utm_medium=social&utm_campaign=case_study_promotion&utm_content=thaprachan_success
```

**Example 2: Email Newsletter**
```
https://dineably.com/services?utm_source=newsletter&utm_medium=email&utm_campaign=may_2025&utm_content=services_highlight
```

**Example 3: GBP Website Button**
```
https://dineably.com/?utm_source=gbp&utm_medium=organic&utm_campaign=local_seo
```

### UTM Builder Helper

Use the built-in function:
```tsx
import { buildUTMParams } from '@/lib/analytics';

const utms = buildUTMParams('facebook', 'social', 'spring_promo', 'header_button');
// Returns: "utm_source=facebook&utm_medium=social&utm_campaign=spring_promo&utm_content=header_button"

const url = `https://dineably.com/services?${utms}`;
```

### View UTM Data

**In GA4:**
- Reports → Acquisition → Traffic acquisition
- See traffic broken down by source/medium

**In GSC:**
- UTMs don't appear in GSC (organic traffic only)

---

## 📞 Call Tracking Setup

See detailed guide: **[CALL_TRACKING_SETUP.md](./CALL_TRACKING_SETUP.md)**

**Quick Summary:**

1. **Sign up** for CallRail or similar service
2. **Get 3 tracking numbers:**
   - Website: `(425) 555-0101`
   - GBP: `(425) 555-0102`
   - Ads: `(425) 555-0103`
3. **Update website phone number** in Footer and buttons
4. **Update GBP** with GBP tracking number
5. **Add call extensions** in Google Ads with Ads number

**All numbers forward to:** `(425) 420-7090` (main line)

---

## 🎨 Meta Pixel Events

### Standard Events Tracked

| Event | Trigger | Use Case |
|-------|---------|----------|
| `PageView` | Every page load | General tracking |
| `Lead` | Audit form submit | Lead generation campaigns |
| `Contact` | Phone click | Retargeting users who showed intent |
| Custom Events | Order/Reserve clicks | Custom audiences |

### View Pixel Data

1. **Go to:** https://business.facebook.com/events_manager
2. **Click your pixel**
3. **Test Events** tab → See real-time events
4. **Overview** tab → See historical data

### Create Custom Audiences

1. **Events Manager → Audiences**
2. **Create Custom Audience → Website**
3. **Choose conditions:**
   - "People who visited specific pages"
   - "People who triggered custom events"
4. **Use in ad campaigns** for retargeting

---

## 📈 Monthly Reporting

See detailed template: **[MONTHLY_REPORT_TEMPLATE.md](./MONTHLY_REPORT_TEMPLATE.md)**

### Key Metrics to Track

**Website:**
- Total sessions
- New users
- Bounce rate
- Page load speed

**Conversions:**
- Order clicks
- Reserve clicks
- Phone calls
- Form submits

**Local SEO:**
- GBP views
- GBP calls
- GBP directions
- Reviews gained

**Organic Search (GSC):**
- Total clicks
- Impressions
- Average CTR
- Average position

**Paid Ads:**
- Ad spend
- Clicks
- Cost per click
- Conversions
- Cost per conversion

**Call Tracking:**
- Calls by source
- Average duration
- Qualified calls %

### Reporting Schedule

| Frequency | Format | Content |
|-----------|--------|---------|
| **Weekly** | Email update | Top-line metrics, quick wins |
| **Monthly** | 1-page PDF + Dashboard link | Full KPIs, insights, action plan |
| **Quarterly** | Presentation (30 min) | Strategic review, goal setting |

---

## 🛠️ Implementation Checklist

### Analytics Scripts
- [ ] GA4 installed (`NEXT_PUBLIC_GA4_ID` in `.env.local`)
- [ ] Meta Pixel installed (`NEXT_PUBLIC_META_PIXEL_ID`)
- [ ] Google Ads tracking installed (`NEXT_PUBLIC_GOOGLE_ADS_ID`)
- [ ] Analytics component added to `layout.tsx`

### Event Tracking
- [ ] `trackOrderClick` implemented on Order buttons
- [ ] `trackReserveClick` implemented on Reserve buttons
- [ ] `trackCallClick` implemented on phone links
- [ ] `trackDirectionsClick` implemented on directions links
- [ ] `trackAuditSubmit` implemented on form submit

### UTM Parameters
- [ ] UTMs added to GBP website button
- [ ] UTMs added to email newsletter links
- [ ] UTMs added to social media posts
- [ ] UTMs added to paid ads (auto via platform)

### Call Tracking
- [ ] CallRail account created
- [ ] 3 tracking numbers purchased
- [ ] Website phone updated to tracking number
- [ ] GBP phone updated to tracking number
- [ ] Call extensions added to Google Ads

### Conversions
- [ ] GA4 conversions marked for key events
- [ ] Google Ads conversion actions created
- [ ] Meta Pixel conversions configured
- [ ] Test all conversion tracking

### Reporting
- [ ] GA4 dashboard set up
- [ ] GSC property verified and sitemap submitted
- [ ] CallRail reporting configured
- [ ] Monthly report template customized
- [ ] First report scheduled

---

## 🧪 Testing & Verification

### Test GA4 Events

1. **Open site** in incognito/private window
2. **Open DevTools** → Console
3. **Click buttons** (Order, Reserve, Call, etc.)
4. **Look for:** `📊 [Event] Tracked:` messages
5. **Go to GA4 → Realtime** → Events
6. **Verify** your events appear

### Test Meta Pixel

1. **Install** [Meta Pixel Helper](https://chrome.google.com/webstore) extension
2. **Visit your site**
3. **Icon should turn green** (pixel active)
4. **Click icon** → See events being tracked
5. **Click buttons** → Verify custom events fire

### Test Call Tracking

1. **Call** each tracking number from your phone
2. **Verify** it forwards to your main line
3. **Check** CallRail dashboard
4. **Confirm** source is attributed correctly

### Test UTMs

1. **Visit:** `https://yourdomain.com/?utm_source=test&utm_medium=test&utm_campaign=test`
2. **Open GA4 → Realtime → Traffic sources**
3. **Verify** "test" appears as source

---

## 📚 Additional Resources

- **GA4 Documentation:** https://support.google.com/analytics
- **Meta Pixel Docs:** https://developers.facebook.com/docs/meta-pixel
- **Google Ads Help:** https://support.google.com/google-ads
- **CallRail Support:** https://www.callrail.com/support
- **UTM Builder:** https://ga-dev-tools.google/campaign-url-builder

---

## 🚨 Troubleshooting

### Events Not Showing in GA4
- **Wait 24-48 hours** for data to process
- **Check Realtime reports** for immediate verification
- **Verify** `NEXT_PUBLIC_GA4_ID` is correct
- **Check** browser console for errors

### Meta Pixel Not Firing
- **Disable** ad blockers
- **Check** Meta Pixel Helper for errors
- **Verify** `NEXT_PUBLIC_META_PIXEL_ID` is correct
- **Test** in incognito mode

### Calls Not Being Tracked
- **Verify** tracking number is live in CallRail
- **Check** forwarding is enabled
- **Test** by calling the number
- **Wait** 5-10 minutes for call to appear in dashboard

---

## ✅ Post-Deployment Checklist

After deploying your site:

- [ ] Visit site and verify Analytics component loads
- [ ] Check GA4 Realtime report shows your visit
- [ ] Test all tracked buttons
- [ ] Verify Meta Pixel Helper shows green
- [ ] Submit sitemap to GSC
- [ ] Call each tracking number to test
- [ ] Set up weekly/monthly report schedule
- [ ] Train team on how to read reports

---

**Setup Time:** 2-3 hours  
**Last Updated:** November 5, 2025  
**Status:** Implementation Complete ✅

