# Structured Data Validation Guide for Dineably

This document provides step-by-step instructions for validating all Schema.org JSON-LD structured data on the Dineably website.

## ✅ Schemas Implemented

### Site-Wide Schemas (in `layout.tsx`)
1. **Organization** - Company information
2. **LocalBusiness** - Local business presence
3. **MarketingAgency** - Service provider type

### Page-Specific Schemas

| Page | Schema Type | Location |
|------|-------------|----------|
| All pages | BreadcrumbList | Each `page.tsx` |
| Homepage | BreadcrumbList | `src/app/page.tsx` |
| Why Us | BreadcrumbList | `src/app/why-us/page.tsx` |
| Services | BreadcrumbList | `src/app/services/page.tsx` |
| Process | BreadcrumbList + HowTo | `src/app/process/page.tsx` |
| FAQ | BreadcrumbList + FAQPage | `src/app/faq/page.tsx` |
| Case Studies | BreadcrumbList | `src/app/case-studies/page.tsx` |
| Individual Case Studies | BreadcrumbList | `src/app/case-studies/[slug]/page.tsx` |
| City Pages (7) | BreadcrumbList | `src/app/[city]-restaurant-marketing/page.tsx` |

---

## 🔍 How to Validate Structured Data

### Method 1: Google Rich Results Test (Recommended)

1. **Deploy your site** to production (or use a staging URL)
2. **Navigate to:** https://search.google.com/test/rich-results
3. **Enter URL for each page** (list below)
4. **Click "Test URL"**
5. **Verify:** Green checkmarks for all schemas

### Pages to Test:

```
https://dineably.com/
https://dineably.com/why-us
https://dineably.com/services
https://dineably.com/process
https://dineably.com/case-studies
https://dineably.com/faq
https://dineably.com/seattle-restaurant-marketing
https://dineably.com/bellevue-restaurant-marketing
https://dineably.com/kirkland-restaurant-marketing
https://dineably.com/redmond-restaurant-marketing
https://dineably.com/lynnwood-restaurant-marketing
https://dineably.com/woodinville-restaurant-marketing
https://dineably.com/bothell-restaurant-marketing
https://dineably.com/case-studies/thaprachan-seattle
https://dineably.com/case-studies/racha-woodinville
https://dineably.com/case-studies/chada-lynnwood
```

### Method 2: Schema Markup Validator

1. **Navigate to:** https://validator.schema.org/
2. **Enter URL** or paste HTML source
3. **Check for errors** or warnings
4. **Fix any issues** and re-test

### Method 3: Browser DevTools (Quick Check)

1. **Open page** in Chrome/Firefox
2. **Right-click → Inspect → Sources** (or View Page Source)
3. **Search for** `application/ld+json`
4. **Verify** schema JSON is present and properly formatted

---

## 📋 Expected Schemas by Page

### Homepage (`/`)
```json
- Organization (from layout)
- LocalBusiness (from layout)
- MarketingAgency (from layout)
- BreadcrumbList (page-specific)
```

### Process Page (`/process`)
```json
- Organization (from layout)
- LocalBusiness (from layout)
- MarketingAgency (from layout)
- BreadcrumbList (page-specific)
- HowTo (page-specific, 4 steps)
```

### FAQ Page (`/faq`)
```json
- Organization (from layout)
- LocalBusiness (from layout)
- MarketingAgency (from layout)
- BreadcrumbList (page-specific)
- FAQPage (page-specific, 12 Q&As)
```

### All Other Pages
```json
- Organization (from layout)
- LocalBusiness (from layout)
- MarketingAgency (from layout)
- BreadcrumbList (page-specific)
```

---

## 🛠️ Troubleshooting Common Issues

### Error: "Missing required field"
- **Solution:** Check the schema definition in the page file
- **Common culprits:** Missing `name`, `description`, or `url` fields

### Warning: "Recommended field missing"
- **Solution:** Add optional but recommended fields like `image`, `priceRange`, etc.
- **Impact:** Low - warnings don't prevent rich results

### Error: "Invalid URL format"
- **Solution:** Ensure all URLs are absolute (start with `https://dineably.com`)
- **Check:** `metadataBase` in `layout.tsx` should be set correctly

### Error: "Duplicate schema"
- **Solution:** Ensure you're not defining the same schema twice
- **Note:** Our Organization/LocalBusiness are only in `layout.tsx` (correct)

---

## ✨ Quick Validation Checklist

After deployment, verify:

- [ ] **Organization Schema** appears on all pages
- [ ] **LocalBusiness Schema** appears on all pages with correct NAP:
  - Name: "Dineably"
  - Phone: "+1-425-420-7090"
  - Hours: "Mo-Su 09:00-17:00"
  - Address: (verify matches GBP)
- [ ] **BreadcrumbList** appears on all pages with correct hierarchy
- [ ] **FAQPage** on `/faq` with 12 questions
- [ ] **HowTo** on `/process` with 4 steps (Discovery, Strategy, Implementation, Optimization)
- [ ] No errors in Google Rich Results Test
- [ ] No warnings in Schema Markup Validator

---

## 📊 NAP Consistency Verification

Ensure these match **exactly** across:
- Website (all pages)
- Google Business Profile
- Major citations (Yelp, Facebook, etc.)

```
Name: Dineably
Address: [Verify with client - should match GBP exactly]
Phone: (425) 420-7090 or +1-425-420-7090
Hours: Monday - Sunday: 9am - 5pm PST
```

---

## 🚀 Next Steps After Validation

1. **Submit sitemap** to Google Search Console: `https://dineably.com/sitemap.xml`
2. **Request indexing** for key pages in GSC
3. **Monitor** Search Console for Rich Results reports
4. **Track** rich snippet appearances in SERPs (30-60 days)
5. **Update schemas** quarterly or when business info changes

---

## 📝 Notes

- Structured data is **cumulative**: Layout schemas + page-specific schemas
- Changes may take **24-72 hours** to reflect in Google's test tools after deployment
- Rich snippets in search results may take **2-8 weeks** to appear
- Keep schemas **updated** when business information changes (phone, hours, address)

---

**Last Updated:** November 5, 2025
**Status:** All schemas implemented ✅
**Next Review:** Quarterly or upon major site updates

