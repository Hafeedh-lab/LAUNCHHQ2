import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-brand-subtle" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-brand-blue shadow-card">
            Built for Canadian founders 🇨🇦
          </span>
          <h1 className="font-display text-5xl font-extrabold text-ink md:text-6xl">
            Generate your automation flight plan in under seven minutes.
          </h1>
          <p className="text-lg text-neutral-600 md:text-xl">
            Launch HQ&apos;s guided wizard captures your context, recommends compliant tools, and builds a branded automation blueprint complete with ROI estimates and next steps.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/wizard"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-semibold text-white shadow-card-hover transition hover:bg-brand-blue-dark"
            >
              Start the 7-minute wizard
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-6 py-3 font-semibold text-brand-blue transition hover:border-brand-blue hover:text-brand-blue-dark"
            >
              Explore the admin workspace
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map(highlight => (
            <div key={highlight.title} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur">
              <h3 className="font-display text-lg font-semibold text-ink">{highlight.title}</h3>
              <p className="mt-3 text-sm text-neutral-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const highlights = [
  {
    title: 'Canada-ready stack intelligence',
    description:
      'Opinionated recommendations featuring QuickBooks Online, Wagepoint, Shopify, Moneris, and other bilingual-friendly tools.',
  },
  {
    title: 'LLM-powered quick wins',
    description:
      'Claude crafts three automation playbooks tailored to your pains, complete with steps, risks, and hours saved per month.',
  },
  {
    title: 'Sales-qualified deliverables',
    description:
      'Lead scoring, CRM sync, booking prompts, and a branded PDF ensure hot prospects route straight to your revenue team.',
  },
]
