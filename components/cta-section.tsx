"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
          See what your assets are hiding.
        </h2>
        <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
          Schedule a technical demonstration. Our team will show you how robotic inspection delivers data you can act
          on.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium">
              Request Demo
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent font-medium"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
