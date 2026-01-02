import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { ProjectGrid } from "@/components/project-grid"
import { GalleryCTA } from "@/components/gallery-cta"

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
