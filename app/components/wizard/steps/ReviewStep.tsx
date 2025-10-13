'use client'

import { useFormContext } from 'react-hook-form'
import StepNavigation from '../StepNavigation'
import type { WizardStepComponentProps } from '../WizardShell'
import type { WizardData } from '@/lib/types'
import { toTitleCase } from '@/lib/utils'

export default function ReviewStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  const { getValues } = useFormContext<WizardData>()
  const values = getValues()

  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600">
        Quick confirmation before we crunch the numbers. You can always go back to make tweaks if something looks off.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">Company basics</h4>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            <li>Industry: {toTitleCase(values.industry)}</li>
            <li>Team size: {values.teamSize}</li>
            <li>Revenue band: {values.revenueBand}</li>
            <li>Province: {values.province}</li>
            <li>Bilingual requirement: {values.bilingualQC ? 'Yes' : 'No'}</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">Top pains</h4>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            {values.topPains.map(pain => (
              <li key={pain}>{toTitleCase(pain)}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card md:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">Current tools</h4>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            {Object.entries(values.currentTools).map(([category, toolIds]) => (
              <div key={category} className="rounded-xl bg-neutral-50 p-3 text-sm text-neutral-700">
                <p className="font-semibold text-neutral-600">{toTitleCase(category)}</p>
                <p className="mt-1 text-xs text-neutral-500">{toolIds.length > 0 ? toolIds.join(', ') : 'None listed'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StepNavigation onBack={onBack} onNext={onNext} isFirst={isFirst} isLast={isLast} />
    </div>
  )
}
