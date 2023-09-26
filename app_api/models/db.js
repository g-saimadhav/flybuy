const mongoose = require( 'mongoose' );
require('dotenv').config();
const PORT = process.env.port || 3000;

var gracefulShutdown;
const dbURI =  "mongodb://0.0.0.0:27017/";
if (process.env.NODE_ENV === 'productions'){
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () { console.log('Mongoose connected to ' + dbURI); 
});

mongoose.connection.on('error', function (err) { console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { console.log('Mongoose disconnected'); 
}); 
