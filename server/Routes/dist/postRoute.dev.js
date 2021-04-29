"use strict";

require('../data/database');

var express = require('express');

var postsModel = require('../Models/posts.js');

var router = express.Router();
router.get('/', function (req, res) {
  postsModel.find({}, function (err, posts) {
    err ? res.status(500).send('error') : res.status(200).send(posts);
  });
});
router.get('/:id', function (req, res) {
  postsModel.findOne({
    _id: req.params.id
  }, function (err, posts) {
    err ? res.status(500).send('error') : res.status(200).send(posts);
  });
});
module.exports = router;