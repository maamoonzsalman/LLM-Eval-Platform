"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingDots } from "./loading-dots"

interface ModelResponseProps {
  model: string
  loading: boolean
  response?: {
    text: string
    factuality: number
    responseTime: number
  }
  matchType?: 'exact' | 'similar' | 'none'
}

export default function ModelResponsePanel({ model, loading, response, matchType }: ModelResponseProps) {
  const getBadgeColor = (model: string) => {
    switch (model) {
      case 'claude-3.5-sonnet':
        return 'bg-purple-100 text-purple-800'
      case 'gpt-4o':
        return 'bg-green-100 text-green-800'
      case 'Llama-2-7b-hf':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getFactualityColor = (score: number) => {
    if (score >= 0.85) return 'text-green-600'
    if (score >= 0.75) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <Card className="flex-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(model)}`}>
              {model}
            </span>
            {matchType === 'similar' && (
              <span className="text-xs text-yellow-600">(Similar prompt match)</span>
            )}
          </div>
          {response && (
            <span className="text-sm text-muted-foreground">
              {response.responseTime}ms
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="min-h-[300px] relative">
        {loading ? (
          <LoadingDots />
        ) : response ? (
          <div className="space-y-4">
            <div className="prose prose-sm dark:prose-invert">
              {response.text}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Factuality:</span>
              <span className={`font-medium ${getFactualityColor(response.factuality)}`}>
                {Math.round(response.factuality * 100)}%
              </span>
            </div>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            The model response will appear here...
          </div>
        )}
      </CardContent>
    </Card>
  )
}

