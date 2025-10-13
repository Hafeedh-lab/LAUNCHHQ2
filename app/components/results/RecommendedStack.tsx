import type { ToolRecommendation } from '@/lib/types'
import { Badge } from '@/app/components/shared/Badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/shared/Card'
import { toTitleCase } from '@/lib/utils'

export default function RecommendedStack({ items }: { items: ToolRecommendation[] }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-3xl font-bold text-ink">Recommended stack</h2>
        <p className="text-sm text-neutral-600">
          Canada-ready tools prioritized by impact and bilingual coverage. Actions highlight whether to add, keep, or consider adjustments.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(item => (
          <Card key={item.tool.id} className="h-full">
            <CardHeader className="items-start">
              <Badge variant={badgeVariant(item.action)}>{item.action.toUpperCase()}</Badge>
              <Badge variant={item.priority === 'must' ? 'danger' : item.priority === 'should' ? 'warning' : 'default'}>
                {toTitleCase(item.priority)} priority
              </Badge>
            </CardHeader>
            <CardContent>
              <CardTitle>{item.tool.name}</CardTitle>
              <CardDescription>{item.rationale}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function badgeVariant(action: ToolRecommendation['action']) {
  switch (action) {
    case 'add':
      return 'success'
    case 'keep':
      return 'default'
    case 'replace':
      return 'warning'
    case 'consider':
      return 'warning'
    default:
      return 'default'
  }
}
