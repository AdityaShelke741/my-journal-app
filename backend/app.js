import express from 'express';
import cors from 'cors';
import entryRoutes from './routes/entryRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/entries', entryRoutes);

export default app;