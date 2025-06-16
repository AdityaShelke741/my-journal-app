import express from 'express';
import { createOrUpdateEntry } from '../controllers/entryController.js';
import { getEntryByDate } from '../controllers/entryController.js';

const router = express.Router();

router.post('/date', createOrUpdateEntry);

router.get('/:date', getEntryByDate);

export default router;