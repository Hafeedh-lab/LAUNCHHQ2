import { CONTENT_BLOCKS } from '@/config/content'

export default function ContentEditor() {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
      <h2 className="font-display text-2xl font-semibold text-ink">Content blocks</h2>
      <p className="mt-2 text-sm text-neutral-600">Edit wizard copy and PDF messaging. Persist to the database via <code>/api/admin/update-content</code>.</p>
      <div className="mt-4 space-y-4">
        {Object.entries(CONTENT_BLOCKS).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <label className="text-xs uppercase tracking-wide text-neutral-500">{key}</label>
            <textarea
              defaultValue={value}
              rows={3}
              className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 focus:border-brand-blue focus:outline-none focus:ring-brand-blue"
            />
          </div>
        ))}
      </div>
      <button className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-blue-dark">
        Save draft
      </button>
    </section>
  )
}
