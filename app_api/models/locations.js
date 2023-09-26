var mongoose =require('mongoose');

var productschema = new mongoose.Schema({
    name: String,
    model: String,
    specifications:{
        ram:String,
        color:String,
        processor:String,
        size:Number,
        weight:String
    },
    price:Number,
});