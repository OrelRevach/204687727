"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var categoriesSchema = new Schema({
  name: String,
  desc: String,
  src: String
});
module.exports = mongoose.model('categories', categoriesSchema);