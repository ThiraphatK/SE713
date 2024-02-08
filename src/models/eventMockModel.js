const { events } = require('../mock/eventMock');

function getEventByName(name) {
    return events.find(event => event.titile === name);
}

function getEevntsByPatialName(name) {
    return events.filter(event => event.title.includes(name)); 
}

function getAllEvents() {
    return events;
}

module.exports = {
    getEventByName,
    getEevntsByPatialName,
    getAllEvents
};
