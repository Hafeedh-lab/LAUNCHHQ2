'use client'

import Link from 'next/link'
import type { WizardStepComponentProps } from '../WizardShell'
import { CheckCircle2 } from 'lucide-react'

export default function ConfirmationStep({}: WizardStepComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <div className="rounded-full bg-success/10 p-6 text-success">
        <CheckCircle2 className="h-12 w-12" />
      </div>
      <div className="space-y-3">
        <h3 className="font-display text-3xl font-bold text-ink">Flight plan is in production</h3>
        <p className="text-neutral-600">
          We&apos;re building your recommendations, integration map, and quick wins right now. Expect an email within 2 minutes with your PDF, lead score, and booking link if you score hot.
        </p>
      </div>
      <div className="space-y-2 text-sm text-neutral-500">
        <p>• Hot leads (≥70) will see a booking calendar immediately after email delivery.</p>
        <p>• Warm leads enter the 4-touch nurture at day 0, 1, 4, and 7.</p>
        <p>• Cold leads receive a resource-rich newsletter to stay engaged.</p>
      </div>
      <Link
        href="/results/preview"
        className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-blue-dark"
      >
        Peek at a sample results page
      </Link>
    </div>
  )
}
