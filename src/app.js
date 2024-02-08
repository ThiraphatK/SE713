const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/test', (req,res)=>{
    const id = req.query.id;
    const name = req.query.name || 'No name';
    const output = `id: ${id} and name: ${name}`;
    res.send(output)
});

app.get('/test/:id/name/:name', (req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    res.send(`id: ${id} and name: ${name}`)
})

app.post('/test', (req,res)=>{
    const obj = req.body;
    const id = obj.id;
    const name = obj.name;
    res.send(`id: ${id} and name: ${name}`)
})

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})