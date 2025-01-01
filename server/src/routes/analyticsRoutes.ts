import { Router } from 'express';
import { compareExperiments } from '../controllers/analyticsController';

const router = Router();

// We'll pass multiple experimentIds for side-by-side comparison
router.post('/compare', compareExperiments);

export default router;
