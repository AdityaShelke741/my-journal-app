import Entry from 'backend/Models/Entry.js'

export const createOrUpdateEntry = async (req, res) => {
    const {date} = req.params;
    const {content} = req.body;

    try {
        const updatedEntry = await Entry.findOneAndUpdate(
            {date},
            {content},
            {upsert: true, new: true, setDefaultOnInsert: true}
        );

        res.status(200).json(updatedEntry);
    } 
    catch(error) {
        
        console.error(error); 
        res.staus(500).json({error:'Server Error'});
        
    }    
}
