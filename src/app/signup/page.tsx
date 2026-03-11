"use client"

import Link from "next/link"
import { Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const benefits = [
  "14-day free trial, no credit card",
  "Connect your workspace in 30 seconds",
  "First scan results in under 2 minutes",
  "Download audit-ready reports instantly",
]

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left: Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold">Stack Breach</span>
          </Link>

          <h1 className="font-display text-2xl font-bold">Start your free trial</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            No credit card required. Get started in 2 minutes.
          </p>

          <form className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Jane Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" type="email" placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Acme Corp" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Benefits */}
      <div className="hidden flex-1 items-center justify-center bg-sidebar text-sidebar-foreground lg:flex">
        <div className="max-w-md px-12">
          <h2 className="font-display text-3xl font-bold">
            Shadow AI compliance in minutes, not months
          </h2>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-risk-low" />
                <span className="text-sm opacity-90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
