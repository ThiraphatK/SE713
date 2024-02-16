const Participant = require('../db/models/participants');
const sequelize = require('../config/dbSequelize');
const { DataTypes, Op } = require('sequelize');
const { Event:event, Participant:participant } = Participant(sequelize, DataTypes);

exports.getAllEvents = () => {
    return event.findAll({include: ['participant']})
        .then((events) => {
            events;
        }).catch((err) => {
            console.error('Error getting all events:', err);
        });
}

exports.getEventById = (id) => {
    return event.findByPk(id, {include: ['participant']})
        .then((event) => {
            event;
        }).catch((err) => {
            console.error('Error getting event by event:', err);
        });
};