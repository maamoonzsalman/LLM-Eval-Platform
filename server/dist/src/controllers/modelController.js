"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModels = exports.createModel = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createModel = async (req, res) => {
    try {
        const { name, provider } = req.body;
        const model = await prisma_1.default.model.create({
            data: {
                name,
                provider,
            },
        });
        res.status(201).json(model);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createModel = createModel;
const getModels = async (req, res) => {
    try {
        const models = await prisma_1.default.model.findMany();
        res.json(models);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getModels = getModels;
