import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type:String,
        required: true
    }
});

const Entry = mongoose.model('Entry', entrySchema);
    
export default Entry;