import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport = {
  themeColor: "#0b1b2b",
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
const siteName = "Mancer Robotics"
const siteDescription =
  "Robotic inspection, AI analytics, and digital twin modeling for critical infrastructure, energy, construction, and industrial assets."
const siteKeywords = [
  "Mancer",
  "Mancer Robotics",
  "Mancer AI",
  "Mancer digital twin",
  "robotics",
  "industrial robotics",
  "robotic inspection",
  "autonomous inspection",
  "remote inspection",
  "crawler robot",
  "pipeline inspection",
  "pipeline crawler",
  "storage tank inspection",
  "tank inspection robot",
  "offshore platform inspection",
  "refinery inspection",
  "wind turbine inspection",
  "blade inspection",
  "industrial AI",
  "AI analytics",
  "predictive maintenance",
  "condition monitoring",
  "asset integrity",
  "asset management",
  "structural health monitoring",
  "non-destructive testing",
  "NDT",
  "digital twin",
  "digital twin modeling",
  "industrial digital twin",
  "3D reconstruction",
  "LiDAR mapping",
  "photogrammetry",
  "computer vision",
  "machine vision",
  "defect detection",
  "crack detection",
  "corrosion mapping",
  "ultrasonic inspection",
  "thermal inspection",
  "inspection data",
  "inspection analytics",
  "inspection automation",
  "robotic inspection services",
  "industrial inspection services",
  "infrastructure inspection",
  "critical infrastructure",
  "construction technology",
  "construction robotics",
  "industrial automation",
  "manufacturing quality control",
  "manufacturing inspection",
  "quality assurance",
  "energy infrastructure",
  "oil and gas robotics",
  "renewable energy inspection",
  "power plant inspection",
  "facility inspection",
  "asset lifecycle management",
  "maintenance planning",
  "risk reduction",
  "safety robotics",
  "confined space inspection",
  "remote sensing",
  "data capture robotics",
  "inspection drones",
  "autonomous systems",
  "AI for infrastructure",
  "digital transformation",
  "engineering analytics",
  "industrial IoT",
  "IIoT",
  "inspection reporting",
  "maintenance optimization",
  "asset reliability",
  "structural analysis",
  "infrastructure AI",
  "smart infrastructure",
  "robotic data capture",
  "predictive analytics",
  "industrial inspection robotics",
  "inspection platform",
  "digital twin services",
  "robotics company",
  "inspection company",
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mancer Robotics | AI + Robotics for Smarter Infrastructure",
    template: "%s | Mancer Robotics",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Robotics, Industrial Inspection, Digital Twin, AI Analytics",
  classification: "Industrial Robotics, Infrastructure Inspection, Predictive Maintenance",
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mancer Robotics | AI + Robotics for Smarter Infrastructure",
    description: siteDescription,
    siteName,
    locale: "en_US",
    images: [
      {
        url: "/assets/mancer-logo.png",
        width: 1200,
        height: 630,
        alt: "Mancer Robotics logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mancer Robotics | AI + Robotics for Smarter Infrastructure",
    description: siteDescription,
    images: ["/assets/mancer-logo.png"],
  },
  icons: {
    icon: [
      { url: "/assets/mancer-icon.png" },
      { url: "/assets/mancer-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/assets/mancer-icon.png", sizes: "180x180", type: "image/png" }],
  },
  referrer: "origin-when-cross-origin",
  other: {
    "subject": "Robotic inspection and digital twin services for critical infrastructure.",
    "rating": "General",
    "distribution": "Global",
    "target": "all",
    "HandheldFriendly": "true",
    "MobileOptimized": "width",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/assets/mancer-logo.png`,
    description: siteDescription,
    industry: "Robotics",
    knowsAbout: siteKeywords,
  }
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/mancer-logo.png`,
      },
    },
  }
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Robotic Inspection & Digital Twin Services",
    serviceType: [
      "Robotic inspection",
      "Digital twin modeling",
      "AI analytics",
      "Predictive maintenance",
      "Infrastructure inspection",
    ],
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    areaServed: "Global",
    description: siteDescription,
  }
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mancer Robotics",
    url: siteUrl,
    description: siteDescription,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/mancer-logo.png`,
    },
  }

  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
