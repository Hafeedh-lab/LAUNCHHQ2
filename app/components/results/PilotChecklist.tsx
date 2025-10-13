import type { ChecklistItem } from '@/lib/types'

export default function PilotChecklist({ checklist }: { checklist: ChecklistItem[] }) {
  const grouped = checklist.reduce<Record<number, ChecklistItem[]>>((acc, item) => {
    acc[item.week] = acc[item.week] ? [...acc[item.week], item] : [item]
    return acc
  }, {})

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-3xl font-bold text-ink">30-day pilot checklist</h2>
        <p className="text-sm text-neutral-600">
          Keep the project on track with clear owners, bilingual enablement, and estimated time commitments.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(grouped).map(([week, items]) => (
          <div key={week} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
            <h3 className="font-display text-xl font-semibold text-ink">Week {week}</h3>
            <ul className="mt-3 space-y-3 text-sm text-neutral-600">
              {items.map(item => (
                <li key={item.task} className="rounded-xl bg-neutral-50 px-3 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-neutral-700">{item.task}</span>
                    <span className="text-xs uppercase tracking-wide text-brand-blue">Owner: {item.owner}</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">Estimated effort: {item.estimated}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
