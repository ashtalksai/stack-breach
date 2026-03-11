"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Clock, Building2 } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Questions about Stack Breach? Want a demo? We&apos;re here to help.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Company Size</Label>
                  <Select>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1–50 employees</SelectItem>
                      <SelectItem value="51-200">51–200 employees</SelectItem>
                      <SelectItem value="201-500">201–500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="What can we help with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Request a Demo</SelectItem>
                    <SelectItem value="pricing">Pricing Question</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership / MSP</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <Clock className="mb-2 h-5 w-5 text-primary" />
              <h3 className="font-display text-sm font-semibold">Response Time</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We respond to all inquiries within 24 hours on business days.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <Mail className="mb-2 h-5 w-5 text-primary" />
              <h3 className="font-display text-sm font-semibold">Email Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                support@stackbreach.io
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <Building2 className="mb-2 h-5 w-5 text-primary" />
              <h3 className="font-display text-sm font-semibold">MSP Partners</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Managing IT for multiple clients? Ask about our MSP multi-tenant
                pricing and white-label options.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
