"use client"

import { useState, useEffect } from 'react'
import { systemPrompts as defaultSystemPrompts } from '@/lib/prompts'
import { SystemPrompt, TestPrompt } from '@/types/evaluation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PromptsPage() {
  const [prompts, setPrompts] = useState<SystemPrompt[]>([])
  const [newSystemPrompt, setNewSystemPrompt] = useState('')
  const [newTestPrompt, setNewTestPrompt] = useState('')
  const [selectedSystemPrompt, setSelectedSystemPrompt] = useState<SystemPrompt | null>(null)

  // Load prompts from localStorage or use defaults
  useEffect(() => {
    const savedPrompts = localStorage.getItem('systemPrompts')
    if (savedPrompts) {
      setPrompts(JSON.parse(savedPrompts))
    } else {
      setPrompts(defaultSystemPrompts)
      localStorage.setItem('systemPrompts', JSON.stringify(defaultSystemPrompts))
    }
  }, [])

  const addSystemPrompt = () => {
    if (newSystemPrompt.trim()) {
      const newPrompt: SystemPrompt = {
        id: Date.now().toString(),
        text: newSystemPrompt.trim(),
        testPrompts: []
      }
      const updatedPrompts = [...prompts, newPrompt]
      setPrompts(updatedPrompts)
      localStorage.setItem('systemPrompts', JSON.stringify(updatedPrompts))
      setNewSystemPrompt('')
    }
  }

  const addTestPrompt = () => {
    if (selectedSystemPrompt && newTestPrompt.trim()) {
      const newPrompt: TestPrompt = {
        id: Date.now().toString(),
        text: newTestPrompt.trim(),
        responses: {}
      }
      const updatedPrompts = prompts.map(prompt =>
        prompt.id === selectedSystemPrompt.id
          ? { ...prompt, testPrompts: [...prompt.testPrompts, newPrompt] }
          : prompt
      )
      setPrompts(updatedPrompts)
      localStorage.setItem('systemPrompts', JSON.stringify(updatedPrompts))
      setNewTestPrompt('')
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Manage Prompts</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add System Prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={newSystemPrompt}
            onChange={(e) => setNewSystemPrompt(e.target.value)}
            placeholder="Enter new system prompt"
            className="mb-4"
          />
          <Button onClick={addSystemPrompt}>Add System Prompt</Button>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add Test Prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <select
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setSelectedSystemPrompt(prompts.find(p => p.id === e.target.value) || null)}
            value={selectedSystemPrompt?.id || ""}
          >
            <option value="">Select a system prompt</option>
            {prompts.map(prompt => (
              <option key={prompt.id} value={prompt.id}>{prompt.text}</option>
            ))}
          </select>
          <Textarea
            value={newTestPrompt}
            onChange={(e) => setNewTestPrompt(e.target.value)}
            placeholder="Enter new test prompt"
            className="mb-4"
          />
          <Button onClick={addTestPrompt} disabled={!selectedSystemPrompt}>Add Test Prompt</Button>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Existing Prompts</h2>
      {prompts.map(systemPrompt => (
        <Card key={systemPrompt.id} className="mb-4">
          <CardHeader>
            <CardTitle>{systemPrompt.text}</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Test Prompts:</h3>
            <ul className="list-disc pl-5">
              {systemPrompt.testPrompts.map(testPrompt => (
                <li key={testPrompt.id}>{testPrompt.text}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

