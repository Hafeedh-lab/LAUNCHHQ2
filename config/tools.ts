import type { Tool, ToolCategory } from '@/lib/types'

export const TOOLS_CATALOG: Tool[] = [
  {
    id: 'qbo',
    name: 'QuickBooks Online',
    category: 'accounting',
    canadaReady: true,
    bilingual: true,
    provinces: ['ON', 'QC', 'BC', 'AB', 'MB', 'SK', 'NS', 'NB', 'NL', 'PE', 'NT', 'NU', 'YT'],
  },
  {
    id: 'xero',
    name: 'Xero',
    category: 'accounting',
    canadaReady: true,
    bilingual: false,
    provinces: ['ON', 'BC', 'AB', 'MB', 'SK', 'NS', 'NB', 'NL', 'PE', 'NT', 'NU', 'YT'],
  },
  {
    id: 'wagepoint',
    name: 'Wagepoint',
    category: 'payroll',
    canadaReady: true,
    bilingual: true,
    provinces: ['ON', 'QC', 'BC', 'AB', 'MB', 'SK', 'NS', 'NB', 'NL', 'PE'],
  },
  {
    id: 'qb_payroll',
    name: 'QuickBooks Payroll',
    category: 'payroll',
    canadaReady: true,
    bilingual: true,
  },
  {
    id: 'ceridian',
    name: 'Ceridian Dayforce',
    category: 'payroll',
    canadaReady: true,
    bilingual: true,
  },
  {
    id: 'square',
    name: 'Square',
    category: 'pos_ecom',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'pos_ecom',
    canadaReady: true,
    bilingual: true,
  },
  {
    id: 'lightspeed',
    name: 'Lightspeed',
    category: 'pos_ecom',
    canadaReady: true,
    bilingual: true,
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'crm',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'cin7',
    name: 'Cin7',
    category: 'inventory',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'dear',
    name: 'DEAR Inventory',
    category: 'inventory',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payments',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'moneris',
    name: 'Moneris',
    category: 'payments',
    canadaReady: true,
    bilingual: true,
  },
  {
    id: 'google_workspace',
    name: 'Google Workspace',
    category: 'collaboration',
    canadaReady: true,
    bilingual: true,
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'collaboration',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'm365',
    name: 'Microsoft 365',
    category: 'collaboration',
    canadaReady: true,
    bilingual: true,
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'automation',
    canadaReady: true,
    bilingual: false,
  },
  {
    id: 'make',
    name: 'Make',
    category: 'automation',
    canadaReady: true,
    bilingual: false,
  },
]

export function getToolById(id: string) {
  return TOOLS_CATALOG.find(tool => tool.id === id)
}

export function getToolsByCategory(category: ToolCategory) {
  return TOOLS_CATALOG.filter(tool => tool.category === category)
}

export function getCanadaReadyTools() {
  return TOOLS_CATALOG.filter(tool => tool.canadaReady)
}
