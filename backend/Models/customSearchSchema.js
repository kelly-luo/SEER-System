const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const customSearchSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = customSearchSchema;