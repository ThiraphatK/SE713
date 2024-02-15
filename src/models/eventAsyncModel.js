const pool = require('../config/dbPromise');

async function getAllEvents() {
    try {
        const [rows, fields] = pool.query('SELECT * FROM events');
        return rows;
    } catch (error) {
        console.error('Error getting events:', err);
        throw err;
    }
}


async function getEventsById(id) {
    try {
        const [rows] = await pool.query('SELECT * FROME events WHERE id = ?', [id]);
        return rows[0];
    } catch (error) {
        console.error('Error getting event:', err);
        throw err;
    }
};

async function getEventsByName(name) {
    try {
        const [rows] = await pool.query('SELECT * FROM events WHERE title = ?', [name]);
        return rows[0];
    } catch (error) {
        console.error('Error getting event:', err);
        throw err;
    }
};

async function getEventsByPatialName(name) {
    try {
        const [rows] = await pool.query('SELECT * FROM events WHERE title LIKE ?', [`%${name}%`]);
        return rows[0];
    } catch (error) {
        console.error('Error getting event:', err);
        throw err;
    }
};

async function addEvent(event) {
    try {
        const [result] = await pool.query('INSERT INTO events (title, date, location, description, category, time, pet_allowed, organizer) VALUES (?,?,?,?,?,?,?,?)', [event.title, event.date, event.location, event.description, event.category, event.time, event.petAllowed, event.organizer]);
        return result.insertId;
    } catch (error) {
        console.error('Error adding event:', err);
        throw err;
    }
}

module.exports = {
    getAllEvents,
    getEventsById,
    getEventsByName,
    getEventsByPatialName,
    addEvent
}