/* 
* Author : Mostapha ABDI
* Email: abdimostapha@gmail.com
* Version: V1.0
* serveur.js
*/
var express    = require("express");
var mongoose   = require('mongoose');
var bodyParser = require("body-parser");
var morgan     = require('morgan');
var config     = require('./config/config');
var contacts   = require('./routes/contacts');
var login      = require('./routes/login'); // get our mongoose model

// initialize express
var app        = express();

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('superSecret', config.secret); // secret variable
app.use(morgan('dev'));// use morgan to log requests to the console

// connect database
mongoose.connect(config.database);

// Session
//app.use(express.cookieParser());
//app.use(express.session(
//    {secret:"secret key", store:new MemoryStore()}));

// dirname folder
app.use(express.static(__dirname + "/public"));

app.use('/app', contacts); 
app.use('/', login); 

 // Port
app.listen(3000);
console.log("Server running (port: 3000)...");

module.exports = app;