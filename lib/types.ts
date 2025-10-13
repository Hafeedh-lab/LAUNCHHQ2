export type Industry =
  | 'retail_storefront'
  | 'ecommerce'
  | 'services_agency'
  | 'trades'
  | 'saas'
  | 'nonprofit'

export type TeamSize = 'solo' | '2-5' | '6-10' | '11-30' | '31+'

export type RevenueBand = '<250k' | '250k-1m' | '1m-5m' | '>5m'

export type Province =
  | 'AB'
  | 'BC'
  | 'MB'
  | 'NB'
  | 'NL'
  | 'NS'
  | 'NT'
  | 'NU'
  | 'ON'
  | 'PE'
  | 'QC'
  | 'SK'
  | 'YT'

export type ToolCategory =
  | 'accounting'
  | 'payroll'
  | 'pos_ecom'
  | 'crm'
  | 'inventory'
  | 'payments'
  | 'collaboration'
  | 'automation'

export type Tool = {
  id: string
  name: string
  category: ToolCategory
  canadaReady: boolean
  bilingual: boolean
  provinces?: Province[]
}

export type Pain =
  | 'receipt_chaos'
  | 'slow_invoicing'
  | 'abandoned_invoices'
  | 'duplicate_entry'
  | 'inventory_mismatch'
  | 'payroll_errors'
  | 'no_kpi_visibility'
  | 'manual_quotes_to_invoices'
  | 'customer_faqs'
  | 'month_end_delays'

export interface WizardData {
  industry: Industry
  teamSize: TeamSize
  revenueBand: RevenueBand
  province: Province
  bilingualQC: boolean
  currentTools: Record<ToolCategory, string[]>
  topPains: Pain[]
  csvUploaded: boolean
  csvFileId?: string
  csvSummary?: {
    rowCount: number
    columns: string[]
    dateRange?: { start: string; end: string }
  }
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  processMaturity?: 'ad-hoc' | 'documented' | 'optimized'
  automationGoals?: string
  budgetComfort?: 'lean' | 'balanced' | 'all-in'
}

export interface ToolRecommendation {
  tool: Tool
  rationale: string
  action: 'add' | 'keep' | 'replace' | 'consider'
  replaces?: string
  priority: 'must' | 'should' | 'nice'
}

export interface IntegrationNode {
  id: string
  label: string
  type: 'tool' | 'data' | 'process'
  toolId?: string
}

export interface IntegrationEdge {
  from: string
  to: string
  label?: string
  bidirectional?: boolean
}

export interface IntegrationMap {
  nodes: IntegrationNode[]
  edges: IntegrationEdge[]
  mermaidCode: string
  svgRendered: string
}

export interface QuickWin {
  id: string
  title: string
  description: string
  steps: string[]
  estimatedHoursSavedPerMonth: number
  risks: string[]
  notes: string[]
  toolsInvolved: string[]
  priority: 1 | 2 | 3
}

export interface BudgetEstimate {
  saas: {
    low: number
    avg: number
    high: number
    breakdown: { category: string; range: string }[]
  }
  implementation: {
    low: number
    high: number
    assumptions: string[]
  }
  paybackMonths: {
    low: number
    avg: number
    high: number
  }
  assumptions: string[]
}

export interface ChecklistItem {
  week: 1 | 2 | 3 | 4
  task: string
  owner: 'founder' | 'ops' | 'bookkeeper' | 'launch_hq'
  estimated: string
}

export interface Recommendation {
  stack: ToolRecommendation[]
  integrationMap: IntegrationMap
  quickWins: QuickWin[]
  budget: BudgetEstimate
  checklist: ChecklistItem[]
  generatedAt: string
}

export interface LeadCapture {
  email: string
  company: string
  name?: string
  consent: boolean
  consentTimestamp: string
}

export interface LeadScore {
  overall: number
  breakdown: {
    teamSize: number
    revenueBand: number
    toolGaps: number
    painsSeverity: number
    provinceComplexity: number
    csvProvided: number
  }
  segment: 'hot' | 'warm' | 'cold'
  reasoning: string[]
}

export interface Lead extends LeadCapture {
  id: string
  submissionId: string
  score: LeadScore
  crmId?: string
  owner?: string
  bookingUrl?: string
  bookingCompleted: boolean
  createdAt: string
  updatedAt: string
}

export interface SubmissionEvent {
  type:
    | 'wizard_started'
    | 'step_completed'
    | 'csv_uploaded'
    | 'wizard_completed'
    | 'gate_submitted'
    | 'pdf_generated'
    | 'pdf_downloaded'
    | 'email_sent'
    | 'calendar_opened'
    | 'booking_confirmed'
    | 'crm_synced'
  timestamp: string
  metadata?: Record<string, any>
}

export interface Submission {
  id: string
  wizardData: WizardData
  recommendation: Recommendation
  lead?: Lead
  pdfUrl?: string
  pdfGeneratedAt?: string
  events: SubmissionEvent[]
  createdAt: string
  updatedAt: string
}

export interface EmailSequence {
  submissionId: string
  leadId: string
  emails: {
    day: 0 | 1 | 4 | 7
    template: string
    sent: boolean
    sentAt?: string
    opened: boolean
    clicked: boolean
  }[]
}

export interface ContentBlock {
  id: string
  key: string
  type: 'text' | 'markdown' | 'html'
  content: string
  version: number
  updatedBy: string
  updatedAt: string
}

export interface SubmissionFilter {
  dateRange?: { start: Date; end: Date }
  segment?: 'hot' | 'warm' | 'cold'
  industry?: Industry
  province?: Province
  minScore?: number
  maxScore?: number
  hasBooking?: boolean
}
