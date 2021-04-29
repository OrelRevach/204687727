"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var postSchema = new Schema({
  title: String,
  deauthorsc: String,
  content: String
});
module.exports = mongoose.model('posts', postSchema);