import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

import { OpenAI } from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Anthropic API Key
const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

// HuggingFace API Key (e.g., Llama2 or custom server)
const llama2ApiKey = process.env.LLAMA2_API_KEY;

// Call LLM function
export async function callLLM(
  provider: string,
  modelName: string,
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  switch (provider.toLowerCase()) {
    case 'openai':
      return callOpenAiChat(modelName, systemPrompt, userMessage);
    case 'anthropic':
      return callAnthropicChat(modelName, systemPrompt, userMessage);
    case 'huggingface':
      return callHuggingFaceChat(modelName, systemPrompt, userMessage);
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
}

// OpenAI Chat Completion
async function callOpenAiChat(
  modelName: string,
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  const maxTokens = 300
  const response = await openai.chat.completions.create({
    model: modelName, // e.g., "gpt-4"
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
    max_tokens: maxTokens
  });

  return response.choices[0]?.message?.content || '';
}

// Anthropic Chat Completion
async function callAnthropicChat(
  modelName: string,
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  const url = 'https://api.anthropic.com/v1/complete';
  const prompt = `${systemPrompt}\n\nHuman: ${userMessage}\n\nAssistant:`;
  const maxTokens = 300;
  try {
    const response = await axios.post(
      url,
      {
        prompt,
        model: modelName, // e.g., "claude-2"
        max_tokens_to_sample: maxTokens,
      },
      {
        headers: {
          'x-api-key': anthropicApiKey!,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01', // Add the correct version here
        },
      }
    );

    return response.data.completion || '';
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.response?.data || error.message);
    } else {
      console.error('Unknown Error:', error);
    }
    throw error; // Re-throw for further handling
  }
}


// HuggingFace Chat Completion
async function callHuggingFaceChat(
  modelName: string,
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  const maxTokens = 300;
  const url = `https://api-inference.huggingface.co/models/${modelName}`;
  const payload = {
    inputs: `${systemPrompt}\nUser: ${userMessage}\nAssistant:`,
    parameters: {
      max_length: maxTokens,
      stop: ["User:"],
    },
  };
  const headers = {
    Authorization: `Bearer ${llama2ApiKey!}`,
  };

  try {
    const response = await axios.post(url, payload, { headers });
    const rawText = response.data?.[0]?.generated_text || '';

    // Clean response: Extract only assistant lines
    const cleanText = rawText
      .split('\n')
      .filter((line: string) => line.startsWith('Assistant:'))
      .map((line: string) => line.replace('Assistant:', '').trim())
      .join(' ');

    return cleanText;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.response?.data || error.message);
    } else {
      console.error('Unknown Error:', error);
    }
    throw error; // Re-throw for further handling
  }
}