const Event = require('../db/models/eventWitjOrganizer');
const sequelize = require('../config/dbSequelize');
const { DataTypes, Op } = require('sequelize');
const event = Event(sequelize, DataTypes);

//Create
exports.addEvent = (eventData) => {
    return event.create(eventData)
        .then((event) => {
            event;
        }).catch((err) => {
            console.error('Error creating event:', err);
        });
};

//Read (get one event by ID)
exports.getEventById = (id) => {
    return event.findByPk(id)
        .then((event) => {
            event;
        }).catch((err) => {
            console.error('Error getting event by ID:', err);
        });
};

//Read (get all events)
exports.getAllEvents = () => {
    return event.findAll(
        {include: 'organizer',
        attributes: {
            exclude: ['organizerId']
        }
    })
    .then((events) => {
        events;
    }).catch((err) => {
        console.error('Error getting all events:', err);
    });
};

exports.getEventsByPartialName = (name) => {
    return event.findAll({
        where: {
            title: {
                [Op.like]: `%${name}%`
            }
        }
    }).then((events) => {
        events;
    }).catch((err) => {
        console.error('Error getting events by partial name:', err);
    });
};

exports.getEventsByName = (name) => {
    return event.findAll({
        where: {
            title: name
        }
    }).then((events) => {
        events;
    }).catch((err) => {
        console.error('Error getting events by name:', err);
    });
};