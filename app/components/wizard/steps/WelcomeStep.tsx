'use client'

import StepNavigation from '../StepNavigation'
import type { WizardStepComponentProps } from '../WizardShell'

export default function WelcomeStep({ onNext, isLast, onBack, isFirst }: WizardStepComponentProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl bg-gradient-brand-subtle p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Stack Flight Plan Overview</p>
        <h3 className="mt-3 font-display text-3xl font-bold text-ink">Your 7-minute path to an automation blueprint</h3>
        <p className="mt-3 text-neutral-600">
          Share how your business operates across 10 focused questions. We&apos;ll generate Canada-ready tool recommendations, three automation quick wins, a Mermaid integration map, and a branded PDF ready for internal buy-in.
        </p>
        <ul className="mt-6 grid gap-3 text-sm text-neutral-600 md:grid-cols-2">
          <li className="rounded-2xl border border-white bg-white/70 px-4 py-3 shadow-card">
            🇨🇦 Built for CRA compliance, bilingual workflows, and provincial nuances.
          </li>
          <li className="rounded-2xl border border-white bg-white/70 px-4 py-3 shadow-card">
            ⚙️ Includes ROI estimates, lead scoring, and a four-touch follow-up sequence.
          </li>
          <li className="rounded-2xl border border-white bg-white/70 px-4 py-3 shadow-card">
            🔐 PIPEDA compliant with explicit consent captured before we unlock results.
          </li>
          <li className="rounded-2xl border border-white bg-white/70 px-4 py-3 shadow-card">
            📄 Download a beautifully branded PDF within 10 seconds of completion.
          </li>
        </ul>
      </div>
      <StepNavigation onBack={onBack} onNext={onNext} isFirst={isFirst} isLast={isLast} nextLabel="Let&apos;s begin" />
    </div>
  )
}
