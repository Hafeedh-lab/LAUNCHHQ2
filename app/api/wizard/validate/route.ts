import { NextResponse } from 'next/server'
import { wizardSchema } from '@/lib/validation/schemas'

export async function POST(request: Request) {
  const body = await request.json()
  const result = wizardSchema.safeParse(body)
  return NextResponse.json({ ok: result.success, errors: result.success ? null : result.error.flatten() })
}
