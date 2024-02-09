const conn = require('../config/db');

function getAllEvents(callback) {
    const result = conn.query('SELECT * FROM event', (err, result) => {
        if (err) {
            console.log('Error getting events:', err);
        }
        return callback(null, results)
    })
}

function getEventByName(name) {
    
}

function getEventByPatialName(name) {
    
}

function addEvents(event) {
    
}

module.exports = {
    getAllEvents,
    getEventByName,
    getEventByPatialName,
    addEvents
}