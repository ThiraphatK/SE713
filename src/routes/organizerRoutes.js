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

module.exports = router;