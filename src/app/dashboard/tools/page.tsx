"use client"

import { useState } from "react"
import { mockTools, type DetectedTool } from "@/lib/mock-data"
import { cn, getRiskColor } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertTriangle,
  CheckCircle,
  Search,
  X,
  Shield,
  ExternalLink,
} from "lucide-react"

function ToolDetailDrawer({
  tool,
  onClose,
}: {
  tool: DetectedTool
  onClose: () => void
}) {
  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-border bg-card shadow-xl">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="font-display text-lg font-bold">{tool.name}</h2>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-surface-hover">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Risk Level
              </p>
              <span
                className={cn(
                  "mt-1 inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium capitalize",
                  getRiskColor(tool.risk)
                )}
              >
                {tool.risk === "high" && <AlertTriangle className="h-3.5 w-3.5" />}
                {tool.risk === "low" && <CheckCircle className="h-3.5 w-3.5" />}
                {tool.risk}
              </span>
            </div>

            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Description
              </p>
              <p className="mt-1 text-sm text-foreground">{tool.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  Category
                </p>
                <p className="mt-1 text-sm">{tool.category}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  Status
                </p>
                <p className="mt-1 text-sm capitalize">{tool.status}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  Employees
                </p>
                <p className="mt-1 font-mono text-sm">{tool.employees}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  First Seen
                </p>
                <p className="mt-1 font-mono text-sm">{tool.firstSeen}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Data Exposure
              </p>
              <p className="mt-1 text-sm text-risk-high">{tool.dataExposure}</p>
            </div>

            {tool.risk === "high" && (
              <div className="rounded-lg border border-risk-high/20 bg-red-50 p-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-risk-high">
                  <Shield className="h-4 w-4" /> Remediation Steps
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-risk-high/80">
                  <li>1. Review employee access and usage patterns</li>
                  <li>2. Implement data handling policy for this tool</li>
                  <li>3. Consider approved alternatives with DPA</li>
                  <li>4. Add to ongoing monitoring schedule</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-border p-6">
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Approve Tool
            </Button>
            <Button variant="destructive" className="flex-1">
              Block Tool
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ToolsPage() {
  const [search, setSearch] = useState("")
  const [riskFilter, setRiskFilter] = useState<string>("all")
  const [selectedTool, setSelectedTool] = useState<DetectedTool | null>(null)

  const filtered = mockTools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase())
    const matchesRisk = riskFilter === "all" || tool.risk === riskFilter
    return matchesSearch && matchesRisk
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Detected AI Tools</h1>
        <p className="text-sm text-muted-foreground">
          {mockTools.length} tools detected across your organization.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={riskFilter} onValueChange={(val) => setRiskFilter(val ?? "all")}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Risks</SelectItem>
            <SelectItem value="high">High Risk</SelectItem>
            <SelectItem value="medium">Medium Risk</SelectItem>
            <SelectItem value="low">Low Risk</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-hover">
                <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                  Tool
                </th>
                <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                  Category
                </th>
                <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                  Risk
                </th>
                <th className="sticky top-0 px-6 py-3 text-right text-xs font-medium text-muted-foreground">
                  Users
                </th>
                <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                  Status
                </th>
                <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-muted-foreground">
                  First Seen
                </th>
                <th className="sticky top-0 px-6 py-3 text-right text-xs font-medium text-muted-foreground" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((tool) => (
                <tr
                  key={tool.id}
                  className="cursor-pointer border-b border-border transition-colors last:border-0 hover:bg-surface-hover"
                  onClick={() => setSelectedTool(tool)}
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
                      {tool.risk === "high" && <AlertTriangle className="h-3 w-3" />}
                      {tool.risk === "low" && <CheckCircle className="h-3 w-3" />}
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
                            : tool.status === "blocked"
                              ? "bg-gray-100 text-gray-500"
                              : "bg-amber-50 text-risk-medium"
                      )}
                    >
                      {tool.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-muted-foreground">
                    {tool.firstSeen}
                  </td>
                  <td className="px-6 py-3 text-right">
                    <ExternalLink className="inline h-4 w-4 text-muted-foreground" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No tools found matching your filters.
          </div>
        )}
      </div>

      {/* Detail Drawer */}
      {selectedTool && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setSelectedTool(null)}
          />
          <ToolDetailDrawer
            tool={selectedTool}
            onClose={() => setSelectedTool(null)}
          />
        </>
      )}
    </div>
  )
}
