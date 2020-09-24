import mongoose from 'mongoose';
import {articleSchema, customSearchSchema,fileSchema} from '../Models/schema.js';

const publicArticle = mongoose.model('publicArticle', articleSchema);
const moderatorArticle = mongoose.model('moderatorArticle', articleSchema)
const analystArticle = mongoose.model('analystArticle', articleSchema)
const declinedArticle = mongoose.model('declinedArticle', articleSchema)
const File = mongoose.model('File', fileSchema);


export const addNewArticle = (req, res) => {
    let newArticle = new moderatorArticle(req.body);

    newArticle.save((err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const getModeratorArticle = (req, res) => {
    moderatorArticle.find({},(err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const moderatorDelete = (req, res) => {
    moderatorArticle.remove({_id: req.params.ArticleId},(err) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Sent to analyst'});
    });
};


export const moderatorAcceptArticle = (req, res) => {
    let newArticle = new analystArticle(req.body);

    newArticle.save((err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const getAnalystArticle = (req, res) => {
    analystArticle.find({},(err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const analystAcceptArticle = (req, res) => {
    let newArticle = new publicArticle(req.body);

    newArticle.save((err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const analystDelete = (req, res) => {
    analystArticle.remove({_id: req.params.ArticleId},(err) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Sent to public'});
    });
};

export const getPublicArticle = (req, res) => {
    publicArticle.find({},(err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const updatePublicArticleRating = (req, res) => {
    publicArticle.findOneAndUpdate({_id: req.params.ArticleId},{$push : req.body}, {new: true},(err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const declineArticle = (req, res) => {
    let newArticle = new declinedArticle(req.body);

    newArticle.save((err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const getDeclinedArticle = (req, res) => {
    declinedArticle.find({},(err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};



const customSearch = mongoose.model('customSearch', customSearchSchema);

export const addNewMethod = (req, res) => {
    let newMethod = new customSearch(req.body);

    newMethod.save((err, customSearch) => {
        if (err) {
            res.send(err);
        }
        res.json(customSearch);
    });
};

export const getSeMethods = (req, res) => {
    customSearch.find({},(err, customSearch) => {
        if (err) {
            res.send(err);
        }
        res.json(customSearch);
    });
};
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
};