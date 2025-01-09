"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analyticsController_1 = require("../controllers/analyticsController");
const router = (0, express_1.Router)();
// We'll pass multiple experimentIds for side-by-side comparison
router.post('/compare', analyticsController_1.compareExperiments);
exports.default = router;
