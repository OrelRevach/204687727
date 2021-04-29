require('../data/database');

const express = require('express');
const usersModel = require('../Models/users.js');
const router = express.Router();

router.get('/', (req, res) => {
    usersModel.find({}, (err, users) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(users);
    })
});
router.get('/:id', (req, res) => {
    usersModel.findOne({_id: req.params.id}, (err, users) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(users);
    })
});

 module.exports=router;