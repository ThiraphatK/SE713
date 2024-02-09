const express = require('express');
const router = express.Router();
const eventModels = require('../models/eventPromiseModel');

router.get('/', (req,res) => {
    const name = req.query.name;
    if (name) {
        eventModels.getEventsByPatialName(name)
            .then((event) => {
                if (!event) {
                    res.status(400).send('The event with the given name not found');
                } else {
                    res.send(event);
                }
            }).catch((err) => {
                res.status(500).send('Error getting event');
            });
    } else {
        eventModels.getAllEvents()
            .then((event) => {
                res.send(event);
            }).catch((err) => {
                res.status(500).send('Error getting event')
            });
    }
});

module.exports = router;