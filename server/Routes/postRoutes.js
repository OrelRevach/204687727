require('../data/database');

const express = require('express');
const postsModel = require('../Models/posts.js');
const router = express.Router();

router.get('/', (req, res) => {
    postsModel.find({}, (err, posts) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(posts);
    })
});
router.get('/:id', (req, res) => {
    postsModel.findOne({_id: req.params.id}, (err, posts) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(posts);
    })
});

 module.exports=router;