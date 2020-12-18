// Creating schema for posts
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {type: String, required: true, trim: true, maxlength: 25, minlength: 3},
    content: {type: String, required: true, trim: true, minlength: 1, maxlength: 300}
},
{timestamps: true,});

const Post = mongoose.model('Post', postSchema);

//Exporting post schema
module.exports = Post;