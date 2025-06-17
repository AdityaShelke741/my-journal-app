// backend/controllers/entryController.js
import Entry from '../models/Entry.js';

// already existing
export async function createOrUpdateEntry(req, res) {
  try {
    const { date, content } = req.body;

    const updatedEntry = await Entry.findOneAndUpdate(
      { date },
      { content },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedEntry);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Error saving entry", error: error.message || error });
  }
}

// Get entry by date
export async function getAllEntries(req, res) {
  try {
    const entries = await Entry.find().sort({ _id: -1 }); // newest first
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entries', error });
  }
}
