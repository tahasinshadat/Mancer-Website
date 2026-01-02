"use client"

import { motion } from "framer-motion"
import { Scan, Cpu, Layers, Lightbulb } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Scan,
    title: "Data Capture via Robotics",
    description:
      "Our autonomous robots deploy to your site and capture comprehensive multi-sensor data including visual, thermal, ultrasonic, and LiDAR measurements.",
    benefit: "Safe, comprehensive data collection without operational disruption",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Processing & Analytics",
    description:
      "Raw sensor data is processed through our proprietary AI algorithms to detect anomalies, classify defects, and identify patterns that human inspection might miss.",
    benefit: "Faster analysis with higher accuracy than manual inspection",
  },
  {
    number: "03",
    icon: Layers,
    title: "Digital Twin Model Creation",
    description:
      "We generate high-fidelity 3D digital twins of your assets, enabling virtual walkthroughs, historical comparisons, and simulation of future scenarios.",
    benefit: "Visualize your entire infrastructure from anywhere, anytime",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Insights + Actions",
    description:
      "Receive prioritized recommendations, predictive maintenance schedules, and actionable reports that drive informed decision-making and resource allocation.",
    benefit: "Transform data into measurable operational improvements",
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 md:left-10 top-24 bottom-0 w-px bg-border" />
              )}

              <div className="flex gap-6 md:gap-10 py-12 border-b border-border last:border-0">
                {/* Step Number & Icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-foreground flex items-center justify-center relative z-10">
                    <step.icon className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-mono text-muted-foreground">{step.number}</span>
                    <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{step.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{step.benefit}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
