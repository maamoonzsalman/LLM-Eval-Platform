"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callLLM = callLLM;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai_1 = require("openai");
// Initialize OpenAI
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
// Anthropic API Key
const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
// HuggingFace API Key (e.g., Llama2 or custom server)
const llama2ApiKey = process.env.LLAMA2_API_KEY;
// Call LLM function
async function callLLM(provider, modelName, systemPrompt, userMessage) {
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
async function callOpenAiChat(modelName, systemPrompt, userMessage) {
    var _a, _b;
    const maxTokens = 300;
    const response = await openai.chat.completions.create({
        model: modelName, // e.g., "gpt-4"
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage },
        ],
        max_tokens: maxTokens
    });
    return ((_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || '';
}
// Anthropic Chat Completion
async function callAnthropicChat(modelName, systemPrompt, userMessage) {
    var _a;
    const url = 'https://api.anthropic.com/v1/complete';
    const prompt = `${systemPrompt}\n\nHuman: ${userMessage}\n\nAssistant:`;
    const maxTokens = 300;
    try {
        const response = await axios_1.default.post(url, {
            prompt,
            model: modelName, // e.g., "claude-2"
            max_tokens_to_sample: maxTokens,
        }, {
            headers: {
                'x-api-key': anthropicApiKey,
                'Content-Type': 'application/json',
                'anthropic-version': '2023-06-01', // Add the correct version here
            },
        });
        return response.data.completion || '';
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Axios Error:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        }
        else {
            console.error('Unknown Error:', error);
        }
        throw error; // Re-throw for further handling
    }
}
// HuggingFace Chat Completion
async function callHuggingFaceChat(modelName, systemPrompt, userMessage) {
    var _a, _b, _c;
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
        Authorization: `Bearer ${llama2ApiKey}`,
    };
    try {
        const response = await axios_1.default.post(url, payload, { headers });
        const rawText = ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.generated_text) || '';
        // Clean response: Extract only assistant lines
        const cleanText = rawText
            .split('\n')
            .filter((line) => line.startsWith('Assistant:'))
            .map((line) => line.replace('Assistant:', '').trim())
            .join(' ');
        return cleanText;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Axios Error:', ((_c = error.response) === null || _c === void 0 ? void 0 : _c.data) || error.message);
        }
        else {
            console.error('Unknown Error:', error);
        }
        throw error; // Re-throw for further handling
    }
}
