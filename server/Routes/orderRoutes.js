require('../data/database');

const express = require('express');
const orderModel = require('../Models/orders.js');
const router = express.Router();

router.get('/', (req, res) => {
    orderModel.find({}, (err, orders) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(orders);
    })
});
router.get('/:id', (req, res) => {
    orderModel.findOne({_id: req.params.id}, (err, orders) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(orders);
    })
});

 module.exports=router;