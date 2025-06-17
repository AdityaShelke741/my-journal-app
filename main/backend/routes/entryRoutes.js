import express from 'express';
import { createOrUpdateEntry } from '../controllers/entryController.js';
import { getAllEntries } from '../controllers/entryController.js';

const router = express.Router();

router.post('/date', createOrUpdateEntry);

router.get('/', getAllEntries);

export default router;