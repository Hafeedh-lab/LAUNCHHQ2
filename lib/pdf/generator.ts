import type { Submission } from '@/lib/types'

export async function generatePDF(submission: Submission) {
  // Placeholder: in production we would render using Playwright or @react-pdf/renderer.
  const content = `PDF placeholder for ${submission.lead?.company ?? 'Launch HQ'} generated at ${new Date().toISOString()}`
  return Buffer.from(content, 'utf-8')
}
