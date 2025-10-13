import { calculateLeadScore } from '@/lib/scoring/lead-score'
import { defaultWizardValues } from '@/lib/validation/schemas'

describe('calculateLeadScore', () => {
  it('returns expected structure', () => {
    const score = calculateLeadScore(defaultWizardValues)
    expect(score.segment).toBeDefined()
    expect(score.overall).toBeGreaterThan(0)
  })
})
