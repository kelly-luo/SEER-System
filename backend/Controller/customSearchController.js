import mongoose from 'mongoose';
import {customSearchSchema} from '../Models/customSearchSchema.js';


const Article = mongoose.model('Article', customSearchSchema);

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