import express from 'express';
import { createOrUpdateEntry } from '../controllers/entryController';

const router = express.Router;

router.post('/date', createOrUpdateEntry);

export default router;