"use client"

import { motion } from "framer-motion"

export function CareersHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider mb-4">Careers</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight text-balance">
            Build the future of robotics with us
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Join a team of engineers, researchers, and innovators who are transforming how the world inspects and
            maintains critical infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
