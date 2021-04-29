"use strict";

var express = require('express');

var cors = require('cors');

var categoryRoute = require('./Routes/categoryRoutes');

var productsRoute = require('./Routes/productRoutes');

var orderRoute = require('./Routes/orderRoutes');

var userRoute = require('./Routes/userRoutes');

var postRoute = require('./Routes/postRoutes');

var gendersRoute = require('./Routes/gendersRoutes');

var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/cat', categoryRoute);
app.use('/gender', gendersRoute);
app.use('/product', productsRoute);
app.use('/order', orderRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);
app.listen(3000, function () {
  return console.log('server is runing..');
});