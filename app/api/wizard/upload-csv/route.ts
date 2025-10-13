import { NextResponse } from 'next/server'

export async function POST() {
  // CSV uploads will be scanned and summarized here.
  return NextResponse.json({ ok: true, fileId: 'mock-file', summary: { rowCount: 120, columns: ['invoice_id', 'amount', 'status'] } })
}
