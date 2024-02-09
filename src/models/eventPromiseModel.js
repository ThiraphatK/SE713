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

function getEventsById(id) {
    return pool.query('SELECT * FROM events WHERE id = ?', [id])
        .then(([rows]) => {
            return rows[0];
        }).catch((err) => {
            console.error('Error getting event:', err);
            throw err;
        });
};

function getEventsByName(name) {
    return pool.query('SELECT * FROM events WHERE title = ?', [name])
        .then(([rows]) => {
            return rows[0];
        }).catch((err) => {
            console.error('Error getting event:', err);
            throw err;
        });
};

function getEventsByPatialName(name) {
    return pool.query('SELECT * FROM events WHERE title LIKE ?', [`%${name}%`])
        .then(([rows]) => {
            return rows[0];
        }).catch((err) => {
            console.error('Error getting event:', err);
            throw err;
        });
};

function addEvent(event) {
    const { title, date, location, description, category, time, pet_allowed, organizer } = event;
    return pool.query('INSERT INTO events (title, date, location, description, category, time, pet_allowed, organizer) VALUES (?,?,?,?,?,?,?,?)', [event.title, event.date, event.location, event.description, event.category, event.time, event.petAllowed, event.organizer])
        .then(([result]) => {
            return result.insertId;
        }).catch((err) => {
            console.error('Error adding event:', err);
            throw err;
        });
}

module.exports = {
    getAllEvents,
    getEventsById,
    getEventsByName,
    getEventsByPatialName,
    addEvent
}