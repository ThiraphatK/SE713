const express = require('express');
const app = express();

app.use(express.json());

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

app.get('/ex1', (req,res) => {
    let firstNumer = req.query.firstNumber;
    let secondNumber = req.query.secondNumber;
    firstNumer = isNaN(firstNumer) ? 0 : firstNumer;
    secondNumber = isNaN(secondNumber) ? 0 : secondNumber;
    const result = parseInt(firstNumer) + parseInt(secondNumber);
    res.send(`The result is: ${result}`);
});

app.post('/ex2', (req,res) => {
    let firstNumer = req.body.firstNumber;
    let secondNumber = req.body.secondNumber;
    firstNumer = isNaN(firstNumer) ? 0 : firstNumer;
    secondNumber = isNaN(secondNumber) ? 0 : secondNumber;
    const result = parseInt(firstNumer) + parseInt(secondNumber);
    res.send(`The result is: ${result}`);
});

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})