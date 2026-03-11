"use client"

import { motion } from "framer-motion"
import { Plug, Search, FileText, BarChart3, Settings, Users } from "lucide-react"

const features = [
  {
    icon: Plug,
    title: "One-Click Integrations",
    description: "Connect Google Workspace, Microsoft 365, and Slack via OAuth. Read-only access, no agents to install.",
  },
  {
    icon: Search,
    title: "AI Tool Detection",
    description: "Scan against 500+ known AI tools and Chrome extension risk databases. Discover shadow AI in 2 minutes.",
  },
  {
    icon: FileText,
    title: "Audit-Ready PDF Reports",
    description: "Download compliance reports formatted for auditors — not engineers. Plain English, clear remediation steps.",
  },
  {
    icon: BarChart3,
    title: "Live Risk Dashboard",
    description: "Organization risk score, compliance framework status, and detected tools — all in one real-time view.",
  },
  {
    icon: Settings,
    title: "Compliance Presets",
    description: "Pre-configured rules for GDPR, HIPAA, and SOX. Toggle frameworks on, get instant compliance mapping.",
  },
  {
    icon: Users,
    title: "Employee Visibility",
    description: "See which employees use which tools, how often, and what data they're exposing. No guesswork.",
  },
]

export function Features() {
  return (
    <section className="bg-card px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Manage Shadow AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Purpose-built for IT managers at SMBs. No security degree required.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/20"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
