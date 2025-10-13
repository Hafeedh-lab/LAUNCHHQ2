import type { QuickWin, WizardData, ToolRecommendation } from '@/lib/types'

export async function generateQuickWins(
  data: WizardData,
  recommendations: ToolRecommendation[]
): Promise<QuickWin[]> {
  const automationTool = recommendations.find(rec => rec.tool.category === 'automation')?.tool.id ?? 'zapier'
  const accountingTool = recommendations.find(rec => rec.tool.category === 'accounting')?.tool.id ?? 'qbo'

  return [
    {
      id: 'qw-1',
      title: 'Invoice reminder cadence',
      description: 'Trigger bilingual reminders at 3/7/14 days with payment links and CRA-friendly notes.',
      steps: [
        'Draft reminder templates in both English and French.',
        'Use automation tool to watch for open invoices in accounting.',
        'Send reminders with payment link and GST/HST breakdown.',
        'Pause reminders automatically when payment arrives.',
        'Review monthly aging to tweak cadence.',
      ],
      estimatedHoursSavedPerMonth: 5,
      risks: ['Ensure reminders stop after payment to avoid noise.'],
      notes: ['Map bilingual messaging if you serve Quebec customers.'],
      toolsInvolved: [automationTool, accountingTool],
      priority: 1,
    },
    {
      id: 'qw-2',
      title: 'Payroll to GL sync',
      description: 'Post payroll journals into accounting after each run with CRA remittance tracking.',
      steps: [
        'Map payroll earnings and deductions to GL accounts.',
        'Create automation to trigger after payroll approval.',
        'Generate journal entry with proper GST/QST classifications.',
        'Log CRA remittance deadlines and create tasks.',
        'Spot-check first two cycles before automating fully.',
      ],
      estimatedHoursSavedPerMonth: 3,
      risks: ['Incorrect mapping can misstate source deductions.'],
      notes: ['Keep ROE exports accessible for Service Canada audits.'],
      toolsInvolved: [accountingTool],
      priority: 2,
    },
    {
      id: 'qw-3',
      title: 'KPI snapshot dashboard',
      description: 'Roll up sales, margin, and cash KPIs in a weekly Notion or Looker Studio board.',
      steps: [
        'Define 5 KPIs that inform your leadership standup.',
        'Sync commerce, accounting, and CRM data into a single sheet.',
        'Build bilingual dashboard labels where needed.',
        'Schedule Monday morning refresh automations.',
        'Review data governance steps with stakeholders.',
      ],
      estimatedHoursSavedPerMonth: 4,
      risks: ['Validate metric definitions before publishing widely.'],
      notes: ['Use provincial tax fields to segment Quebec vs. ROC results.'],
      toolsInvolved: [automationTool],
      priority: 3,
    },
  ]
}
