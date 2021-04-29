"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
  userID: String,
  name: String,
  email: String,
  phone: String,
  country: String,
  city: String,
  address: String,
  zipcode: String
});
module.exports = mongoose.model('orders', orderSchema);