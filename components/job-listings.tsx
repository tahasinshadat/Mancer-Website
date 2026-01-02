"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import jobsData from "@/data/jobs.json"

const jobs = jobsData.jobs

export function JobListings() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Open positions</h2>
          <p className="text-muted-foreground">Find your next opportunity at Mancer Robotics.</p>
        </motion.div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-medium">{job.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                </div>
                <Link
                  href={`/careers/apply?position=${encodeURIComponent(job.title)}&location=${encodeURIComponent(job.location)}&type=${encodeURIComponent(job.type)}`}
                >
                  <Button className="gap-2 shrink-0">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            {"Don't see a role that fits? We are always looking for talented people."}
          </p>
          <Link href="/careers/apply">
            <Button variant="outline" className="bg-transparent">
              Send General Application
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
