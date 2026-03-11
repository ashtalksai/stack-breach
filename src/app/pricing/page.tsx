"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PricingSection } from "@/components/landing/pricing-section"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const comparisonRows = [
  { feature: "Employee limit", starter: "50", growth: "200", scale: "500" },
  { feature: "Integrations", starter: "Google Workspace", growth: "All (Google, M365, Slack)", scale: "All + Custom" },
  { feature: "Compliance frameworks", starter: "GDPR", growth: "GDPR + HIPAA + SOX", scale: "All + Custom rules" },
  { feature: "Scan frequency", starter: "Monthly", growth: "Weekly", scale: "Daily" },
  { feature: "White-label reports", starter: false, growth: true, scale: true },
  { feature: "API access", starter: false, growth: false, scale: true },
]

const pricingFaqs = [
  {
    q: "Can I change plans later?",
    a: "Yes, upgrade or downgrade anytime. Changes take effect at your next billing cycle.",
  },
  {
    q: "What happens after the free trial?",
    a: "After 14 days, choose a plan to continue. No charge during the trial, and we'll remind you before it ends.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "Yes, contact us for nonprofit pricing.",
  },
  {
    q: "Can I get a refund?",
    a: "We offer a 30-day money-back guarantee on all plans.",
  },
  {
    q: "What about enterprise pricing?",
    a: "For organizations with 500+ employees, contact our sales team for custom pricing.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingSection />

        {/* Comparison Table */}
        <section className="bg-card px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-2xl font-bold">
              Compare Plans
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 text-left text-sm font-medium text-muted-foreground">Feature</th>
                    <th className="py-3 text-center text-sm font-semibold">Starter</th>
                    <th className="py-3 text-center text-sm font-semibold text-primary">Growth</th>
                    <th className="py-3 text-center text-sm font-semibold">Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-border">
                      <td className="py-3 text-sm">{row.feature}</td>
                      {(["starter", "growth", "scale"] as const).map((plan) => (
                        <td key={plan} className="py-3 text-center text-sm">
                          {typeof row[plan] === "boolean" ? (
                            row[plan] ? (
                              <Check className="mx-auto h-4 w-4 text-risk-low" />
                            ) : (
                              <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                            )
                          ) : (
                            row[plan]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Enterprise CTA */}
            <div className="mt-10 rounded-xl border border-border bg-background p-6 text-center">
              <h3 className="font-display text-lg font-bold">Need more than 500 employees?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Contact our sales team for custom enterprise pricing.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold">
              Pricing FAQ
            </h2>
            <div className="mt-8 space-y-6">
              {pricingFaqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-display text-sm font-semibold">{faq.q}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
