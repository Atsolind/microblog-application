// Creating schema for user
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, trim: true, unique: true, maxlength: 25, minlength: 1},
    password: {type: String, required: true, trim: true, maxlength: 25, minlength: 1},
},
{timestamps: true,});

const User = mongoose.model('User', userSchema);

//Exporting user schema
module.exports = User;
