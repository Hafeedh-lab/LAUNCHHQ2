import type { WizardData, ToolRecommendation, IntegrationMap } from '@/lib/types'

export async function generateIntegrationMap(
  data: WizardData,
  recommendations: ToolRecommendation[]
): Promise<IntegrationMap> {
  const nodes = recommendations.map(rec => ({
    id: rec.tool.id,
    label: rec.tool.name,
    type: 'tool' as const,
    toolId: rec.tool.id,
  }))

  const baseMermaid = buildMermaid(nodes)

  return {
    nodes,
    edges: [],
    mermaidCode: baseMermaid,
    svgRendered: '',
  }
}

function buildMermaid(nodes: { id: string; label: string }[]) {
  const lines = ['graph TD']
  nodes.forEach(node => {
    lines.push(`  ${node.id}([${node.label}])`)
  })
  if (nodes.length >= 2) {
    for (let i = 0; i < nodes.length - 1; i++) {
      lines.push(`  ${nodes[i].id} --> ${nodes[i + 1].id}`)
    }
  }
  return lines.join('\n')
}
