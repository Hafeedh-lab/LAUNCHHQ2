export default function SubmissionDetail() {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
      <h2 className="font-display text-2xl font-semibold text-ink">Submission detail</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Drill into a single submission to trigger PDF regeneration, resend follow-up emails, or push CRM syncs. Wire this component to <code>/api/admin/submissions</code> once the backend is implemented.
      </p>
    </section>
  )
}
