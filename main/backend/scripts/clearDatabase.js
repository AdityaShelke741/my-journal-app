import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Entry from '../models/Entry.js';

dotenv.config();

const clearDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteMany({});
    await Entry.deleteMany({});
    console.log('✅ All users and entries deleted.');
    process.exit();
  } catch (error) {
    console.error('❌ Error clearing database:', error);
    process.exit(1);
  }
};

clearDB();