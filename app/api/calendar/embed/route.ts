import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ ok: true, embedUrl: 'https://cal.com/launch-hq/feasibility?embed=1' })
}
