const rows = [
  {
    id: 'preview',
    company: 'Maple & Main Co.',
    email: 'ops@mapleandmain.ca',
    score: 78,
    segment: 'hot',
    createdAt: '2024-02-12',
  },
  {
    id: 'sample-002',
    company: 'Prairie Goods Ltd.',
    email: 'finance@prairiegoods.ca',
    score: 62,
    segment: 'warm',
    createdAt: '2024-02-10',
  },
]

export default function SubmissionsTable() {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white shadow-card">
      <header className="flex flex-col gap-2 border-b border-neutral-200 px-6 py-5">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Submissions</p>
        <h2 className="font-display text-2xl font-semibold text-ink">Recent flight plans</h2>
        <p className="text-sm text-neutral-600">Auto-sync with HubSpot or Pipedrive once API keys are configured.</p>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200 text-sm">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold uppercase tracking-wide text-neutral-500">Company</th>
              <th className="px-6 py-3 text-left font-semibold uppercase tracking-wide text-neutral-500">Email</th>
              <th className="px-6 py-3 text-left font-semibold uppercase tracking-wide text-neutral-500">Score</th>
              <th className="px-6 py-3 text-left font-semibold uppercase tracking-wide text-neutral-500">Segment</th>
              <th className="px-6 py-3 text-left font-semibold uppercase tracking-wide text-neutral-500">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {rows.map(row => (
              <tr key={row.id} className="hover:bg-neutral-50">
                <td className="px-6 py-4 font-medium text-ink">{row.company}</td>
                <td className="px-6 py-4 text-neutral-600">{row.email}</td>
                <td className="px-6 py-4 font-semibold text-brand-blue">{row.score}</td>
                <td className="px-6 py-4 text-neutral-600">{row.segment}</td>
                <td className="px-6 py-4 text-neutral-600">{row.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
