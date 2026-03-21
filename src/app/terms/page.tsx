import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Dineably",
  description: "Dineably's terms of service. Review the terms and conditions governing the use of our website and restaurant marketing services.",
  alternates: {
    canonical: "https://dineably.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Dineably",
    description: "Dineably's terms of service. Review the terms and conditions governing the use of our website and restaurant marketing services.",
    url: "https://dineably.com/terms",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Dineably",
    description: "Dineably's terms of service. Review the terms and conditions governing the use of our website and restaurant marketing services.",
  },
};

export default function TermsOfService() {
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
        "name": "Terms of Service",
        "item": "https://dineably.com/terms"
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
              Terms of <span className="italic font-serif">Service</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Last updated: March 21, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12 text-gray-300 leading-relaxed">

          {/* Agreement to Terms */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the Dineably website at dineably.com (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site. These Terms constitute a legally binding agreement between you and Dineably (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a restaurant marketing agency based in Seattle, WA.
            </p>
          </div>

          {/* Description of Services */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Description of Services</h2>
            <p className="mb-4">
              Dineably provides restaurant marketing services including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom restaurant website design and development</li>
              <li>Local search engine optimization (SEO)</li>
              <li>Digital advertising management (Google Ads, Meta/Facebook Ads)</li>
              <li>Lead generation and conversion tracking</li>
              <li>Free marketing audits and consultations</li>
            </ul>
            <p className="mt-4">
              Specific service terms, deliverables, pricing, and timelines are outlined in individual service agreements between Dineably and each client. These Terms govern your use of the Site itself.
            </p>
          </div>

          {/* Use of the Site */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Use of the Site</h2>
            <p className="mb-4">You agree to use the Site only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Site in any way that violates applicable local, state, national, or international law</li>
              <li>Attempt to gain unauthorized access to any part of the Site, other accounts, or any systems or networks connected to the Site</li>
              <li>Use the Site to transmit any malicious software, spam, or other harmful content</li>
              <li>Scrape, crawl, or use automated tools to collect data from the Site without our written permission</li>
              <li>Impersonate any person or entity, or falsely represent your affiliation with any person or entity</li>
              <li>Interfere with or disrupt the Site or its infrastructure</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content on the Site, including but not limited to text, graphics, logos, images, design elements, and software, is the property of Dineably or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, display, or create derivative works from any content on the Site without our prior written consent. Limited use for personal, non-commercial purposes (such as sharing a link to our Site) is permitted.
            </p>
          </div>

          {/* Contact Form and Communications */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Form and Communications</h2>
            <p>
              When you submit information through our contact form or request a free audit, you consent to being contacted by Dineably regarding your inquiry. You represent that the information you provide is accurate and that you are authorized to share it. We will handle your information in accordance with our{" "}
              <Link href="/privacy" className="text-orange-500 hover:text-orange-400 transition-colors underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* Case Studies and Testimonials */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Case Studies and Testimonials</h2>
            <p>
              Case studies, results, and testimonials displayed on the Site reflect the experiences of specific clients and are not a guarantee of future results. Individual outcomes vary depending on factors including market conditions, competition, and client participation.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites or services (including social media platforms) that are not owned or controlled by Dineably. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. Accessing third-party links is at your own risk.
            </p>
          </div>

          {/* Disclaimer of Warranties */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. Dineably disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, secure, or error-free.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Dineably and its owners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site. This includes, without limitation, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from the use of the Site shall not exceed the amount you paid to us, if any, during the twelve months preceding the claim.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Dineably and its owners, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the Site or any violation of these Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Washington, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the state or federal courts located in King County, Washington, and you consent to the jurisdiction of such courts.
            </p>
          </div>

          {/* Changes to These Terms */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of the Site after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
            </p>
          </div>

          {/* Severability */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
