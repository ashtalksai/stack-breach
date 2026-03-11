"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Plug, Settings, Scan, ArrowRight, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: 1,
    title: "Connect Integration",
    description: "Link your workspace so Stack Breach can detect AI tools.",
    icon: Plug,
  },
  {
    number: 2,
    title: "Configure Scope",
    description: "Choose compliance frameworks and scan settings.",
    icon: Settings,
  },
  {
    number: 3,
    title: "Run First Scan",
    description: "Discover AI tools across your organization.",
    icon: Scan,
  },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <div className="mb-8 flex items-center gap-2">
        <Shield className="h-7 w-7 text-primary" />
        <span className="font-display text-xl font-bold">Stack Breach</span>
      </div>

      {/* Progress */}
      <div className="mb-10 flex items-center gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                i < currentStep
                  ? "bg-risk-low text-white"
                  : i === currentStep
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground"
              )}
            >
              {i < currentStep ? <Check className="h-4 w-4" /> : step.number}
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "h-px w-12",
                  i < currentStep ? "bg-risk-low" : "bg-border"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="w-full max-w-lg rounded-xl border border-border bg-card p-8 text-center">
        {currentStep < 3 ? (
          <>
            {(() => {
              const step = steps[currentStep]
              const Icon = step.icon
              return (
                <>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">{step.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </>
              )
            })()}

            {/* Step-specific content */}
            {currentStep === 0 && (
              <div className="mt-6 space-y-3">
                {["Google Workspace", "Microsoft 365", "Slack"].map((integration) => (
                  <button
                    key={integration}
                    className="flex w-full items-center justify-between rounded-lg border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                    onClick={() => setCurrentStep(1)}
                  >
                    {integration}
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            )}

            {currentStep === 1 && (
              <div className="mt-6 space-y-3">
                {["GDPR", "HIPAA", "SOX"].map((fw) => (
                  <label
                    key={fw}
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm"
                  >
                    <span className="font-medium">{fw}</span>
                    <input type="checkbox" defaultChecked={fw === "GDPR"} className="h-4 w-4 rounded" />
                  </label>
                ))}
              </div>
            )}

            {currentStep === 2 && (
              <div className="mt-6">
                <div className="rounded-lg bg-primary/10 p-6">
                  <Scan className="mx-auto h-10 w-10 text-primary" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    This will scan your connected workspace for AI tools. Takes
                    about 2 minutes.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={() => setCurrentStep(currentStep + 1)}>
                {currentStep === 2 ? "Run Scan" : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <Check className="h-8 w-8 text-risk-low" />
            </div>
            <h2 className="font-display text-2xl font-bold">You&apos;re All Set!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your first scan is complete. Head to the dashboard to see your results.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
