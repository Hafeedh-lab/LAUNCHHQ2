'use client'

import { Loader2 } from 'lucide-react'
import { Button } from '../shared/Button'

interface StepNavigationProps {
  onBack: () => void
  onNext: () => void
  isFirst: boolean
  isLast: boolean
  nextLabel?: string
  isSubmitting?: boolean
}

export default function StepNavigation({
  onBack,
  onNext,
  isFirst,
  isLast,
  nextLabel = isLast ? 'Generate my flight plan' : 'Continue',
  isSubmitting,
}: StepNavigationProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirst}
        className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-600 transition hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:border-neutral-200 disabled:text-neutral-300"
      >
        Back
      </button>
      <Button type="button" onClick={onNext} disabled={isSubmitting} className="inline-flex min-w-[160px] items-center justify-center gap-2">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />} {nextLabel}
      </Button>
    </div>
  )
}
