"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ModelCard from "@/components/model-card"
import { systemPrompts as defaultSystemPrompts, findMatchingExample } from "@/lib/prompts"
import { Card, CardContent } from "@/components/ui/card"
import { SystemPrompt, TestPrompt } from "@/types/evaluation"

export default function EvaluationPage() {
  const [prompts, setPrompts] = useState<SystemPrompt[]>([])
  const [selectedSystemPrompt, setSelectedSystemPrompt] = useState<SystemPrompt | null>(null)
  const [selectedTestPrompt, setSelectedTestPrompt] = useState<TestPrompt | null>(null)
  const [loading, setLoading] = useState(false)
  const [responses, setResponses] = useState<Record<string, any>>({})

  useEffect(() => {
    const savedPrompts = localStorage.getItem('systemPrompts')
    if (savedPrompts) {
      setPrompts(JSON.parse(savedPrompts))
    } else {
      setPrompts(defaultSystemPrompts)
    }
  }, [])

  const handleSubmit = async () => {
    if (!selectedSystemPrompt || !selectedTestPrompt) return

    setLoading(true)
    setResponses({})

    // Find matching example or generate new responses
    const { responses: matchedResponses, match } = findMatchingExample(selectedSystemPrompt.text, selectedTestPrompt.text)

    if (matchedResponses) {
      const modelTimes = {
        'gpt-4o': 1000 + Math.random() * 500,
        'claude-3.5-sonnet': 1500 + Math.random() * 750,
        'Llama-2-7b-hf': 2000 + Math.random() * 1000
      }

      await Promise.all(Object.entries(modelTimes).map(async ([model, baseTime]) => {
        await new Promise(resolve => setTimeout(resolve, baseTime))
        setResponses(prev => ({
          ...prev,
          [model]: {
            ...matchedResponses[model],
            responseTime: Math.round(baseTime)
          }
        }))
      }))
    } else {
      // Handle case when no matching responses are found
      setResponses({
        'gpt-4o': { text: 'No response available for this prompt.', factuality: 0, time: 1000 },
        'claude-3.5-sonnet': { text: 'No response available for this prompt.', factuality: 0, time: 1500 },
        'Llama-2-7b-hf': { text: 'No response available for this prompt.', factuality: 0, time: 2000 }
      })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold mb-12 text-primary">
          LLM Evaluation Platform
        </h1>

        <Card className="poke-card mb-8">
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">System Prompt</label>
                <Select
                  onValueChange={(value) => {
                    const prompt = prompts.find(p => p.id === value)
                    setSelectedSystemPrompt(prompt || null)
                    setSelectedTestPrompt(null)
                  }}
                  value={selectedSystemPrompt?.id || ""}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a system prompt" />
                  </SelectTrigger>
                  <SelectContent>
                    {prompts.map((prompt) => (
                      <SelectItem key={prompt.id} value={prompt.id}>
                        {prompt.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Test Prompt</label>
                <Select
                  onValueChange={(value) => {
                    const prompt = selectedSystemPrompt?.testPrompts.find(p => p.id === value)
                    setSelectedTestPrompt(prompt || null)
                  }}
                  value={selectedTestPrompt?.id || ""}
                  disabled={!selectedSystemPrompt}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a test prompt" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedSystemPrompt?.testPrompts.map((prompt) => (
                      <SelectItem key={prompt.id} value={prompt.id}>
                        {prompt.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              onClick={handleSubmit} 
              disabled={loading || !selectedSystemPrompt || !selectedTestPrompt}
              className="w-full poke-button"
            >
              Evaluate Models
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['claude-3.5-sonnet', 'gpt-4o', 'Llama-2-7b-hf'] as const).map((model) => (
            <ModelCard
              key={model}
              model={model}
              loading={loading}
              response={responses[model]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

