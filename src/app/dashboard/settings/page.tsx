"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account and organization settings.
        </p>
      </div>

      {/* Profile */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-display text-base font-semibold">Profile</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" defaultValue="Jane Smith" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jane@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" defaultValue="Acme Corp" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" defaultValue="IT Director" />
          </div>
        </div>
        <Button className="mt-4" size="sm">
          Save Changes
        </Button>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-display text-base font-semibold">Notifications</h3>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "Scan Complete",
              desc: "Email when a scheduled scan finishes",
              defaultOn: true,
            },
            {
              title: "New High-Risk Tool",
              desc: "Alert when a new high-risk tool is detected",
              defaultOn: true,
            },
            {
              title: "Weekly Summary",
              desc: "Weekly email digest of AI tool activity",
              defaultOn: false,
            },
            {
              title: "Compliance Status Change",
              desc: "Alert when framework compliance status changes",
              defaultOn: true,
            },
          ].map((notif) => (
            <div key={notif.title} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{notif.title}</p>
                <p className="text-xs text-muted-foreground">{notif.desc}</p>
              </div>
              <Switch defaultChecked={notif.defaultOn} />
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Frameworks */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-display text-base font-semibold">
          Compliance Frameworks
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Enable the frameworks relevant to your organization.
        </p>
        <div className="mt-4 space-y-4">
          {[
            { name: "GDPR", desc: "General Data Protection Regulation (EU)", on: true },
            { name: "HIPAA", desc: "Health Insurance Portability and Accountability Act", on: true },
            { name: "SOX", desc: "Sarbanes–Oxley Act", on: false },
          ].map((fw) => (
            <div key={fw.name} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{fw.name}</p>
                <p className="text-xs text-muted-foreground">{fw.desc}</p>
              </div>
              <Switch defaultChecked={fw.on} />
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Danger Zone */}
      <div className="rounded-xl border border-risk-high/20 bg-red-50/50 p-6">
        <h3 className="font-display text-base font-semibold text-risk-high">
          Danger Zone
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Delete Account</p>
            <p className="text-xs text-muted-foreground">
              Permanently delete your account and all data.
            </p>
          </div>
          <Button variant="destructive" size="sm">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  )
}
