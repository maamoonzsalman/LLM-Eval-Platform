import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const createTestCase = async (req: Request, res: Response) => {
  try {
    const { inputMessage, expectedOutput } = req.body;
    const testCase = await prisma.testCase.create({
      data: {
        inputMessage,
        expectedOutput,
      },
    });
    res.status(201).json(testCase);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addGraderToTestCase = async (req: Request, res: Response) => {
  try {
    const { testCaseId } = req.params;
    const { graderType, graderConfig } = req.body;

    const grader = await prisma.testCaseGraders.create({
      data: {
        testCaseId,
        graderType,
        graderConfig,
      },
    });
    res.status(201).json(grader);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
