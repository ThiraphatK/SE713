const express = require('express');
const router = express.Router();
const eventModels = require('../db/models/eventSequelizeEventOrganizationModel');

router.get('/', async (req,res) => {
    const name = req.query.name;
    if (name) {
        try {
            const event = await eventModels.getEventsByName(name);
            if (!event) {
                res.status(400).send('The event with the given name not found');
            } else {
                res.status(200).send(event);
            }
        } catch (error) {
            res.status(500).send('Error getting event');
        }
    } else {
        try {
            const event = await eventModels.getAllEvents();
            res.status(200).send(event);
        } catch (error) {
            res.status(500).send('Error getting event');
        }
    }
});

router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const event = await eventModels.getEventById(id);
        if (!event) {
            res.status(404).send('The event with the given ID not found');
        } else {
            res.status(200).send(event);
        }
    } catch (error) {
        res.status(500).send('Error getting event');
    }
});

router.post('/', async (req,res) => {
    try {
        const event = req.body;
        const eventId = await eventModels.addEvent(event);
        res.send(event);
        res.send(eventId.dataValues);
    } catch (error) {
        res.status(500).send('Error adding event');
    }
});

module.exports = router;