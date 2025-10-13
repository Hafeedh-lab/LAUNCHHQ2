import type { Recommendation, WizardData } from '@/lib/types'

interface PDFTemplateProps {
  wizardData: WizardData
  recommendation: Recommendation
}

export default function PDFTemplate({ wizardData, recommendation }: PDFTemplateProps) {
  return (
    <div>
      <h1>Stack Flight Plan for {wizardData.province}</h1>
      <p>Generated at {recommendation.generatedAt}</p>
    </div>
  )
}
