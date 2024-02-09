const pool = require('../config/dbPromise');

function getAllEvents() {
    return pool.query('SELECT * FROM events')
        .then(([rows, fields]) => {
            return rows
        })
        .catch(err => {
            console.error('Error getting events:', err);
            throw err;
        })
}

module.exports = {
    getAllEvents
}