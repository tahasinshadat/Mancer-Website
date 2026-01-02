"use client"

import { motion } from "framer-motion"

export function GalleryHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Projects</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance mb-6">
            See our work in action
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our portfolio of successful deployments across industries—from offshore platforms to manufacturing
            facilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
