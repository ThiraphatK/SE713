const express = require('express');
const bodyParser = require('body-parser');
const { events } = require('./mock/eventMock');
const app = express();

// app.use(bodyParser.json());
app.use(express.json());

// part-1
app.get('/test', (req,res)=>{
    const id = req.query.id;
    const name = req.query.name || 'No name';
    const output = `id: ${id} and name: ${name}`;
    res.send(output)
});

// part-2
app.get('/test/:id/name/:name', (req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    res.send(`id: ${id} and name: ${name}`)
})

// part-3
app.post('/test', (req,res)=>{
    const obj = req.body;
    const id = obj.id;
    const name = obj.name;
    res.send(`id: ${id} and name: ${name}`)
})

// part-4 >>> part-6
function getEevntsByPatialName(name) {
    return events.find(event => event.title.includes(name)); 
}

app.get('/events', (req,res)=>{
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
app.get('/events/:id', (req,res)=>{
    const id = req.params.id;
    const event = events.find(event => event.id === parseInt(id));
    if (!event) {
        res.status(404).send('The event witj the given ID was not found');
    } else {
        res.send(event)
    }
})

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})