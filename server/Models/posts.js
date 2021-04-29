const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: String,
    deauthorsc: String,
    content: String,
});
module.exports = mongoose.model('posts', postSchema);