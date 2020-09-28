const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const fileSchema = new Schema({
    file:{
        type: String,
        required: true,
    }
})

module.exports = fileSchema;