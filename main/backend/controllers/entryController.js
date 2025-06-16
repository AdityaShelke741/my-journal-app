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
export async function getEntryByDate(req, res) {
  try {
    const { date } = req.params;
    const entry = await Entry.findOne({ date });

    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entry', error });
  }
  
}
