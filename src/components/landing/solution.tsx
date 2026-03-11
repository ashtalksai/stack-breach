"use client"

import { motion } from "framer-motion"
import { Clock, FileText, Shield } from "lucide-react"

export function Solution() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Compliance in 5 Minutes,{" "}
              <span className="text-primary">Not 5 Months</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stack Breach gives IT managers the same shadow AI visibility that
              enterprises pay six figures for — at a price that makes sense for
              growing companies.
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Clock,
                  title: "5-Minute Setup",
                  desc: "Connect via OAuth. Read-only access. No agents to install.",
                },
                {
                  icon: Shield,
                  title: "Instant Risk Score",
                  desc: "One number tells you if you're compliant or exposed.",
                },
                {
                  icon: FileText,
                  title: "Audit-Ready Reports",
                  desc: "Download a PDF your auditor actually understands.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Before Stack Breach
                </p>
                <div className="mt-3 space-y-2">
                  {[
                    "Manual spreadsheet tracking",
                    "Months of compliance consulting",
                    "$50K+ enterprise tool licenses",
                    "Dedicated security team needed",
                  ].map((item) => (
                    <div key={item} className="rounded bg-red-50 px-3 py-2 text-sm text-risk-high">
                      ✗ {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-px w-16 bg-border" />
                <span className="px-3 text-xs text-muted-foreground">vs</span>
                <div className="h-px w-16 bg-border" />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  After Stack Breach
                </p>
                <div className="mt-3 space-y-2">
                  {[
                    "Automated detection in 2 minutes",
                    "Instant compliance reports",
                    "Starting at $199/month",
                    "Self-serve — no expertise needed",
                  ].map((item) => (
                    <div key={item} className="rounded bg-green-50 px-3 py-2 text-sm text-risk-low">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
