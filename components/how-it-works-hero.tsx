"use client"

import { motion } from "framer-motion"

export function HowItWorksHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">How It Works</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            From data capture to actionable insights
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our streamlined process transforms complex infrastructure challenges into clear, data-driven solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
