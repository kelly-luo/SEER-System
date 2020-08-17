import mongoose from 'mongoose';
import {commentSchema} from '../Models/schema.js';


const Comment = mongoose.model('Comment', commentSchema);

export const addNewComment = (req, res) => {
    let newComment = new Comment(req.body);

    newComment.save((err, Comment) => {
        if (err) {
            res.send(err);
        }
        res.json(Comment);
    });
};

export const getComments = (req, res) => {
    Comment.find({},(err, Comment) => {
        if (err) {
            res.send(err);
        }
        res.json(Comment);
    });
};