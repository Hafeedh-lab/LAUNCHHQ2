import ResultsShell from '@/app/components/results/ResultsShell'
import { Suspense } from 'react'

export default function ResultsPage({ params }: { params: { submissionId: string } }) {
  return (
    <Suspense fallback={<div className="p-10 text-center text-neutral-600">Loading your blueprint...</div>}>
      <ResultsShell submissionId={params.submissionId} />
    </Suspense>
  )
}
