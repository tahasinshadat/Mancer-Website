"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/robot-inspecting-concrete-bridge-infrastructure-dar.jpg"
          alt="Robotic inspection of concrete infrastructure"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
          Intelligent Robotics for Critical Infrastructure
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium px-8">
              Request Demo
            </Button>
          </Link>
          <Link href="/solutions">
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 bg-transparent font-medium gap-2 px-8"
            >
              Explore Technology
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-1000">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
