const express = require('express');
const router = express.Router();
const { getEventByNames, getEventByPatialName, getAllEvents, addEvents } = require('../models/eventModel');

router.get('/', (req,res) => {
    getAllEvents((err,results) => {
        if (err) {
            res.status(500).send('Error getting events');
            return;
        }
        res.send(results);
    })
})