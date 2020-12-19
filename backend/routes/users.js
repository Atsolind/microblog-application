//Creating routes for users

const router = require('express').Router();
let User = require('../models/user.model'); //Requiring created mongoose model

// Gets a list of all users from the mongoDB database
// and returns users in json format otherwise error
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Creating new user when making post request
//and making new user instances
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({username, password});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

//Exporting router
module.exports = router;