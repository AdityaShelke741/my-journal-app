import express from 'express';
import { createOrUpdateEntry, getAllEntries } from '../controllers/entryController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/date', authenticateToken, createOrUpdateEntry);
router.get('/', authenticateToken, getAllEntries);

export default router;
