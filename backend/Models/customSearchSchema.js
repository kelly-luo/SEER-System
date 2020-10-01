const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const customSearchSchema = new Schema({
    name:{
        type: String
    },
    seMethod: {
        type: [String]
    }
})

module.exports = customSearchSchema;