"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Eye, DollarSign } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "You Got CC'd on the Compliance Email",
    description:
      "Your company needs to demonstrate AI governance for an upcoming audit. You have 30 days, no compliance team, and no visibility into what tools employees are using.",
  },
  {
    icon: Eye,
    title: "Employees Are Sharing Data with Shadow AI",
    description:
      "78% of workers bring their own AI tools. Customer data, source code, and confidential documents are being pasted into ChatGPT, Copilot, and a dozen other tools you don't know about.",
  },
  {
    icon: DollarSign,
    title: "Enterprise Tools Cost $50K/Year",
    description:
      "Darktrace, Lasso Security, CloudEagle — all built for large enterprises with dedicated security teams and six-figure budgets. Nothing exists for SMBs under 500 employees.",
  },
]

export function Problem() {
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
            The Problem Nobody Built For
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            SMBs face the same AI compliance pressure as enterprises — with none of the tools or budget.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                <problem.icon className="h-5 w-5 text-risk-high" />
              </div>
              <h3 className="font-display text-lg font-semibold">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
