import type { WizardData, LeadScore } from '@/lib/types'
import { getProvinceComplexityScore } from '@/config/provinces'

export function calculateLeadScore(data: WizardData): LeadScore {
  const breakdown = {
    teamSize: scoreTeamSize(data.teamSize),
    revenueBand: scoreRevenueBand(data.revenueBand),
    toolGaps: scoreToolGaps(data),
    painsSeverity: scorePainsSeverity(data.topPains),
    provinceComplexity: getProvinceComplexityScore(data.province),
    csvProvided: data.csvUploaded ? 10 : 0,
  }

  const overall = Math.min(100, Object.values(breakdown).reduce((sum, value) => sum + value, 0))

  const segment = overall >= 70 ? 'hot' : overall >= 50 ? 'warm' : 'cold'

  return {
    overall,
    breakdown,
    segment,
    reasoning: buildReasoning(breakdown, data),
  }
}

function scoreTeamSize(teamSize: WizardData['teamSize']) {
  const map: Record<WizardData['teamSize'], number> = {
    solo: 2,
    '2-5': 5,
    '6-10': 8,
    '11-30': 10,
    '31+': 10,
  }
  return map[teamSize]
}

function scoreRevenueBand(revenueBand: WizardData['revenueBand']) {
  const map: Record<WizardData['revenueBand'], number> = {
    '<250k': 3,
    '250k-1m': 6,
    '1m-5m': 10,
    '>5m': 10,
  }
  return map[revenueBand]
}

function scoreToolGaps(data: WizardData) {
  let score = 0

  if (data.currentTools.accounting.length === 0) score += 6
  if (data.teamSize !== 'solo' && data.currentTools.payroll.length === 0) score += 6
  if (['retail_storefront', 'ecommerce'].includes(data.industry) && data.currentTools.pos_ecom.length === 0) score += 4
  if (data.topPains.includes('duplicate_entry') && data.currentTools.automation.length === 0) score += 4
  if (['services_agency', 'saas'].includes(data.industry) && data.currentTools.crm.length === 0) score += 2
  if (data.topPains.includes('inventory_mismatch') && data.currentTools.inventory.length === 0) score += 2

  return Math.min(30, score)
}

function scorePainsSeverity(pains: WizardData['topPains']) {
  const weights: Record<WizardData['topPains'][number], number> = {
    payroll_errors: 12,
    duplicate_entry: 10,
    no_kpi_visibility: 10,
    abandoned_invoices: 8,
    month_end_delays: 8,
    inventory_mismatch: 7,
    manual_quotes_to_invoices: 6,
    slow_invoicing: 5,
    receipt_chaos: 4,
    customer_faqs: 3,
  }

  return Math.min(30, pains.reduce((total, pain) => total + (weights[pain] ?? 0), 0))
}

function buildReasoning(breakdown: LeadScore['breakdown'], data: WizardData) {
  const reasons: string[] = []
  if (breakdown.teamSize >= 8) reasons.push(`Team size ${data.teamSize} signals scaling needs.`)
  if (breakdown.revenueBand >= 10) reasons.push(`Revenue ${data.revenueBand} indicates budget capacity.`)
  if (breakdown.toolGaps >= 10) reasons.push('Tool gaps reveal multiple implementation opportunities.')
  if (breakdown.painsSeverity >= 20) reasons.push('Critical pains require rapid intervention.')
  if (breakdown.provinceComplexity === 10) reasons.push(`${data.province} complexity needs localized expertise.`)
  if (breakdown.csvProvided === 10) reasons.push('CSV upload shows strong buying intent.')
  return reasons
}
