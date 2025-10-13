'use client'

import { useFormContext } from 'react-hook-form'
import type { WizardData } from '@/lib/types'
import { toTitleCase } from '@/lib/utils'

const pains: { value: WizardData['topPains'][number]; description: string }[] = [
  { value: 'receipt_chaos', description: 'Paper trails for expenses slow down bookkeeping.' },
  { value: 'slow_invoicing', description: 'Invoices take days to get issued after work is done.' },
  { value: 'abandoned_invoices', description: 'Customers forget to pay without persistent nudges.' },
  { value: 'duplicate_entry', description: 'Data is manually retyped across tools weekly.' },
  { value: 'inventory_mismatch', description: 'Stock levels differ between channels and accounting.' },
  { value: 'payroll_errors', description: 'Payroll runs lead to CRA corrections or amended T4s.' },
  { value: 'no_kpi_visibility', description: 'Leadership lacks a clean dashboard of KPIs.' },
  { value: 'manual_quotes_to_invoices', description: 'Quotes must be rebuilt as invoices.' },
  { value: 'customer_faqs', description: 'Team spends time responding to repetitive questions.' },
  { value: 'month_end_delays', description: 'Month end close drags beyond 10 business days.' },
]

export function PainSelector() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<WizardData>()

  const selected = watch('topPains')

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-neutral-700">
        Pick up to three pains you&apos;d love to eliminate.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {pains.map(pain => {
          const isSelected = selected?.includes(pain.value)
          return (
            <label
              key={pain.value}
              className={`flex cursor-pointer flex-col gap-2 rounded-2xl border px-4 py-3 shadow-card transition ${isSelected ? 'border-brand-blue bg-brand-blue/5 text-brand-blue' : 'border-neutral-200 bg-white text-neutral-700 hover:border-brand-blue/60'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold">{toTitleCase(pain.value)}</span>
                <input
                  type="checkbox"
                  value={pain.value}
                  {...register('topPains')}
                  className="h-4 w-4 border-neutral-300 text-brand-blue focus:ring-brand-blue"
                />
              </div>
              <p className="text-xs text-neutral-600">{pain.description}</p>
            </label>
          )
        })}
      </div>
      {errors.topPains && <p className="text-sm text-danger">{errors.topPains.message as string}</p>}
    </div>
  )
}
