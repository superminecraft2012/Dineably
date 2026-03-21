import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dineably",
  description: "Dineably's privacy policy. Learn how we collect, use, and protect your personal information when you use our restaurant marketing services.",
  alternates: {
    canonical: "https://dineably.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Dineably",
    description: "Dineably's privacy policy. Learn how we collect, use, and protect your personal information.",
    url: "https://dineably.com/privacy",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Dineably",
    description: "Dineably's privacy policy. Learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicy() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dineably.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://dineably.com/privacy"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Privacy <span className="italic font-serif">Policy</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Last updated: March 21, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12 text-gray-300 leading-relaxed">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p>
              Dineably (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a restaurant marketing agency based in Seattle, WA. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at dineably.com (the &quot;Site&quot;) or use our services. Please read this policy carefully. By using the Site, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information You Provide</h3>
            <p className="mb-4">
              When you fill out our contact form or request a free audit, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Restaurant name</li>
              <li>Job title or position</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Information Collected Automatically</h3>
            <p className="mb-4">
              When you visit our Site, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited, time spent on pages, and navigation paths</li>
              <li>Referring website or source (including UTM parameters)</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Schedule and conduct free marketing audits</li>
              <li>Communicate with you about our services</li>
              <li>Analyze website traffic and user behavior to improve our Site</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              Our Site uses cookies and similar tracking technologies. We use a GDPR-compliant cookie consent banner that allows you to choose which cookies to accept. We categorize cookies into three types:
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Essential Cookies</h3>
            <p className="mb-4">
              Required for the website to function properly. These cannot be disabled and include cookies for site functionality and your cookie consent preferences.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              Help us understand how visitors interact with our Site by collecting and reporting information anonymously. We use Google Analytics 4 (GA4) to track page views, button clicks, form submissions, and other site interactions.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Marketing Cookies</h3>
            <p className="mb-4">
              Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness. We use:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Meta (Facebook) Pixel</strong> &mdash; tracks conversions and enables targeted advertising on Facebook and Instagram</li>
              <li><strong className="text-white">Google Ads</strong> &mdash; tracks ad conversions and enables remarketing</li>
            </ul>
            <p className="mt-4">
              We implement Google Consent Mode v2 to ensure that tracking only occurs when you have given consent. You can manage your cookie preferences at any time by clicking &quot;Cookie Settings&quot; in the footer of our Site.
            </p>
          </div>

          {/* Third-Party Services */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services that may process your data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Web3Forms</strong> &mdash; processes contact form submissions and delivers them to us via email</li>
              <li><strong className="text-white">Google Analytics 4</strong> &mdash; website analytics and visitor behavior tracking</li>
              <li><strong className="text-white">Google Ads</strong> &mdash; advertising conversion tracking</li>
              <li><strong className="text-white">Meta (Facebook)</strong> &mdash; advertising conversion tracking via Meta Pixel</li>
            </ul>
            <p className="mt-4">
              Each of these services has its own privacy policy governing the use of your information. We encourage you to review their respective policies.
            </p>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers who assist in operating our website and delivering our services (as described above)</li>
              <li>To comply with legal obligations, court orders, or governmental requests</li>
              <li>To protect and defend our rights or property</li>
              <li>With your consent or at your direction</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Contact form submissions are retained for the duration of our business relationship and for a reasonable period thereafter. Cookie consent preferences are stored locally on your device.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our Site uses HTTPS encryption for all data transmission. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Cookie Preferences</strong> &mdash; manage your cookie settings at any time via the &quot;Cookie Settings&quot; button in our footer</li>
              <li><strong className="text-white">Access and Correction</strong> &mdash; request access to or correction of your personal data</li>
              <li><strong className="text-white">Deletion</strong> &mdash; request deletion of your personal information</li>
              <li><strong className="text-white">Opt-Out</strong> &mdash; opt out of marketing communications at any time</li>
              <li><strong className="text-white">Do Not Track</strong> &mdash; our Site respects your cookie consent preferences as set through our consent banner</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </div>

          {/* California Privacy Rights */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">California Privacy Rights</h2>
            <p>
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your personal information, and the right to opt out of the sale of your personal information. We do not sell personal information. To exercise your rights, contact us at the information below.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
            <p>
              Our Site and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information promptly.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically for any changes. Your continued use of the Site after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="border border-white/10 rounded-lg p-6 space-y-2">
              <p><strong className="text-white">Dineably</strong></p>
              <p>Seattle, WA</p>
              <p>
                Email:{" "}
                <a href="mailto:imignicholas@gmail.com" className="text-orange-500 hover:text-orange-400 transition-colors">
                  imignicholas@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+14254207090" className="text-orange-500 hover:text-orange-400 transition-colors">
                  (425) 420-7090
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
