"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var genderSchema = new Schema({
  name: String,
  desc: String,
  src: String
});
module.exports = mongoose.model('genders', genderSchema);