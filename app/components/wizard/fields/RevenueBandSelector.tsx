'use client'

import { useFormContext } from 'react-hook-form'
import type { WizardData } from '@/lib/types'

const revenueBands = [
  { value: '<250k', label: 'Under $250k' },
  { value: '250k-1m', label: '$250k - $1M' },
  { value: '1m-5m', label: '$1M - $5M' },
  { value: '>5m', label: '$5M+' },
] as const

export function RevenueBandSelector() {
  const { register } = useFormContext<WizardData>()

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-neutral-700">What&apos;s your annual revenue band?</label>
      <select
        {...register('revenueBand')}
        className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-card focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
      >
        {revenueBands.map(band => (
          <option key={band.value} value={band.value}>
            {band.label}
          </option>
        ))}
      </select>
    </div>
  )
}
