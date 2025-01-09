export interface ModelResponse {
  text: string
  time: number
  factuality: number
}

export interface TestPrompt {
  id: string
  text: string
  responses: Record<string, ModelResponse>
}

export interface SystemPrompt {
  id: string
  text: string
  testPrompts: TestPrompt[]
}

export interface Experiment {
  id: string
  name: string
  systemPromptId: string
  testPromptId: string
  selectedModels: string[]
}

export type ModelType = 'claude-3.5-sonnet' | 'gpt-4o' | 'Llama-2-7b-hf'

