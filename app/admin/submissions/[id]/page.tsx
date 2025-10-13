import SubmissionDetail from '@/app/components/admin/SubmissionDetail'

export default function SubmissionDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <SubmissionDetail />
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
        <p className="text-sm text-neutral-600">
          Detailed view for submission <strong>{params.id}</strong>. Connect this page to Prisma + CRM sync endpoints to manage individual prospects.
        </p>
      </div>
    </div>
  )
}
