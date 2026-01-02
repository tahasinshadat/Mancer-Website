"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Offshore Platform Inspection",
    category: "Oil & Gas",
    description:
      "Comprehensive robotic inspection of an offshore oil platform, covering over 50km of piping and 200+ structural joints.",
    image: "/assets/offshore-platform-inspection.png",
  },
  {
    id: 2,
    title: "Refinery Digital Twin",
    category: "Energy",
    description: "Created a complete digital twin of a 500-acre refinery complex for predictive maintenance planning.",
    image: "/assets/refinery-digital-twin.png",
  },
  {
    id: 3,
    title: "Storage Tank Assessment",
    category: "Oil & Gas",
    description: "Internal inspection of large crude oil storage tanks using our submersible robotic systems.",
    image: "/assets/storage-tank-assessment.png",
  },
  {
    id: 4,
    title: "Wind Turbine Blade Inspection",
    category: "Renewable Energy",
    description: "Drone-based inspection system for wind turbine blade defect detection and condition monitoring.",
    image: "/assets/wind-turbine-inspection.png",
  },
  {
    id: 5,
    title: "Pipeline Crawler Deployment",
    category: "Infrastructure",
    description: "20km pipeline inspection using our autonomous crawler robot with real-time defect detection.",
    image: "/assets/pipeline-crawler.png",
  },
  {
    id: 6,
    title: "Manufacturing QC System",
    category: "Manufacturing",
    description: "Automated visual inspection system for quality control in automotive parts manufacturing.",
    image: "/assets/manufacturing-qc.png",
  },
]

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image || "/assets/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-white mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-background rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-primary-foreground hover:bg-foreground/90 transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedProject.image || "/assets/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-8">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
