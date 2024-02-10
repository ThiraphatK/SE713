const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('hello world!');
});

app.get('/hello', (req,res)=>{
    const returnObj = {
        name:"test",
        age: "20",
        address: "thai"
    };
    res.send(returnObj);
});

app.post('/addMany', (req,res) => {
    const firstNumer = req.query.firstNumber;
    const secondNumber = req.query.secondNumber;
    const result = parseInt(firstNumer) + parseInt(secondNumber);
    res.send(`The result is: ${result}`);
});

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})