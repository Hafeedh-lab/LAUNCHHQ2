'use client'

import { useFormContext } from 'react-hook-form'
import StepNavigation from '../StepNavigation'
import type { WizardStepComponentProps } from '../WizardShell'
import type { WizardData } from '@/lib/types'

const budgets = [
  { value: 'lean', label: 'Lean — keep SaaS under $400/mo' },
  { value: 'balanced', label: 'Balanced — invest where ROI is clear' },
  { value: 'all-in', label: 'All-in — aggressive automation & insights' },
] as const

export default function AutomationGoalsStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  const { register } = useFormContext<WizardData>()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-neutral-700">What would a successful automation sprint unlock?</label>
        <textarea
          {...register('automationGoals')}
          rows={4}
          placeholder="E.g., reclaim 15 hours per month from invoicing, ensure CRA filings are error-free, unify Shopify and QBO inventory."
          className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-700 shadow-card focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
        />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-neutral-700">How do you feel about the investment level?</p>
        <div className="grid gap-3 md:grid-cols-3">
          {budgets.map(option => (
            <label
              key={option.value}
              className="flex cursor-pointer flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-700 shadow-card transition hover:border-brand-blue"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-semibold text-ink">{option.label}</span>
                <input
                  type="radio"
                  value={option.value}
                  {...register('budgetComfort')}
                  className="h-4 w-4 border-neutral-300 text-brand-blue focus:ring-brand-blue"
                />
              </div>
            </label>
          ))}
        </div>
      </div>
      <StepNavigation onBack={onBack} onNext={onNext} isFirst={isFirst} isLast={isLast} />
    </div>
  )
}
