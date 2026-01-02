import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { ProjectGrid } from "@/components/project-grid"
import { GalleryCTA } from "@/components/gallery-cta"

export const metadata: Metadata = {
  title: "Project Gallery: Industrial Robotics Deployments",
  description:
    "Browse Mancer Robotics projects across offshore platforms, refineries, storage tanks, wind turbines, pipelines, and manufacturing sites.",
  keywords: [
    "robotics projects",
    "industrial inspection projects",
    "offshore platform inspection",
    "refinery digital twin",
    "pipeline crawler",
    "wind turbine inspection",
    "manufacturing quality control",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Project Gallery: Industrial Robotics Deployments",
    description:
      "Browse Mancer Robotics projects across offshore platforms, refineries, storage tanks, wind turbines, pipelines, and manufacturing sites.",
    url: "/gallery",
  },
  twitter: {
    title: "Project Gallery: Industrial Robotics Deployments",
    description:
      "Browse Mancer Robotics projects across offshore platforms, refineries, storage tanks, wind turbines, pipelines, and manufacturing sites.",
  },
}

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main>
        <GalleryHero />
        <ProjectGrid />
        <GalleryCTA />
      </main>
      <Footer />
    </>
  )
}
