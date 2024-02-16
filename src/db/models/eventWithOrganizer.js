module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('event', {
        id: {
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
            // allowNull default is true
        }
    }, {
        freezeTableName: true, // Prevent table name change to plural
        timestamps: true, // Add createdAt and updatedAt fields
    });

    const Organizer = sequelize.define('organizer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true, // Prevent table name change to plural
        timestamps: true, // Add createdAt and updatedAt fields
    });

    Event.belongsTo(Organizer, { as: 'organizer' });
    Organizer.hasMany(Event, { as: 'events' });

    return Event;
};