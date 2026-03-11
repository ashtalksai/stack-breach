"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/lib/mock-data"
import { Quote } from "lucide-react"

const stats = [
  { value: "500+", label: "SMBs Protected" },
  { value: "12K", label: "AI Tools Detected" },
  { value: "<2 min", label: "Average Scan Time" },
  { value: "99.2%", label: "Detection Accuracy" },
]

export function SocialProof() {
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
            Trusted by IT Teams Everywhere
          </h2>
        </motion.div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 gap-6 rounded-xl border border-border bg-background p-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-6"
            >
              <Quote className="mb-3 h-5 w-5 text-primary/40" />
              <p className="text-sm leading-relaxed text-foreground">{t.quote}</p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.author}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
