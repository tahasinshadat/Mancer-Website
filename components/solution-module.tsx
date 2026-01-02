"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface SolutionModuleProps {
  solution: {
    id: string
    title: string
    subtitle: string
    description: string
    benefits: string[]
    image: string
    reversed: boolean
  }
}

export function SolutionModule({ solution }: SolutionModuleProps) {
  return (
    <section id={solution.id} className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${solution.reversed ? "direction-rtl" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, x: solution.reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={solution.reversed ? "lg:order-2" : ""}
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {solution.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">{solution.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{solution.description}</p>

            <ul className="space-y-3">
              {solution.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: solution.reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={solution.reversed ? "lg:order-1" : ""}
          >
            <img
              src={solution.image || "/assets/placeholder.svg"}
              alt={solution.title}
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
