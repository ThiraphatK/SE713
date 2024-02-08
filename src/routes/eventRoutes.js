const express = require('express');
const router = express.Router();
const { events } = require('../mock/eventMock');

// part-4 >>> part-6
function getEevntsByPatialName(name) {
    return events.find(event => event.title.includes(name)); 
}

router.get('/', (req,res)=>{
    const name = req.query.name;
    console.log(name);
    if (name) {
        const event = getEevntsByPatialName(name);
        if (!event) {
            res.status(404).send('The event with the given name was not found');
        } else {
            res.send(event);
        }
    } else {
        res.send(events);
    }
});

// part-5
router.get('/:id', (req,res)=>{
    const id = req.params.id;
    const event = events.find(event => event.id === parseInt(id));
    if (!event) {
        res.status(404).send('The event witj the given ID was not found');
    } else {
        res.send(event)
    }
});

module.exports = router;