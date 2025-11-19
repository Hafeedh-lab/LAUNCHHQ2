import { z } from 'zod'
import type { WizardData, ToolCategory } from '@/lib/types'

const toolCategories: ToolCategory[] = [
  'accounting',
  'payroll',
  'pos_ecom',
  'crm',
  'inventory',
  'payments',
  'collaboration',
  'automation',
]

export const wizardSchema = z.object({
  industry: z.enum(['retail_storefront', 'ecommerce', 'services_agency', 'trades', 'saas', 'nonprofit']),
  teamSize: z.enum(['solo', '2-5', '6-10', '11-30', '31+']),
  revenueBand: z.enum(['<250k', '250k-1m', '1m-5m', '>5m']),
  province: z.enum(['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT']),
  bilingualQC: z.boolean().default(false),
  currentTools: z.object({
    accounting: z.array(z.string()).default([]),
    payroll: z.array(z.string()).default([]),
    pos_ecom: z.array(z.string()).default([]),
    crm: z.array(z.string()).default([]),
    inventory: z.array(z.string()).default([]),
    payments: z.array(z.string()).default([]),
    collaboration: z.array(z.string()).default([]),
    automation: z.array(z.string()).default([]),
  }).default({
    accounting: [],
    payroll: [],
    pos_ecom: [],
    crm: [],
    inventory: [],
    payments: [],
    collaboration: [],
    automation: [],
  }),
  topPains: z.array(z.enum([
    'receipt_chaos',
    'slow_invoicing',
    'abandoned_invoices',
    'duplicate_entry',
    'inventory_mismatch',
    'payroll_errors',
    'no_kpi_visibility',
    'manual_quotes_to_invoices',
    'customer_faqs',
    'month_end_delays',
  ])).min(1, 'Select at least one pain point').max(3, 'Choose up to three pains'),
  csvUploaded: z.boolean().default(false),
  csvFileId: z.string().optional(),
  csvSummary: z
    .object({
      rowCount: z.number().int().positive(),
      columns: z.array(z.string()),
      dateRange: z
        .object({ start: z.string(), end: z.string() })
        .optional(),
    })
    .optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  processMaturity: z.enum(['ad-hoc', 'documented', 'optimized']).optional(),
  automationGoals: z.string().max(400).optional(),
  budgetComfort: z.enum(['lean', 'balanced', 'all-in']).optional(),
})

export const gateSchema = z.object({
  email: z.string().email('Enter a valid work email'),
  company: z.string().min(2, 'Company name is required'),
  name: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required to proceed (PIPEDA)' }),
  }),
})

export const defaultWizardValues: WizardData = {
  industry: 'ecommerce',
  teamSize: '2-5',
  revenueBand: '250k-1m',
  province: 'ON',
  bilingualQC: false,
  currentTools: toolCategories.reduce(
    (acc, category) => {
      acc[category] = []
      return acc
    },
    {} as Record<ToolCategory, string[]>
  ),
  topPains: ['duplicate_entry'],
  csvUploaded: false,
  processMaturity: 'ad-hoc',
  automationGoals: '',
  budgetComfort: 'balanced',
}
