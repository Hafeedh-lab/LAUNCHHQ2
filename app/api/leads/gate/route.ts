import { NextResponse } from 'next/server'
import { gateSchema } from '@/lib/validation/schemas'

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = gateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 })
  }
  return NextResponse.json({ ok: true, leadId: 'lead-preview', consentTimestamp: new Date().toISOString() })
}
