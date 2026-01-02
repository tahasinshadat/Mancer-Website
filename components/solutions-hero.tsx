"use client"

import { motion } from "framer-motion"

export function SolutionsHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            Comprehensive robotics solutions for every challenge
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From data capture to actionable insights, our integrated platform delivers end-to-end inspection and
            intelligence services tailored to your industry needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
