const mongoose = require('mongoose')
const articleSchema = require('../Models/articleSchema')

const publicArticle = mongoose.model('publicArticle', articleSchema);
const moderatorArticle = mongoose.model('moderatorArticle', articleSchema)
const analystArticle = mongoose.model('analystArticle', articleSchema)
const declinedArticle = mongoose.model('declinedArticle', articleSchema)
//const File = mongoose.model('File', fileSchema);

module.exports = {
    addNewArticle: (req,res) =>{
        moderatorArticle.create(req.body)
            .then(newArticle => res.json(newArticle))
            .catch(err => res.status(422).json(err));
    },
    getModeratorArticle: function (req, res) {
        moderatorArticle.find({})
            .then(modArticles => res.json(modArticles))
            .catch(err => res.status(422).json(err));
    },
    moderatorDelete: function (req, res) {
        moderatorArticle.remove({ _id: req.params.ArticleId })
            .then(Article => res.json(Article))
            .catch(err => res.status(422).json(err));
    },
    moderatorAcceptArticle: function (req, res) {
        analystArticle.create(req.body)
            .then(newArticle => res.json(newArticle))
            .catch(err => res.status(422).json(err));
    },
    getAnalystArticle: function (req, res) {
        analystArticle.find({})
            .then(Articles => res.json(Articles))
            .catch(err => res.status(422).json(err));
    },
    analystAcceptArticle: function (req, res) {
        publicArticle.create(req.body)
            .then(newArticle => res.json(newArticle))
            .catch(err => res.status(422).json(err));
    },
    analystDelete: function (req, res) {
        analystArticle.deleteOne({ _id: req.params.ArticleId })
            .then(Article => res.json(Article))
            .catch(err => res.status(422).json(err));
    },
    getPublicArticle: function (req, res) {
        publicArticle.find({})
            .then(Articles => res.json(Articles))
            .catch(err => res.status(422).json(err));
    },
    updatePublicArticleRating: function(req, res) {
		publicArticle.findByIdAndUpdate({ _id: req.params.ArticleId }, {$push : req.body}, {new: true})
			.then(Article => res.json(Article))
			.catch(err => res.status(422).json(err));
    },
    declineArticle: function (req, res) {
        declinedArticle.create(req.body)
            .then(newArticle => res.json(newArticle))
            .catch(err => res.status(422).json(err));
    },
    getDeclinedArticle: function (req, res) {
        declinedArticle.find({})
            .then(Articles => res.json(Articles))
            .catch(err => res.status(422).json(err));
    },
    getSpecificArticle: function (req, res) {
        publicArticle.find({ _id: req.params.ArticleId})
            .then(Articles => res.json(Articles))
            .catch(err => res.status(422).json(err));
    },
}
/*

export const addNewFile = (req, res) => {
    let NewFile = new File(req.body);
    console.log("add new file been activited")
    NewFile.save((err,File) => {
        if (err) {
            res.send(err);
        }
        res.json(File);
    });
};

export const getFile = (req, res) => {
   File.find({},(err, File) => {
        if (err) {
            res.send(err);
        }
        res.json(File);
    });
};*/