const mongoose = require('mongoose')
const customSearchSchema = require('../Models/customSearchSchema')

const customSearch = mongoose.model('customSearch', customSearchSchema);

module.exports = {
    addNewMethod: function (req, res) {
        customSearch.create(req.body)
            .then(customSearch => res.json(customSearch))
            .catch(err => res.status(422).json(err));
    },
    getSeMethods: function (req, res) {
        customSearch.find({})
            .then(customSearch => res.json(customSearch))
            .catch(err => res.status(422).json(err));
    },
}