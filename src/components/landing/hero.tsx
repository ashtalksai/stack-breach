"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,91,232,0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="flex h-1.5 w-1.5 rounded-full bg-risk-low" />
              14-day free trial — no credit card required
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find Every AI Tool in Your Stack{" "}
              <span className="text-primary">Before the Auditor Does</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Built for IT managers who don&apos;t have a compliance team. Connect your
              workspace, scan in 2 minutes, download your audit report.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free 14-Day Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Preview Card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-sm font-semibold text-muted-foreground">
                  Organization Risk Score
                </h3>
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-risk-medium">
                  Medium Risk
                </span>
              </div>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-mono text-7xl font-bold text-risk-medium">
                  67
                </span>
                <span className="text-sm text-muted-foreground">/ 100</span>
              </div>
              <div className="mb-4 grid grid-cols-3 gap-3">
                {[
                  { label: "GDPR", score: 62, color: "text-risk-medium" },
                  { label: "HIPAA", score: 34, color: "text-risk-high" },
                  { label: "SOX", score: 88, color: "text-risk-low" },
                ].map((fw) => (
                  <div key={fw.label} className="rounded-lg bg-background p-3 text-center">
                    <p className="text-xs text-muted-foreground">{fw.label}</p>
                    <p className={`font-mono text-lg font-bold ${fw.color}`}>
                      {fw.score}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  { name: "ChatGPT", risk: "High", users: 47, icon: AlertTriangle, color: "text-risk-high" },
                  { name: "GitHub Copilot", risk: "High", users: 23, icon: AlertTriangle, color: "text-risk-high" },
                  { name: "Notion AI", risk: "Low", users: 34, icon: CheckCircle, color: "text-risk-low" },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between rounded-lg bg-background px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <tool.icon className={`h-4 w-4 ${tool.color}`} />
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {tool.users} users
                      </span>
                      <span className={`text-xs font-medium ${tool.color}`}>
                        {tool.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
