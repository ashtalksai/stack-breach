import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: March 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Service Description
            </h2>
            <p className="mt-2">
              Stack Breach provides shadow AI detection and compliance reporting
              for organizations. The service scans connected workspace
              integrations to identify AI tools in use.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              No Contracts
            </h2>
            <p className="mt-2">
              All plans are month-to-month unless you choose annual billing.
              Cancel anytime — your subscription continues until the end of the
              current billing period. No cancellation fees.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Data Ownership
            </h2>
            <p className="mt-2">
              You own your data. Stack Breach does not sell, share, or use your
              organizational data for any purpose other than providing the
              service. Upon cancellation, your data is deleted within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Compliance Disclaimer
            </h2>
            <p className="mt-2">
              <strong>Stack Breach is a compliance tool, not legal advice.</strong>{" "}
              Our reports help you identify and document AI tool usage, but they
              do not constitute a legal guarantee of compliance with any
              regulatory framework. Always consult with a qualified legal
              professional for compliance decisions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Service Level
            </h2>
            <p className="mt-2">
              We target 99.9% uptime for the Stack Breach dashboard and
              scanning services. Scheduled maintenance windows are communicated
              at least 48 hours in advance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Acceptable Use
            </h2>
            <p className="mt-2">
              Stack Breach must only be used for legitimate business purposes.
              You may not use the service to monitor employees without
              appropriate notice as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-2">
              Questions about these terms: legal@stackbreach.io
            </p>
            <p className="mt-1">
              Stack Breach is a product of ChimeStream B.V., Rotterdam, Netherlands.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
