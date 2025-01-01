"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load ENV
dotenv_1.default.config();
const experimentRoutes_1 = __importDefault(require("./routes/experimentRoutes"));
const testCaseRoutes_1 = __importDefault(require("./routes/testCaseRoutes"));
const modelRoutes_1 = __importDefault(require("./routes/modelRoutes"));
const analyticsRoutes_1 = __importDefault(require("./routes/analyticsRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Register routes
app.use('/api/experiments', experimentRoutes_1.default);
app.use('/api/test-cases', testCaseRoutes_1.default);
app.use('/api/models', modelRoutes_1.default);
app.use('/api/analytics', analyticsRoutes_1.default);
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
});
