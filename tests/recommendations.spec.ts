import { generateRecommendations } from '@/lib/recommendations/rules-engine'
import { defaultWizardValues } from '@/lib/validation/schemas'

describe('generateRecommendations', () => {
  it('includes accounting recommendations', () => {
    const results = generateRecommendations(defaultWizardValues)
    const accounting = results.find(rec => rec.tool.category === 'accounting')
    expect(accounting).toBeDefined()
  })
})
