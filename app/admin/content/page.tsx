import ContentEditor from '@/app/components/admin/ContentEditor'

export default function AdminContentPage() {
  return (
    <div className="space-y-6">
      <ContentEditor />
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
        <p className="text-sm text-neutral-600">Hook this screen up to PIPEDA-compliant storage to version control marketing copy.</p>
      </div>
    </div>
  )
}
