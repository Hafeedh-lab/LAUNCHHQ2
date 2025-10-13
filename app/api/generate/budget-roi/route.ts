import { NextResponse } from 'next/server'
import { wizardSchema } from '@/lib/validation/schemas'
import { generateRecommendations } from '@/lib/recommendations/rules-engine'
import { estimateBudget } from '@/lib/ai/roi-calculator'

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = wizardSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 })
  }
  const stack = generateRecommendations(parsed.data)
  const budget = estimateBudget(parsed.data, stack)
  return NextResponse.json({ ok: true, budget })
}
