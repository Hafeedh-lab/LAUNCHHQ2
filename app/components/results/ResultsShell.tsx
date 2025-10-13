import RecommendedStack from './RecommendedStack'
import IntegrationMap from './IntegrationMap'
import QuickWins from './QuickWins'
import BudgetROI from './BudgetROI'
import PilotChecklist from './PilotChecklist'
import BookingCTA from './BookingCTA'
import type { Recommendation, WizardData } from '@/lib/types'
import { buildRecommendation } from '@/lib/recommendations/stack-builder'
import { defaultWizardValues } from '@/lib/validation/schemas'
import { calculateLeadScore } from '@/lib/scoring'

async function loadData(submissionId: string): Promise<{ data: WizardData; recommendation: Recommendation }> {
  const wizardData: WizardData = {
    ...defaultWizardValues,
    utmCampaign: 'preview',
  }
  const recommendation = await buildRecommendation(wizardData)
  return { data: wizardData, recommendation }
}

export default async function ResultsShell({ submissionId }: { submissionId: string }) {
  const { data, recommendation } = await loadData(submissionId)
  const score = calculateLeadScore(data)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12">
      <header className="rounded-3xl bg-gradient-brand p-10 text-white shadow-wizard">
        <p className="text-sm uppercase tracking-[0.2em] text-white/80">Stack Flight Plan™</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">Automation blueprint ready to deploy</h1>
        <p className="mt-4 max-w-2xl text-base text-white/80">
          Here&apos;s the mix of tools, automations, and integration priorities Launch HQ recommends for Canadian founders with a similar profile. Tailor it further in the admin dashboard.
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm">
          <div className="rounded-2xl bg-white/10 px-4 py-3">
            Lead score: <span className="font-semibold">{score.overall}</span> ({score.segment.toUpperCase()})
          </div>
          <div className="rounded-2xl bg-white/10 px-4 py-3">
            Province: {data.province} • Revenue: {data.revenueBand}
          </div>
        </div>
      </header>
      <RecommendedStack items={recommendation.stack} />
      <IntegrationMap map={recommendation.integrationMap} />
      <QuickWins quickWins={recommendation.quickWins} />
      <BudgetROI budget={recommendation.budget} />
      <PilotChecklist checklist={recommendation.checklist} />
      <BookingCTA score={score} />
    </div>
  )
}
