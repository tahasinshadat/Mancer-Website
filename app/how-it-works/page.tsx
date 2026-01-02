import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HowItWorksHero } from "@/components/how-it-works-hero"
import { ProcessSteps } from "@/components/process-steps"
import { HowItWorksCTA } from "@/components/how-it-works-cta"

export const metadata: Metadata = {
  title: "How It Works: Robotics Data Capture to Digital Twin",
  description:
    "See how Mancer Robotics captures inspection data with autonomous robots, applies AI analytics, and delivers digital twin insights.",
  keywords: [
    "robotic data capture",
    "inspection workflow",
    "AI processing",
    "digital twin creation",
    "inspection analytics",
    "robotics pipeline",
  ],
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works: Robotics Data Capture to Digital Twin",
    description:
      "See how Mancer Robotics captures inspection data with autonomous robots, applies AI analytics, and delivers digital twin insights.",
    url: "/how-it-works",
  },
  twitter: {
    title: "How It Works: Robotics Data Capture to Digital Twin",
    description:
      "See how Mancer Robotics captures inspection data with autonomous robots, applies AI analytics, and delivers digital twin insights.",
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main>
        <HowItWorksHero />
        <ProcessSteps />
        <HowItWorksCTA />
      </main>
      <Footer />
    </>
  )
}
