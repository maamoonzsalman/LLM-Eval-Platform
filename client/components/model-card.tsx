"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LoadingDots } from "./loading-dots"

interface ModelCardProps {
  model: string
  loading: boolean
  response?: {
    text: string
    factuality: number
    responseTime: number
  }
  matchType?: 'exact' | 'similar' | 'none'
}

export default function ModelCard({ model, loading, response, matchType }: ModelCardProps) {
  const getModelColor = (model: string) => {
    return 'bg-black text-white'
  }

  const getFactualityColor = (score: number) => {
    if (score >= 0.85) return 'text-green-600'
    if (score >= 0.75) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <Card className="poke-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-md text-sm font-medium ${getModelColor(model)}`}>
              {model}
            </span>
            {matchType === 'similar' && (
              <span className="text-xs text-yellow-600">(Similar Match)</span>
            )}
          </div>
          {response && (
            <span className="text-sm font-medium text-primary">
              {response.responseTime}ms
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-2 min-h-[300px]">
        {loading ? (
          <div className="h-full flex items-center justify-center">
            <LoadingDots />
          </div>
        ) : response ? (
          <div className="space-y-4">
            <div className="prose prose-sm">
              {response.text}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-primary">Factuality:</span>
              <span className={`font-bold ${getFactualityColor(response.factuality)}`}>
                {Math.round(response.factuality * 100)}%
              </span>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Waiting for evaluation...
          </div>
        )}
      </CardContent>
    </Card>
  )
}

