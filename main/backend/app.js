import express from 'express';
import cors from 'cors';
import entryRoutes from './routes/entryRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/entries', entryRoutes);

export default app;
