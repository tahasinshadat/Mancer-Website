import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Mancer Robotics",
  description:
    "Request a demo or start a project with Mancer Robotics. Talk to our team about robotic inspection, digital twins, and AI analytics.",
  keywords: [
    "contact Mancer Robotics",
    "request demo",
    "robotic inspection demo",
    "digital twin consultation",
    "AI analytics services",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Mancer Robotics",
    description:
      "Request a demo or start a project with Mancer Robotics. Talk to our team about robotic inspection, digital twins, and AI analytics.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Mancer Robotics",
    description:
      "Request a demo or start a project with Mancer Robotics. Talk to our team about robotic inspection, digital twins, and AI analytics.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
