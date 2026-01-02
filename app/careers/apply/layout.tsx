import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply to Mancer Robotics",
  description:
    "Submit your application to join Mancer Robotics and help build autonomous inspection robots, AI analytics, and digital twin platforms.",
  keywords: [
    "apply Mancer Robotics",
    "robotics application",
    "AI engineering jobs",
    "digital twin careers",
    "inspection robotics roles",
  ],
  alternates: {
    canonical: "/careers/apply",
  },
  openGraph: {
    title: "Apply to Mancer Robotics",
    description:
      "Submit your application to join Mancer Robotics and help build autonomous inspection robots, AI analytics, and digital twin platforms.",
    url: "/careers/apply",
  },
  twitter: {
    title: "Apply to Mancer Robotics",
    description:
      "Submit your application to join Mancer Robotics and help build autonomous inspection robots, AI analytics, and digital twin platforms.",
  },
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children
}
