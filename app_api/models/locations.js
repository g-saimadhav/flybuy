var mongoose =require('mongoose');

var laptopSchema = new mongoose.Schema({
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

mongoose.model('laptop', laptopSchema); // Register the schema
