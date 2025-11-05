import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Websites, Local SEO & Ads (Seattle) | Dineably",
  description: "Dineably builds fast restaurant sites, local SEO, and ads that turn visits into orders. Serving Seattle, Bellevue, Kirkland, Redmond, Lynnwood.",
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  openGraph: {
    title: "Restaurant Websites, Local SEO & Ads (Seattle) | Dineably",
    description: "Dineably builds fast restaurant sites, local SEO, and ads that turn visits into orders. Serving Seattle, Bellevue, Kirkland, Redmond, Lynnwood.",
    url: "https://dineably.com",
    siteName: "Dineably",
    images: [
      {
        url: "https://dineably.com/logo-with-text.webp",
        width: 1200,
        height: 630,
        alt: "Dineably - Restaurant Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Websites, Local SEO & Ads (Seattle) | Dineably",
    description: "Dineably builds fast restaurant sites, local SEO, and ads that turn visits into orders. Serving Seattle, Bellevue, Kirkland, Redmond, Lynnwood.",
    images: ["https://dineably.com/logo-with-text.webp"],
  },
  metadataBase: new URL("https://dineably.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "MarketingAgency"],
    "name": "Dineably",
    "url": "https://dineably.com",
    "logo": "https://dineably.com/logo-with-text.webp",
    "description": "Restaurant marketing agency specializing in websites, local SEO, and digital advertising",
    "telephone": "+1-425-420-7090",
    "email": "hello@dineably.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Seattle"
      },
      {
        "@type": "City",
        "name": "Bellevue"
      },
      {
        "@type": "City",
        "name": "Kirkland"
      },
      {
        "@type": "City",
        "name": "Redmond"
      },
      {
        "@type": "City",
        "name": "Lynnwood"
      },
      {
        "@type": "City",
        "name": "Woodinville"
      },
      {
        "@type": "City",
        "name": "Bothell"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/dineably",
      "https://www.instagram.com/dineably",
      "https://www.linkedin.com/company/dineably",
      "https://twitter.com/dineably"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

