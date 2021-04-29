"use strict";

require('../data/database');

var express = require('express');

var categoryModel = require('../Models/categories.js');

var router = express.Router();
router.get('/', function (req, res) {
  categoryModel.find({}, function (err, categories) {
    err ? res.status(500).send('error') : res.status(200).send(categories);
  });
});
router.get('/:id', function (req, res) {
  categoryModel.findOne({
    _id: req.params.id
  }, function (err, category) {
    err ? res.status(500).send('error') : res.status(200).send(category);
  });
});
router.post('/', function (req, res) {
  var category = new categoryModel(req.body);
  category.save().then(function () {
    return res.send("success");
  });
});
router.put('/update', function (req, res) {
  categoryModel.findOneAndUpdate({
    _id: req.body.id
  }, {
    $set: req.body
  }, function (err) {
    err ? res.status(500).send(err) : res.status(200).send('updated!');
  });
});
router["delete"]('/:id', function (req, res) {
  categoryModel.findOneAndDelete({
    id: req.body.id
  }, function (err) {
    err ? res.status(500).send(err) : res.status(200).send('deleted!');
  });
});
module.exports = router;