import type { QuickWin } from '@/lib/types'
import { Badge } from '../shared/Badge'

export default function QuickWins({ quickWins }: { quickWins: QuickWin[] }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-3xl font-bold text-ink">Quick-win automations</h2>
        <p className="text-sm text-neutral-600">
          These three automations can launch within a 30-day pilot and respect CRA and bilingual nuances where relevant.
        </p>
      </div>
      <div className="space-y-4">
        {quickWins.map(win => (
          <div key={win.id} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-2xl font-semibold text-ink">{win.title}</h3>
              <Badge variant="success">Saves {win.estimatedHoursSavedPerMonth} hrs/mo</Badge>
            </div>
            <p className="mt-2 text-sm text-neutral-600">{win.description}</p>
            <ol className="mt-4 list-decimal space-y-1 pl-4 text-sm text-neutral-700">
              {win.steps.map(step => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="mt-4 grid gap-3 text-xs text-neutral-500 md:grid-cols-2">
              <div>
                <p className="font-semibold text-neutral-600">Risks</p>
                <ul className="mt-1 space-y-1">
                  {win.risks.map(risk => (
                    <li key={risk}>{risk}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-neutral-600">Notes</p>
                <ul className="mt-1 space-y-1">
                  {win.notes.map(note => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
