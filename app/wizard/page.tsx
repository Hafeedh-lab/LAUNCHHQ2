'use client'

import { useMemo, useState } from 'react'
import WizardShell from '@/app/components/wizard/WizardShell'
import type { WizardStep } from '@/app/components/wizard/WizardShell'
import WelcomeStep from '@/app/components/wizard/steps/WelcomeStep'
import CompanyBasicsStep from '@/app/components/wizard/steps/CompanyBasicsStep'
import CurrentToolsStep from '@/app/components/wizard/steps/CurrentToolsStep'
import TopPainsStep from '@/app/components/wizard/steps/TopPainsStep'
import CSVUploadStep from '@/app/components/wizard/steps/CSVUploadStep'
import ProcessMaturityStep from '@/app/components/wizard/steps/ProcessMaturityStep'
import AutomationGoalsStep from '@/app/components/wizard/steps/AutomationGoalsStep'
import ReviewStep from '@/app/components/wizard/steps/ReviewStep'
import GateStep from '@/app/components/wizard/steps/GateStep'
import ConfirmationStep from '@/app/components/wizard/steps/ConfirmationStep'

export default function WizardPage() {
  const [wizardStarted, setWizardStarted] = useState(false)

  const steps = useMemo<WizardStep[]>(
    () => [
      {
        id: 'welcome',
        title: 'Welcome',
        description: 'How the Launch HQ flight plan works',
        component: WelcomeStep,
      },
      {
        id: 'company-basics',
        title: 'Company basics',
        description: 'Team, revenue, and province details',
        component: CompanyBasicsStep,
      },
      {
        id: 'current-tools',
        title: 'Current tools',
        description: 'Catalog your finance & ops stack',
        component: CurrentToolsStep,
      },
      {
        id: 'top-pains',
        title: 'Top pains',
        description: 'Prioritize the frictions to solve first',
        component: TopPainsStep,
      },
      {
        id: 'csv-upload',
        title: 'Financial data',
        description: 'Optional CSV upload for deeper insights',
        component: CSVUploadStep,
      },
      {
        id: 'process-maturity',
        title: 'Process maturity',
        description: 'Understand how structured your ops are',
        component: ProcessMaturityStep,
      },
      {
        id: 'automation-goals',
        title: 'Automation goals',
        description: 'Define the wins that matter',
        component: AutomationGoalsStep,
      },
      {
        id: 'review',
        title: 'Review',
        description: 'Confirm your inputs before generation',
        component: ReviewStep,
      },
      {
        id: 'gate',
        title: 'Unlock results',
        description: 'Share contact details for your PDF',
        component: GateStep,
      },
      {
        id: 'confirmation',
        title: 'Flight plan queued',
        description: 'We&apos;re generating your blueprint',
        component: ConfirmationStep,
      },
    ],
    []
  )

  return (
    <WizardShell steps={steps} wizardStarted={wizardStarted} onWizardStart={() => setWizardStarted(true)} />
  )
}
