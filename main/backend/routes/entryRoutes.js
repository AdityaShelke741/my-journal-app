// backend/routes/entryRoutes.js

import express from 'express';
import {
  createOrUpdateEntry,
  getAllEntries,
  updateEntry,
  deleteEntry
} from '../controllers/entryController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create or update a journal entry
router.post('/date', verifyToken, createOrUpdateEntry);

// Get all entries for the authenticated user
router.get('/', verifyToken, getAllEntries);

// Update a specific entry
router.put('/:id', verifyToken, updateEntry);

// Delete a specific entry
router.delete('/:id', verifyToken, deleteEntry);

export default router;
