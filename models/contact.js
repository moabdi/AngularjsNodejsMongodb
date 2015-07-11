/* 
* Author : Mostapha ABDI
* Email: abdimostapha@gmail.com
* Version: V1.0
*/
var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  updated_at: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Contact', ContactSchema);
