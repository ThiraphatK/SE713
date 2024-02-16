const express = require('express');
const router = express.Router();
const participantModels = require('../models/participantsModel');

router.get('/', (req,res) => {
    const name = req.query.name;
    if (name) {
        const participant = participantModels.getPaticipantsByPartialName(name)
        if (!participant) {
            res.status(404).send('The participant with the given name not found');
        } else {
            res.send(participant);
        }
    } else {
        participantModels.getAllParticipants()
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