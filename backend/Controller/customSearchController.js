const mongoose = require('mongoose')
const customSearchSchema = require('../Models/customSearchSchema')

const customSearch = mongoose.model('customSearch', customSearchSchema);

module.exports = {
    addMethod: function (req, res) {
        customSearch.create(req.body)
            .then(customSearch => res.json(customSearch))
            .catch(err => res.status(422).json(err));
    },
    addNewMethod: function (req, res) {
        customSearch.findByIdAndUpdate({ _id: req.params.methodId },{$push : req.body},  {new: true})
            .then(customSearch => res.json(customSearch))
            .catch(err => res.status(422).json(err));
    },
    getSeMethods: function (req, res) {
        customSearch.find({})
            .then(customSearch => res.json(customSearch))
            .catch(err => res.status(422).json(err));
    },
}