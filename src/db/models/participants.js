const sequelize = require("../../config/dbSequelize");

module.exports = (sequelize, DataTypes) => {
    const Participant = sequelize.define('participant', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'telNo'
        },
        freezeTableName: true,
        autoIncrement: true
    });
    
    const Event = sequelize.define('event', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        freezeTableName: true,
        autoIncrement: true
    });

    const EventPaticaipant = sequelize.define('event-participant', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        eventId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        participantId: {
            type: DataTypes.INTEGER,
            references: {
                model: Participant,
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        freezeTableName: true,
        autoIncrement: true
    });
    Participant.belongsToMany(Event, { through: EventPaticaipant });
    Event.belongsToMany(Participant, { through: EventPaticaipant });
    return { Participant, Event, EventPaticaipant};
};
