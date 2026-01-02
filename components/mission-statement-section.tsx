"use client"

import { motion } from "framer-motion"

export function MissionStatementSection() {
  return (
    <section className="py-24 lg:py-32 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Three Words */}
        <div className="flex flex-col items-center justify-center mb-16">
          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8"
          />

          {/* Words Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
              Inspect
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
              .
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/40 leading-none">
              Model
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/40 leading-none">
              .
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
              Predict
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
              .
            </span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/60 leading-relaxed text-center font-light">
            Autonomous robots capture structural data. AI delivers actionable insights. Your assets last longer.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
