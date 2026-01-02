import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ValuePropsSection } from "@/components/value-props-section"
import { CredibilitySection } from "@/components/credibility-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
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
