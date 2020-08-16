import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const commentSchema = new Schema({
    firstName:{
        type : String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})