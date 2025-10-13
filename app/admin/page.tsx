import SubmissionsTable from '@/app/components/admin/SubmissionsTable'
import ContentEditor from '@/app/components/admin/ContentEditor'
import ScoreVisualizer from '@/app/components/admin/ScoreVisualizer'

export default function AdminDashboard() {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <SubmissionsTable />
      </div>
      <div className="space-y-6">
        <ScoreVisualizer />
        <ContentEditor />
      </div>
    </div>
  )
}
