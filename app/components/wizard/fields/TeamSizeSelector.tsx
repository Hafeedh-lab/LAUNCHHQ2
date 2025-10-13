'use client'

import { useFormContext } from 'react-hook-form'
import type { WizardData } from '@/lib/types'

const teamSizes = [
  { value: 'solo', label: 'Solo founder' },
  { value: '2-5', label: '2 - 5' },
  { value: '6-10', label: '6 - 10' },
  { value: '11-30', label: '11 - 30' },
  { value: '31+', label: '31+' },
] as const

export function TeamSizeSelector() {
  const { register } = useFormContext<WizardData>()

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-neutral-700">How many people are on your team?</label>
      <select
        {...register('teamSize')}
        className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-card focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
      >
        {teamSizes.map(teamSize => (
          <option key={teamSize.value} value={teamSize.value}>
            {teamSize.label}
          </option>
        ))}
      </select>
    </div>
  )
}
