import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const articleSchema = new Schema({
    author: {
        type: String,
        //required: true
    },
    title: {
        type: String,
        //required: true
    },
    journal: {
        type: String,
        //required: true
    },
    year: {
        type: String,
        //required: true
    },
    volume: {
        type: Number,
        //required: true
    },
    number: {
        type: Number,
        //required: true
    },
    pages: {
        type: String,
        //required: true
    },
    month: {
        type: String,
        //required: true
    },
    url: {
        type: String,
        //required: true,
    },
    rating:{
        type: [Number]
    }
})


export const customSearchSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})



