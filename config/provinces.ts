export interface ProvinceData {
  code: string
  name: string
  nameFr: string
  taxType: 'PST+GST' | 'HST' | 'GST'
  taxRate: number
  payrollComplexity: 'low' | 'medium' | 'high'
  bilingual: boolean
}

export const PROVINCES: Record<string, ProvinceData> = {
  AB: {
    code: 'AB',
    name: 'Alberta',
    nameFr: 'Alberta',
    taxType: 'GST',
    taxRate: 0.05,
    payrollComplexity: 'low',
    bilingual: false,
  },
  BC: {
    code: 'BC',
    name: 'British Columbia',
    nameFr: 'Colombie-Britannique',
    taxType: 'PST+GST',
    taxRate: 0.12,
    payrollComplexity: 'medium',
    bilingual: false,
  },
  MB: {
    code: 'MB',
    name: 'Manitoba',
    nameFr: 'Manitoba',
    taxType: 'PST+GST',
    taxRate: 0.12,
    payrollComplexity: 'medium',
    bilingual: false,
  },
  NB: {
    code: 'NB',
    name: 'New Brunswick',
    nameFr: 'Nouveau-Brunswick',
    taxType: 'HST',
    taxRate: 0.15,
    payrollComplexity: 'medium',
    bilingual: true,
  },
  NL: {
    code: 'NL',
    name: 'Newfoundland and Labrador',
    nameFr: 'Terre-Neuve-et-Labrador',
    taxType: 'HST',
    taxRate: 0.15,
    payrollComplexity: 'medium',
    bilingual: false,
  },
  NS: {
    code: 'NS',
    name: 'Nova Scotia',
    nameFr: 'Nouvelle-Écosse',
    taxType: 'HST',
    taxRate: 0.15,
    payrollComplexity: 'medium',
    bilingual: false,
  },
  NT: {
    code: 'NT',
    name: 'Northwest Territories',
    nameFr: 'Territoires du Nord-Ouest',
    taxType: 'GST',
    taxRate: 0.05,
    payrollComplexity: 'low',
    bilingual: false,
  },
  NU: {
    code: 'NU',
    name: 'Nunavut',
    nameFr: 'Nunavut',
    taxType: 'GST',
    taxRate: 0.05,
    payrollComplexity: 'low',
    bilingual: false,
  },
  ON: {
    code: 'ON',
    name: 'Ontario',
    nameFr: 'Ontario',
    taxType: 'HST',
    taxRate: 0.13,
    payrollComplexity: 'high',
    bilingual: false,
  },
  PE: {
    code: 'PE',
    name: 'Prince Edward Island',
    nameFr: 'Île-du-Prince-Édouard',
    taxType: 'HST',
    taxRate: 0.15,
    payrollComplexity: 'medium',
    bilingual: false,
  },
  QC: {
    code: 'QC',
    name: 'Quebec',
    nameFr: 'Québec',
    taxType: 'PST+GST',
    taxRate: 0.14975,
    payrollComplexity: 'high',
    bilingual: true,
  },
  SK: {
    code: 'SK',
    name: 'Saskatchewan',
    nameFr: 'Saskatchewan',
    taxType: 'PST+GST',
    taxRate: 0.11,
    payrollComplexity: 'medium',
    bilingual: false,
  },
  YT: {
    code: 'YT',
    name: 'Yukon',
    nameFr: 'Yukon',
    taxType: 'GST',
    taxRate: 0.05,
    payrollComplexity: 'low',
    bilingual: false,
  },
}

export function getProvinceComplexityScore(provinceCode: string) {
  const province = PROVINCES[provinceCode]
  if (!province) return 5
  const complexityScores = {
    low: 3,
    medium: 5,
    high: 10,
  } as const
  return complexityScores[province.payrollComplexity]
}
