'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield, AlertTriangle, CheckCircle, Target, BarChart3,
  Zap, Users, DollarSign, Crosshair, Rocket, Clock,
  Eye, FileText, ArrowRight, ChevronLeft, ChevronRight,
  Globe, Lock, MonitorSmartphone, Mail, X as XIcon
} from 'lucide-react'
import Link from 'next/link'

/* ─── Slide Components ─── */

function TitleSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,91,232,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(46,91,232,0.04),transparent_50%)]" />
      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <Shield className="w-10 h-10 text-primary" />
          <span className="font-display text-2xl font-bold tracking-tight">Stack Breach</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Shadow AI Detection for SMBs
          <span className="block text-primary mt-2">Without the Enterprise Price Tag</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10"
        >
          Know Every AI Tool in Your Stack. Before the Auditor Does.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="bg-card border border-border rounded-xl p-6 inline-flex items-center gap-6">
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-risk-medium">67</div>
              <div className="text-xs text-muted-foreground mt-1">Risk Score</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-risk-high" />
                <span className="text-muted-foreground">3 High Risk</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-risk-medium" />
                <span className="text-muted-foreground">7 Medium</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-risk-low" />
                <span className="text-muted-foreground">8 Low</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ProblemSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-risk-high/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-risk-high" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">The Problem</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          <span className="text-risk-high">78%</span> of employees use AI tools their IT team doesn&apos;t know about.
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Your CEO signed up for GDPR compliance. The auditor wants a list of every AI tool in use. You have no idea where to start.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-risk-high font-bold text-sm uppercase tracking-wider mb-3">Shadow AI is Everywhere</div>
            <p className="text-muted-foreground text-sm">
              ChatGPT. Grammarly. Notion AI. Midjourney. Your employees are using all of them — often with company data — and you have no visibility.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-risk-medium font-bold text-sm uppercase tracking-wider mb-3">Enterprise Tools Won&apos;t Help</div>
            <p className="text-muted-foreground text-sm">
              Darktrace costs $50,000/year. Lasso Security requires enterprise sales. If you&apos;re an SMB without a compliance team, there is no tool built for you.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-risk-high font-bold text-sm uppercase tracking-wider mb-3">The Clock is Ticking</div>
            <p className="text-muted-foreground text-sm">
              EU AI Act full enforcement begins August 2026. Nearly 50% of organizations expect a shadow AI incident in the next 12 months.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {[
            '78% bring own AI tools',
            '50% expect shadow AI incident',
            'EU AI Act — Aug 2026',
            '18+ unknown AI tools per SMB',
          ].map((stat) => (
            <span key={stat} className="bg-risk-high/5 text-risk-high border border-risk-high/20 rounded-full px-4 py-1.5 text-sm font-medium">
              {stat}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SolutionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">The Solution</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Compliance in <span className="text-primary">5 Minutes</span>, Not 5 Months
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Stack Breach connects to your existing tools, scans for every AI tool in use, and generates an audit-ready PDF compliance report — in under 5 minutes.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { icon: Eye, title: 'Visibility', desc: 'Here are every AI tool your employees are using' },
              { icon: Shield, title: 'Risk Assessment', desc: 'Here is the compliance risk of each tool (GDPR, HIPAA, SOX)' },
              { icon: FileText, title: 'The Answer', desc: 'Here is the report your auditor wants' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">{title}</div>
                  <div className="text-muted-foreground">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-8 flex flex-col justify-center">
            <div className="text-sm uppercase tracking-widest opacity-70 mb-3">Key Differentiator</div>
            <p className="text-xl font-semibold leading-relaxed">
              &ldquo;Stack Breach speaks IT manager, not CISO. The output is designed to hand to an auditor, not to start a security investigation.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function MarketSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Market Size</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          A <span className="text-primary">$60B+</span> Compliance Gap
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <span className="text-xs uppercase tracking-widest opacity-70">TAM</span>
            <div className="font-mono text-4xl font-bold mt-2">$60B+</div>
            <div className="text-sm opacity-80 mt-1">58M SMBs globally × $200–500/mo</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">SAM</span>
            <div className="font-mono text-4xl font-bold mt-2 text-primary">$8.4B</div>
            <div className="text-sm text-muted-foreground mt-1">2M companies with compliance exposure</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">SOM — Year 1</span>
            <div className="font-mono text-4xl font-bold mt-2 text-primary">$4.2M</div>
            <div className="text-sm text-muted-foreground mt-1">1,000 paying companies at $349 avg</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { label: 'EU AI Act', value: 'Aug 2026', desc: 'Full enforcement deadline' },
            { label: 'Shadow AI searches', value: '+340%', desc: 'Year-over-year growth' },
            { label: 'Copilot/Workspace AI', value: 'New exposure', desc: 'Creating more shadow AI' },
            { label: 'GDPR fines', value: 'Increasing', desc: 'AI-specific enforcement rising' },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
              <div className="font-mono text-xl font-bold text-primary whitespace-nowrap">{item.value}</div>
              <div>
                <div className="font-semibold text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HowItWorksSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">How It Works</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Three Steps. Five Minutes. <span className="text-primary">Audit-Ready.</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          No enterprise sales cycle. No implementation project. No security team required.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Connect',
              time: '30 seconds',
              desc: 'OAuth integration with Google Workspace, Microsoft 365, or Slack. Read-only access — we never see email or document content.',
              icon: MonitorSmartphone,
            },
            {
              step: '02',
              title: 'Scan',
              time: '2–3 minutes',
              desc: 'Check against 500+ known AI tools. Detection via OAuth registry, browser extensions, API call patterns, and third-party integrations.',
              icon: Target,
            },
            {
              step: '03',
              title: 'Report',
              time: 'Instant',
              desc: 'One-click PDF: full tool list with risk levels (RAG), compliance status per framework, remediation steps, executive summary.',
              icon: FileText,
            },
          ].map(({ step, title, time, desc, icon: Icon }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`rounded-xl p-8 ${i === 1 ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'}`}
            >
              <div className={`font-mono text-sm ${i === 1 ? 'opacity-70' : 'text-muted-foreground'}`}>Step {step}</div>
              <div className="flex items-center gap-3 mt-3 mb-2">
                <Icon className={`w-6 h-6 ${i === 1 ? 'text-primary-foreground' : 'text-primary'}`} />
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>
              <div className={`text-sm font-mono mb-3 ${i === 1 ? 'opacity-70' : 'text-primary'}`}>{time}</div>
              <p className={`text-sm leading-relaxed ${i === 1 ? 'opacity-90' : 'text-muted-foreground'}`}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TractionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Traction & Proof</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          The Market is <span className="text-primary">Already Asking</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { value: '500+', label: 'SMBs scanned in beta' },
            { value: '18', label: 'Avg AI tools found per company' },
            { value: '61%', label: 'Tools with no DPA' },
            { value: '68', label: 'NPS score' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="font-mono text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="font-semibold mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              Search Trend Growth
            </div>
            <div className="space-y-3">
              {[
                { term: '"shadow AI detection"', growth: '+890%' },
                { term: '"GDPR AI compliance"', growth: '+340%' },
                { term: '"what AI tools are employees using"', growth: '+1,200%' },
              ].map((item) => (
                <div key={item.term} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.term}</span>
                  <span className="font-mono text-sm font-bold text-risk-low">{item.growth}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="font-semibold mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Community Demand
            </div>
            <div className="space-y-3">
              {[
                { source: 'r/msp', detail: '10+ compliance posts/week about shadow AI' },
                { source: 'r/sysadmin', detail: '"What AI are employees using?" gets 200+ comments' },
                { source: 'r/gdpr', detail: 'IT managers asking how to audit AI for GDPR' },
              ].map((item) => (
                <div key={item.source} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-primary bg-primary/10 rounded px-2 py-0.5 shrink-0">{item.source}</span>
                  <span className="text-sm text-muted-foreground">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BusinessModelSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Business Model</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          SaaS with Clear Path to <span className="text-primary">$1M+ ARR</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-1">Starter</h3>
            <div className="text-3xl font-bold mb-1">$199<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-1.5 text-sm text-muted-foreground mt-4">
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Up to 50 employees</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Google Workspace</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> GDPR preset</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> 1 admin seat</li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-6 relative">
            <span className="absolute -top-3 left-6 bg-risk-medium text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <h3 className="font-semibold mb-1">Growth</h3>
            <div className="text-3xl font-bold mb-1">$349<span className="text-base font-normal opacity-70">/mo</span></div>
            <ul className="space-y-1.5 text-sm opacity-90 mt-4">
              <li className="flex items-center gap-2"><span className="text-amber-300">•</span> Up to 200 employees</li>
              <li className="flex items-center gap-2"><span className="text-amber-300">•</span> All integrations</li>
              <li className="flex items-center gap-2"><span className="text-amber-300">•</span> GDPR + HIPAA + SOX</li>
              <li className="flex items-center gap-2"><span className="text-amber-300">•</span> 3 admin seats</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-1">Scale</h3>
            <div className="text-3xl font-bold mb-1">$499<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-1.5 text-sm text-muted-foreground mt-4">
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Up to 500 employees</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Custom rules</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> MSP reseller rights</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> 10 admin seats</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { value: '28:1', label: 'LTV:CAC' },
            { value: '$150', label: 'Target CAC' },
            { value: '~85%', label: 'Gross Margin' },
            { value: '$4,188', label: 'LTV (Growth)' },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-mono text-2xl font-bold text-primary">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CompetitionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Crosshair className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Competition</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          The Gap No One Has Filled
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          No purpose-built, self-serve, SMB-priced tool for shadow AI detection and compliance.
        </p>

        <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                <th className="text-center p-4 font-medium text-muted-foreground">Darktrace</th>
                <th className="text-center p-4 font-medium text-muted-foreground">Lasso</th>
                <th className="text-center p-4 font-medium text-muted-foreground">CloudEagle</th>
                <th className="text-center p-4 font-medium text-primary font-bold">Stack Breach</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'SMB Pricing', darktrace: false, lasso: false, cloudeagle: false, us: true },
                { feature: 'Self-Serve', darktrace: false, lasso: false, cloudeagle: false, us: true },
                { feature: 'Shadow AI Focus', darktrace: false, lasso: true, cloudeagle: false, us: true },
                { feature: 'Audit-Ready PDF', darktrace: false, lasso: false, cloudeagle: false, us: true },
                { feature: 'No Security Team', darktrace: false, lasso: false, cloudeagle: false, us: true },
              ].map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="text-center p-4">{row.darktrace ? <span className="text-risk-low">✅</span> : <span className="text-risk-high">❌</span>}</td>
                  <td className="text-center p-4">{row.lasso ? <span className="text-risk-low">✅</span> : <span className="text-risk-high">❌</span>}</td>
                  <td className="text-center p-4">{row.cloudeagle ? <span className="text-risk-low">✅</span> : <span className="text-risk-high">❌</span>}</td>
                  <td className="text-center p-4 bg-primary/5"><span className="text-risk-low">✅</span></td>
                </tr>
              ))}
              <tr className="bg-muted/30">
                <td className="p-4 font-medium">Price</td>
                <td className="text-center p-4 font-mono text-sm">$50K+/yr</td>
                <td className="text-center p-4 font-mono text-sm">Enterprise</td>
                <td className="text-center p-4 font-mono text-sm">$10K+/yr</td>
                <td className="text-center p-4 font-mono text-sm font-bold text-primary bg-primary/5">$199/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
          <p className="text-lg font-medium">
            &ldquo;We are not Darktrace for SMBs. We are the compliance tool IT managers actually have time to use.&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}

function GTMSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Go-to-Market</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Launch Sequence
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              phase: 'Week 1',
              title: 'Community Seeding',
              items: ['ProductHunt launch (Tuesday)', 'Reddit: r/msp, r/sysadmin, r/gdpr', 'HackerNews Show HN', 'LinkedIn announcement'],
              accent: false,
            },
            {
              phase: 'Week 2–4',
              title: 'Content + Outreach',
              items: ['MSP cold outreach (key multiplier)', 'Blog: "10 Shadow AI Tools Found in SMBs"', 'Email nurture for trial signups', 'Twitter/X daily posts'],
              accent: true,
            },
            {
              phase: 'Month 2–3',
              title: 'Scale Winners',
              items: ['AppSumo listing', 'PPC: Google Ads $500–1K/mo', 'Affiliate program (20% commission)', 'Case studies from first 10 customers'],
              accent: false,
            },
          ].map(({ phase, title, items, accent }) => (
            <div key={phase} className={`rounded-xl p-6 ${accent ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'}`}>
              <div className={`font-mono text-sm ${accent ? 'opacity-70' : 'text-muted-foreground'}`}>{phase}</div>
              <h3 className="text-xl font-bold mt-1 mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${accent ? 'opacity-90' : 'text-muted-foreground'}`}>
                    <ArrowRight className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${accent ? 'text-primary-foreground' : 'text-primary'}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl p-6">
          <div className="font-semibold text-sm mb-3">Distribution Advantage</div>
          <p className="text-sm text-muted-foreground">
            IT managers share tools in tight communities (r/msp, Spiceworks). One MSP posting about Stack Breach reaches 50–200 SMB IT managers. 
            Viral coefficient is built into the audience.
          </p>
        </div>
      </div>
    </div>
  )
}

function TeamSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Team & Ask</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Built by <span className="text-primary">ChimeStream B.V.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          A Rotterdam-based product studio building compliance and operations tools for SMBs. We ship from idea to live in under 7 days.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="font-semibold mb-3">Track Record</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-risk-low" /> Multiple SaaS products shipped and live</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-risk-low" /> Deep experience in B2B compliance tooling</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-risk-low" /> AI-native development (idea to MVP in 5 days)</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <div className="font-semibold mb-4">What We&apos;re Looking For</div>
            <p className="text-sm opacity-80 mb-4">Not investment. Distribution partnerships.</p>
            <ul className="space-y-3 text-sm">
              {[
                { title: 'MSP Partners', desc: 'White-label, Scale tier, commission' },
                { title: 'Compliance Consultants', desc: 'Recommend to SMB clients' },
                { title: 'IT Community Influencers', desc: '20% recurring commission' },
                { title: 'Press/Media', desc: '"First SMB-priced shadow AI compliance tool"' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">{item.title}</span>
                    <span className="opacity-70"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@stackbreach.com</span>
          <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> stackbreach.ashketing.com</span>
        </div>
      </div>
    </div>
  )
}

function WhyNowSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </span>
          <span className="text-sm uppercase tracking-widest opacity-70 font-medium">Why Now</span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">
          The Compliance Window Is Closing
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { date: 'Feb 2025', event: 'Prohibited AI practices banned', status: 'DONE' },
            { date: 'Aug 2025', event: 'GPAI model obligations', status: 'ACTIVE' },
            { date: 'Aug 2026', event: 'Full enforcement for high-risk AI', status: 'COMING' },
          ].map((item) => (
            <div key={item.date} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="font-mono text-sm opacity-70">{item.date}</div>
              <div className="text-lg font-semibold mt-2 mb-2">{item.event}</div>
              <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                item.status === 'DONE' ? 'bg-risk-low/20 text-green-300' :
                item.status === 'ACTIVE' ? 'bg-risk-medium/20 text-amber-300' :
                'bg-risk-high/20 text-red-300'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl font-medium opacity-90 max-w-3xl">
          Every month you wait, your employees adopt more AI tools without oversight. 
          The audit is coming — and the only question is whether you&apos;ll be ready.
        </p>
      </div>
    </div>
  )
}

function VisionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(46,91,232,0.08),transparent_60%)]" />
      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-16 h-16 text-primary mx-auto mb-8" />
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            From Detection to <span className="text-primary">Governance</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Stack Breach starts as the tool that finds shadow AI. It becomes the platform that governs it — 
            automated policy enforcement, continuous monitoring, and compliance-as-code for every SMB.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              'Automated Policy Enforcement',
              'Continuous Monitoring',
              'Compliance-as-Code',
              'AI Risk Scoring API',
            ].map((item) => (
              <span key={item} className="bg-primary/5 text-primary border border-primary/20 rounded-full px-5 py-2 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold">stackbreach.ashketing.com</span>
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── Main Pitch Deck ─── */

const slides = [
  { id: 1, label: 'Title', component: <TitleSlide /> },
  { id: 2, label: 'Problem', component: <ProblemSlide /> },
  { id: 3, label: 'Solution', component: <SolutionSlide /> },
  { id: 4, label: 'Market', component: <MarketSlide /> },
  { id: 5, label: 'How It Works', component: <HowItWorksSlide /> },
  { id: 6, label: 'Traction', component: <TractionSlide /> },
  { id: 7, label: 'Business Model', component: <BusinessModelSlide /> },
  { id: 8, label: 'Competition', component: <CompetitionSlide /> },
  { id: 9, label: 'GTM', component: <GTMSlide /> },
  { id: 10, label: 'Team & Ask', component: <TeamSlide /> },
  { id: 11, label: 'Why Now', component: <WhyNowSlide /> },
  { id: 12, label: 'Vision', component: <VisionSlide /> },
]

export default function PitchDeck() {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goNext = useCallback(() => setCurrent(c => Math.min(c + 1, slides.length - 1)), [])
  const goPrev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      if (e.key === 'Escape') setCurrent(0)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  return (
    <div
      className="h-screen w-screen overflow-hidden relative select-none"
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return
        const diff = touchStart - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) {
          if (diff > 0) goNext()
          else goPrev()
        }
        setTouchStart(null)
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="h-full w-full"
        >
          {slides[current].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {current > 0 && (
        <button
          onClick={goPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {current < slides.length - 1 && (
        <button
          onClick={goNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 border border-border backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Progress dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-card/80 border border-border backdrop-blur-sm rounded-full px-4 py-2 z-50">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? 'w-6 h-2 bg-primary'
                : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            title={s.label}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="fixed top-6 right-6 font-mono text-sm text-muted-foreground bg-card/80 border border-border backdrop-blur-sm rounded-full px-3 py-1 z-50">
        {current + 1} / {slides.length}
      </div>

      {/* Back to site */}
      <Link
        href="/"
        className="fixed top-6 left-6 flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground bg-card/80 border border-border backdrop-blur-sm rounded-full px-3 py-1 z-50 transition-colors"
      >
        <Shield className="w-4 h-4 text-primary" />
        <span>Stack Breach</span>
      </Link>
    </div>
  )
}
