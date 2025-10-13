'use client'

import { useFormContext } from 'react-hook-form'
import type { WizardData } from '@/lib/types'

const industries = [
  { value: 'retail_storefront', label: 'Retail storefront' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'services_agency', label: 'Services / agency' },
  { value: 'trades', label: 'Trades & field services' },
  { value: 'saas', label: 'Software / SaaS' },
  { value: 'nonprofit', label: 'Non-profit' },
] as const

export function IndustrySelector() {
  const {
    register,
    formState: { errors },
  } = useFormContext<WizardData>()

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-neutral-700">
        What best describes your business?
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        {industries.map(industry => (
          <label key={industry.value} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-card transition hover:border-brand-blue">
            <input
              type="radio"
              value={industry.value}
              {...register('industry')}
              className="h-4 w-4 border-neutral-300 text-brand-blue focus:ring-brand-blue"
            />
            {industry.label}
          </label>
        ))}
      </div>
      {errors.industry && <p className="text-sm text-danger">{errors.industry.message}</p>}
    </div>
  )
}
