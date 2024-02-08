const express = require('express');
const bodyParser = require('body-parser');
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
const events = [
    {
        "id": 123,
        "category": "animal welfare",
        "title": "Cat Adoption Day",
        "description": "Find your new feline friend at this event.",
        "location": "Meow Town",
        "date": "January 28, 2022",
        "time": "12:00",
        "petAllowed": true,
        "organizer": "Kat Laydee"
    },
    {
        "id": 456,
        "category": "food",
        "title": "Community Gardening",
        "description": "Join us as we tend to the community edible plants.",
        "location": "Flora City",
        "date": "March 14, 2022",
        "time": "10:00",
        "petAllowed": true,
        "organizer": "Fern Pollin"
    },
    {
        "id": 789,
        "category": "sustainability",
        "title": "Beach Cleanup",
        "description": "Help pick up trash along the shore.",
        "location": "Playa Del Carmen",
        "date": "July 22, 2022",
        "time": "11:00",
        "petAllowed": false,
        "organizer": "Carey Wales"
    },
    {
        "id": 1001,
        "category": "animal welfare",
        "title": "Dog Adoption Day",
        "description": "Find your new canine friend at this event.",
        "location": "Woof Town",
        "date": "August 28, 2022",
        "time": "12:00",
        "petAllowed": true,
        "organizer": "Dawg Dahd"
    },
    {
        "id": 1002,
        "category": "food",
        "title": "Canned Food Drive",
        "description": "Bring your canned food to donate to those in need.",
        "location": "Tin City",
        "date": "September 14, 2022",
        "time": "3:00",
        "petAllowed": true,
        "organizer": "Kahn Opiner"
    },
    {
        "id": 1003,
        "category": "sustainability",
        "title": "Highway Cleanup",
        "description": "Help pick up trash along the highway.",
        "location": "Highway 50",
        "date": "July 22, 2022",
        "time": "11:00",
        "petAllowed": false,
        "organizer": "Brody Kill"
    }
]
app.get('/events', (req,res)=>{
    const name = req.query.name;
    console.log(name);
    if (name) {
        const event = events.find(event => event.title === name);
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