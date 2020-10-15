const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    author: {
        type: String,
        //required: true
    },
    description:{
        type: String,
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
    DOI:{
        type: String,
    },
    rating:{
        type: Number
    },
    seMethod:{
        type: String
    }
})

module.exports = articleSchema;


