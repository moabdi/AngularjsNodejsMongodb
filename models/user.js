var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/**
 *  User model.
 *
 */
module.exports = mongoose.model('User', new Schema({
  id:           ObjectId,
  firstName:    { type: String, required: '{PATH} is required.' },
  lastName:     { type: String, required: '{PATH} is required.' },
  email:        { type: String, required: '{PATH} is required.', unique: true },
  password:     { type: String, required: '{PATH} is required.' },
  admin: 		Boolean,
  updated_at:   { type: Date, default: Date.now },
  data:         Object,
}));