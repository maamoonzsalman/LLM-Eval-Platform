"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runExperiment = runExperiment;
const prisma_1 = __importDefault(require("../config/prisma"));
const llmService_1 = require("./llmService");
const gradingService_1 = require("./gradingService");
async function runExperiment(experimentId) {
    // 1) fetch experiment with model + test cases
    const experiment = await prisma_1.default.experiment.findUnique({
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
    if (!experiment)
        throw new Error('Experiment not found');
    const { model } = experiment;
    const { name: modelName, provider } = model;
    const systemPrompt = experiment.systemPrompt;
    // 2) For each test case
    for (const etc of experiment.experimentTestCases) {
        const testCase = etc.testCase;
        // Call the LLM
        const startTime = Date.now();
        const responseText = await (0, llmService_1.callLLM)(provider, modelName, systemPrompt, testCase.inputMessage);
        const endTime = Date.now();
        const responseTimeMs = endTime - startTime;
        // For each grader in that test case
        for (const grader of testCase.graders) {
            const score = (0, gradingService_1.gradeResponse)({
                graderType: grader.graderType,
                graderConfig: grader.graderConfig,
                responseText,
                expectedOutput: testCase.expectedOutput,
                inputMessage: testCase.inputMessage,
            });
            await prisma_1.default.testCaseResults.create({
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
