const express = require('express');
const router = express.Router();
const participantModels = require('../models/participantsModel');

router.get('/', (req,res) => {
    const name = req.query.name;
    if (name) {
            const event = participantModels.getEventsByName(name);
            if (!event) {
                res.status(404).send('The event with the given name was not found');
            } else {
                res.send(event);
            }
    } else {
        participantModels.getAllEvents()
            .then((events) => {
                res.send(events);
            }).catch((err) => {
                res.status(500).send('Error getting participant');
            });
    }
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    participantModels.getEventById(id)
        .then((event) => {
            if (!event) {
                res.status(404).send('The participant with the given ID not found');
            } else {
                res.status(200).send(event);
            }
        }).catch((err) => {
            res.status(500).send('Error getting participant');
        });
});

router.post('/:event/:id/participant', (req,res) => {
    const eventId = req.params.id;
    const participantData = req.body;
    participantModels.addEventPaticipant(eventId, participantData)
        .then((participant) => {
            res.status(201).send(participant);
        }).catch((err) => {
            res.status(500).send('Error adding participant');
        });
});

module.exports = router;