import mongoose from 'mongoose';
import {articleSchema} from '../Models/schema.js';


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