const mongoose = require('mongoose')
const fileSchema = require('../Models/fileSchema')

const File = mongoose.model('File', fileSchema);

module.exports = {
    addNewFile: function (req, res) {
        console.log("add file activited");
        File.create(req.file)
            .then(File => res.json(File))
            .catch(err => res.status(422).json(err));
    },
    getFile: function (req, res) {
        File.find({})
            .then(File => res.json(File))
            .catch(err => res.status(422).json(err));
    },
}