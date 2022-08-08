const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/chat');

//Schema
const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    to: String,
    from: String,
    isForwarded:Boolean,
    message:String,
    image:String,
    // date:Date,
    date:{type:Date , default:Date.now},
    room:String
    
});

//Model
var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;