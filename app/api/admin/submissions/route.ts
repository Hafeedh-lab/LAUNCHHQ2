import { NextResponse } from 'next/server'

const submissions = [
  { id: 'preview', company: 'Maple & Main Co.', score: 78, segment: 'hot', createdAt: '2024-02-12' },
  { id: 'sample-002', company: 'Prairie Goods Ltd.', score: 62, segment: 'warm', createdAt: '2024-02-10' },
]

export async function GET() {
  return NextResponse.json({ ok: true, submissions })
}
