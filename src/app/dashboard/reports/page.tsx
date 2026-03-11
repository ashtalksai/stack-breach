"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Download, Plus, Calendar, Shield } from "lucide-react"
import { cn, getRiskColor } from "@/lib/utils"

const mockReports = [
  {
    id: "1",
    name: "Q4 2024 AI Compliance Report",
    type: "Full Audit",
    framework: "GDPR",
    date: "2024-12-15",
    pages: 24,
    status: "ready",
  },
  {
    id: "2",
    name: "Monthly Shadow AI Summary — Dec 2024",
    type: "Summary",
    framework: "All",
    date: "2024-12-01",
    pages: 8,
    status: "ready",
  },
  {
    id: "3",
    name: "HIPAA Compliance Assessment",
    type: "Framework Specific",
    framework: "HIPAA",
    date: "2024-11-15",
    pages: 16,
    status: "ready",
  },
  {
    id: "4",
    name: "Executive Risk Briefing",
    type: "Executive Summary",
    framework: "All",
    date: "2024-11-01",
    pages: 4,
    status: "ready",
  },
]

export default function ReportsPage() {
  const [showGenerateModal, setShowGenerateModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Reports</h1>
          <p className="text-sm text-muted-foreground">
            Generate and download audit-ready compliance reports.
          </p>
        </div>
        <Button onClick={() => setShowGenerateModal(!showGenerateModal)}>
          <Plus className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Generate Modal */}
      {showGenerateModal && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="font-display text-lg font-bold">Generate New Report</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose a report type to generate.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Full Audit Report",
                desc: "Complete compliance audit with all frameworks",
                icon: Shield,
              },
              {
                title: "Executive Summary",
                desc: "High-level risk overview for leadership",
                icon: FileText,
              },
              {
                title: "Framework Report",
                desc: "GDPR, HIPAA, or SOX specific",
                icon: Shield,
              },
              {
                title: "Monthly Summary",
                desc: "Month-over-month tool detection changes",
                icon: Calendar,
              },
            ].map((type) => (
              <button
                key={type.title}
                className="rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-primary/40"
                onClick={() => setShowGenerateModal(false)}
              >
                <type.icon className="mb-2 h-5 w-5 text-primary" />
                <h4 className="text-sm font-semibold">{type.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{type.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Reports Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {mockReports.map((report) => (
          <div
            key={report.id}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{report.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {report.type} · {report.framework}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3 text-xs text-muted-foreground">
                <span className="font-mono">{report.date}</span>
                <span>{report.pages} pages</span>
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-1.5 h-3.5 w-3.5" />
                PDF
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
