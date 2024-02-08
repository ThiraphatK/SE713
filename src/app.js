const express = require('express');
const app = express();

app.get('/test', (req,res)=>{
    const id = req.query.id;
    const name = req.query.name || 'No name';
    const output = `id: ${id} and name: ${name}`;
    res.send(output)
});

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})