"use client"

import { motion } from "framer-motion"
import { Plug, Scan, Download } from "lucide-react"

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Connect",
    description: "OAuth your workspace — Google, Microsoft 365, or Slack. Read-only access, 30 seconds.",
  },
  {
    icon: Scan,
    number: "02",
    title: "Scan",
    description: "We detect AI tools across your organization in under 2 minutes. 500+ tools in our database.",
  },
  {
    icon: Download,
    number: "03",
    title: "Report",
    description: "Download a PDF audit report formatted for your compliance officer or external auditor.",
  },
]

export function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From zero visibility to audit-ready in under 5 minutes.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[60px] hidden h-px bg-border lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6 flex h-[120px] w-[120px] items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
                    <step.icon className="mx-auto mt-1 h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
