'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { WizardStepComponentProps } from '../WizardShell'
import { gateSchema } from '@/lib/validation/schemas'
import { Button } from '../../shared/Button'
import { z } from 'zod'

const followUpHighlights = [
  'Day 0: PDF delivery + quick win summary',
  'Day 1: ROI calculator walkthrough',
  'Day 4: Pilot checklist & FAQ',
  'Day 7: Book a feasibility call CTA',
]

type GateForm = z.infer<typeof gateSchema>

export default function GateStep({ onBack, onNext, isFirst, isLast }: WizardStepComponentProps) {
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GateForm>({
    resolver: zodResolver(gateSchema),
    mode: 'onBlur',
  })

  const onSubmit = handleSubmit(async data => {
    setSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 400))
    // In production, call /api/leads/gate
    setSubmitting(false)
    onNext()
  })

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="rounded-3xl border border-brand-blue/20 bg-white p-6 shadow-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Unlock your results</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-ink">Where should we send your flight plan PDF?</h3>
        <p className="mt-2 text-sm text-neutral-600">
          We&apos;ll email the PDF, lead score, and booking link instantly. Opt-in also schedules the 4-touch nurture sequence and CRM sync.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-neutral-700">Work email</label>
            <input
              type="email"
              autoComplete="email"
              placeholder="you@company.ca"
              {...register('email')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-700 shadow-card focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
            />
            {errors.email && <p className="text-xs text-danger">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-neutral-700">Company</label>
            <input
              type="text"
              placeholder="Launch HQ"
              {...register('company')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-700 shadow-card focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
            />
            {errors.company && <p className="text-xs text-danger">{errors.company.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-neutral-700">Your name (optional)</label>
            <input
              type="text"
              placeholder="Alex Founder"
              {...register('name')}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-700 shadow-card focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
            />
          </div>
          <div className="rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-600">
            <p className="font-semibold text-neutral-700">What happens next?</p>
            <ul className="mt-2 space-y-1 text-xs text-neutral-500">
              {followUpHighlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <label className="mt-6 flex items-start gap-3 text-sm text-neutral-600">
          <input type="checkbox" {...register('consent')} className="mt-1 h-4 w-4 border-neutral-300 text-brand-blue focus:ring-brand-blue" />
          <span>
            I consent to Launch HQ storing my info in Canada, receiving the automation follow-up sequence, and being contacted by the sales team if I score warm or hot. <strong>Unsubscribe anytime.</strong>
          </span>
        </label>
        {errors.consent && <p className="mt-2 text-xs text-danger">{errors.consent.message}</p>}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-600 transition hover:border-brand-blue hover:text-brand-blue"
        >
          Back
        </button>
        <Button type="submit" disabled={submitting} className="min-w-[200px]">
          {submitting ? 'Preparing your results…' : 'Email my blueprint'}
        </Button>
      </div>
    </form>
  )
}
