"use strict";

require('../data/database');

var express = require('express');

var productsModel = require('../Models/products.js');

var router = express.Router();
router.get('/', function (req, res) {
  productsModel.find({}, function (err, products) {
    err ? res.status(500).send('error') : res.status(200).send(products);
  });
});
router.get('/:id', function (req, res) {
  productsModel.findOne({
    _id: req.params.id
  }, function (err, products) {
    err ? res.status(500).send('error') : res.status(200).send(products);
  });
});
module.exports = router;