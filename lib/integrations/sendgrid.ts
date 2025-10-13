export async function enqueueEmail(payload: Record<string, unknown>) {
  console.info('SendGrid mail (stub)', payload)
  return { id: 'sendgrid-preview-id' }
}
