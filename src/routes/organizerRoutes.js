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

router.get('/:id', (req, res) => {
    id = req.params.id;
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

router.delete('/', (req, res) => {
    id = parseInt(req.query.id);
    if (id) {
        organizerModels.deleteOrganizerById(id)
            .then((results) => {
                res.status(200).send('delete organizer successfully!');
            })
            .catch((error) => {
                console.error('Error deleting organizer:', error);
                res.status(500).send('Error deleting organizer');
            });
    } else {
        organizerModels.deleteAllOrganizers()
            .then((results) => {
                res.status(200).send('delete all organizers successfully!');
            })
            .catch((error) => {
                console.error('Error deleting organizer:', error);
                res.status(500).send('Error deleting organizer');
            });
    }
});

router.delete('/:id', (req, res) => {
    id = req.params.id;
    organizerModels.deleteOrganizerById(id)
        .then((results) => {
            res.status(200).send('delete organizer successfully!');
        })
        .catch((error) => {
            console.error('Error deleting organizer:', error);
            res.status(500).send('Error deleting organizer');
        });
});

module.exports = router;