"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Crawler Systems",
    description:
      "Magnetic and tracked robots for tanks, vessels, and pipelines. Ultrasonic thickness measurement. Real-time data transmission.",
    image: "/assets/crawler-robot-steel-tank-inspection-industrial-dark.jpg",
  },
  {
    title: "Vision Platform",
    description:
      "Multi-spectral imaging. Automated defect detection and classification. Millimeter-accurate measurements.",
    image: "/assets/robotic-vision-system-concrete-crack-detection-dark.jpg",
  },
  {
    title: "Digital Twin Engine",
    description: "Point cloud to CAD conversion. Structural analysis integration. Change detection over time.",
    image: "/assets/digital-twin-structural-model-engineering-dark.jpg",
  },
]

export function ProductShowcaseSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
            Purpose-Built Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="group">
              <div className="relative overflow-hidden mb-4 bg-black">
                <img
                  src={product.image || "/assets/placeholder.svg"}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-black">{product.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/solutions">
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Explore Technology
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
