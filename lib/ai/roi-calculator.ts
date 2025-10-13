import type { BudgetEstimate, WizardData, ToolRecommendation } from '@/lib/types'
import { formatCurrency } from '@/lib/utils'

export function estimateBudget(
  data: WizardData,
  recommendations: ToolRecommendation[]
): BudgetEstimate {
  const baseSaas = 350 + recommendations.length * 25
  const implementationLow = data.csvUploaded ? 4500 : 3200
  const implementationHigh = implementationLow + 2500

  return {
    saas: {
      low: Math.round(baseSaas * 0.9),
      avg: Math.round(baseSaas),
      high: Math.round(baseSaas * 1.2),
      breakdown: [
        { category: 'Core stack', range: `${formatCurrency(200)} - ${formatCurrency(320)}` },
        { category: 'Automation', range: `${formatCurrency(90)} - ${formatCurrency(160)}` },
      ],
    },
    implementation: {
      low: implementationLow,
      high: implementationHigh,
      assumptions: [
        'Includes discovery, configuration, and bilingual training.',
        'Excludes sales tax; assumes remote delivery.',
      ],
    },
    paybackMonths: {
      low: 4,
      avg: 6,
      high: 9,
    },
    assumptions: [
      'Quick wins reclaim 12-18 hours/month of founder or ops time.',
      'Improved collections lift cash flow by 5-7% within 90 days.',
      'Lead scoring increases rep focus on hot deals by 30%.',
    ],
  }
}
