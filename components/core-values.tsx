"use client"

import { motion } from "framer-motion"
import { Lightbulb, Shield, Leaf, Gauge } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push the boundaries of what is possible with robotics and AI, constantly developing new solutions to complex challenges.",
  },
  {
    icon: Shield,
    title: "Safety",
    description:
      "Every solution we build is designed with safety as the primary concern—for people, assets, and the environment.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We help our clients extend asset lifespans and reduce waste through predictive maintenance and intelligent operations.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "We deliver measurable results—faster inspections, higher accuracy, and better decisions that impact the bottom line.",
  },
]

export function CoreValues() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-semibold">What drives us forward</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-5">
                <value.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
