module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('event', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            alloeNull: false,
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
        localtion: {
            type: DataTypes.STRING,
            // allowNull default is true
        },
        date: {
            type: DataTypes.STRING,
            // allowNull default is true
        },
        time: {
            type: DataTypes.STRING,
            // allowNull default is true
        },
        freezeTableName: true, // Prevent table name change to plural
        autoIncrement: true, // Add createAt and updateAt field
    });
    return Event;
};