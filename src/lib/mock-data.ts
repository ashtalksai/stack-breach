export type RiskLevel = "high" | "medium" | "low"

export interface DetectedTool {
  id: string
  name: string
  category: string
  risk: RiskLevel
  employees: number
  status: "active" | "flagged" | "approved" | "blocked"
  firstSeen: string
  dataExposure: string
  description: string
}

export interface ComplianceFramework {
  name: string
  status: "compliant" | "at-risk" | "non-compliant"
  score: number
}

export interface ScanResult {
  id: string
  date: string
  toolsFound: number
  highRisk: number
  mediumRisk: number
  lowRisk: number
  duration: string
}

export const mockTools: DetectedTool[] = [
  {
    id: "1",
    name: "ChatGPT",
    category: "AI Assistant",
    risk: "high",
    employees: 47,
    status: "flagged",
    firstSeen: "2024-01-15",
    dataExposure: "Customer data, internal docs",
    description: "OpenAI's conversational AI. Employees paste customer data into prompts.",
  },
  {
    id: "2",
    name: "Midjourney",
    category: "Image Generation",
    risk: "medium",
    employees: 12,
    status: "active",
    firstSeen: "2024-02-20",
    dataExposure: "Brand assets, product designs",
    description: "AI image generator. Marketing team uses for brand assets.",
  },
  {
    id: "3",
    name: "GitHub Copilot",
    category: "Code Assistant",
    risk: "high",
    employees: 23,
    status: "flagged",
    firstSeen: "2024-01-08",
    dataExposure: "Source code, API keys",
    description: "AI code completion. Sends code context to GitHub servers.",
  },
  {
    id: "4",
    name: "Grammarly AI",
    category: "Writing Assistant",
    risk: "medium",
    employees: 89,
    status: "approved",
    firstSeen: "2023-11-01",
    dataExposure: "Email content, documents",
    description: "AI writing assistant. Processes email and document content.",
  },
  {
    id: "5",
    name: "Notion AI",
    category: "Productivity",
    risk: "low",
    employees: 34,
    status: "approved",
    firstSeen: "2024-03-01",
    dataExposure: "Internal wikis, notes",
    description: "AI features in Notion workspace. Company-approved tool.",
  },
  {
    id: "6",
    name: "Otter.ai",
    category: "Transcription",
    risk: "high",
    employees: 8,
    status: "flagged",
    firstSeen: "2024-04-10",
    dataExposure: "Meeting recordings, confidential discussions",
    description: "AI meeting transcription. Records and processes meeting audio.",
  },
  {
    id: "7",
    name: "Jasper AI",
    category: "Content Generation",
    risk: "medium",
    employees: 6,
    status: "active",
    firstSeen: "2024-05-15",
    dataExposure: "Marketing copy, strategy docs",
    description: "AI content platform used by marketing for blog posts.",
  },
  {
    id: "8",
    name: "Perplexity AI",
    category: "Research",
    risk: "low",
    employees: 19,
    status: "active",
    firstSeen: "2024-06-01",
    dataExposure: "Search queries",
    description: "AI-powered search. Used for research queries.",
  },
  {
    id: "9",
    name: "Claude",
    category: "AI Assistant",
    risk: "medium",
    employees: 15,
    status: "active",
    firstSeen: "2024-03-20",
    dataExposure: "Documents, analysis requests",
    description: "Anthropic's AI assistant. Used for document analysis.",
  },
  {
    id: "10",
    name: "Cursor",
    category: "Code Editor",
    risk: "high",
    employees: 11,
    status: "flagged",
    firstSeen: "2024-07-01",
    dataExposure: "Full codebase access",
    description: "AI-powered code editor. Has access to entire codebase.",
  },
]

export const mockFrameworks: ComplianceFramework[] = [
  { name: "GDPR", status: "at-risk", score: 62 },
  { name: "HIPAA", status: "non-compliant", score: 34 },
  { name: "SOX", status: "compliant", score: 88 },
]

export const mockScans: ScanResult[] = [
  {
    id: "1",
    date: "2024-12-15",
    toolsFound: 10,
    highRisk: 4,
    mediumRisk: 4,
    lowRisk: 2,
    duration: "2m 14s",
  },
  {
    id: "2",
    date: "2024-12-01",
    toolsFound: 8,
    highRisk: 3,
    mediumRisk: 3,
    lowRisk: 2,
    duration: "1m 58s",
  },
  {
    id: "3",
    date: "2024-11-15",
    toolsFound: 6,
    highRisk: 2,
    mediumRisk: 2,
    lowRisk: 2,
    duration: "1m 42s",
  },
]

export const riskScore = 67
export const totalEmployees = 156
export const totalTools = 10
export const highRiskCount = 4

export const testimonials = [
  {
    quote: "Stack Breach found 12 AI tools our team was using that IT had no idea about. The audit report saved us weeks of manual work.",
    author: "Sarah Chen",
    role: "IT Director",
    company: "Meridian Health Group",
  },
  {
    quote: "We went from zero visibility on shadow AI to a complete compliance report in under 5 minutes. Our auditors were impressed.",
    author: "Marcus Torres",
    role: "Operations Lead",
    company: "Atlas Financial Services",
  },
  {
    quote: "As an MSP, I use Stack Breach across all my client environments. One tool to manage AI compliance for 15 different companies.",
    author: "David Park",
    role: "Managing Partner",
    company: "NorthBridge IT Solutions",
  },
]

export const pricingPlans = [
  {
    name: "Starter",
    price: 199,
    annualPrice: 159,
    description: "For small teams getting started with AI compliance",
    features: [
      "Up to 50 employees",
      "Google Workspace integration",
      "GDPR compliance preset",
      "Monthly scan schedule",
      "PDF audit reports",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: 349,
    annualPrice: 279,
    description: "For growing companies with multiple compliance needs",
    features: [
      "Up to 200 employees",
      "All integrations (Google, Microsoft 365, Slack)",
      "GDPR + HIPAA + SOX presets",
      "Weekly scan schedule",
      "Custom rule engine",
      "Priority support",
      "Team sharing",
      "White-label reports",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Scale",
    price: 499,
    annualPrice: 399,
    description: "For larger organizations with advanced requirements",
    features: [
      "Up to 500 employees",
      "All integrations + custom connectors",
      "All compliance presets + custom rules",
      "Daily scan schedule",
      "API access",
      "Dedicated account manager",
      "SSO/SAML",
      "Custom reporting",
      "MSP multi-tenant",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export const faqs = [
  {
    question: "What data does Stack Breach actually scan?",
    answer: "Stack Breach scans OAuth metadata and API access logs — not email content, documents, or files. We detect which AI tools have been authorized and are being used, without ever reading your actual data.",
  },
  {
    question: "How is this different from Darktrace or other enterprise tools?",
    answer: "Enterprise tools like Darktrace cost $50K-$200K/year and require a dedicated security team. Stack Breach is built for IT managers at SMBs — self-serve setup in 5 minutes, audit-ready reports, and pricing that makes sense for companies under 500 employees.",
  },
  {
    question: "Which compliance frameworks do you support?",
    answer: "We support GDPR, HIPAA, and SOX out of the box with pre-configured rule presets. Growth and Scale plans include custom rule engines for additional frameworks.",
  },
  {
    question: "Do I need compliance expertise to use Stack Breach?",
    answer: "No. Stack Breach translates technical findings into plain-English reports designed for auditors. Your risk score tells you instantly if there's a problem, and each flagged tool includes specific remediation steps.",
  },
  {
    question: "How do you handle our data?",
    answer: "We follow a zero-trust approach. We only access OAuth metadata (never content), encrypt everything in transit and at rest, and you can request a DPA (Data Processing Agreement) for GDPR compliance.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes — 14 days, no credit card required. Connect your first integration and run your first scan in under 5 minutes.",
  },
  {
    question: "Can MSPs use Stack Breach for multiple clients?",
    answer: "Absolutely. Our Scale plan includes MSP multi-tenant support — manage AI compliance across all your client environments from a single dashboard.",
  },
]
