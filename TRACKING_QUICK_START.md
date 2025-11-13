# Quick Start: Adding Tracking to Your Buttons

## 🎯 Already Tracked Automatically

The following are **already tracking on every page**:
- ✅ Page views
- ✅ Session tracking
- ✅ Traffic sources
- ✅ User location & device

---

## 📞 Phone Number Tracking

### Track Call Clicks

```typescript
import { trackCallClick } from '@/lib/analytics';

<a 
  href="tel:+14254207090"
  onClick={() => trackCallClick({
    phone_number: '(425) 420-7090',
    button_location: 'header',  // or 'footer', 'hero', 'cta', etc.
    source: 'website'
  })}
  className="..."
>
  (425) 420-7090
</a>
```

---

## 🎫 Order/Reserve Buttons

### Track Order Online Clicks

```typescript
import { trackOrderClick } from '@/lib/analytics';

<Link
  href="https://order.yourrestaurant.com"
  onClick={() => trackOrderClick({
    button_location: 'hero',
    restaurant_name: 'Restaurant Name',
    source: 'organic'
  })}
  className="..."
>
  Order Online
</Link>
```

### Track Reserve Table Clicks

```typescript
import { trackReserveClick } from '@/lib/analytics';

<Link
  href="https://reserve.yourrestaurant.com"
  onClick={() => trackReserveClick({
    button_location: 'cta_section',
    restaurant_name: 'Restaurant Name',
    source: 'organic'
  })}
  className="..."
>
  Reserve Table
</Link>
```

---

## 📍 Directions Tracking

### Track Get Directions Clicks

```typescript
import { trackDirectionsClick } from '@/lib/analytics';

<a
  href="https://maps.google.com/..."
  onClick={() => trackDirectionsClick({
    button_location: 'contact_section',
    destination: 'restaurant'
  })}
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Get Directions
</a>
```

---

## 📝 Form Submission Tracking

### Track Contact/Audit Form Submissions

```typescript
import { trackAuditSubmit } from '@/lib/analytics';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Submit form logic here...
  
  // Track the submission
  trackAuditSubmit({
    form_location: 'contact_page',  // or 'homepage', 'modal', etc.
    form_type: 'audit'  // or 'contact', 'quote', etc.
  });
};
```

---

## 🔗 UTM Parameter Tracking

### Add UTM Parameters to Links

```typescript
import { buildUTMParams } from '@/lib/analytics';

const utmParams = buildUTMParams(
  'website',           // source
  'button',            // medium
  'free_audit',        // campaign (optional)
  'hero_cta'          // content (optional)
);

<Link href={`/contact?${utmParams}`}>
  Get Free Audit
</Link>

// Generates: /contact?utm_source=website&utm_medium=button&utm_campaign=free_audit&utm_content=hero_cta
```

---

## 🎨 Pre-Built Tracked Components

We've already created tracked button components you can import and use:

### 1. Call Button

```typescript
import { CallButton } from '@/components/TrackedButtons';

<CallButton 
  buttonLocation="header"
  phoneNumber="(425) 420-7090"
  displayText="Call Now"
/>
```

### 2. Order Button

```typescript
import { OrderButton } from '@/components/TrackedButtons';

<OrderButton 
  buttonLocation="hero"
  restaurantName="Your Restaurant"
  source="organic"
/>
```

### 3. Reserve Button

```typescript
import { ReserveButton } from '@/components/TrackedButtons';

<ReserveButton 
  buttonLocation="cta_section"
  restaurantName="Your Restaurant"
  source="organic"
/>
```

### 4. Directions Button

```typescript
import { DirectionsButton } from '@/components/TrackedButtons';

<DirectionsButton 
  buttonLocation="footer"
  destination="restaurant"
/>
```

### 5. Audit CTA Button

```typescript
import { AuditCTAButton } from '@/components/TrackedButtons';

<AuditCTAButton 
  buttonLocation="header"
  variant="primary"  // or "secondary"
/>
```

---

## 📊 Viewing Tracked Events in GA4

### Real-Time View

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select property: `G-PBDEBXGEPN`
3. Click **Reports** → **Realtime**
4. Click buttons on your site
5. See events appear instantly!

### Event Names in GA4

Look for these event names:
- `order_click`
- `reserve_click`
- `call_click`
- `directions_click`
- `audit_submit`
- `generate_lead`

### Converting to Debug Mode

Add `?debug_mode=1` to your URL to see events in **DebugView**:
```
https://dineably.com?debug_mode=1
```

---

## 🔍 Common Button Locations

Use consistent naming for `button_location`:

- `header` - Top navigation
- `hero` - Hero/banner section
- `cta_section` - Call-to-action sections
- `footer` - Footer area
- `sidebar` - Sidebar widgets
- `modal` - Popup/modal windows
- `contact_page` - Contact page forms
- `case_study` - Case study pages
- `pricing_section` - Pricing tables

This helps you analyze which sections drive the most conversions!

---

## ✅ Example: Complete Contact Button

Here's a complete example with tracking:

```typescript
'use client';

import { trackCallClick } from '@/lib/analytics';

export default function ContactButton() {
  return (
    <div className="flex gap-4">
      {/* Phone Button with Tracking */}
      <a
        href="tel:+14254207090"
        onClick={() => trackCallClick({
          phone_number: '(425) 420-7090',
          button_location: 'hero',
          source: 'website'
        })}
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
      >
        📞 (425) 420-7090
      </a>

      {/* Email Button (Optional: track with custom event) */}
      <a
        href="mailto:hello@dineably.com"
        onClick={() => {
          if (window.gtag) {
            window.gtag('event', 'email_click', {
              button_location: 'hero',
              event_category: 'contact'
            });
          }
        }}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all border border-gray-300"
      >
        ✉️ Email Us
      </a>
    </div>
  );
}
```

---

## 🎯 Pro Tips

### 1. Consistent Naming
Use the same `button_location` names across your site for easier reporting.

### 2. Test in Console
All tracking functions log to console (look for 📊 emoji). Keep console open while testing!

### 3. Respect Consent
All tracking functions automatically respect user cookie preferences. No extra code needed!

### 4. Custom Events
Need to track something else? Use this pattern:

```typescript
if (window.gtag) {
  window.gtag('event', 'custom_event_name', {
    parameter_name: 'value',
    event_category: 'category',
    event_label: 'label'
  });
}
```

### 5. Set Up Conversions
In GA4, mark these events as conversions:
- `audit_submit` - Primary conversion goal
- `call_click` - Phone lead
- `generate_lead` - Form submission

---

## 🚀 Quick Test Checklist

- [ ] Cookie banner appears on first visit
- [ ] Accepted cookies enable tracking
- [ ] Console shows 📊 Analytics Initialized
- [ ] Button clicks show tracking logs
- [ ] Events appear in GA4 Realtime
- [ ] Footer has "Cookie Settings" link
- [ ] Privacy links work in cookie banner

---

**That's it!** Your tracking is ready to go. All events respect user privacy and GDPR compliance automatically. 🎉

