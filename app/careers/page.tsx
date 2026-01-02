import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers-hero"
import { CareersBenefits } from "@/components/careers-benefits"
import { JobListings } from "@/components/job-listings"

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main>
        <CareersHero />
        <CareersBenefits />
        <JobListings />
      </main>
      <Footer />
    </>
  )
}
