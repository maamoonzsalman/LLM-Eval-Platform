"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testCaseController_1 = require("../controllers/testCaseController");
const router = (0, express_1.Router)();
router.post('/', testCaseController_1.createTestCase);
router.post('/:testCaseId/grader', testCaseController_1.addGraderToTestCase);
exports.default = router;
