"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react"

const offices = [
  {
    city: "New York City",
    address: "Manhattan Office",
    region: "New York, NY",
  },
  {
    city: "Chicago",
    address: "Chicago Office",
    region: "Chicago, IL",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-10"
    >
      {/* Direct Contact */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
        <div className="space-y-4">
          <a
            href="mailto:tahasinshadat@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <span>tahasinshadat@gmail.com</span>
          </a>
          <a
            href="tel:+19294065670"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <span>+1 (929) 406-5670</span>
          </a>
        </div>
      </div>

      {/* Office Locations */}
      <div>
        <h3 className="text-lg font-medium mb-4">Our Offices</h3>
        <div className="space-y-6">
          {offices.map((office) => (
            <div key={office.city} className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{office.city}</p>
                <p className="text-sm text-muted-foreground">{office.address}</p>
                <p className="text-sm text-muted-foreground">{office.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-medium mb-4">Follow Us</h3>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
