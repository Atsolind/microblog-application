const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//Creating express server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connecting to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})
//Requiring files
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
//Using files
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});