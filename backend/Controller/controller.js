import mongoose from 'mongoose';
import {articleSchema, customSearchSchema} from '../Models/schema.js';


const Article = mongoose.model('Article', articleSchema);


export const addNewArticle = (req, res) => {
    let newArticle = new Article(req.body);

    newArticle.save((err, Article) => {
        if (err) {
            res.send(err);
        }
        res.json(Article);
    });
};

export const getArticle = (req, res) => {
    Article.find({},(err, Article) => {
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