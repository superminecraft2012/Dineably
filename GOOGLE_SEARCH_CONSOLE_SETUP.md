# Google Search Console Setup & Monitoring Guide

Complete guide to setting up Google Search Console (GSC) for Dineably and monitoring key SEO metrics.

---

## 🎯 Why Google Search Console?

GSC is essential for:
- **Monitoring** organic search performance
- **Tracking** which keywords bring traffic
- **Identifying** technical SEO issues
- **Submitting** sitemaps for faster indexing
- **Measuring** click-through rates (CTR)
- **Requesting** indexing for new pages
- **Analyzing** Core Web Vitals performance

---

## 🚀 Initial Setup (One-Time)

### Step 1: Access Google Search Console

1. **Navigate to:** https://search.google.com/search-console
2. **Sign in** with your Google account (use the same account as GBP)
3. **Click** "Add Property"

### Step 2: Add Your Property

**Choose property type:**

**Option A: Domain Property (Recommended)**
- Covers all subdomains and protocols (http/https, www/non-www)
- Requires DNS verification

**Option B: URL Prefix Property**
- Specific to one protocol and subdomain
- Multiple verification methods

**For Dineably, add:**
```
Property: https://www.dineably.com
```

### Step 3: Verify Ownership

**Method 1: HTML File Upload (Easiest)**
1. Download the verification file from GSC
2. Upload to `/public/` folder in your Next.js project
3. Deploy the site
4. Click "Verify" in GSC

**Method 2: HTML Meta Tag**
1. Copy the meta tag from GSC
2. Add to `src/app/layout.tsx` in the `<head>`:
```tsx
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```
3. Deploy and verify

**Method 3: Google Analytics (If GA4 is already set up)**
1. Use your existing GA4 property
2. GSC will automatically verify if you're an admin

**Recommended:** Use Method 2 (HTML Meta Tag) for Next.js projects.

---

## 📤 Submit Your Sitemap

### Step 1: Verify Sitemap is Live

1. **Visit:** https://dineably.com/sitemap.xml
2. **Verify** all pages are listed (should show 16+ URLs)

### Step 2: Submit to GSC

1. **In GSC**, go to **Indexing → Sitemaps** (left sidebar)
2. **Enter sitemap URL:** `sitemap.xml`
3. **Click** "Submit"

**Expected Result:** "Success" status within 24-48 hours

### Sitemaps to Submit:
```
sitemap.xml (main sitemap)
```

---

## 📊 Key Reports to Monitor

### 1. Performance Report (Most Important)

**Location:** Search Results → Performance

**Metrics to Track:**

| Metric | What It Measures | Goal |
|--------|------------------|------|
| **Total Clicks** | Clicks from Google search | Increase month-over-month |
| **Total Impressions** | Times your site appeared in search | Increase steadily |
| **Average CTR** | Clicks ÷ Impressions | >3% (industry avg 2-3%) |
| **Average Position** | Average ranking position | <10 (first page) |

**How to Use:**
- **Filter by Page** to see top performers
- **Filter by Query** to identify valuable keywords
- **Compare Date Ranges** (e.g., last 28 days vs previous 28 days)

**Example Analysis:**
```
Query: "thai restaurant seattle"
Impressions: 5,200
Clicks: 280
CTR: 5.4% ✅ (above average)
Position: 4.2 ✅ (first page)
```

### 2. Coverage Report (Index Status)

**Location:** Indexing → Pages

**What to Check:**
- **Indexed pages:** Should show all 16 key pages
- **Not indexed:** Investigate any pages marked "Excluded"
- **Errors:** Fix immediately (404s, server errors, etc.)

**Common Issues:**
- ❌ **"Discovered - currently not indexed"** → Request indexing manually
- ❌ **"Crawled - currently not indexed"** → Improve content quality
- ❌ **"Page with redirect"** → Fix redirect chains
- ✅ **"Indexed, not submitted in sitemap"** → This is fine

### 3. Sitemaps Report

**Location:** Indexing → Sitemaps

**What to Check:**
- **Status:** "Success" (green checkmark)
- **Discovered URLs:** 16+ pages
- **Last Read:** Should be within last 7 days

**If sitemap fails:**
- Verify sitemap.xml is accessible
- Check for XML syntax errors
- Ensure URLs are absolute (not relative)

### 4. Core Web Vitals Report

**Location:** Experience → Core Web Vitals

**Metrics:**
- **LCP** (Largest Contentful Paint): <2.5s ✅
- **FID** (First Input Delay): <100ms ✅
- **CLS** (Cumulative Layout Shift): <0.1 ✅

**Goal:** 100% of URLs in "Good" category

**How to Fix Issues:**
1. Run PageSpeed Insights on failing pages
2. Optimize images (lazy-load, compress)
3. Minimize JavaScript execution
4. Preconnect to external resources

### 5. Mobile Usability Report

**Location:** Experience → Mobile Usability

**What to Check:**
- **No errors:** All pages should pass mobile-friendly test
- **Common issues:** Text too small, clickable elements too close, viewport not set

**Next.js is mobile-friendly by default**, but verify no issues after deployment.

### 6. Rich Results Report

**Location:** Enhancements → (varies by schema type)**

**What to Check:**
- **Organization:** Shows Dineably business info
- **Breadcrumbs:** Shows on all pages
- **FAQ:** Shows on FAQ page
- **HowTo:** Shows on Process page

**If errors appear:**
1. Copy the URL with the error
2. Test in **Google Rich Results Test**
3. Fix schema issues in the page code
4. Request re-indexing

---

## 🔍 Weekly Monitoring Checklist

### Every Monday (15 minutes)

- [ ] **Check Performance Report**
  - Total clicks vs last week
  - Any sudden drops or spikes?
  - Top 10 queries performance
- [ ] **Review Coverage**
  - Any new "Not indexed" pages?
  - Any new errors?
- [ ] **Check Core Web Vitals**
  - Any pages moved to "Needs Improvement"?
- [ ] **Monitor Sitelinks**
  - Are sitelinks showing for brand searches?

---

## 📈 Monthly Deep Dive (1 hour)

### First Week of Each Month

1. **Performance Analysis**
   - Export top 100 queries to spreadsheet
   - Identify keyword opportunities (high impressions, low CTR)
   - Compare performance month-over-month
   - Identify seasonal trends

2. **Page-Level Analysis**
   - Which pages get the most clicks?
   - Which pages have low CTR? (Optimize title/description)
   - Which pages dropped in ranking? (Investigate)

3. **Query Analysis**
   - **Brand queries:** Should have >20% CTR
   - **Non-brand queries:** Target >5% CTR
   - **New keywords:** Emerging search trends

4. **Technical Health**
   - Review all coverage issues
   - Check mobile usability
   - Verify Core Web Vitals
   - Test structured data

5. **Competitive Analysis**
   - Search your target keywords
   - Who ranks above you?
   - What can you learn from their pages?

---

## 🎯 Key Queries to Monitor

### Brand Queries (Should Rank #1)
```
- "dineably"
- "dineably seattle"
- "dineably restaurant marketing"
```

### Service Queries (Target: Top 3)
```
- "restaurant marketing seattle"
- "restaurant website design seattle"
- "restaurant seo seattle"
- "thai restaurant marketing"
```

### Local Queries (Target: Top 5)
```
- "seattle restaurant marketing agency"
- "bellevue restaurant marketing"
- "kirkland restaurant seo"
- "restaurant marketing near me"
```

### Long-Tail Queries (Target: Top 10)
```
- "how to market thai restaurant"
- "restaurant website designer seattle"
- "local seo for restaurants seattle"
- "best restaurant marketing agency seattle"
```

---

## 🚨 Alerts to Set Up

### 1. Search Appearance Drops

**How to Set Up:**
1. Go to **Settings → Users and permissions**
2. Add your email
3. **Enable:** Critical issues, manual actions, Core Web Vitals issues

**You'll be notified of:**
- Manual penalties
- Indexing errors
- Security issues
- Core Web Vitals degradation

### 2. Manual Actions Check

**Location:** Security & Manual Actions → Manual Actions

**Should always say:** "No issues detected"

**If you receive a manual action:**
- Read the explanation carefully
- Fix the issue
- Submit reconsideration request

---

## 📊 Sitelinks Optimization

**What are Sitelinks?**
Sitelinks are additional links that appear below your main result in Google search.

**Example:**
```
Dineably - Restaurant Marketing Seattle
https://dineably.com
Dineably builds fast restaurant sites, local SEO, and ads...

Services    Why Us    Case Studies    Free Audit
```

**How to Get Sitelinks:**
1. **Rank #1** for brand queries ✅
2. **Have clear site structure** (we do via nav) ✅
3. **Get sufficient search volume** (takes time)
4. **Use descriptive link text** in navigation ✅

**To Influence Sitelinks:**
- Can't control directly, but Google chooses based on popularity
- Most clicked pages in your nav will become sitelinks
- Usually: Services, Why Us, Contact, Case Studies

---

## 🔗 URL Inspection Tool

**Use Case:** Check if a specific page is indexed and request indexing.

**How to Use:**
1. **Copy page URL** (e.g., `https://dineably.com/services`)
2. **Paste** in the search bar at top of GSC
3. **View indexed status**
4. **Click "Request Indexing"** if not indexed

**When to Use:**
- After publishing a new page
- After making significant updates
- If a page isn't ranking after 2+ weeks

**Note:** Limit: ~10 requests per day per property

---

## 📋 GSC Setup Checklist

### Initial Setup (One-Time)
- [ ] Create GSC account
- [ ] Add property: `https://www.dineably.com`
- [ ] Verify ownership (HTML meta tag)
- [ ] Submit sitemap: `sitemap.xml`
- [ ] Set up email notifications
- [ ] Add team members (if applicable)

### First Week
- [ ] Wait for data to populate (48-72 hours)
- [ ] Verify sitemap was processed successfully
- [ ] Check that all 16 pages are indexed
- [ ] Review any coverage errors
- [ ] Request indexing for any missing pages

### Ongoing (Weekly)
- [ ] Check performance trends
- [ ] Monitor for new errors
- [ ] Review top queries
- [ ] Analyze CTR opportunities
- [ ] Check Core Web Vitals

### Monthly
- [ ] Export performance data
- [ ] Deep dive into keyword opportunities
- [ ] Compare month-over-month growth
- [ ] Update monthly report (see MONTHLY_REPORT_TEMPLATE.md)

---

## 💡 Pro Tips

### 1. Use Search Query Filters
Filter by:
- **Query contains:** "restaurant" → See all restaurant-related queries
- **Page contains:** "/case-studies" → See queries bringing traffic to case studies
- **Country:** United States → Focus on US traffic

### 2. Compare Date Ranges
- Compare **last 28 days** vs **previous 28 days**
- Identify trends: growing, stable, or declining
- Investigate any sudden changes

### 3. Analyze CTR by Position
- **Position 1-3:** Target >30% CTR
- **Position 4-6:** Target >10% CTR
- **Position 7-10:** Target >3% CTR

**If CTR is low:**
- Rewrite title tag (add power words, numbers)
- Improve meta description (add CTA)
- Add schema for rich snippets

### 4. Track Branded vs Non-Branded
- **Branded queries** = Include "dineably"
- **Non-branded queries** = Generic terms

**Goal:** Grow non-branded traffic (indicates SEO success)

### 5. Export Data Regularly
- GSC data is limited to 16 months
- Export top queries monthly for historical tracking
- Use Google Sheets or Excel for trend analysis

---

## 🔗 GSC + GA4 Integration

**Connect GSC with GA4:**
1. In GSC, go to **Settings → Associations**
2. **Associate** with your GA4 property
3. View GSC data inside GA4 under **Acquisition → Search Console**

**Benefits:**
- See GSC queries alongside behavior data
- Track conversion rate by keyword
- Identify high-intent keywords

---

## 📞 Support & Resources

- **GSC Help Center:** https://support.google.com/webmasters
- **GSC Community:** https://support.google.com/webmasters/community
- **GSC Training:** https://developers.google.com/search/docs

---

## 📊 Summary: GSC Monitoring Schedule

| Frequency | Task | Time |
|-----------|------|------|
| **Weekly** | Performance check, coverage review | 15 min |
| **Bi-Weekly** | URL inspection for new pages | 10 min |
| **Monthly** | Deep dive analysis, export data | 60 min |
| **Quarterly** | Technical audit, schema validation | 2-3 hours |

---

**Last Updated:** November 5, 2025  
**Status:** Setup Guide Complete ✅  
**Next Review:** After first deployment  
**Est. Setup Time:** 30-45 minutes

