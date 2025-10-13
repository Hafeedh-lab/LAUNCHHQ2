import { NextResponse } from 'next/server'
import { buildRecommendation } from '@/lib/recommendations/stack-builder'
import { wizardSchema } from '@/lib/validation/schemas'
import { generatePDF } from '@/lib/pdf/generator'

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = wizardSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 })
  }
  const recommendation = await buildRecommendation(parsed.data)
  const pdfBuffer = await generatePDF({
    id: 'preview',
    wizardData: parsed.data,
    recommendation,
    events: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as any)
  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="launch-hq-flight-plan.pdf"',
    },
  })
}
