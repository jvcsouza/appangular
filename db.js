const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku:jv231199@ds249233.mlab.com:49233/heroku_n4zrw97f');

const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }