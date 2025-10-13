import Link from 'next/link'

export default function ResultsIndex() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-16 text-center">
      <h1 className="font-display text-4xl font-bold text-ink">Preview the Stack Flight Plan output</h1>
      <p className="text-neutral-600">
        Replace <code>preview</code> with an actual submission ID once the API is wired up. For now, explore the opinionated sample below.
      </p>
      <Link
        href="/results/preview"
        className="mx-auto inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-blue-dark"
      >
        View sample results
      </Link>
    </div>
  )
}
