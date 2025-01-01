"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modelController_1 = require("../controllers/modelController");
const router = (0, express_1.Router)();
router.post('/', modelController_1.createModel);
router.get('/', modelController_1.getModels);
exports.default = router;
