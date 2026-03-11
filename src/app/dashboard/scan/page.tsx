"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Scan, Check, Loader2, AlertTriangle, Shield } from "lucide-react"
import { cn, getRiskColor } from "@/lib/utils"
import { mockTools, mockScans } from "@/lib/mock-data"

type ScanState = "idle" | "scanning" | "complete"

export default function ScanPage() {
  const [scanState, setScanState] = useState<ScanState>("idle")
  const [progress, setProgress] = useState(0)

  const startScan = () => {
    setScanState("scanning")
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setScanState("complete")
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 300)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Run Scan</h1>
        <p className="text-sm text-muted-foreground">
          Detect AI tools across your connected integrations.
        </p>
      </div>

      {/* Scan CTA */}
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        {scanState === "idle" && (
          <>
            <Scan className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 font-display text-xl font-bold">
              Ready to Scan
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Stack Breach will scan your connected integrations for AI tools.
              This typically takes under 2 minutes.
            </p>
            <Button className="mt-6" size="lg" onClick={startScan}>
              <Scan className="mr-2 h-4 w-4" />
              Start Scan
            </Button>
          </>
        )}

        {scanState === "scanning" && (
          <>
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <h2 className="mt-4 font-display text-xl font-bold">
              Scanning Your Stack...
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Checking OAuth permissions, API connections, and browser extension
              databases.
            </p>
            <div className="mx-auto mt-6 max-w-md">
              <Progress value={Math.min(progress, 100)} className="h-2" />
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {Math.min(Math.round(progress), 100)}% complete
              </p>
            </div>
          </>
        )}

        {scanState === "complete" && (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <Check className="h-6 w-6 text-risk-low" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">
              Scan Complete
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Found {mockTools.length} AI tools across your organization.
            </p>
            <div className="mt-4 inline-flex gap-4">
              <span className="font-mono text-sm text-risk-high">
                <AlertTriangle className="mr-1 inline h-3.5 w-3.5" />4 High Risk
              </span>
              <span className="font-mono text-sm text-risk-medium">
                <Shield className="mr-1 inline h-3.5 w-3.5" />4 Medium Risk
              </span>
              <span className="font-mono text-sm text-risk-low">
                <Check className="mr-1 inline h-3.5 w-3.5" />2 Low Risk
              </span>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button onClick={() => setScanState("idle")}>
                Scan Again
              </Button>
              <Button variant="outline">Download Report</Button>
            </div>
          </>
        )}
      </div>

      {/* Scan History */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h3 className="text-sm font-semibold">Scan History</h3>
        </div>
        <div className="divide-y divide-border">
          {mockScans.map((scan) => (
            <div key={scan.id} className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-medium">{scan.date}</p>
                <p className="text-xs text-muted-foreground">
                  Duration: {scan.duration}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm">{scan.toolsFound} tools</span>
                <div className="flex gap-1.5">
                  <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", getRiskColor("high"))}>
                    {scan.highRisk}
                  </span>
                  <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", getRiskColor("medium"))}>
                    {scan.mediumRisk}
                  </span>
                  <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", getRiskColor("low"))}>
                    {scan.lowRisk}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
