import type { EmailSequence } from '@/lib/types'

export function buildDefaultSequence(submissionId: string, leadId: string): EmailSequence {
  return {
    submissionId,
    leadId,
    emails: [0, 1, 4, 7].map(day => ({
      day: day as 0 | 1 | 4 | 7,
      template: `day-${day}`,
      sent: false,
      opened: false,
      clicked: false,
    })),
  }
}
