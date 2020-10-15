const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const fileSchema = new Schema({
    author: {
        type: String,
    }
    , title: {
        type: String,
    }, publisher: {
        type: String,
    }, year: {
        type: String,
    }, month: {
        type: String,
    }, journal: {
        type: String,
    }
})

module.exports = fileSchema;