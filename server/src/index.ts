import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load ENV
dotenv.config(); 

import experimentRoutes from './routes/experimentRoutes';
import testCaseRoutes from './routes/testCaseRoutes';
import modelRoutes from './routes/modelRoutes';
import analyticsRoutes from './routes/analyticsRoutes';

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/experiments', experimentRoutes);
app.use('/api/test-cases', testCaseRoutes);
app.use('/api/models', modelRoutes);
app.use('/api/analytics', analyticsRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
