import type { Recommendation, WizardData } from '@/lib/types'
import { generateRecommendations } from './rules-engine'
import { generateIntegrationMap } from './integration-mapper'
import { generateQuickWins } from '@/lib/ai/quick-wins-generator'
import { estimateBudget } from '@/lib/ai/roi-calculator'

export async function buildRecommendation(data: WizardData): Promise<Recommendation> {
  const stack = generateRecommendations(data)
  const integrationMap = await generateIntegrationMap(data, stack)
  const quickWins = await generateQuickWins(data, stack)
  const budget = estimateBudget(data, stack)
  const checklist = buildChecklist()

  return {
    stack,
    integrationMap,
    quickWins,
    budget,
    checklist,
    generatedAt: new Date().toISOString(),
  }
}

function buildChecklist() {
  return [
    { week: 1 as const, task: 'Kick-off with Launch HQ and align success metrics', owner: 'founder', estimated: '1 hour' },
    { week: 1 as const, task: 'Connect accounting + commerce systems', owner: 'bookkeeper', estimated: '2 hours' },
    { week: 2 as const, task: 'Activate payroll-to-GL automation', owner: 'ops', estimated: '3 hours' },
    { week: 2 as const, task: 'Draft bilingual reminder templates', owner: 'launch_hq', estimated: '1 hour' },
    { week: 3 as const, task: 'Run pilot of quick wins and track savings', owner: 'ops', estimated: '4 hours' },
    { week: 4 as const, task: 'Executive review & scale roadmap', owner: 'founder', estimated: '2 hours' },
  ]
}
