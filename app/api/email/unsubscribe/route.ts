import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ ok: true, unsubscribed: body.email, timestamp: new Date().toISOString() })
}
