// Creating schema for posts
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Information that is stored in the posts collection
const postSchema = new Schema({
    username: {type: String, required: true, trim: true, maxlength: 25, minlength: 3},
    content: {type: String, required: true, trim: true, minlength: 1, maxlength: 300}
},
{timestamps: true,}); //Logs when the post is created

const Post = mongoose.model('Post', postSchema);

//Exporting post schema
module.exports = Post;