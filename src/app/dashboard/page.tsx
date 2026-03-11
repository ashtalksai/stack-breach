"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn, getRiskColor } from "@/lib/utils"
import {
  riskScore,
  totalEmployees,
  totalTools,
  highRiskCount,
  mockFrameworks,
  mockTools,
  mockScans,
} from "@/lib/mock-data"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Scan,
  Shield,
  Users,
  Wrench,
} from "lucide-react"

function RiskScoreCard() {
  const riskLevel =
    riskScore >= 80 ? "low" : riskScore >= 50 ? "medium" : "high"
  const riskLabel =
    riskLevel === "low"
      ? "Low Risk"
      : riskLevel === "medium"
        ? "Medium Risk"
        : "High Risk"

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">
          Organization Risk Score
        </h3>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            getRiskColor(riskLevel)
          )}
        >
          {riskLabel}
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span
          className={cn(
            "font-mono text-[72px] font-bold leading-none",
            riskLevel === "high"
              ? "text-risk-high"
              : riskLevel === "medium"
                ? "text-risk-medium"
                : "text-risk-low"
          )}
        >
          {riskScore}
        </span>
        <span className="text-sm text-muted-foreground">/ 100</span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Based on {totalTools} detected AI tools across {totalEmployees} employees
      </p>
    </div>
  )
}

function ComplianceStatus() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-sm font-medium text-muted-foreground">
        Compliance Frameworks
      </h3>
      <div className="mt-4 space-y-3">
        {mockFrameworks.map((fw) => {
          const riskLevel =
            fw.score >= 80 ? "low" : fw.score >= 50 ? "medium" : "high"
          return (
            <div key={fw.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
                    getRiskColor(riskLevel)
                  )}
                >
                  {fw.name}
                </span>
                <span className="text-xs capitalize text-muted-foreground">
                  {fw.status.replace("-", " ")}
                </span>
              </div>
              <span
                className={cn(
                  "font-mono text-lg font-bold",
                  riskLevel === "high"
                    ? "text-risk-high"
                    : riskLevel === "medium"
                      ? "text-risk-medium"
                      : "text-risk-low"
                )}
              >
                {fw.score}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StatsCards() {
  const stats = [
    {
      label: "Total AI Tools",
      value: totalTools,
      icon: Wrench,
      color: "text-primary",
    },
    {
      label: "High Risk",
      value: highRiskCount,
      icon: AlertTriangle,
      color: "text-risk-high",
    },
    {
      label: "Employees Affected",
      value: totalEmployees,
      icon: Users,
      color: "text-muted-foreground",
    },
    {
      label: "Last Scan",
      value: "2h ago",
      icon: Clock,
      color: "text-muted-foreground",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-border bg-card p-4"
        >
          <stat.icon className={cn("h-5 w-5", stat.color)} />
          <p className="mt-2 font-mono text-2xl font-bold">{stat.value}</p>
          <p className="text-xs text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

function TopToolsTable() {
  const topTools = mockTools.slice(0, 5)

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h3 className="text-sm font-semibold">Detected AI Tools</h3>
        <Link
          href="/dashboard/tools"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                Tool
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                Risk
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground">
                Users
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {topTools.map((tool) => (
              <tr
                key={tool.id}
                className="border-b border-border transition-colors last:border-0 hover:bg-surface-hover"
              >
                <td className="px-6 py-3 text-sm font-medium">{tool.name}</td>
                <td className="px-6 py-3 text-sm text-muted-foreground">
                  {tool.category}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                      getRiskColor(tool.risk)
                    )}
                  >
                    {tool.risk === "high" && (
                      <AlertTriangle className="h-3 w-3" />
                    )}
                    {tool.risk === "low" && (
                      <CheckCircle className="h-3 w-3" />
                    )}
                    {tool.risk}
                  </span>
                </td>
                <td className="px-6 py-3 text-right font-mono text-sm">
                  {tool.employees}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                      tool.status === "flagged"
                        ? "bg-red-50 text-risk-high"
                        : tool.status === "approved"
                          ? "bg-green-50 text-risk-low"
                          : "bg-amber-50 text-risk-medium"
                    )}
                  >
                    {tool.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function RecentScans() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Recent Scans</h3>
        <Link
          href="/dashboard/scan"
          className="text-xs text-primary hover:underline"
        >
          Run new scan
        </Link>
      </div>
      <div className="mt-4 space-y-3">
        {mockScans.map((scan) => (
          <div
            key={scan.id}
            className="flex items-center justify-between rounded-lg bg-background p-3"
          >
            <div>
              <p className="text-sm font-medium">{scan.date}</p>
              <p className="text-xs text-muted-foreground">
                {scan.toolsFound} tools found · {scan.duration}
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-mono text-xs text-risk-high">
                {scan.highRisk}H
              </span>
              <span className="font-mono text-xs text-risk-medium">
                {scan.mediumRisk}M
              </span>
              <span className="font-mono text-xs text-risk-low">
                {scan.lowRisk}L
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuickActions() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-sm font-semibold">Quick Actions</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Button asChild>
          <Link href="/dashboard/scan">
            <Scan className="mr-2 h-4 w-4" /> Run Scan
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard/reports">
            <Shield className="mr-2 h-4 w-4" /> Generate Report
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your organization&apos;s AI tool usage and compliance status.
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <RiskScoreCard />
        <ComplianceStatus />
        <QuickActions />
      </div>

      <TopToolsTable />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentScans />
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-semibold">Integrations</h3>
          <div className="mt-4 space-y-3">
            {[
              { name: "Google Workspace", status: "Connected", active: true },
              { name: "Microsoft 365", status: "Not connected", active: false },
              { name: "Slack", status: "Not connected", active: false },
            ].map((i) => (
              <div
                key={i.name}
                className="flex items-center justify-between rounded-lg bg-background p-3"
              >
                <span className="text-sm font-medium">{i.name}</span>
                <span
                  className={cn(
                    "text-xs font-medium",
                    i.active ? "text-risk-low" : "text-muted-foreground"
                  )}
                >
                  {i.status}
                </span>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4 w-full" size="sm">
            Manage Integrations
          </Button>
        </div>
      </div>
    </div>
  )
}
