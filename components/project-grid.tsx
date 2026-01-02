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
    image: "/offshore-oil-platform-inspection-robot-dark-indust.jpg",
  },
  {
    id: 2,
    title: "Refinery Digital Twin",
    category: "Energy",
    description: "Created a complete digital twin of a 500-acre refinery complex for predictive maintenance planning.",
    image: "/oil-refinery-aerial-view-digital-twin-dark-indust.jpg",
  },
  {
    id: 3,
    title: "Storage Tank Assessment",
    category: "Oil & Gas",
    description: "Internal inspection of large crude oil storage tanks using our submersible robotic systems.",
    image: "/storage-tank-inspection-robot-dark-industrial-sett.jpg",
  },
  {
    id: 4,
    title: "Wind Turbine Blade Inspection",
    category: "Renewable Energy",
    description: "Drone-based inspection system for wind turbine blade defect detection and condition monitoring.",
    image: "/wind-turbine-blade-inspection-drone-dark-industria.jpg",
  },
  {
    id: 5,
    title: "Pipeline Crawler Deployment",
    category: "Infrastructure",
    description: "20km pipeline inspection using our autonomous crawler robot with real-time defect detection.",
    image: "/pipeline-crawler-robot-industrial-dark-setting.jpg",
  },
  {
    id: 6,
    title: "Manufacturing QC System",
    category: "Manufacturing",
    description: "Automated visual inspection system for quality control in automotive parts manufacturing.",
    image: "/manufacturing-robot-quality-control-dark-industria.jpg",
  },
]

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section className="pb-20 lg:pb-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image || "/assets/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <div className="p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-medium text-primary-foreground mt-1">{project.title}</h3>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-background rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground/80 flex items-center justify-center text-primary-foreground hover:bg-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedProject.image || "/assets/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-semibold mt-2 mb-3">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
