import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CoreValues } from "@/components/core-values"
import { LeadershipTeam } from "@/components/leadership-team"
import { AboutCTA } from "@/components/about-cta"

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
