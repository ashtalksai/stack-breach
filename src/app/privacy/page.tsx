import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: March 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              What We Collect
            </h2>
            <p className="mt-2">
              Stack Breach accesses <strong>OAuth metadata only</strong> — we detect which
              AI tools have been authorized and are being used in your workspace. We do
              <strong> not</strong> read emails, documents, files, or any content.
            </p>
            <p className="mt-2">Specifically, we access:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>OAuth authorization records (which apps are connected)</li>
              <li>API access logs (which tools are being called)</li>
              <li>Chrome extension manifests (installed browser extensions)</li>
              <li>User counts per tool (anonymized by default)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              What We Don&apos;t Collect
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Email content or attachments</li>
              <li>Documents, spreadsheets, or files</li>
              <li>Chat messages or transcripts</li>
              <li>Passwords or authentication tokens</li>
              <li>Personal employee information beyond tool usage</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Data Security
            </h2>
            <p className="mt-2">
              All data is encrypted in transit (TLS 1.3) and at rest (AES-256).
              We use SOC 2 Type II compliant infrastructure. Your data is stored
              in EU data centers (Frankfurt, Germany) by default.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              GDPR Rights
            </h2>
            <p className="mt-2">
              Under GDPR, you have the right to access, correct, delete, or
              export your data. To exercise these rights, contact
              privacy@stackbreach.io.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Data Processing Agreement
            </h2>
            <p className="mt-2">
              A DPA is available upon request for all paid plans. Contact
              support@stackbreach.io.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Data Retention
            </h2>
            <p className="mt-2">
              Scan results are retained for the duration of your subscription
              plus 30 days. Upon account deletion, all data is permanently
              removed within 72 hours.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-2">
              For privacy-related inquiries: privacy@stackbreach.io
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
