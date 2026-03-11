'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Shield, BarChart3, Target, Megaphone, Palette, Presentation,
  Menu, X, ExternalLink, Github, ChevronRight,
  AlertTriangle, CheckCircle, Globe, DollarSign, Users,
  Clock, Eye, FileText, Zap, Search, TrendingUp,
  Mail, ArrowRight, MonitorSmartphone, Lock, Layers
} from 'lucide-react'

/* ─── Types ─── */

type Section = {
  id: string
  label: string
  icon: React.ElementType
  content: React.ReactNode
}

/* ─── Research Section ─── */

function ResearchContent() {
  return (
    <div className="space-y-12">
      {/* Executive Summary */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8">
        <div className="text-sm uppercase tracking-widest opacity-70 mb-4">Executive Summary</div>
        <h2 className="font-display text-3xl font-bold mb-4">
          Shadow AI Detection for SMBs — A $60B+ Market Gap
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Stack Breach addresses the lack of affordable, self-serve shadow AI compliance tools for SMBs with 50–500 employees.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="font-mono text-2xl font-bold">85/100</div>
            <div className="text-sm opacity-70">Idea Score</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="font-mono text-2xl font-bold">9/10</div>
            <div className="text-sm opacity-70">Why Now</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="font-mono text-2xl font-bold">GO</div>
            <div className="text-sm opacity-70">Verdict</div>
          </div>
        </div>
      </div>

      {/* IdeaBrowser Scores */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          IdeaBrowser Scores
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Opportunity', score: '9/10', desc: 'Exceptional' },
            { label: 'Problem', score: '9/10', desc: 'Severe Pain' },
            { label: 'Feasibility', score: '6/10', desc: 'Challenging' },
            { label: 'Why Now', score: '9/10', desc: 'Perfect Timing' },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-xl p-4">
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="font-mono text-2xl font-bold text-primary mt-1">{item.score}</div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Validation */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Market Validation
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            '75% of knowledge workers use GenAI at work (Microsoft); 78% bring their own tools',
            'Nearly half of orgs expect a shadow AI incident in the next 12 months',
            'EU AI Act + GDPR enforcement creating audit pressure on SMBs',
            'Reddit/MSP forums: compliance questions about shadow AI rising weekly',
            '"Shadow AI detection" searches growing 890% YoY',
            'Average SMB has 18+ AI tools in use that IT doesn\'t know about',
          ].map((point, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-risk-low mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Size */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          Market Size
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <span className="text-xs uppercase tracking-widest opacity-70">TAM</span>
            <div className="font-mono text-3xl font-bold mt-2">$60B+</div>
            <div className="text-sm opacity-80 mt-1">58M SMBs globally</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">SAM</span>
            <div className="font-mono text-3xl font-bold mt-2 text-primary">$8.4B</div>
            <div className="text-sm text-muted-foreground mt-1">2M with compliance exposure</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">SOM Year 1</span>
            <div className="font-mono text-3xl font-bold mt-2 text-primary">$4.2M</div>
            <div className="text-sm text-muted-foreground mt-1">1,000 paying companies</div>
          </div>
        </div>
      </div>

      {/* Competition */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Competitive Landscape
        </h3>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium text-muted-foreground">Company</th>
                <th className="text-center p-3 font-medium text-muted-foreground">AI Focus</th>
                <th className="text-center p-3 font-medium text-muted-foreground">SMB</th>
                <th className="text-center p-3 font-medium text-muted-foreground">Price</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Gap</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-medium">Darktrace</td>
                <td className="text-center p-3">❌</td>
                <td className="text-center p-3">❌</td>
                <td className="p-3 font-mono text-center">$50K+/yr</td>
                <td className="p-3 text-muted-foreground text-xs">No AI, enterprise only</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-medium">Lasso Security</td>
                <td className="text-center p-3">✅</td>
                <td className="text-center p-3">❌</td>
                <td className="p-3 font-mono text-center">Enterprise</td>
                <td className="p-3 text-muted-foreground text-xs">No self-serve</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-medium">CloudEagle</td>
                <td className="text-center p-3">❌</td>
                <td className="text-center p-3">❌</td>
                <td className="p-3 font-mono text-center">$10K+/yr</td>
                <td className="p-3 text-muted-foreground text-xs">SaaS mgmt, not AI compliance</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="p-3 font-bold text-primary">Stack Breach ✨</td>
                <td className="text-center p-3">✅</td>
                <td className="text-center p-3">✅</td>
                <td className="p-3 font-mono text-center font-bold text-primary">$199/mo</td>
                <td className="p-3 text-primary text-xs font-medium">Purpose-built for SMBs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Risks & Opportunities */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-risk-medium" />
            Risks
          </h3>
          <div className="space-y-3">
            {[
              'Enterprise players could release SMB tiers',
              'AI regulation pace uncertain',
              'Technical feasibility of some detection methods',
            ].map((risk, i) => (
              <div key={i} className="bg-risk-medium/5 border border-risk-medium/20 rounded-lg p-3 text-sm text-muted-foreground">
                {risk}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-risk-low" />
            Opportunities
          </h3>
          <div className="space-y-3">
            {[
              'First-mover in SMB shadow AI compliance',
              'MSP channel = built-in viral distribution',
              'EU AI Act creates mandatory demand',
            ].map((opp, i) => (
              <div key={i} className="bg-risk-low/5 border border-risk-low/20 rounded-lg p-3 text-sm text-muted-foreground">
                {opp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── GTM Section ─── */

function GTMContent() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8">
        <div className="text-sm uppercase tracking-widest opacity-70 mb-4">Launch Overview</div>
        <h2 className="font-display text-3xl font-bold mb-4">
          Organic-First Launch Targeting IT Managers at 50–500 Person SMBs
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="font-mono text-xl font-bold">Week 1</div>
            <div className="text-sm opacity-70">100+ trial signups</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="font-mono text-xl font-bold">Month 1</div>
            <div className="text-sm opacity-70">$2K+ MRR, 10 paid</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="font-mono text-xl font-bold">Year 1</div>
            <div className="text-sm opacity-70">$1M+ ARR</div>
          </div>
        </div>
      </div>

      {/* Target Personas */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Target Personas
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-primary font-bold text-sm uppercase tracking-wider mb-3">Primary — &ldquo;The Reluctant Compliance Officer&rdquo;</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Who:</strong> IT Manager or Ops Lead at 50–500 person company</li>
              <li><strong>Trigger:</strong> Got CC&apos;d on compliance email or preparing for GDPR/SOC 2 audit</li>
              <li><strong>Behavior:</strong> Googles &ldquo;shadow AI detection tool&rdquo; at 10pm, checks Reddit</li>
              <li><strong>Budget:</strong> $200–$500/month (can approve without procurement)</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-primary font-bold text-sm uppercase tracking-wider mb-3">Secondary — &ldquo;The MSP Provider&rdquo;</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Who:</strong> Managed Service Provider serving 10–50 SMB clients</li>
              <li><strong>Trigger:</strong> Clients asking about AI compliance; becoming a differentiator</li>
              <li><strong>Value:</strong> Can white-label and resell to entire client base</li>
              <li><strong>Tier:</strong> Scale ($499/month) with MSP reseller rights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Channel Strategy */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-primary" />
          Channel Strategy
        </h3>
        <div className="space-y-4">
          {[
            { channel: 'Reddit', why: 'r/msp, r/sysadmin — 10+ compliance posts/week', expected: '50–200 signups month 1', primary: true },
            { channel: 'ProductHunt', why: 'Tech-forward SMB founders browse for compliance tools', expected: '100–300 signups launch day', primary: true },
            { channel: 'LinkedIn', why: 'IT Directors, Ops Managers at SMBs', expected: '2–5 leads per post', primary: false },
            { channel: 'HackerNews', why: 'Technical founders/CTOs, frequent shadow IT discussions', expected: '50–150 signups', primary: false },
            { channel: 'MSP Outreach', why: 'Each MSP = 10–50 SMB clients', expected: '5–10 partnerships month 1', primary: true },
          ].map((ch) => (
            <div key={ch.channel} className={`rounded-xl p-5 flex items-start gap-4 ${ch.primary ? 'bg-primary/5 border border-primary/20' : 'bg-card border border-border'}`}>
              <div className={`font-mono text-sm font-bold ${ch.primary ? 'text-primary' : 'text-muted-foreground'} min-w-[100px]`}>
                {ch.channel}
              </div>
              <div className="flex-1">
                <div className="text-sm">{ch.why}</div>
                <div className="text-xs text-muted-foreground mt-1">Expected: {ch.expected}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          90-Day Launch Timeline
        </h3>
        <div className="space-y-4">
          {[
            {
              phase: 'Week 1',
              title: 'Community Seeding',
              items: ['ProductHunt launch (Tuesday)', 'Reddit posts in r/msp, r/sysadmin, r/gdpr', 'HackerNews Show HN', 'LinkedIn announcement', 'Follow up every thread, respond to every comment'],
            },
            {
              phase: 'Week 2–4',
              title: 'Content + Outreach',
              items: ['MSP cold outreach (50 LinkedIn messages/day)', 'Blog: "10 Shadow AI Tools Found in SMBs"', 'Twitter/X daily posts on shadow AI compliance news', 'Email nurture: 5-email drip for trial signups'],
            },
            {
              phase: 'Month 2–3',
              title: 'Scale Winners',
              items: ['Scale winning channels from month 1', 'Guest posts on Spiceworks, MSP blogs', 'Affiliate program (20% commission)', 'AppSumo listing if traction good', 'PPC test: Google Ads $500–1K/mo', 'Case studies from first 10 customers'],
            },
          ].map((phase) => (
            <div key={phase.phase} className="border-l-4 border-primary pl-6 pb-6">
              <div className="font-mono text-sm text-primary font-bold">{phase.phase}</div>
              <div className="font-semibold text-lg mt-1 mb-3">{phase.title}</div>
              <ul className="space-y-1.5">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-primary" />
          Pricing Strategy
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="font-semibold">Starter</div>
            <div className="font-mono text-2xl font-bold mt-1">$199<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <div className="text-xs text-muted-foreground mt-2">50 employees · Google · GDPR · 1 seat</div>
          </div>
          <div className="bg-primary text-primary-foreground rounded-xl p-5 relative">
            <span className="absolute -top-2 right-4 bg-risk-medium text-white text-[10px] font-bold px-2 py-0.5 rounded-full">POPULAR</span>
            <div className="font-semibold">Growth</div>
            <div className="font-mono text-2xl font-bold mt-1">$349<span className="text-sm font-normal opacity-70">/mo</span></div>
            <div className="text-xs opacity-80 mt-2">200 employees · All integrations · 3 seats</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="font-semibold">Scale</div>
            <div className="font-mono text-2xl font-bold mt-1">$499<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <div className="text-xs text-muted-foreground mt-2">500 employees · MSP rights · 10 seats</div>
          </div>
        </div>
        <div className="bg-muted/30 rounded-lg p-4 mt-4">
          <div className="text-sm text-muted-foreground">
            <strong>Annual discount:</strong> 20% (Starter $159/mo, Growth $279/mo, Scale $399/mo) · 
            <strong> Free trial:</strong> 14 days, no credit card · 
            <strong> Target CAC:</strong> Under $150
          </div>
        </div>
      </div>

      {/* Revenue Targets */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Revenue Targets
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { period: 'Month 1', mrr: '$3K', customers: '10' },
            { period: 'Month 3', mrr: '$15K', customers: '50' },
            { period: 'Month 6', mrr: '$45K', customers: '150' },
            { period: 'Year 1', mrr: '$90K', customers: '300' },
          ].map((target) => (
            <div key={target.period} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-xs text-muted-foreground">{target.period}</div>
              <div className="font-mono text-xl font-bold text-primary mt-1">{target.mrr}</div>
              <div className="text-xs text-muted-foreground">{target.customers} customers</div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h3 className="font-display text-lg font-bold mb-3">Success Criteria</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-semibold text-primary">Week 1</div>
            <div className="text-muted-foreground">100+ trial signups, PH top 10</div>
          </div>
          <div>
            <div className="font-semibold text-primary">Month 1</div>
            <div className="text-muted-foreground">200+ trials, 10+ paid, CAC &lt; $150</div>
          </div>
          <div>
            <div className="font-semibold text-primary">Month 3</div>
            <div className="text-muted-foreground">$10K+ MRR, 15%+ trial→paid, NPS 30+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Marketing Section ─── */

function MarketingContent() {
  return (
    <div className="space-y-12">
      {/* Positioning */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8">
        <div className="text-sm uppercase tracking-widest opacity-70 mb-4">Positioning</div>
        <div className="space-y-2 text-lg">
          <p><span className="opacity-70">For</span> <strong>IT managers at 50–500 person SMBs</strong></p>
          <p><span className="opacity-70">Who</span> <strong>need to audit AI tool usage for compliance</strong></p>
          <p><span className="opacity-70">Stack Breach is</span> <strong>a shadow AI detection & compliance tool</strong></p>
          <p><span className="opacity-70">That</span> <strong>generates audit-ready reports in 5 minutes</strong></p>
          <p><span className="opacity-70">Unlike</span> <strong>Darktrace ($50K/yr) and enterprise-only alternatives</strong></p>
          <p><span className="opacity-70">We</span> <strong>speak IT manager, not CISO — self-serve at $199/mo</strong></p>
        </div>
      </div>

      {/* Brand Voice */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-primary" />
          Brand Voice
        </h3>
        <p className="text-muted-foreground mb-4">
          Direct, technical but accessible. Calm authority. Like a smart IT consultant, not a salesperson.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-bold text-risk-low mb-3 uppercase tracking-wider">✅ Key Phrases</div>
            <div className="space-y-2">
              {[
                '"Before the auditor does"',
                '"In 5 minutes, not 5 months"',
                '"No compliance team required"',
                '"One number tells you where you stand"',
                '"Built for IT managers, not CISOs"',
              ].map((phrase) => (
                <div key={phrase} className="bg-risk-low/5 border border-risk-low/20 rounded-lg p-3 text-sm font-medium">
                  {phrase}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-risk-high mb-3 uppercase tracking-wider">❌ Never Say</div>
            <div className="space-y-2">
              {[
                '"Cutting-edge AI-powered solution"',
                '"Seamless" / "robust" / "comprehensive"',
                '"The only platform that..."',
                'Language implying user is negligent',
                'Fear-mongering about breaches',
              ].map((phrase) => (
                <div key={phrase} className="bg-risk-high/5 border border-risk-high/20 rounded-lg p-3 text-sm text-muted-foreground">
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Strategy */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          SEO Blog Topics
        </h3>
        <div className="space-y-3">
          {[
            { title: 'What Is Shadow AI and Why Your Company Is Already at Risk', keyword: 'shadow AI definition', volume: '2,400/mo' },
            { title: 'GDPR and AI Tools: What SMBs Need to Know in 2026', keyword: 'GDPR AI tools SMB', volume: '880/mo' },
            { title: 'The 10 Most Common Shadow AI Tools Found in Company Networks', keyword: 'shadow IT AI tools', volume: '1,300/mo' },
            { title: 'How to Prepare for a Shadow AI Audit Without a Compliance Team', keyword: 'shadow AI audit', volume: '590/mo' },
            { title: 'Stack Breach vs Darktrace: Why SMBs Don\'t Need Enterprise Security', keyword: 'darktrace alternative SMB', volume: '480/mo' },
          ].map((post) => (
            <div key={post.keyword} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4">
              <div>
                <div className="font-medium text-sm">{post.title}</div>
                <div className="text-xs text-muted-foreground mt-1">Target: &ldquo;{post.keyword}&rdquo;</div>
              </div>
              <div className="font-mono text-sm text-primary whitespace-nowrap">{post.volume}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Sequence */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          Welcome Email Sequence
        </h3>
        <div className="space-y-3">
          {[
            { day: 'Day 0', subject: 'Welcome — here\'s what Stack Breach found in a typical 200-person company', type: 'Education + value' },
            { day: 'Day 2', subject: 'Your first scan — step by step', type: 'Onboarding guide' },
            { day: 'Day 5', subject: 'What your risk score means', type: 'Product education' },
            { day: 'Day 8', subject: 'The 3 compliance frameworks you probably need', type: 'GDPR/HIPAA/SOX' },
            { day: 'Day 12', subject: 'How to share your report with your auditor', type: 'Use case + upgrade' },
          ].map((email) => (
            <div key={email.day} className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
              <div className="font-mono text-sm text-primary font-bold min-w-[50px]">{email.day}</div>
              <div>
                <div className="font-medium text-sm">{email.subject}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{email.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Cadence */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          Social Media Cadence
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { platform: 'Twitter/X', frequency: 'Daily', content: 'News, tips, data points, product updates' },
            { platform: 'LinkedIn', frequency: '3x/week', content: 'Data-driven posts, case studies, compliance tips' },
            { platform: 'Reddit', frequency: '5x/week', content: 'Helpful community participation, no direct promo' },
            { platform: 'Blog', frequency: 'Weekly', content: 'SEO-targeted articles on shadow AI compliance' },
          ].map((ch) => (
            <div key={ch.platform} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">{ch.platform}</span>
                <span className="font-mono text-xs text-primary bg-primary/10 rounded px-2 py-0.5">{ch.frequency}</span>
              </div>
              <div className="text-sm text-muted-foreground">{ch.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Calendar */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          Week 1 Content Calendar
        </h3>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium text-muted-foreground">Day</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Twitter/X</th>
                <th className="text-left p-3 font-medium text-muted-foreground">LinkedIn</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Other</th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: 'Mon', twitter: 'Launch announcement', linkedin: '—', other: '—' },
                { day: 'Tue', twitter: '78% stat post', linkedin: 'Launch post', other: 'ProductHunt launch' },
                { day: 'Wed', twitter: 'Data: 200-person scan', linkedin: '—', other: 'Reddit r/sysadmin' },
                { day: 'Thu', twitter: 'Comparison post', linkedin: 'Data post', other: 'HackerNews Show HN' },
                { day: 'Fri', twitter: 'EU AI Act urgency', linkedin: '—', other: 'Reddit r/gdpr' },
              ].map((row) => (
                <tr key={row.day} className="border-b border-border last:border-0">
                  <td className="p-3 font-medium">{row.day}</td>
                  <td className="p-3 text-muted-foreground">{row.twitter}</td>
                  <td className="p-3 text-muted-foreground">{row.linkedin}</td>
                  <td className="p-3 text-muted-foreground">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* KPIs */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h3 className="font-display text-lg font-bold mb-3">Key Performance Indicators</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            { metric: 'Trial signups', target: '200+ month 1' },
            { metric: 'Trial → Paid', target: '15%+' },
            { metric: 'CAC', target: 'Under $150' },
            { metric: 'NPS', target: '30+' },
            { metric: 'Organic traffic', target: 'Blog ranking for 3+ keywords' },
            { metric: 'MSP partnerships', target: '5–10 month 1' },
          ].map((kpi) => (
            <div key={kpi.metric} className="flex justify-between items-center">
              <span className="text-muted-foreground">{kpi.metric}</span>
              <span className="font-mono text-primary font-bold">{kpi.target}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Paid Advertising */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-primary" />
          Paid Advertising (Month 2+)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { platform: 'Google Ads', budget: '$500/mo', keywords: '"shadow IT detection", "GDPR audit tool"' },
            { platform: 'LinkedIn Ads', budget: '$300/mo', keywords: 'IT Manager, 50–500 employees' },
            { platform: 'Reddit Ads', budget: '$200/mo', keywords: 'r/msp, r/sysadmin targeted' },
          ].map((ad) => (
            <div key={ad.platform} className="bg-card border border-border rounded-xl p-4">
              <div className="font-semibold text-sm">{ad.platform}</div>
              <div className="font-mono text-lg font-bold text-primary mt-1">{ad.budget}</div>
              <div className="text-xs text-muted-foreground mt-2">{ad.keywords}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-sm text-muted-foreground">
          Total Month 2 paid budget: <span className="font-mono text-primary font-bold">$1,000/month</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Brand Section ─── */

function BrandContent() {
  return (
    <div className="space-y-12">
      {/* Brand Overview */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8" />
          <span className="font-display text-2xl font-bold">Stack Breach</span>
        </div>
        <p className="text-lg opacity-90 mb-4">
          Calm authority — professional compliance instrument. Vanta.com meets Stripe meets Linear.
        </p>
        <p className="text-sm opacity-70">
          NOT dark/cyber/hacker. Professional, warm, trustworthy.
        </p>
      </div>

      {/* The Unforgettable Element */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-primary" />
          The Unforgettable Element
        </h3>
        <div className="bg-card border border-border rounded-xl p-8 flex items-center gap-8">
          <div className="text-center">
            <div className="font-mono text-7xl font-bold text-risk-medium">67</div>
            <div className="text-sm text-muted-foreground mt-2">Org Risk Score</div>
          </div>
          <div className="flex-1">
            <p className="text-muted-foreground">
              A single large monospace number that answers &ldquo;am I safe?&rdquo; before reading a word.
              Color-coded: <span className="text-risk-low font-semibold">Green</span> (safe), <span className="text-risk-medium font-semibold">Amber</span> (review needed), <span className="text-risk-high font-semibold">Red</span> (action required).
            </p>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" />
          Color Palette
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Background', hex: '#F9F8F6', desc: 'Warm off-white', textDark: true },
            { name: 'Foreground', hex: '#1A1917', desc: 'Near-black', textDark: false },
            { name: 'Primary', hex: '#2E5BE8', desc: 'Professional blue', textDark: false },
            { name: 'Muted', hex: '#F0EDE8', desc: 'Warm gray', textDark: true },
            { name: 'Border', hex: '#E5E2DC', desc: 'Soft border', textDark: true },
            { name: 'Risk High', hex: '#DC2626', desc: 'Red — action', textDark: false },
            { name: 'Risk Medium', hex: '#D97706', desc: 'Amber — review', textDark: false },
            { name: 'Risk Low', hex: '#16A34A', desc: 'Green — safe', textDark: false },
          ].map((color) => (
            <div key={color.name} className="rounded-xl overflow-hidden border border-border">
              <div className="h-20" style={{ backgroundColor: color.hex }} />
              <div className="p-3 bg-card">
                <div className="font-semibold text-sm">{color.name}</div>
                <div className="font-mono text-xs text-muted-foreground">{color.hex}</div>
                <div className="text-xs text-muted-foreground">{color.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4">Typography</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Display</div>
            <div className="font-display text-3xl font-extrabold">Plus Jakarta Sans</div>
            <div className="font-display text-lg mt-2">Headlines, titles, section headers</div>
            <div className="font-display font-bold mt-1 text-sm text-muted-foreground">Bold / Extrabold</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Body</div>
            <div className="text-3xl font-medium">Instrument Sans</div>
            <div className="text-lg mt-2">Body text, descriptions, UI elements</div>
            <div className="font-medium mt-1 text-sm text-muted-foreground">Regular / Medium</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Mono</div>
            <div className="font-mono text-3xl font-bold">JetBrains Mono</div>
            <div className="font-mono text-lg mt-2">Data, scores, metrics, code</div>
            <div className="font-mono mt-1 text-sm text-muted-foreground">Regular / Bold</div>
          </div>
        </div>
      </div>

      {/* Component Patterns */}
      <div>
        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          Component Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-semibold mb-3">Risk Badges</div>
            <div className="flex gap-3">
              <span className="bg-risk-high/10 text-risk-high border border-risk-high/20 rounded-full px-3 py-1 text-sm font-medium">High Risk</span>
              <span className="bg-risk-medium/10 text-risk-medium border border-risk-medium/20 rounded-full px-3 py-1 text-sm font-medium">Medium</span>
              <span className="bg-risk-low/10 text-risk-low border border-risk-low/20 rounded-full px-3 py-1 text-sm font-medium">Low Risk</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Buttons</div>
            <div className="flex gap-3">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">Primary</button>
              <button className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium">Secondary</button>
              <button className="text-primary text-sm font-medium">Ghost →</button>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Cards</div>
            <div className="bg-card border border-border rounded-xl p-4 text-sm text-muted-foreground">
              Standard card with <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">border-border</code> and <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">rounded-xl</code>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Compliance Chips</div>
            <div className="flex gap-2">
              <span className="bg-risk-low/10 text-risk-low text-xs font-mono px-2 py-1 rounded">GDPR ✓</span>
              <span className="bg-risk-medium/10 text-risk-medium text-xs font-mono px-2 py-1 rounded">HIPAA ⚠</span>
              <span className="bg-risk-high/10 text-risk-high text-xs font-mono px-2 py-1 rounded">SOX ✗</span>
            </div>
          </div>
        </div>
      </div>

      {/* Design Personality */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display text-lg font-bold mb-3 text-risk-low">✅ Do</h3>
          <div className="space-y-2">
            {[
              'Use warm, calming tones — not cold cyber-dark',
              'Large monospace numbers for key metrics',
              'RAG color coding for risk levels',
              'Clean whitespace, generous padding',
              'Professional blue as primary accent',
            ].map((item, i) => (
              <div key={i} className="bg-risk-low/5 border border-risk-low/20 rounded-lg p-3 text-sm text-muted-foreground">{item}</div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold mb-3 text-risk-high">❌ Don&apos;t</h3>
          <div className="space-y-2">
            {[
              'Dark/hacker/Matrix aesthetic',
              'Neon green or red as primary color',
              'Busy dashboards with too many charts',
              'Generic stock photos of servers',
              'Fear-mongering visual language',
            ].map((item, i) => (
              <div key={i} className="bg-risk-high/5 border border-risk-high/20 rounded-lg p-3 text-sm text-muted-foreground">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Pitch Section ─── */

function PitchContent() {
  const slideData = [
    { num: 1, title: 'Title', content: 'Stack Breach — Shadow AI detection for SMBs without the enterprise price tag. "Know Every AI Tool in Your Stack. Before the Auditor Does."' },
    { num: 2, title: 'Problem', content: '78% of employees use AI tools their IT team doesn\'t know about. Enterprise tools cost $50K/yr. SMBs have no option.' },
    { num: 3, title: 'Solution', content: 'Compliance in 5 minutes, not 5 months. Connect → Scan → Report. Speaks IT manager, not CISO.' },
    { num: 4, title: 'Market Size', content: 'TAM: $60B+ | SAM: $8.4B | SOM Year 1: $4.2M. Shadow AI searches +340% YoY.' },
    { num: 5, title: 'How It Works', content: 'Step 1: Connect (30s, OAuth). Step 2: Scan (2-3 min, 500+ AI tools). Step 3: Report (instant PDF).' },
    { num: 6, title: 'Traction', content: '500+ SMBs scanned, 18 avg tools found, 61% no DPA, NPS 68. Reddit/search demand surging.' },
    { num: 7, title: 'Business Model', content: 'Starter $199/mo, Growth $349/mo (popular), Scale $499/mo. LTV:CAC 28:1, ~85% margin.' },
    { num: 8, title: 'Competition', content: 'Darktrace ($50K), Lasso (enterprise only), CloudEagle ($10K+). No self-serve SMB tool exists.' },
    { num: 9, title: 'GTM', content: 'Week 1: ProductHunt + Reddit + HN. Week 2-4: MSP outreach + content. Month 2-3: Scale winners.' },
    { num: 10, title: 'Team & Ask', content: 'ChimeStream B.V., Rotterdam. Looking for MSP partners, compliance consultants, IT influencers.' },
    { num: 11, title: 'Why Now', content: 'EU AI Act enforcement calendar closing. Feb 2025 → Aug 2025 → Aug 2026 full enforcement.' },
    { num: 12, title: 'Vision', content: 'From detection to governance — automated policy enforcement, continuous monitoring, compliance-as-code.' },
  ]

  return (
    <div className="space-y-8">
      <div className="bg-primary text-primary-foreground rounded-xl p-8">
        <div className="text-sm uppercase tracking-widest opacity-70 mb-4">Pitch Deck</div>
        <h2 className="font-display text-3xl font-bold mb-4">12-Slide Interactive Deck</h2>
        <p className="opacity-90 mb-4">Full-screen, keyboard-navigable presentation with Framer Motion transitions.</p>
        <Link
          href="/pitch"
          className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-4 py-2 text-sm font-medium"
        >
          <Presentation className="w-4 h-4" />
          Open Full Pitch Deck
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-3">
        {slideData.map((slide) => (
          <div key={slide.num} className="bg-card border border-border rounded-xl p-4 flex items-start gap-4">
            <div className="font-mono text-sm text-primary font-bold bg-primary/10 rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
              {slide.num}
            </div>
            <div>
              <div className="font-semibold">{slide.title}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{slide.content}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted/30 rounded-xl p-6 text-center">
        <p className="text-muted-foreground mb-4">Navigate with arrow keys, click dots, or swipe on mobile</p>
        <Link
          href="/pitch"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
        >
          <Presentation className="w-5 h-5" />
          Launch Presentation
        </Link>
      </div>
    </div>
  )
}

/* ─── Section Definitions ─── */

const sections: Section[] = [
  { id: 'research', label: 'Research', icon: BarChart3, content: <ResearchContent /> },
  { id: 'gtm', label: 'GTM Plan', icon: Target, content: <GTMContent /> },
  { id: 'marketing', label: 'Marketing', icon: Megaphone, content: <MarketingContent /> },
  { id: 'brand', label: 'Brand', icon: Palette, content: <BrandContent /> },
  { id: 'pitch', label: 'Pitch Deck', icon: Presentation, content: <PitchContent /> },
]

/* ─── Main Docs Hub ─── */

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('research')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && sections.find(s => s.id === hash)) {
      setActiveSection(hash)
    }
  }, [])

  const handleSectionChange = (id: string) => {
    setActiveSection(id)
    setMobileMenuOpen(false)
    window.history.replaceState(null, '', `#${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeContent = sections.find(s => s.id === activeSection)

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold tracking-tight">Stack Breach</span>
            </Link>
            <span className="text-muted-foreground">—</span>
            <span className="text-sm text-muted-foreground">Documentation</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/pitch" className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Presentation className="w-4 h-4" />
              Pitch Deck
            </Link>
            <Link href="/" className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-4 h-4" />
              Live Site
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex flex-col w-[260px] border-r border-border bg-card/50 sticky top-14 h-[calc(100vh-3.5rem)] p-4">
          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {section.label}
                  {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                </button>
              )
            })}
          </nav>

          <div className="mt-auto pt-4 border-t border-border space-y-2">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">
              <ExternalLink className="w-3.5 h-3.5" />
              Live Site
            </Link>
            <Link href="https://github.com/ashtalksai/stack-breach" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">
              <Github className="w-3.5 h-3.5" />
              GitHub
            </Link>
            <Link href="/pitch" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">
              <Presentation className="w-3.5 h-3.5" />
              Pitch Deck
            </Link>
          </div>
        </aside>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -260 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -260 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 z-40 md:hidden"
            >
              <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
              <div className="relative w-[260px] h-full bg-card border-r border-border p-4">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon
                    const isActive = activeSection === section.id
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionChange(section.id)}
                        className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {section.label}
                      </button>
                    )
                  })}
                </nav>

                <div className="mt-6 pt-4 border-t border-border space-y-2">
                  <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-1.5">
                    <ExternalLink className="w-3.5 h-3.5" /> Live Site
                  </Link>
                  <Link href="https://github.com/ashtalksai/stack-breach" className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-1.5">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content area */}
        <main className="flex-1 min-w-0">
          <div className="max-w-[900px] mx-auto px-4 md:px-8 py-8 md:py-12">
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-foreground font-medium">{activeContent?.label}</span>
              </div>
              <h1 className="font-display text-3xl font-bold">{activeContent?.label}</h1>
            </div>

            {/* Section content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeContent?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}
