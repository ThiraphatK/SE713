const express = require('express');
const router = express.Router();
const eventModels = require('../models/eventModel');

router.get('/', (req,res) => {
    const name = req.query.name;
    if (name) {
        eventModels.getEventByPatialName(name, (err, results) => {
            const event = results;
            if (!event) {
                res.status(404).send('The event with the given name was not found');
            } else {
                res.send(event);
            }
        })
    } else {
        eventModels.getAllEvents((err, results) => {
            if (err) {
                res.status(500).send('Error getting events');
                return;
            }
            res.send(results);
        })
    }
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    eventModels.getEventById(id, (err, results) => {
        const event = results;
        if (!event) {
            res.status(400).send('The event with the given ID was not found');
        } else {
            res.send(event);
        }
        res.send(results);
    })
})

module.exports = router;