const metrics = [
  { label: 'Hot (≥70)', value: 18, color: 'bg-success/80' },
  { label: 'Warm (50-69)', value: 42, color: 'bg-warning/80' },
  { label: 'Cold (<50)', value: 16, color: 'bg-neutral-300' },
]

export default function ScoreVisualizer() {
  const total = metrics.reduce((sum, metric) => sum + metric.value, 0)

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
      <h2 className="font-display text-2xl font-semibold text-ink">Lead score mix</h2>
      <p className="mt-2 text-sm text-neutral-600">Snapshot of recent submissions. Aligns with automated routing rules.</p>
      <div className="mt-4 flex h-3 overflow-hidden rounded-full">
        {metrics.map(metric => (
          <div key={metric.label} className={`${metric.color}`} style={{ width: `${(metric.value / total) * 100}%` }} />
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-600">
        {metrics.map(metric => (
          <li key={metric.label} className="flex items-center justify-between">
            <span>{metric.label}</span>
            <span className="font-semibold text-neutral-800">{metric.value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
