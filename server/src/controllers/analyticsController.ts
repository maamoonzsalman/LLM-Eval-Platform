import { Request, Response } from 'express';
import prisma from '../config/prisma';

/**
 * Compare multiple experiments side-by-side.
 * Input (POST /api/analytics/compare):
 *  { experimentIds: [ "expId1", "expId2", ... ] }
 */
export const compareExperiments = async (req: Request, res: Response) => {
  try {
    const { experimentIds } = req.body as { experimentIds: string[] };

    // fetch experiments with results
    const experiments = await prisma.experiment.findMany({
      where: {
        id: { in: experimentIds },
      },
      include: {
        testCaseResults: true,
        experimentTestCases: {
          include: { testCase: true },
        },
        model: true,
      },
    });

    // We'll group results by testCaseId:
    // output structure => { [testCaseId]: { testCaseInput: ..., results: { [experimentId]: { modelName:..., responseText:..., score:..., ... } } } }
    const output: any = {};

    // We iterate each experiment, each result
    for (const exp of experiments) {
      const expModel = exp.model;
      for (const etc of exp.experimentTestCases) {
        const tcase = etc.testCase;
        if (!output[tcase.id]) {
          output[tcase.id] = {
            testCase: tcase,
            results: {},
          };
        }
      }

      for (const r of exp.testCaseResults) {
        const testCaseId = r.testCaseId;
        // ensure structure
        if (!output[testCaseId]) {
          output[testCaseId] = {
            testCase: null,
            results: {},
          };
        }
        if (!output[testCaseId].results[exp.id]) {
          output[testCaseId].results[exp.id] = [];
        }
        // We'll store each grader result as an item in an array
        output[testCaseId].results[exp.id].push({
          model: expModel.name,
          modelProvider: expModel.provider,
          responseText: r.responseText,
          responseTimeMs: r.responseTimeMs,
          graderType: r.graderType,
          score: r.score,
        });
      }
    }

    res.json({ experiments, comparison: output });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
