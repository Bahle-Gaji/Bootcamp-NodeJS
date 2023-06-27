"use strict";

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    BlogPostSchema = new Schema({
        title: String,
        body: String,
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        datePosted: {
            type: Date,
            default: new Date()
        },
        image: String
    });

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost