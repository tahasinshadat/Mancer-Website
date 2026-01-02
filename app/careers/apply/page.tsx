"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JobApplicationForm } from "@/components/job-application-form"
import jobsData from "@/data/jobs.json"

function ApplicationContent() {
  const searchParams = useSearchParams()
  const position = searchParams.get("position") || "General Application"
  const location = searchParams.get("location") || undefined
  const type = searchParams.get("type") || undefined

  // Find the job data based on position
  const jobData = jobsData.jobs.find((job) => job.title === position)

  return (
    <>
      <Navigation />
      <main>
        {/* Black Hero Section */}
        <section className="relative py-24 lg:py-32 xl:py-40 bg-black">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-8 leading-tight">
              {position}
            </h1>
            {(location || type) && (
              <div className="flex flex-col items-center gap-6">
                <div className="w-32 h-px bg-white/20"></div>
                <p className="text-xl md:text-2xl text-white/60 font-light">
                  {[location, type].filter(Boolean).join(" • ")}
                </p>
                <div className="w-32 h-px bg-white/20"></div>
              </div>
            )}
          </div>
        </section>

        {/* Job Details Section */}
        {jobData && (
          <section className="py-12 lg:py-16 bg-background border-b border-border">
            <div className="max-w-4xl mx-auto px-6">
              {/* Job Description */}
              {jobData.jobDescription && (
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">Job Description</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {jobData.jobDescription}
                    </p>
                  </div>
                </div>
              )}

              {/* About You */}
              {jobData.aboutYou && (
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">About You</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {jobData.aboutYou}
                    </p>
                  </div>

                  {/* Salary Information */}
                  {jobData.salary && (
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        Base salary is {jobData.salary}. Base salary is only one part of Mancer's total
                        compensation, which includes an annual discretionary bonus.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Application Form Section - Light Background */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="max-w-3xl mx-auto px-6">
            <JobApplicationForm position={position} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function JobApplicationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationContent />
    </Suspense>
  )
}
