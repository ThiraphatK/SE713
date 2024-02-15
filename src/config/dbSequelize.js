const { Sequelize, Model } = require('sequelize');
const dbName = 'sdb';
const sequelize = new Sequelize(dbName, 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;