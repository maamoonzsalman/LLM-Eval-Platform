const { callLLM } = require('./src/services/llmService');

async function testLLMService() {
  try {
    
    console.log('Testing OpenAI...');
    const openaiResponse = await callLLM(
      'openai',
      'gpt-4',
      'You are a helpful assistant.',
      'What is the capital of France?'
    );
    console.log('OpenAI Response:', openaiResponse);
    

    
    console.log('Testing Anthropic...');
    const anthropicResponse = await callLLM(
      'anthropic',
      'claude-2',
      'You are a helpful assistant.',
      'What is the capital of France?'
    );
    console.log('Anthropic Response:', anthropicResponse);
    

    console.log('Testing HuggingFace...');
    const huggingFaceResponse = await callLLM(
      'huggingface',
      'meta-llama/Llama-2-7b-chat-hf',
      'You are a helpful assistant.',
      'What is the capital of France?'
    );
    console.log('HuggingFace Response:', huggingFaceResponse);
  } catch (error) {
    console.error('Error during testing:', error);
  }
}

testLLMService();
