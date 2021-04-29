require('../data/database');

const express = require('express');
const productsModel = require('../Models/products.js');
const router = express.Router();

router.get('/', (req, res) => {
    productsModel.find({}, (err, products) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(products);
    })
});
router.get('/:id', (req, res) => {
    productsModel.findOne({_id: req.params.id}, (err, products) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(products);
    })
});

 module.exports=router;