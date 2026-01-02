"use client"

import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Dennis Wiggins",
    role: "CEO",
    expertise: "Infrastructure operations and strategic growth",
    image: "/assets/dennis-pfp.jpg",
    linkedin: "#",
  },
  {
    name: "Tahasin Shadat",
    role: "CTO",
    expertise: "Robotics systems and embedded software",
    image: "/assets/tahasin-pfp.jpg",
    linkedin: "#",
  },
  {
    name: "Gurupavan Sudhaker",
    role: "CPO",
    expertise: "Product strategy and user experience",
    image: "/assets/guru-pfp.jpg",
    linkedin: "#",
  },
  {
    name: "Carlton Tam",
    role: "CMO",
    expertise: "Market development and brand positioning",
    image: "/assets/carlton-pfp.png",
    linkedin: "#",
  },
  {
    name: "Dr. Jizhong Xiao",
    role: "Chief Scientist",
    expertise: "Robotics research and autonomous systems",
    image: "/assets/xiao-pfp.jpg",
    linkedin: "#",
  },
]

export function LeadershipTeam() {
  return (
    <section className="py-20 lg:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">Leadership</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative overflow-hidden mb-4 bg-muted rounded-lg">
                <img
                  src={member.image || "/assets/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-all duration-500"
                />
                <a
                  href={member.linkedin}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4 text-primary-foreground" />
                </a>
              </div>
              <h3 className="text-base font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
