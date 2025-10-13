import type { IntegrationMap as IntegrationMapType } from '@/lib/types'

export default function IntegrationMap({ map }: { map: IntegrationMapType }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-3xl font-bold text-ink">Integration map</h2>
        <p className="text-sm text-neutral-600">
          Visualize how data flows between your Canada-ready stack. The Mermaid diagram renders instantly for the PDF and admin view.
        </p>
      </div>
      <pre className="overflow-x-auto rounded-2xl bg-neutral-900 p-6 text-sm text-neutral-50 shadow-card">
        {map.mermaidCode}
      </pre>
    </section>
  )
}
