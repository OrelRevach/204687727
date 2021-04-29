const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    userID: String,
    name: String,
    email: String,
    phone: String,
    country: String,
    city : String,
    address: String,
    zipcode: String,

});
module.exports = mongoose.model('orders', orderSchema);