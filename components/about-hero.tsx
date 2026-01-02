"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">About Mancer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
              Pioneering the future of infrastructure intelligence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded by engineers and technologists who saw the need for safer, smarter inspection solutions, Mancer
              Robotics is building the next generation of AI-powered robotic systems for critical infrastructure.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe that the combination of advanced robotics, artificial intelligence, and digital twin technology
              can transform how industries maintain and operate their most valuable assets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/assets/team-engineers-robotics-lab-modern-workspace-dark.jpg"
              alt="Mancer Robotics team"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
