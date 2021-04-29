"use strict";

require('../data/database');

var express = require('express');

var genderModel = require('../Models/genders.js');

var router = express.Router();
router.get('/', function (req, res) {
  genderModel.find({}, function (err, gender) {
    err ? res.status(500).send('error') : res.status(200).send(gender);
  });
});
router.get('/:id', function (req, res) {
  genderModel.findOne({
    _id: req.params.id
  }, function (err, gender) {
    err ? res.status(500).send('error') : res.status(200).send(gender);
  });
});
router.post('/', function (req, res) {
  var gender = new genderModel(req.body);
  category.save().then(function () {
    return res.send("success");
  });
});
router.put('/update', function (req, res) {
  genderModel.findOneAndUpdate({
    _id: req.body.id
  }, {
    $set: req.body
  }, function (err) {
    err ? res.status(500).send(err) : res.status(200).send('updated!');
  });
});
router["delete"]('/:id', function (req, res) {
  genderModel.findOneAndDelete({
    id: req.body.id
  }, function (err) {
    err ? res.status(500).send(err) : res.status(200).send('deleted!');
  });
});
module.exports = router;