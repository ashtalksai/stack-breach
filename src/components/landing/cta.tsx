"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center"
      >
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          The Auditor Is Going to Ask.{" "}
          <span className="text-primary">Have the Answer Ready.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Start your 14-day free trial today. No credit card required. Connect
          your first integration and run your first scan in under 5 minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/signup">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Talk to Sales</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
