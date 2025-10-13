import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const content = `Placeholder PDF for submission ${params.id}`
  return new NextResponse(Buffer.from(content, 'utf-8'), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${params.id}.pdf"`,
    },
  })
}
