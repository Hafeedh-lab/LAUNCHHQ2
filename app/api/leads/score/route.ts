import { NextResponse } from 'next/server'
import { wizardSchema } from '@/lib/validation/schemas'
import { calculateLeadScore } from '@/lib/scoring'

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = wizardSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 })
  }
  const score = calculateLeadScore(parsed.data)
  return NextResponse.json({ ok: true, score })
}
