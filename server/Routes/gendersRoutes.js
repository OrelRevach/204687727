require('../data/database');

const express = require('express');
const genderModel = require('../Models/genders.js');
const router = express.Router();

router.get('/', (req, res) => {
    genderModel.find({}, (err, gender) => {
        err ?
        res.status(500).send('error') 
        : res.status(200).send(gender);
    })
});

router.get('/:id', (req, res) => {
    genderModel.findOne({ _id: req.params.id }, (err, gender) => {
        err ? res.status(500).send('error') : res.status(200).send(gender);
    })
});

router.post('/', (req, res) => {
    const gender = new genderModel(req.body);
    category.save().then(() => res.send("success"));
});


router.put('/update', (req, res) => {
    genderModel.findOneAndUpdate({ _id: req.body.id }, { $set: req.body },
        (err) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/:id', (req, res) => {
    genderModel.findOneAndDelete({ id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;