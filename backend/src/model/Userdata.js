const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/chat');

//Schema
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    username: String,
    email: String,
    password:String,
    image:String,
    contacts:[{ name: String,isMuted:Boolean,isBlocked:Boolean}]
});

//Model
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;