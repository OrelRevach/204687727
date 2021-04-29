"use strict";

require('../data/database');

var express = require('express');

var orderModel = require('../Models/orders.js');

var router = express.Router();
router.get('/', function (req, res) {
  orderModel.find({}, function (err, orders) {
    err ? res.status(500).send('error') : res.status(200).send(orders);
  });
});
router.get('/:id', function (req, res) {
  orderModel.findOne({
    _id: req.params.id
  }, function (err, orders) {
    err ? res.status(500).send('error') : res.status(200).send(orders);
  });
});
module.exports = router;