"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const examplePrompts = [
  {
    domain: "Climate Change",
    systemPrompt: "You are a climate change expert. You will return accurate answers to any query regarding climate change.",
    testPrompt: "What strategies or innovations do you think are most critical for mitigating the effects of climate change on a global scale?"
  },
  {
    domain: "Cybersecurity",
    systemPrompt: "You are a cybersecurity expert. Provide detailed, technical responses to questions about computer and network security.",
    testPrompt: "What are the most effective strategies for protecting against ransomware attacks in enterprise environments?"
  },
  {
    domain: "Finance",
    systemPrompt: "You are a financial advisor with expertise in personal and corporate finance. Provide clear, actionable financial advice.",
    testPrompt: "What are the key considerations when building a diversified investment portfolio for long-term retirement planning?"
  },
  {
    domain: "Healthcare",
    systemPrompt: "You are a healthcare professional with broad medical knowledge. Provide accurate, evidence-based medical information.",
    testPrompt: "What are the most promising emerging technologies in personalized medicine and their potential impact on patient care?"
  }
]

export default function PromptList() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Example Prompts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {examplePrompts.map((prompt, index) => (
          <div key={prompt.domain} className="space-y-4">
            <div className="font-semibold text-lg">{prompt.domain}</div>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="text-sm font-medium">System Prompt:</div>
                <div className="text-sm bg-muted p-3 rounded-md">
                  {prompt.systemPrompt}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Test Prompt:</div>
                <div className="text-sm bg-muted p-3 rounded-md">
                  {prompt.testPrompt}
                </div>
              </div>
            </div>
            {index < examplePrompts.length - 1 && (
              <Separator className="my-4" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

