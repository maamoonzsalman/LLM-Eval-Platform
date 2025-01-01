"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runExperimentHandler = exports.addTestCasesToExperiment = exports.getExperimentById = exports.getAllExperiments = exports.createExperiment = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const experimentService_1 = require("../services/experimentService");
const createExperiment = async (req, res) => {
    try {
        const { name, description, systemPrompt, modelId } = req.body;
        const experiment = await prisma_1.default.experiment.create({
            data: {
                name,
                description,
                systemPrompt,
                modelId,
            },
        });
        res.status(201).json(experiment);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createExperiment = createExperiment;
const getAllExperiments = async (req, res) => {
    try {
        const experiments = await prisma_1.default.experiment.findMany({
            include: { model: true }
        });
        res.json(experiments);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllExperiments = getAllExperiments;
const getExperimentById = async (req, res) => {
    try {
        const { id } = req.params;
        const experiment = await prisma_1.default.experiment.findUnique({
            where: { id },
            include: {
                model: true,
                experimentTestCases: {
                    include: {
                        testCase: {
                            include: { graders: true }
                        }
                    }
                },
                testCaseResults: true
            },
        });
        if (!experiment) {
            return res.status(404).json({ error: 'Experiment not found' });
        }
        res.json(experiment);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getExperimentById = getExperimentById;
const addTestCasesToExperiment = async (req, res) => {
    try {
        const { id } = req.params; // experimentId
        const { testCaseIds } = req.body; // array of strings (testCase IDs)
        const data = testCaseIds.map((tcId) => ({
            experimentId: id,
            testCaseId: tcId,
        }));
        await prisma_1.default.experimentTestCases.createMany({
            data,
            skipDuplicates: true,
        });
        res.json({ message: 'Test cases added to experiment' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.addTestCasesToExperiment = addTestCasesToExperiment;
const runExperimentHandler = async (req, res) => {
    try {
        const { id } = req.params; // experimentId
        const result = await (0, experimentService_1.runExperiment)(id);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.runExperimentHandler = runExperimentHandler;
