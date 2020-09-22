import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const customSearchSchema = new Schema({
    se_methods: {
        type: Array,
        required: true
    }
})


