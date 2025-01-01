import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { runExperiment } from '../services/experimentService';

export const createExperiment = async (req: Request, res: Response) => {
  try {
    const { name, description, systemPrompt, modelId } = req.body;
    const experiment = await prisma.experiment.create({
      data: {
        name,
        description,
        systemPrompt,
        modelId,
      },
    });
    res.status(201).json(experiment);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllExperiments = async (req: Request, res: Response) => {
  try {
    const experiments = await prisma.experiment.findMany({
      include: { model: true }
    });
    res.json(experiments);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getExperimentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const experiment = await prisma.experiment.findUnique({
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
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addTestCasesToExperiment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // experimentId
    const { testCaseIds } = req.body; // array of strings (testCase IDs)

    const data = testCaseIds.map((tcId: string) => ({
      experimentId: id,
      testCaseId: tcId,
    }));

    await prisma.experimentTestCases.createMany({
      data,
      skipDuplicates: true,
    });

    res.json({ message: 'Test cases added to experiment' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const runExperimentHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // experimentId
    const result = await runExperiment(id);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
