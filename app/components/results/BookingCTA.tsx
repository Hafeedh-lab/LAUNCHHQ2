import type { LeadScore } from '@/lib/types'
import Link from 'next/link'

export default function BookingCTA({ score }: { score: LeadScore }) {
  const hot = score.segment === 'hot'

  return (
    <section className="rounded-3xl bg-gradient-brand text-white shadow-wizard">
      <div className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Next step</p>
          <h2 className="font-display text-3xl font-bold">
            {hot ? 'Hot lead — reserve your feasibility call' : 'Warm lead — stay close with nurture + calendar'}
          </h2>
          <p className="max-w-xl text-sm text-white/80">
            {hot
              ? 'Hot leads are routed directly to the revenue team. Lock in a 20-minute session to validate scope, budget, and timeline.'
              : 'Keep momentum by reviewing your PDF and joining the nurture sequence. When ready, grab time with our advisors.'}
          </p>
        </div>
        <Link
          href="https://cal.com/launch-hq/feasibility"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue shadow-card transition hover:bg-neutral-100"
        >
          {hot ? 'Book feasibility call' : 'View calendar options'}
        </Link>
      </div>
    </section>
  )
}
