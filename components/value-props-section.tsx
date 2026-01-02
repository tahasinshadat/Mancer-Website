"use client"

import { Shield, TrendingUp, Zap } from "lucide-react"

const valueProps = [
  {
    icon: Shield,
    title: "Reduce Risk",
    description: "Minimize human exposure to hazardous environments while improving inspection accuracy.",
  },
  {
    icon: TrendingUp,
    title: "Scale Intelligent Operations",
    description: "Deploy AI-powered solutions that grow with your infrastructure needs.",
  },
  {
    icon: Zap,
    title: "Transform Data into Action",
    description: "Convert raw sensor data into predictive insights that drive decision-making.",
  },
]

export function ValuePropsSection() {
  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
              Infrastructure ages. Data keeps it safe.
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              Bridges. Pipelines. Storage tanks. Power plants. The physical assets that power economies require
              continuous monitoring. Our robots go where humans cannot.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-accent">85%</p>
                <p className="text-sm text-white/50 mt-1">Faster inspections</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-accent">40%</p>
                <p className="text-sm text-white/50 mt-1">Cost reduction</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-accent">0</p>
                <p className="text-sm text-white/50 mt-1">Human exposure</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/robot-sensor-contact-steel-surface-closeup-dark.jpg"
              alt="Robotic sensor making contact with steel surface"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
