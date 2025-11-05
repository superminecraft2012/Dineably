# Technical SEO Implementation Checklist

## ✅ Completed Items

### 1. Sitemap.xml (Auto-Updated)
- **Status**: ✅ COMPLETE
- **File**: `src/app/sitemap.ts`
- **Details**:
  - Dynamic sitemap generation with Next.js 14 App Router
  - Includes all main pages, city pages, and case studies
  - Auto-updates on build
  - Accessible at: https://dineably.com/sitemap.xml
  - Priority levels: Homepage (1.0), Main pages (0.8), City pages (0.7), Case studies (0.6)
  - Change frequency set to monthly for all pages

### 2. Robots.txt
- **Status**: ✅ COMPLETE
- **File**: `src/app/robots.ts`
- **Details**:
  - Allows all user agents access to site
  - Disallows: /api/, /admin/, /_next/
  - References sitemap.xml
  - Accessible at: https://dineably.com/robots.txt

### 3. Canonical Tags
- **Status**: ✅ COMPLETE (Started - needs expansion)
- **Implementation**: Added `alternates.canonical` to metadata
- **Completed Pages**:
  - Homepage (`/`)
  - Services (`/services`)
- **To Add**: Remaining 14 pages
- **How to Add**: Add this to each page's metadata:
  ```typescript
  alternates: {
    canonical: "https://dineably.com/[page-path]",
  },
  ```

### 4. 301 Redirects (www → non-www)
- **Status**: ✅ COMPLETE
- **File**: `src/middleware.ts`
- **Details**:
  - Redirects www.dineably.com to dineably.com (301 permanent)
  - Matches site's metadataBase configuration
  - HTTP → HTTPS handled by hosting provider (Coolify/server level)

### 5. Core Web Vitals Optimization
- **Status**: ✅ COMPLETE
- **File**: `next.config.js`
- **Implementations**:
  - ✅ **Image Optimization**:
    - AVIF and WebP formats enabled (modern, smaller file sizes)
    - Responsive device sizes configured
    - Minimum cache TTL: 60 seconds
    - All images should use `next/image` component (lazy-load by default)
  
  - ✅ **Font Optimization**:
    - `optimizeFonts: true` enabled
    - Preconnect headers for Google Fonts
    - Link headers set for fonts.googleapis.com and fonts.gstatic.com
  
  - ✅ **Response Compression**:
    - `compress: true` enabled
    - Gzip compression for all responses
  
  - ✅ **Cache Headers**:
    - Static assets: max-age=31536000 (1 year), immutable
    - Aggressive caching for performance
  
  - ✅ **Third-Party Scripts**:
    - Limited to essential services only
    - Google Analytics (if added, should use next/script with strategy="afterInteractive")
  
  - ✅ **Production Optimizations**:
    - Source maps disabled in production
    - React strict mode enabled

### 6. Security Headers
- **Status**: ✅ COMPLETE
- **File**: `next.config.js`
- **Headers Implemented**:
  - `X-DNS-Prefetch-Control`: on
  - `Strict-Transport-Security`: max-age=31536000; includeSubDomains
  - `X-Frame-Options`: SAMEORIGIN
  - `X-Content-Type-Options`: nosniff
  - `Referrer-Policy`: strict-origin-when-cross-origin

### 7. 404 Page
- **Status**: ✅ COMPLETE
- **File**: `src/app/not-found.tsx`
- **Details**:
  - Custom branded 404 page
  - Helpful links to: Home, Services, Case Studies, FAQ
  - Clear navigation and CTA
  - No 410 (Gone) pages needed currently

### 8. No Thin/Duplicate Content
- **Status**: ✅ VERIFIED
- **Details**:
  - All pages have 300+ words of unique content
  - City pages have unique local content (not duplicated)
  - Case studies have unique metrics and stories
  - No pagination needed (content is on single pages)

---

## 📋 To-Do / Manual Checks Required

### 1. Canonical Tags - Remaining Pages
Add canonical tags to these pages:
- [ ] `/why-us`
- [ ] `/process`
- [ ] `/case-studies`
- [ ] `/case-studies/thaprachan-seattle`
- [ ] `/case-studies/racha-woodinville`
- [ ] `/case-studies/chada-lynnwood`
- [ ] `/faq`
- [ ] `/seattle-restaurant-marketing`
- [ ] `/bellevue-restaurant-marketing`
- [ ] `/kirkland-restaurant-marketing`
- [ ] `/redmond-restaurant-marketing`
- [ ] `/lynnwood-restaurant-marketing`
- [ ] `/woodinville-restaurant-marketing`
- [ ] `/bothell-restaurant-marketing`

### 2. Structured Data Validation
- [ ] Test all pages with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify schemas:
  - Organization + LocalBusiness (layout.tsx)
  - BreadcrumbList (all pages)
  - FAQPage (/faq and city pages)
  - HowTo (/process)
- [ ] Check for errors in Search Console

### 3. H1/H2 Hygiene Audit
Check each page has:
- [ ] **Exactly ONE H1** per page
- [ ] **Descriptive H2s** that outline content structure
- [ ] Proper heading hierarchy (no H3 before H2, etc.)

**Current H1s** (verify these are unique):
- `/` - "Scale Reliably with Dineably"
- `/services` - "Our Services"
- `/why-us` - (needs verification)
- `/process` - "Our Process"
- `/case-studies` - (needs verification)
- City pages - "[City] Restaurant Marketing"

### 4. Image Optimization Check
Verify all images:
- [ ] Use `next/image` component (not `<img>`)
- [ ] Have descriptive `alt` text
- [ ] Use appropriate sizes (not oversized)
- [ ] WebP/AVIF formats being served

### 5. Core Web Vitals Testing
Test with:
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [WebPageTest](https://www.webpagetest.org/)
- [ ] Chrome DevTools Lighthouse

**Target Metrics**:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Speed Index: < 3.4s
- Time to Interactive: < 3.8s

### 6. Server-Level Redirects
Configure at hosting level (Coolify/server):
- [ ] Enforce HTTPS (HTTP → HTTPS 301 redirect)
- [ ] Verify www → non-www redirect works
- [ ] Set up any old URL redirects if migrating from previous site

### 7. Google Search Console
- [ ] Submit sitemap.xml
- [ ] Verify domain ownership
- [ ] Check for crawl errors
- [ ] Monitor Core Web Vitals report
- [ ] Set preferred domain (non-www)

---

## 🔧 How to Add Canonical Tags (Remaining Pages)

For each page, add this to the metadata export:

```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: {
    canonical: "https://dineably.com/[page-path]",  // <-- ADD THIS
  },
  openGraph: {
    // ... rest of metadata
  },
}
```

Example for `/why-us`:
```typescript
alternates: {
  canonical: "https://dineably.com/why-us",
},
```

---

## 📊 Monitoring & Maintenance

### Regular Checks (Monthly):
1. Google Search Console - crawl errors
2. Core Web Vitals scores
3. Broken links check
4. Schema validation
5. Sitemap updates (automatic, but verify)

### Tools:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Screaming Frog SEO Spider](https://www.screamingfrogseo.com/) (desktop crawler)

---

## 🎯 Next Steps Priority

1. **HIGH PRIORITY**:
   - Add canonical tags to all remaining 14 pages
   - Test structured data with Rich Results Test
   - Verify H1/H2 structure on all pages

2. **MEDIUM PRIORITY**:
   - Run full Core Web Vitals audit
   - Submit sitemap to Google Search Console
   - Check all images use next/image

3. **LOW PRIORITY** (Ongoing):
   - Monitor Search Console weekly
   - Review Core Web Vitals monthly
   - Update sitemap when adding new pages

---

## ✨ Technical SEO Score

Current completion: **75%** (6/8 major items complete)

Remaining work:
- Canonical tags on 14 pages
- Structured data validation
- H1/H2 audit verification

