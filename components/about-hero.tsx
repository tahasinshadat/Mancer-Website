"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">About Mancer</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance mb-6">
            Pioneering the future of infrastructure intelligence
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Founded by engineers and technologists who saw the need for safer, smarter inspection solutions, Mancer
            Robotics is building the next generation of AI-powered robotic systems for critical infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that the combination of advanced robotics, artificial intelligence, and digital twin technology
            can transform how industries maintain and operate their most valuable assets.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
