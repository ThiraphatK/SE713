const conn = require('../config/db');

function getAllEvents(callback) {
    const result = conn.query('SELECT * FROM events', (err, result) => {
        if (err) {
            console.error('Error getting events:', err);
        }
        return callback(null, result)
    })
}

function getEventByName(name,callback) {
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

function addEvents(event,callback) {
    const sql = 'INSERT INTO events (title, date, location, description, category, time, pet_allowed, organizer) VALUES (?,?,?,?,?,?,?,?)';
    conn.query(sql, [event.title, event.date, event.location, event.description, event.category, event.time, event.petAllowed, event.organizer], (err, results) => {
        if (err) {
            console.error('Error adding event:', err);
            return callback(err, null);
        }
        return callback(null, results);
    })
}

module.exports = {
    getAllEvents,
    getEventByName,
    getEventByPatialName,
    getEventById,
    addEvents
}