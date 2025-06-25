import express from 'express';
import { createOrUpdateEntry, getAllEntries } from '../controllers/entryController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/date', verifyToken, createOrUpdateEntry);
router.get('/', verifyToken, getAllEntries);
router.put('/:id', updateEntry);

export default router;