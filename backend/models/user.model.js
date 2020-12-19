// Creating schema for user with mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Information that is stored in the user collection
const userSchema = new Schema({
    username: {type: String, required: true, trim: true, unique: true, maxlength: 25, minlength: 1},
    password: {type: String, required: true, trim: true, maxlength: 25, minlength: 1},
},
{timestamps: true,}); //Logs when the user is created

const User = mongoose.model('User', userSchema);

//Exporting user schema
module.exports = User;
