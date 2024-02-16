const Participant = require('../db/models/participants');
const sequelize = require('../config/dbSequelize');
const { DataTypes, Op, Model } = require('sequelize');
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
    return event.findByPk(id, {
        include: {
            model: participant,
            as: 'participant',
            attributes: ['name', 'phone'],
            through: {
                attributes: []
            }
        }
    }).then((event) => {
        event;
    }).catch((err) => {
        console.error('Error getting event by ID:', err);
    });
};

exports.getEventsByName = (name) => {
    return event.findAll({
        where: {
            [Op.or]: [
                {title: {
                    [Op.like] : `%${name}%`
                }},
                {description: {
                    [Op.like] : `%${name}%`
                }}
            ]
        },
        include: [{
            model: participant,
            as: 'participant',
            attributes: ['name', 'phone'],
            through: {
                attributes: []
            }
        }]
    }).then((events) => {
        events;
    }).catch((err) => {
        console.error('Error getting events by name:', err);
    });
};