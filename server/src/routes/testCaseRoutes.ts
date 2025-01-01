import { Router } from 'express';
import { createTestCase, addGraderToTestCase } from '../controllers/testCaseController';

const router = Router();

router.post('/', createTestCase);
router.post('/:testCaseId/grader', addGraderToTestCase);

export default router;
