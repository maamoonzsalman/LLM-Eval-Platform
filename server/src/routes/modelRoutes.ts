import { Router } from 'express';
import { createModel, getModels } from '../controllers/modelController';

const router = Router();

router.post('/', createModel);
router.get('/', getModels);

export default router;
