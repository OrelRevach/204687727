"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
  name: String,
  desc: String,
  src: Array,
  categoryID: Array,
  price: Number
});
module.exports = mongoose.model('products', productSchema);