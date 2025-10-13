'use client'

import { useFormContext } from 'react-hook-form'
import { PROVINCES } from '@/config/provinces'
import type { WizardData } from '@/lib/types'

export function ProvinceSelector() {
  const { register } = useFormContext<WizardData>()

  const provinces = Object.values(PROVINCES)

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-neutral-700">Where is your Canadian HQ?</label>
      <select
        {...register('province')}
        className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-card focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
      >
        {provinces.map(province => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>
    </div>
  )
}
