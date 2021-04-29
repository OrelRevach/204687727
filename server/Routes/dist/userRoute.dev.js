"use strict";

require('../data/database');

var express = require('express');

var usersModel = require('../Models/users.js');

var router = express.Router();
router.get('/', function (req, res) {
  usersModel.find({}, function (err, users) {
    err ? res.status(500).send('error') : res.status(200).send(users);
  });
});
router.get('/:id', function (req, res) {
  usersModel.findOne({
    _id: req.params.id
  }, function (err, users) {
    err ? res.status(500).send('error') : res.status(200).send(users);
  });
});
module.exports = router;