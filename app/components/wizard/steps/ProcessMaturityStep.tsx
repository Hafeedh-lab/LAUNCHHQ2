'use client'

import { useFormContext } from 'react-hook-form'
import StepNavigation from '../StepNavigation'
import type { WizardStepComponentProps } from '../WizardShell'
import type { WizardData } from '@/lib/types'

const maturityOptions = [
  {
    value: 'ad-hoc',
    title: 'Ad-hoc',
    description: 'Processes live in people’s heads; lots of manual know-how.',
  },
  {
    value: 'documented',
    title: 'Documented',
    description: 'Checklists and SOPs exist but automation is limited.',
  },
  {
    value: 'optimized',
    title: 'Optimized',
    description: 'Well-instrumented processes with automation and dashboards.',
  },
] as const

export default function ProcessMaturityStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  const { register } = useFormContext<WizardData>()

  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600">
        This helps us determine the right level of change management and the likelihood of automation quick wins sticking.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {maturityOptions.map(option => (
          <label
            key={option.value}
            className="flex cursor-pointer flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-700 shadow-card transition hover:border-brand-blue"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-ink">{option.title}</p>
                <p className="text-sm text-neutral-600">{option.description}</p>
              </div>
              <input
                type="radio"
                value={option.value}
                {...register('processMaturity')}
                className="h-4 w-4 border-neutral-300 text-brand-blue focus:ring-brand-blue"
              />
            </div>
          </label>
        ))}
      </div>
      <StepNavigation onBack={onBack} onNext={onNext} isFirst={isFirst} isLast={isLast} />
    </div>
  )
}
