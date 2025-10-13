import type { WizardData, ToolRecommendation } from '@/lib/types'
import { getToolById } from '@/config/tools'

export function generateRecommendations(data: WizardData): ToolRecommendation[] {
  const recommendations: ToolRecommendation[] = []

  recommendations.push(...recommendAccounting(data))
  recommendations.push(...recommendPayroll(data))
  recommendations.push(...recommendPOSEcom(data))
  recommendations.push(...recommendCRM(data))
  recommendations.push(...recommendInventory(data))
  recommendations.push(...recommendPayments(data))
  recommendations.push(...recommendCollaboration(data))
  recommendations.push(...recommendAutomation(data))

  return recommendations
}

function recommendAccounting(data: WizardData): ToolRecommendation[] {
  const currentAccounting = data.currentTools.accounting || []
  const items: ToolRecommendation[] = []

  if (currentAccounting.includes('qbo')) {
    const tool = getToolById('qbo')!
    items.push({
      tool,
      rationale: 'QuickBooks Online is bilingual, CRA-ready, and supports Canadian payroll integrations.',
      action: 'keep',
      priority: 'must',
    })
    return items
  }

  if (data.province === 'QC' || data.bilingualQC) {
    const tool = getToolById('qbo')!
    items.push({
      tool,
      rationale: 'Quebec operations benefit from QBO’s QST handling and bilingual interface.',
      action: currentAccounting.length ? 'replace' : 'add',
      priority: 'must',
    })
    return items
  }

  if (currentAccounting.includes('xero')) {
    const tool = getToolById('xero')!
    items.push({
      tool,
      rationale: 'Xero works well for Canadian SMBs outside of Quebec with bank feeds and GST/HST support.',
      action: 'keep',
      priority: 'must',
    })
    return items
  }

  const defaultTool = getToolById('qbo')!
  items.push({
    tool: defaultTool,
    rationale: 'QuickBooks Online is the most widely supported accounting platform for Canadian SMEs.',
    action: 'add',
    priority: 'must',
  })

  return items
}

function recommendPayroll(data: WizardData): ToolRecommendation[] {
  const items: ToolRecommendation[] = []
  const currentPayroll = data.currentTools.payroll || []
  const currentAccounting = data.currentTools.accounting || []

  if (currentPayroll.length === 0 && data.teamSize !== 'solo') {
    const tool = currentAccounting.includes('qbo') ? getToolById('qb_payroll')! : getToolById('wagepoint')!
    items.push({
      tool,
      rationale:
        tool.id === 'qb_payroll'
          ? 'QuickBooks Payroll keeps CRA remittances and ROEs synced directly with your books.'
          : 'Wagepoint is built in Canada with bilingual payslips and automated CRA remittances.',
      action: 'add',
      priority: 'must',
    })
  } else if (currentPayroll.length > 0) {
    const tool = getToolById(currentPayroll[0])
    if (tool) {
      items.push({
        tool,
        rationale: 'Your payroll platform already supports Canadian tax filings—ensure pay runs sync with accounting.',
        action: 'keep',
        priority: 'must',
      })
    }
  }

  return items
}

function recommendPOSEcom(data: WizardData): ToolRecommendation[] {
  const items: ToolRecommendation[] = []
  const current = data.currentTools.pos_ecom || []

  if (data.industry === 'retail_storefront' && !current.includes('square')) {
    const tool = getToolById('square')!
    items.push({
      tool,
      rationale: 'Square provides bilingual POS hardware and easy GST/HST configuration for brick-and-mortar teams.',
      action: current.length ? 'consider' : 'add',
      priority: 'must',
    })
  }

  if (data.industry === 'ecommerce' && !current.includes('shopify')) {
    const tool = getToolById('shopify')!
    items.push({
      tool,
      rationale: 'Shopify is Canada-headquartered with integrated payments, duties, and bilingual storefronts.',
      action: current.length ? 'consider' : 'add',
      priority: 'must',
    })
  }

  if (current.length > 0) {
    const tool = getToolById(current[0])
    if (tool) {
      items.push({
        tool,
        rationale: 'Maintain your existing commerce stack—ensure daily syncs into accounting.',
        action: 'keep',
        priority: 'must',
      })
    }
  }

  return dedupe(items)
}

function recommendCRM(data: WizardData): ToolRecommendation[] {
  const items: ToolRecommendation[] = []
  const current = data.currentTools.crm || []

  if ((data.industry === 'services_agency' || data.industry === 'saas') && current.length === 0) {
    const tool = ['1m-5m', '>5m'].includes(data.revenueBand) ? getToolById('hubspot')! : getToolById('pipedrive')!
    items.push({
      tool,
      rationale:
        tool.id === 'hubspot'
          ? 'HubSpot automates quote-to-cash and supports bilingual landing pages.'
          : 'Pipedrive is lightweight, affordable, and integrates with QBO via Zapier.',
      action: 'add',
      priority: 'should',
    })
  }

  if (current.length > 0) {
    const tool = getToolById(current[0])
    if (tool) {
      items.push({
        tool,
        rationale: 'Keep your CRM but align pipeline stages with invoicing automation.',
        action: 'keep',
        priority: 'should',
      })
    }
  }

  return dedupe(items)
}

function recommendInventory(data: WizardData): ToolRecommendation[] {
  if (
    ['retail_storefront', 'ecommerce'].includes(data.industry) &&
    data.topPains.includes('inventory_mismatch') &&
    (data.currentTools.inventory || []).length === 0
  ) {
    const tool = getToolById('cin7')!
    return [
      {
        tool,
        rationale: 'Cin7 unifies inventory across Shopify, POS, and accounting with landed cost tracking for Canada.',
        action: 'add',
        priority: 'should',
      },
    ]
  }
  return []
}

function recommendPayments(data: WizardData): ToolRecommendation[] {
  const current = data.currentTools.payments || []
  const items: ToolRecommendation[] = []

  if (current.length === 0) {
    const tool = ['ecommerce', 'saas'].includes(data.industry) ? getToolById('stripe')! : getToolById('moneris')!
    items.push({
      tool,
      rationale:
        tool.id === 'stripe'
          ? 'Stripe handles CAD + USD billing, subscription tax, and bilingual invoices.'
          : 'Moneris offers Canadian settlement, bilingual terminals, and next-day funding.',
      action: 'add',
      priority: 'must',
    })
  } else {
    const tool = getToolById(current[0])
    if (tool) {
      items.push({
        tool,
        rationale: 'Leverage your existing payment processor—ensure payout data lands in accounting weekly.',
        action: 'keep',
        priority: 'must',
      })
    }
  }

  return items
}

function recommendCollaboration(data: WizardData): ToolRecommendation[] {
  const current = data.currentTools.collaboration || []
  if (current.length === 0) {
    const tool = getToolById('google_workspace')!
    return [
      {
        tool,
        rationale: 'Google Workspace keeps bilingual docs, shared drives, and security policies centralized.',
        action: 'add',
        priority: 'nice',
      },
    ]
  }
  const tool = getToolById(current[0])
  return tool
    ? [
        {
          tool,
          rationale: 'Keep your collaboration stack and layer in automation for approvals.',
          action: 'keep',
          priority: 'nice',
        },
      ]
    : []
}

function recommendAutomation(data: WizardData): ToolRecommendation[] {
  const current = data.currentTools.automation || []
  if (current.length > 0) {
    const tool = getToolById(current[0])
    return tool
      ? [
          {
            tool,
            rationale: 'Expand automations across finance and customer workflows to reduce duplicate entry.',
            action: 'keep',
            priority: 'should',
          },
        ]
      : []
  }

  if (data.topPains.includes('duplicate_entry') || data.topPains.includes('manual_quotes_to_invoices')) {
    const tool = getToolById('zapier')!
    return [
      {
        tool,
        rationale: 'Zapier connects your CRM, Shopify, and QuickBooks to eliminate re-keying and automate notifications.',
        action: 'add',
        priority: 'should',
      },
    ]
  }

  return []
}

function dedupe(recommendations: ToolRecommendation[]): ToolRecommendation[] {
  const seen = new Map<string, ToolRecommendation>()
  for (const rec of recommendations) {
    if (!seen.has(rec.tool.id)) {
      seen.set(rec.tool.id, rec)
    }
  }
  return Array.from(seen.values())
}
