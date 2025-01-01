import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
const apiClient = axios.create({
  baseURL: API_URL,
});

// Models
export async function createModel(payload: { name: string; provider: string }) {
  const { data } = await apiClient.post('/models', payload);
  return data;
}
export async function getModels() {
  const { data } = await apiClient.get('/models');
  return data;
}

// Experiments
export async function createExperiment(payload: {
  name: string;
  description?: string;
  systemPrompt: string;
  modelId: string;
}) {
  const { data } = await apiClient.post('/experiments', payload);
  return data;
}
export async function getExperiments() {
  const { data } = await apiClient.get('/experiments');
  return data;
}
export async function getExperimentById(id: string) {
  const { data } = await apiClient.get(`/experiments/${id}`);
  return data;
}
export async function addTestCasesToExperiment(id: string, testCaseIds: string[]) {
  const { data } = await apiClient.post(`/experiments/${id}/test-cases`, { testCaseIds });
  return data;
}
export async function runExperiment(id: string) {
  const { data } = await apiClient.post(`/experiments/${id}/run`);
  return data;
}

// Test Cases
export async function createTestCase(payload: { inputMessage: string; expectedOutput?: string }) {
  const { data } = await apiClient.post('/test-cases', payload);
  return data;
}
export async function addGraderToTestCase(testCaseId: string, graderType: string, graderConfig?: any) {
  const { data } = await apiClient.post(`/test-cases/${testCaseId}/grader`, { graderType, graderConfig });
  return data;
}

// Analytics
export async function compareExperiments(experimentIds: string[]) {
  const { data } = await apiClient.post('/analytics/compare', { experimentIds });
  return data;
}

export default apiClient;
