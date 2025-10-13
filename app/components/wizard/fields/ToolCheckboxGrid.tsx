'use client'

import { useFormContext } from 'react-hook-form'
import { useMemo } from 'react'
import { TOOLS_CATALOG } from '@/config/tools'
import type { ToolCategory, WizardData } from '@/lib/types'

interface ToolCheckboxGridProps {
  category: ToolCategory
  label: string
  helper?: string
}

export function ToolCheckboxGrid({ category, label, helper }: ToolCheckboxGridProps) {
  const { register, watch } = useFormContext<WizardData>()
  const selected = watch(`currentTools.${category}`)

  const tools = useMemo(
    () => TOOLS_CATALOG.filter(tool => tool.category === category),
    [category]
  )

  return (
    <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-card">
      <div>
        <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">{label}</h4>
        {helper && <p className="mt-1 text-xs text-neutral-500">{helper}</p>}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {tools.map(tool => (
          <label
            key={tool.id}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-brand-blue"
          >
            <span>{tool.name}</span>
            <input
              type="checkbox"
              value={tool.id}
              {...register(`currentTools.${category}`)}
              className="h-4 w-4 border-neutral-300 text-brand-blue focus:ring-brand-blue"
            />
          </label>
        ))}
      </div>
      <p className="text-xs text-neutral-500">Selected: {selected?.length ?? 0}</p>
    </div>
  )
}
