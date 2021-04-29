const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categoriesSchema = new Schema({
    name: String,
    desc: String,
    src: String
});

module.exports = mongoose.model('categories', categoriesSchema);