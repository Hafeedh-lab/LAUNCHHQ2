import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const crm = body.crm ?? 'hubspot'
  return NextResponse.json({ ok: true, crm, crmId: `${crm}-preview-id` })
}
