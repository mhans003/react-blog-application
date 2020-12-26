//Require Mongoose and create Schema for a blog post.
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    author: {
        type: String,
        required: true,
        maxlength: 50
    },
    body: {
        type: String,
        maxlength: 15000
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Create and export the Post model variable.
const Post = mongoose.model("Post", postSchema);

module.exports = Post;