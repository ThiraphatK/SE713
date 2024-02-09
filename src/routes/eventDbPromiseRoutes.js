const express = require('express');
const router = express.Router();
const eventModel = require('../models/eventPromiseModel');

router.get('/', (req,res) => {
    eventModel.getAllEvents()
        .then((events) => {
            res.send(events)
        }).catch((err) => {
            res.status(500).send('Error getting events')
        });
});

module.exports = router;