import { Router } from 'express';
import { 
  createExperiment,
  getAllExperiments,
  getExperimentById,
  addTestCasesToExperiment,
  runExperimentHandler
} from '../controllers/experimentController';

const router = Router();

router.post('/', createExperiment);
router.get('/', getAllExperiments);
router.get('/:id', getExperimentById);
router.post('/:id/test-cases', addTestCasesToExperiment);
router.post('/:id/run', runExperimentHandler);

export default router;
