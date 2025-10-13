'use client'

import { cn } from '@/lib/utils'
import type { WizardStep } from './WizardShell'

interface ProgressBarProps {
  steps: WizardStep[]
  activeStepId: string
  completedStepIds: string[]
}

export default function ProgressBar({ steps, activeStepId, completedStepIds }: ProgressBarProps) {
  const activeIndex = steps.findIndex(step => step.id === activeStepId)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        <span className="h-2 w-2 rounded-full bg-brand-blue" /> Flight Plan Progress
      </div>
      <div className="grid grid-cols-10 gap-2">
        {steps.map((step, index) => {
          const isActive = step.id === activeStepId
          const isComplete = completedStepIds.includes(step.id) || index < activeIndex
          return (
            <div
              key={step.id}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                isActive && 'bg-brand-blue shadow-card',
                !isActive && isComplete && 'bg-brand-blue/70',
                !isActive && !isComplete && 'bg-neutral-200'
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
