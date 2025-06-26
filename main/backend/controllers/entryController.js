// backend/controllers/entryController.js
import Entry from '../models/Entry.js';

// already existing
export const createOrUpdateEntry = async (req, res) => {
  const { date, content } = req.body;
  const userId = req.user;

  try {
    let entry = await Entry.findOne({ date, user: userId });

    if (entry) {
      entry.content = content;
    } else {
      entry = new Entry({ date, content, user: userId });
    }

    await entry.save();
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Error saving entry', error: error.message });
  }
};


// Get entry by date
export const getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.user }).sort({ date: -1 }); // Most recent first
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entries', error });
  }
};  

export const deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!entry) {
      return res.status(404).json({ message: 'Entry not found or not authorized' });
    }

    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting entry', error: error.message });
  }
};

export const updateEntry = async (req, res) => {
  const { id } = req.params;
  const { date, content } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { date, content },
      { new: true } // return updated doc
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error updating entry', error });
  }
};
