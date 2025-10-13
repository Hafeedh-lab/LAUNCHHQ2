import { generatePDF } from '@/lib/pdf/generator'

// This is a placeholder test that ensures the generator resolves.
test('generatePDF returns a buffer', async () => {
  const pdf = await generatePDF({
    id: 'preview',
    wizardData: { industry: 'ecommerce', teamSize: '2-5', revenueBand: '250k-1m', province: 'ON', bilingualQC: false, currentTools: { accounting: [], payroll: [], pos_ecom: [], crm: [], inventory: [], payments: [], collaboration: [], automation: [] }, topPains: ['duplicate_entry'], csvUploaded: false },
    recommendation: { stack: [], integrationMap: { nodes: [], edges: [], mermaidCode: '', svgRendered: '' }, quickWins: [], budget: { saas: { low: 0, avg: 0, high: 0, breakdown: [] }, implementation: { low: 0, high: 0, assumptions: [] }, paybackMonths: { low: 0, avg: 0, high: 0 }, assumptions: [] }, checklist: [], generatedAt: new Date().toISOString() },
    events: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as any)
  expect(Buffer.isBuffer(pdf)).toBe(true)
})
