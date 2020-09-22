import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const customSearchSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})


