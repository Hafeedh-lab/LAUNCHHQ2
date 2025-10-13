'use client'

import { useFormContext } from 'react-hook-form'
import StepNavigation from '../StepNavigation'
import type { WizardStepComponentProps } from '../WizardShell'
import { PainSelector } from '../fields/PainSelector'
import type { WizardData } from '@/lib/types'

export default function TopPainsStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  const { trigger } = useFormContext<WizardData>()

  const handleNext = async () => {
    const valid = await trigger('topPains')
    if (valid) onNext()
  }

  return (
    <div className="space-y-6">
      <PainSelector />
      <StepNavigation onBack={onBack} onNext={handleNext} isFirst={isFirst} isLast={isLast} />
    </div>
  )
}
