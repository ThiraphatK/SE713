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

// get a organizer by id
function getOrganizerById(id) {
    return pool.query('SELECT * FROM organizer WHERE id = ?', [id])
        .then((rows) => {
            return rows[0];
        })
        .catch((error) => {
            console.error('Error getting organizer:', error);
        });
}

// create a new organizer
function createOrganizer(organizer) {
    return pool.query('INSET INTO organizer VALUSE ?', [organizer])
        .then((results) => {
            return results;
        })
        .catch((error) => {
            console.error('Error creating organizer:', error);
        });
}


// delete a organizer by id
function deleteOrganizerById(id){
    return pool.query('DELETE FROM 713.organizer WHERE id = ?', [id])
        .then((results) => {
            return results;
        })
        .catch((error) => {
            console.error('Error deleting organizer:', error);
        });
}

// delete all organizer
function deleteAllOrganizers(){
    return pool.query('DELETE FROM 713.organizer')
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