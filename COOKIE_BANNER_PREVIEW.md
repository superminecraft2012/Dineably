# 🍪 Cookie Consent Banner - Visual Guide

## What Users Will See

### Default Banner (First Visit)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  BACKGROUND OVERLAY (dark with blur)                              │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                                                              │ │
│  │  🍪 (orange icon)  We value your privacy                    │ │
│  │                                                              │ │
│  │  We use cookies to enhance your browsing experience,        │ │
│  │  analyze site traffic, and provide personalized content.    │ │
│  │  By clicking "Accept All", you consent to our use of        │ │
│  │  cookies. You can also customize your preferences or        │ │
│  │  reject non-essential cookies.                              │ │
│  │                                                              │ │
│  │  Read our Privacy Policy and Cookie Policy                  │ │
│  │                                                              │ │
│  │  ┏━━━━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━━┓  ┏━━━━━━━━━━━┓        │ │
│  │  ┃ Accept All    ┃  ┃   Reject    ┃  ┃ Customize ┃        │ │
│  │  ┃ Cookies       ┃  ┃ Non-Essential┃  ┃           ┃        │ │
│  │  ┗━━━━━━━━━━━━━━━┛  ┗━━━━━━━━━━━━━┛  ┗━━━━━━━━━━━┛        │ │
│  │  (gradient orange)  (gray)          (white outline)        │ │
│  │                                                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

### Customization Panel (When "Customize" Clicked)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                                                              │ │
│  │  Cookie Preferences                                         │ │
│  │                                                              │ │
│  │  Choose which cookies you want to allow. You can change     │ │
│  │  these settings at any time.                                │ │
│  │                                                              │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │ Essential Cookies                                      │ │ │
│  │  │ Required for the website to function properly.         │ │ │
│  │  │ Cannot be disabled.              [Always Active] ━━━━  │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │ Analytics Cookies                                      │ │ │
│  │  │ Help us understand how visitors interact with our      │ │ │
│  │  │ website by collecting and reporting information        │ │ │
│  │  │ anonymously.                                   ⚪━━━━━  │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │ Marketing Cookies                                      │ │ │
│  │  │ Used to track visitors across websites to display      │ │ │
│  │  │ relevant advertisements and measure campaign           │ │ │
│  │  │ effectiveness.                                 ⚪━━━━━  │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  ┏━━━━━━━━━━━━━━┓  ┏━━━━━━━━━━━┓  ┏━━━━━━━━━━┓           │ │
│  │  ┃    Save      ┃  ┃ Accept All┃  ┃   Back   ┃           │ │
│  │  ┃ Preferences  ┃  ┃           ┃  ┃          ┃           │ │
│  │  ┗━━━━━━━━━━━━━━┛  ┗━━━━━━━━━━━┛  ┗━━━━━━━━━━┛           │ │
│  │  (gradient)        (gray)        (white outline)          │ │
│  │                                                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Design Features

### Colors
- **Primary Button**: Gradient from orange-500 to red-500 (matches your brand)
- **Secondary Button**: Gray background (#f3f4f6)
- **Outline Button**: White background with gray border
- **Text**: Dark gray (#374151) on white background
- **Links**: Orange accent color (#ea580c) with hover effect

### Interactions

| Element | Action | Result |
|---------|--------|--------|
| **Accept All** | Click | All cookies enabled, banner disappears |
| **Reject Non-Essential** | Click | Only essential cookies, analytics disabled |
| **Customize** | Click | Shows detailed preferences panel |
| **Toggle Switch** | Click | Enable/disable specific cookie type |
| **Save Preferences** | Click | Saves custom settings, banner disappears |
| **Cookie Settings (Footer)** | Click | Banner reappears with saved preferences |

### Responsive Design

#### Desktop (> 768px)
- Full-width banner at bottom
- Buttons in a row
- 3-column layout for preferences

#### Mobile (< 768px)
- Stacked buttons (one per line)
- Single-column layout
- Touch-friendly (44px+ tap targets)
- Scrollable if content overflows

---

## Toggle Switch States

### Off (Denied)
```
┌─────────────┐
│ ⚪          │  (gray background)
└─────────────┘
```

### On (Granted)
```
┌─────────────┐
│          🟠 │  (orange gradient background)
└─────────────┘
```

---

## Footer Integration

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  © 2025 Dineably. All rights reserved.            │
│                                                    │
│  Privacy Policy | Terms of Service | Cookie Settings │
│                                     ^^^^^^^^^^^^^^^^  │
│                                     (NEW - added)     │
│                                                    │
└────────────────────────────────────────────────────┘
```

Clicking "Cookie Settings" in the footer removes the saved preference and reloads the page, showing the banner again.

---

## User Journey

### Scenario 1: Accept All (Most Common)

```
1. User visits site
   ↓
2. Banner appears after 1 second
   ↓
3. User clicks "Accept All Cookies"
   ↓
4. Banner disappears
   ↓
5. Analytics starts tracking
   ↓
6. User browses normally
```

**Result**: Full tracking enabled, best analytics data

---

### Scenario 2: Reject Non-Essential

```
1. User visits site
   ↓
2. Banner appears after 1 second
   ↓
3. User clicks "Reject Non-Essential"
   ↓
4. Banner disappears
   ↓
5. Only essential cookies enabled
   ↓
6. Analytics DISABLED
```

**Result**: No tracking, privacy-focused experience

---

### Scenario 3: Customize (Power User)

```
1. User visits site
   ↓
2. Banner appears after 1 second
   ↓
3. User clicks "Customize"
   ↓
4. Detailed panel shows
   ↓
5. User toggles Analytics ON, Marketing OFF
   ↓
6. User clicks "Save Preferences"
   ↓
7. Banner disappears
   ↓
8. Analytics enabled, Marketing disabled
```

**Result**: Granular control, partial tracking

---

### Scenario 4: Returning Visitor

```
1. User visits site (has existing preference)
   ↓
2. No banner shown
   ↓
3. Analytics loads based on saved preference
   ↓
4. User can change via footer link anytime
```

**Result**: Seamless experience, respects previous choice

---

## Animations

### Banner Entry
- Slides up from bottom
- Fades in background overlay
- Duration: 300ms ease-out

### Toggle Switches
- Smooth slide animation
- Color transition
- Duration: 150ms

### Button Hover
- Slight color darkening
- Scale effect (hover:scale-105)
- Duration: 200ms

---

## Accessibility Features

✅ **Keyboard Navigation**: All buttons/toggles reachable via Tab  
✅ **Screen Readers**: Proper ARIA labels and semantic HTML  
✅ **Focus Indicators**: Clear focus states on all interactive elements  
✅ **Color Contrast**: WCAG AA compliant text contrast  
✅ **Touch Targets**: Minimum 44x44px for mobile taps  
✅ **Readable Fonts**: Clear, legible text at all sizes  

---

## Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile Safari | iOS 14+ | ✅ Full |
| Chrome Mobile | Android 90+ | ✅ Full |

**Note**: Uses localStorage - works in all modern browsers, automatically degrades in private mode

---

## Testing Checklist

- [ ] Banner appears on first visit (incognito mode)
- [ ] "Accept All" hides banner and enables tracking
- [ ] "Reject" disables analytics but keeps site functional
- [ ] "Customize" shows detailed preferences
- [ ] Toggle switches work (click to enable/disable)
- [ ] "Save Preferences" respects custom choices
- [ ] Footer "Cookie Settings" reopens banner
- [ ] Preferences persist after page reload
- [ ] Mobile responsive (test on phone)
- [ ] Console shows appropriate tracking logs

---

## What Happens Behind the Scenes

### When User Accepts

```javascript
// 1. Save to localStorage
localStorage.setItem('cookie_consent', JSON.stringify({
  analytics: true,
  marketing: true,
  functional: true,
  timestamp: 1700000000000
}));

// 2. Update Google Consent Mode
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted'
});

// 3. Hide banner
setShowBanner(false);

// 4. Analytics starts tracking immediately
```

### When User Rejects

```javascript
// 1. Save minimal consent
localStorage.setItem('cookie_consent', JSON.stringify({
  analytics: false,
  marketing: false,
  functional: true,  // Always true
  timestamp: 1700000000000
}));

// 2. Maintain denied consent mode
gtag('consent', 'update', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  // ...
});

// 3. Hide banner
// 4. No tracking occurs
```

---

## Privacy Policy Recommendations

Your cookie banner links to `/privacy` and `/cookie-policy`. Make sure these pages include:

### Privacy Policy Should Cover:
- What data you collect (analytics, contact forms)
- How you use the data (improve site, marketing)
- Who has access (Google Analytics, your team)
- User rights (access, deletion, opt-out)
- Cookie usage (refer to Cookie Policy)

### Cookie Policy Should Include:
- Types of cookies used (Essential, Analytics, Marketing)
- Purpose of each cookie type
- How long cookies are stored
- How to manage cookie preferences
- Link to this banner functionality

---

## Quick Tips

💡 **Test in Incognito**: Always test cookie banner in private/incognito mode  
💡 **Console Logs**: Look for 📊 emoji logs to verify tracking  
💡 **GA4 Realtime**: Best way to see tracking in action immediately  
💡 **Mobile First**: Test on actual mobile devices, not just responsive mode  
💡 **Clear Storage**: Use DevTools → Application → Local Storage to test banner  

---

**The banner is live on your site right now!** 🎉

Open your site in incognito mode to see it in action.

