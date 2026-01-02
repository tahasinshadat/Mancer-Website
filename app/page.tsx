import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { MissionStatementSection } from "@/components/mission-statement-section"
import { FeaturesSection } from "@/components/features-section"
import { ValuePropsSection } from "@/components/value-props-section"
import { CredibilitySection } from "@/components/credibility-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Robotic Inspection, Digital Twin & AI Analytics",
  description:
    "Mancer Robotics delivers autonomous inspection, digital twin modeling, and AI analytics for critical infrastructure, energy, and industrial assets.",
  keywords: [
    "Mancer",
    "Mancer Robotics",
    "robotic inspection",
    "industrial robotics",
    "digital twin",
    "AI analytics",
    "predictive maintenance",
    "infrastructure inspection",
    "asset integrity",
    "pipeline inspection",
    "storage tank inspection",
    "construction robotics",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Robotic Inspection, Digital Twin & AI Analytics",
    description:
      "Mancer Robotics delivers autonomous inspection, digital twin modeling, and AI analytics for critical infrastructure, energy, and industrial assets.",
    url: "/",
  },
  twitter: {
    title: "Robotic Inspection, Digital Twin & AI Analytics",
    description:
      "Mancer Robotics delivers autonomous inspection, digital twin modeling, and AI analytics for critical infrastructure, energy, and industrial assets.",
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MissionStatementSection />
        <FeaturesSection />
        <ValuePropsSection />
        <CredibilitySection />
        <ProductShowcaseSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
