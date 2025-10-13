'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from './ProgressBar'
import type { WizardData } from '@/lib/types'
import { wizardSchema, defaultWizardValues } from '@/lib/validation/schemas'
import { cn } from '@/lib/utils'

export type WizardStep = {
  id: string
  title: string
  description: string
  component: (props: WizardStepComponentProps) => JSX.Element
}

export interface WizardStepComponentProps {
  onNext: () => void
  onBack: () => void
  isFirst: boolean
  isLast: boolean
}

interface WizardShellProps {
  steps: WizardStep[]
  wizardStarted: boolean
  onWizardStart: () => void
}

export default function WizardShell({ steps, wizardStarted, onWizardStart }: WizardShellProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [completedStepIds, setCompletedStepIds] = useState<string[]>([])
  const methods = useForm<WizardData>({
    resolver: zodResolver(wizardSchema),
    mode: 'onChange',
    defaultValues: defaultWizardValues,
  })

  const activeStep = steps[activeStepIndex]
  const StepComponent = activeStep.component

  const handleNext = () => {
    if (!wizardStarted) onWizardStart()
    const nextIndex = Math.min(activeStepIndex + 1, steps.length - 1)
    setActiveStepIndex(nextIndex)
    setCompletedStepIds(prev => Array.from(new Set([...prev, activeStep.id])))
  }

  const handleBack = () => {
    const prevIndex = Math.max(activeStepIndex - 1, 0)
    setActiveStepIndex(prevIndex)
  }

  return (
    <FormProvider {...methods}>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 md:py-16">
        <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-wizard backdrop-blur md:p-10">
          <div className="mb-8 space-y-4">
            <ProgressBar
              steps={steps}
              activeStepId={activeStep.id}
              completedStepIds={completedStepIds}
            />
            <div className="flex flex-col gap-2">
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-brand-blue">
                Step {activeStepIndex + 1} of {steps.length}
              </span>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{activeStep.title}</h2>
              <p className="text-base text-neutral-600 md:text-lg">{activeStep.description}</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={cn('min-h-[320px]')}
            >
              <StepComponent
                onNext={handleNext}
                onBack={handleBack}
                isFirst={activeStepIndex === 0}
                isLast={activeStepIndex === steps.length - 1}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </FormProvider>
  )
}
