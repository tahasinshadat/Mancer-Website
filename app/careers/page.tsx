import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers-hero"
import { CareersBenefits } from "@/components/careers-benefits"
import { JobListings } from "@/components/job-listings"

export const metadata: Metadata = {
  title: "Careers in Robotics, AI & Digital Twin",
  description:
    "Join Mancer Robotics and build autonomous inspection systems, AI analytics, and digital twin platforms for critical infrastructure.",
  keywords: [
    "robotics jobs",
    "AI jobs",
    "digital twin jobs",
    "inspection robotics careers",
    "autonomous systems careers",
    "computer vision jobs",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers in Robotics, AI & Digital Twin",
    description:
      "Join Mancer Robotics and build autonomous inspection systems, AI analytics, and digital twin platforms for critical infrastructure.",
    url: "/careers",
  },
  twitter: {
    title: "Careers in Robotics, AI & Digital Twin",
    description:
      "Join Mancer Robotics and build autonomous inspection systems, AI analytics, and digital twin platforms for critical infrastructure.",
  },
}

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
