const express = require('express');
const organizerModels = require('../model/organizerModel');
const router = express.Router();

router.get('/', (req, res) => {
    id = parseInt(req.query.id);
    if (id) {
        organizerModels.getOrganizerById(id)
            .then((organizer) => {
                if (organizer) {
                    res.status(200).send(organizer);
                } else {
                    res.status(404).send('Organizer not found');
                }
            })
            .catch((error) => {
                console.error('Error getting organizer:', error);
                res.status(500).send('Error getting organizer');
            });
    } else {
        organizerModels.getAllOrganizers()
            .then((organizers) => {
                res.status(200).send(organizers);
            })
            .catch((error) => {
                console.error('Error getting organizer:', error);
                res.status(500).send('Error getting organizer');
            });
    }
});

router.post('/', (req, res) => {
    const organizer = req.body;
    organizerModels.createOrganizer(organizer)
        .then((organizerId) => {
            organizer.id = organizerId;
            res.status(201).send('create organizer successfully!');
        })
        .catch((error) => {
            console.error('Error creating organizer:', error);
            res.status(500).send('Error creating organizer');
        });
});

module.exports = router;