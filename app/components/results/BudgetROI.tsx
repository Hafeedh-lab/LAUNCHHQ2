import type { BudgetEstimate } from '@/lib/types'
import { formatCurrency } from '@/lib/utils'

export default function BudgetROI({ budget }: { budget: BudgetEstimate }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-3xl font-bold text-ink">Budget & ROI</h2>
        <p className="text-sm text-neutral-600">
          Directional estimates for monthly software, implementation support, and payback timelines—anchored in typical Canadian SME projects.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold text-ink">SaaS subscription</h3>
          <p className="mt-2 text-sm text-neutral-600">
            {formatCurrency(budget.saas.low)} - {formatCurrency(budget.saas.high)} per month (avg {formatCurrency(budget.saas.avg)}).
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {budget.saas.breakdown.map(item => (
              <li key={item.category} className="rounded-xl bg-neutral-50 px-3 py-2">
                <span className="font-semibold text-neutral-700">{item.category}:</span> {item.range}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
          <h3 className="font-display text-xl font-semibold text-ink">Implementation</h3>
          <p className="mt-2 text-sm text-neutral-600">
            {formatCurrency(budget.implementation.low)} - {formatCurrency(budget.implementation.high)} one-time.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            {budget.implementation.assumptions.map(assumption => (
              <li key={assumption} className="rounded-xl bg-neutral-50 px-3 py-2">
                {assumption}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
        <h3 className="font-display text-xl font-semibold text-ink">Payback period</h3>
        <p className="mt-2 text-sm text-neutral-600">
          Most founders recover their investment within {budget.paybackMonths.low}-{budget.paybackMonths.high} months by reclaiming time and accelerating cash collection.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-600">
          {budget.assumptions.map(assumption => (
            <li key={assumption} className="rounded-xl bg-neutral-50 px-3 py-2">
              {assumption}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
