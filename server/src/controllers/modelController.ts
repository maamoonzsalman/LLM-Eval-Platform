import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const createModel = async (req: Request, res: Response) => {
  try {
    const { name, provider } = req.body;
    const model = await prisma.model.create({
      data: {
        name,
        provider,
      },
    });
    res.status(201).json(model);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getModels = async (req: Request, res: Response) => {
  try {
    const models = await prisma.model.findMany();
    res.json(models);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
