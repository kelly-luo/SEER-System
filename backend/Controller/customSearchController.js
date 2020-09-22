import mongoose from 'mongoose';
import {customSearchSchema} from '../Models/customSearchSchema.js';


const customSearch = mongoose.model('customSearch', customSearchSchema);

export const getSeMethods = (req, res) => {
    console.log("Getting SE Methods")
    customSearch.find({},(err, customSearch) => {
        if (err) {
            res.send(err);
        }
        res.json(customSearch);
    });
};