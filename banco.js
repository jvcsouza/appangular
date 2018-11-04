const mongoose = require('mongoose');
const url = 'mongodb://heroku:jv231199@ds249233.mlab.com:49233/heroku_n4zrw97f';

mongoose.connect(url, {useNewUrlParser:true})
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    foto: String
}, { collection: 'usercollection' });

module.exports = { 
    Mongoose: mongoose,
    UserSchema: userSchema 
}