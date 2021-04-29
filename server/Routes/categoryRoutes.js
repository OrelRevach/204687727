require('../data/database');

const express = require('express');
const categoryModel = require('../Models/categories.js');
const router = express.Router();

router.get('/', (req, res) => {
    categoryModel.find({}, (err, categories) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(categories);
    })
});

router.get('/:id', (req, res) => {
    categoryModel.findOne({ _id: req.params.id }, (err, category) => {
        err ? res.status(500).send('error') : res.status(200).send(category);
    })
});

router.post('/', (req, res) => {
    const category = new categoryModel(req.body);
    category.save().then(() => res.send("success"));
});


router.put('/update', (req, res) => {
    categoryModel.findOneAndUpdate({ _id: req.body.id }, { $set: req.body },
        (err) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/:id', (req, res) => {
    categoryModel.findOneAndDelete({ id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;