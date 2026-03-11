import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Shield, Target, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Compliance Made <span className="text-primary">Accessible</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We started Stack Breach because we watched small companies panic when
            auditors asked about their AI usage — and watched enterprise vendors
            charge $50K for the answer.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Every company — not just the ones with six-figure security budgets —
            deserves to know what AI tools their employees are using and whether
            that usage puts them at compliance risk. Stack Breach exists to
            democratize shadow AI detection.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We believe compliance tools should speak the language of IT managers,
            not CISOs. Our reports are designed for people who need to hand an
            auditor a clear answer, not investigate a security incident.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Purpose-Built for SMBs",
              desc: "Not an enterprise tool with a small business discount. Built from day one for companies with 50–500 employees.",
            },
            {
              icon: Users,
              title: "IT Manager First",
              desc: "Designed for the person who got cc'd on the compliance email — not the one who wrote it.",
            },
            {
              icon: Zap,
              title: "Audit-Ready Output",
              desc: "Our reports are the answer your auditor is looking for, not an investigation to start.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <item.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="font-display text-xl font-bold">Built by ChimeStream B.V.</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Stack Breach is a product of ChimeStream B.V., based in Rotterdam,
            Netherlands. We build tools that make enterprise-grade capabilities
            accessible to growing companies. Our team combines experience in
            compliance, AI, and product development.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
