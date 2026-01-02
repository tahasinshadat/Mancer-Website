import Link from "next/link"
import { Linkedin } from "lucide-react"

const footerLinks = {
  solutions: [
    { href: "/solutions#inspection", label: "Robotic Inspection" },
    { href: "/solutions#digital-twin", label: "Digital Twin" },
    { href: "/solutions#ai-analytics", label: "AI Analytics" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/gallery", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="text-xl font-semibold">
              Mancer
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-sm">
              Robotic inspection and AI-powered analytics for critical infrastructure. Data you can act on.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white/80">Technology</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white/80">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">© {new Date().getFullYear()} Mancer Robotics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/30 hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-white/30 hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
