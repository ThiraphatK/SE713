const pool = require('../config/db');

function getAllOrganizers() {
    return pool.query('SELECT * FROM organizer')
        .then(([rows, fields]) => {
            return rows;
        })
        .catch((error) => {
            console.error('Error getting organizer:', error);
            throw error;
        });
}

function getOrganizerById(id) {
    return pool.query('SELECT * FROM organizer WHERE id = ?', [id])
        .then((rows) => {
            return rows[0];
        })
        .catch((error) => {
            console.error('Error getting organizer:', error);
        });
}

function createOrganizer(organizer) {
    const { id, name } = organizer;
    return pool.query('INSERT INTO organizer (id, name) VALUES (?,?)', [id, name])
        .then((result) => {
            return result.insertId;
        })
        .catch((error) => {
            console.error('Error creating organizer:', error);
        });
}

function deleteOrganizerById(id){
    return pool.query('DELETE FROM organizer WHERE id = ?', [id])
        .then((results) => {
            return results;
        })
        .catch((error) => {
            console.error('Error deleting organizer:', error);
        });
}

function deleteAllOrganizers(){
    return pool.query('DELETE FROM organizer')
        .then((results) => {
            return results;
        })
        .catch((error) => {
            console.error('Error deleting organizer:', error);
        });
}

module.exports = {
    getAllOrganizers,
    getOrganizerById,
    createOrganizer,
    deleteOrganizerById,
    deleteAllOrganizers
}