"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var sportsTypesSchema = new Schema({
  name: String,
  desc: String,
  src: String
});
module.exports = mongoose.model('sportsTypes', sportsTypesSchema);