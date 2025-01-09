import prisma from '../config/prisma';
import { callLLM } from './llmService';
import { gradeResponse } from './gradingService';

export async function runExperiment(experimentId: string) {
  // 1) Fetch experiment with model + test cases
  const experiment = await prisma.experiment.findUnique({
    where: { id: experimentId },
    include: {
      model: true,
      experimentTestCases: {
        include: {
          testCase: {
            include: { graders: true },
          },
        },
      },
    },
  });

  if (!experiment) throw new Error('Experiment not found');

  const { model } = experiment;
  const { name: modelName, provider } = model;
  const systemPrompt = experiment.systemPrompt;

  // 2) For each test case
  for (const etc of experiment.experimentTestCases) {
    const testCase = etc.testCase;

    // Ensure expectedOutput is defined or provide a default value
    const expectedOutput = testCase.expectedOutput ?? '';

    // Call the LLM
    const startTime = Date.now();
    const responseText = await callLLM(provider, modelName, systemPrompt, testCase.inputMessage);
    const endTime = Date.now();

    const responseTimeMs = endTime - startTime;

    // For each grader in that test case
    for (const grader of testCase.graders) {
      const score = gradeResponse({
        graderType: grader.graderType,
        graderConfig: grader.graderConfig,
        responseText,
        expectedOutput,
        inputMessage: testCase.inputMessage,
      });

      await prisma.testCaseResults.create({
        data: {
          experimentId: experiment.id,
          testCaseId: testCase.id,
          modelId: model.id,
          responseText,
          responseTimeMs,
          graderType: grader.graderType,
          score,
        },
      });
    }
  }

  return { message: `Experiment "${experiment.name}" run completed.` };
}
