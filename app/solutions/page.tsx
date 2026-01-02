import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionModule } from "@/components/solution-module"
import { SolutionsCTA } from "@/components/solutions-cta"

export const metadata: Metadata = {
  title: "Robotic Inspection, Digital Twin & AI Data Services",
  description:
    "Explore Mancer Robotics solutions for autonomous inspection, digital twin modeling, and AI analytics across energy, infrastructure, and industrial assets.",
  keywords: [
    "robotic inspection services",
    "digital twin modeling",
    "AI data services",
    "predictive maintenance",
    "pipeline inspection",
    "tank inspection",
    "industrial inspection",
    "autonomous robots",
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Robotic Inspection, Digital Twin & AI Data Services",
    description:
      "Explore Mancer Robotics solutions for autonomous inspection, digital twin modeling, and AI analytics across energy, infrastructure, and industrial assets.",
    url: "/solutions",
  },
  twitter: {
    title: "Robotic Inspection, Digital Twin & AI Data Services",
    description:
      "Explore Mancer Robotics solutions for autonomous inspection, digital twin modeling, and AI analytics across energy, infrastructure, and industrial assets.",
  },
}

const solutions = [
  {
    id: "inspection",
    title: "Robotic Inspection",
    subtitle: "Autonomous inspection for critical infrastructure",
    description:
      "Deploy advanced robotic systems to inspect pipelines, storage tanks, confined spaces, and other hard-to-reach environments. Our robots capture high-resolution data while keeping personnel safe.",
    benefits: [
      "Eliminate human exposure to hazardous environments",
      "Access confined spaces and elevated structures safely",
      "Capture multi-sensor data including visual, thermal, and ultrasonic",
      "Operate 24/7 with minimal supervision required",
    ],
    image: "/assets/robotic-crawler-inspecting-industrial-pipeline-dark.jpg",
    reversed: false,
  },
  {
    id: "digital-twin",
    title: "Digital Twin Modeling",
    subtitle: "High-fidelity virtual replicas of your assets",
    description:
      "Transform inspection data into accurate 3D digital twins of your infrastructure. Visualize, analyze, and simulate scenarios without disrupting operations.",
    benefits: [
      "Create accurate 3D models from LiDAR and photogrammetry",
      "Track asset condition changes over time",
      "Simulate maintenance scenarios and plan interventions",
      "Enable remote collaboration and decision-making",
    ],
    image: "/assets/digital-twin-3d-model-industrial-plant-holographic.jpg",
    reversed: true,
  },
  {
    id: "ai-analytics",
    title: "AI Data Services",
    subtitle: "Predictive intelligence for proactive maintenance",
    description:
      "Our machine learning algorithms analyze inspection data to detect anomalies, predict failures, and prioritize maintenance activities—transforming raw data into actionable insights.",
    benefits: [
      "Detect defects and anomalies automatically",
      "Predict equipment failures before they occur",
      "Prioritize maintenance based on risk assessment",
      "Generate comprehensive reports and dashboards",
    ],
    image: "/assets/ai-analytics-dashboard-predictive-maintenance-dark.jpg",
    reversed: false,
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Navigation />
      <main>
        <SolutionsHero />
        {solutions.map((solution) => (
          <SolutionModule key={solution.id} solution={solution} />
        ))}
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  )
}
