"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            {"Let's discuss your inspection challenges"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Whether you need a demo, have questions about our solutions, or want to explore a partnership, we are here
            to help.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
