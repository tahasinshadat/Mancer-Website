"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Check, Upload, FileText } from "lucide-react"

interface JobApplicationFormProps {
  position?: string
}

export function JobApplicationForm({ position }: JobApplicationFormProps) {
  const router = useRouter()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleCoverLetterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverLetterFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.target as HTMLFormElement)

    // Add files to formData
    if (resumeFile) {
      formData.append("resume", resumeFile)
    }
    if (coverLetterFile) {
      formData.append("coverLetterFile", coverLetterFile)
    }

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError("Failed to submit application. Please try emailing your resume to tahasinshadat@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card p-8 rounded-lg shadow-xl text-center"
      >
        <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for applying. Our team will review your application and get back to you soon.
        </p>
        <Button onClick={() => router.push("/careers")} className="w-full">
          Back to Careers
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card p-6 md:p-8 rounded-lg shadow-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
          </div>
        </div>

        {/* Position Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Position Details</h3>
          <div className="space-y-2">
            <Label htmlFor="position">Position Applying For *</Label>
            <Input
              id="position"
              name="position"
              placeholder="e.g., Senior Robotics Engineer"
              defaultValue={position}
              required
            />
          </div>
        </div>

        {/* Professional Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Professional Links</h3>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile</Label>
            <Input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio / Website</Label>
            <Input id="portfolio" name="portfolio" type="url" placeholder="https://yourportfolio.com" />
          </div>
        </div>

        {/* Resume Upload */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Resume / CV *</h3>
          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume</Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              required
              className="cursor-pointer flex items-center justify-center text-center file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-foreground file:text-primary-foreground hover:file:bg-foreground/90 file:cursor-pointer"
            />
            {resumeFile && (
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {resumeFile.name}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX (Max 10MB)
            </p>
          </div>
        </div>

        {/* Cover Letter */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Cover Letter (Optional)</h3>
          <div className="space-y-2">
            <Label htmlFor="coverLetterFile">Upload Cover Letter</Label>
            <Input
              id="coverLetterFile"
              name="coverLetterFile"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCoverLetterFileChange}
              className="cursor-pointer flex items-center justify-center text-center file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-foreground file:text-primary-foreground hover:file:bg-foreground/90 file:cursor-pointer"
            />
            {coverLetterFile && (
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {coverLetterFile.name}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX (Max 10MB)
            </p>
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/careers")}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button type="submit" className="flex-1 gap-2" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
