"use client"

import { motion } from "framer-motion"
import { Heart, Rocket, Users, Globe } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description: "Work with the latest in robotics, AI, and computer vision technologies.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a diverse team of experts who value knowledge sharing and growth.",
  },
  {
    icon: Heart,
    title: "Comprehensive Benefits",
    description: "Competitive salary, equity, health insurance, and flexible work arrangements.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Your work will help make critical infrastructure safer worldwide.",
  },
]

export function CareersBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why join Mancer?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are building a company where talented people can do their best work and make a real difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
