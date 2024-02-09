const conn = require('../config/db');

function getAllEvents(callback) {
    const result = conn.query('SELECT * FROM events', (err, result) => {
        if (err) {
            console.error('Error getting events:', err);
        }
        return callback(null, result)
    })
}

function getEventByName(name) {
    const sql = 'SELECT * FROM events WHERE title = ?';
    conn.query(sql, [name],(err, results) => {
        if (err) {
            console.error('Error getting event by name:', err);
            return callback(null, results)
        }
        return callback(null, results);
    })
}

function getEventByPatialName(name, callback) {
    const sql = 'SELECT * FROM events WHERE title LIKE ?';
    conn.query(sql, ['%' + name + '%'], (err, results) => {
        if (err) {
            console.error('Error getting result by patial name', err);
            return callback(err, null);
        }
        return callback(null, results);
    })
}

function getEventById(id, callback) {
    const sql = 'SELECT * FROM events WHERE id = ?';
    conn.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error getting event by id', err);
            return callback(err, null);
        }
        return callback(null, results);
    })
}

function addEvents(event) {
    
}

module.exports = {
    getAllEvents,
    getEventByName,
    getEventByPatialName,
    getEventById,
    addEvents
}