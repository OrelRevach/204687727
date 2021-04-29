"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  first: String,
  last: String,
  email: String,
  phone: String,
  country: String,
  city: String,
  address: String,
  zipcode: String,
  password: String,
  permission: String
});
module.exports = mongoose.model('users', userSchema);