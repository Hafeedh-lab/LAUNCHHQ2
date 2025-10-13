'use client'

import { useFormContext } from 'react-hook-form'
import StepNavigation from '../StepNavigation'
import type { WizardStepComponentProps } from '../WizardShell'
import { IndustrySelector } from '../fields/IndustrySelector'
import { TeamSizeSelector } from '../fields/TeamSizeSelector'
import { RevenueBandSelector } from '../fields/RevenueBandSelector'
import { ProvinceSelector } from '../fields/ProvinceSelector'
import type { WizardData } from '@/lib/types'

export default function CompanyBasicsStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  const {
    trigger,
    register,
  } = useFormContext<WizardData>()

  const handleContinue = async () => {
    const valid = await trigger(['industry', 'teamSize', 'revenueBand', 'province'])
    if (valid) onNext()
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <IndustrySelector />
        <ProvinceSelector />
        <TeamSizeSelector />
        <RevenueBandSelector />
      </div>
      <label className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600 shadow-card">
        <input type="checkbox" {...register('bilingualQC')} className="h-4 w-4 border-neutral-300 text-brand-blue focus:ring-brand-blue" />
        We operate in Quebec and require bilingual (EN/FR) workflows.
      </label>
      <StepNavigation onBack={onBack} onNext={handleContinue} isFirst={isFirst} isLast={isLast} />
    </div>
  )
}
