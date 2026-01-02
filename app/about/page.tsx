import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CoreValues } from "@/components/core-values"
import { LeadershipTeam } from "@/components/leadership-team"
import { AboutCTA } from "@/components/about-cta"

export const metadata: Metadata = {
  title: "About Mancer Robotics",
  description:
    "Meet the team building autonomous inspection robots, digital twin platforms, and AI analytics for critical infrastructure.",
  keywords: [
    "Mancer Robotics",
    "robotics company",
    "inspection robotics",
    "industrial AI",
    "digital twin platform",
    "infrastructure technology",
    "robotics team",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Mancer Robotics",
    description:
      "Meet the team building autonomous inspection robots, digital twin platforms, and AI analytics for critical infrastructure.",
    url: "/about",
  },
  twitter: {
    title: "About Mancer Robotics",
    description:
      "Meet the team building autonomous inspection robots, digital twin platforms, and AI analytics for critical infrastructure.",
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <CoreValues />
        <LeadershipTeam />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
