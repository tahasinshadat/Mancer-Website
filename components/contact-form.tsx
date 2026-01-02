"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Check } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError("Failed to send message. Please try emailing us directly at tahasinshadat@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Thank you for reaching out</h3>
        <p className="text-muted-foreground">Our team will get back to you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service of Interest</Label>
          <Select name="service">
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inspection">Robotic Inspection</SelectItem>
              <SelectItem value="digital-twin">Digital Twin Solutions</SelectItem>
              <SelectItem value="ai-analytics">AI Analytics</SelectItem>
              <SelectItem value="full-service">Full-Service Package</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Tell us about your project or challenge..." rows={5} required />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  )
}
