"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGraderToTestCase = exports.createTestCase = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createTestCase = async (req, res) => {
    try {
        const { inputMessage, expectedOutput } = req.body;
        const testCase = await prisma_1.default.testCase.create({
            data: {
                inputMessage,
                expectedOutput,
            },
        });
        res.status(201).json(testCase);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createTestCase = createTestCase;
const addGraderToTestCase = async (req, res) => {
    try {
        const { testCaseId } = req.params;
        const { graderType, graderConfig } = req.body;
        const grader = await prisma_1.default.testCaseGraders.create({
            data: {
                testCaseId,
                graderType,
                graderConfig,
            },
        });
        res.status(201).json(grader);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.addGraderToTestCase = addGraderToTestCase;
