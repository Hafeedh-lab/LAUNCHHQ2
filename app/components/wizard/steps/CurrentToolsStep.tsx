'use client'

import { ToolCheckboxGrid } from '../fields/ToolCheckboxGrid'
import StepNavigation from '../StepNavigation'
import type { WizardStepComponentProps } from '../WizardShell'

const categories = [
  { id: 'accounting', label: 'Accounting' },
  { id: 'payroll', label: 'Payroll' },
  { id: 'pos_ecom', label: 'Point of sale / e-commerce' },
  { id: 'crm', label: 'CRM / pipeline' },
  { id: 'inventory', label: 'Inventory / fulfillment' },
  { id: 'payments', label: 'Payments' },
  { id: 'collaboration', label: 'Collaboration & productivity' },
  { id: 'automation', label: 'Automation / integration' },
] as const

export default function CurrentToolsStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600">
        Select everything you currently rely on. We&apos;ll suggest Canada-friendly upgrades or integrations based on gaps and your province.
      </p>
      <div className="grid gap-4">
        {categories.map(category => (
          <ToolCheckboxGrid
            key={category.id}
            category={category.id as typeof categories[number]['id']}
            label={category.label}
          />
        ))}
      </div>
      <StepNavigation onBack={onBack} onNext={onNext} isFirst={isFirst} isLast={isLast} />
    </div>
  )
}
