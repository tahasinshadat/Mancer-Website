import { ScanLine, Box, BrainCircuit, TrendingDown } from "lucide-react"

const features = [
  {
    icon: ScanLine,
    title: "Robotic Inspection",
    description: "Steel, concrete, and coating conditions. Sub-millimeter defect detection. Reduced human exposure.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description: "Corrosion mapping. Crack propagation tracking. Automated severity classification.",
  },
  {
    icon: Box,
    title: "Digital Twin Modeling",
    description: "High-fidelity 3D asset reconstruction. Engineering-grade measurements. Temporal comparison.",
  },
  {
    icon: TrendingDown,
    title: "Risk Reduction",
    description: "Predictive maintenance scheduling. 40% fewer unplanned shutdowns. Extended asset lifecycles.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight">
            Core Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 border border-black/10 bg-white hover:border-accent/50 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded bg-black flex items-center justify-center mb-5">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-black">{feature.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
