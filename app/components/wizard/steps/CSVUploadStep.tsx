'use client'

import StepNavigation from '../StepNavigation'
import { FileUpload } from '../fields/FileUpload'
import type { WizardStepComponentProps } from '../WizardShell'

export default function CSVUploadStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  return (
    <div className="space-y-6">
      <FileUpload />
      <StepNavigation onBack={onBack} onNext={onNext} isFirst={isFirst} isLast={isLast} nextLabel="Continue without upload" />
    </div>
  )
}
