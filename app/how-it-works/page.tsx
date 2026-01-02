import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HowItWorksHero } from "@/components/how-it-works-hero"
import { ProcessSteps } from "@/components/process-steps"
import { HowItWorksCTA } from "@/components/how-it-works-cta"

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
