const mysql = require('mysql2');

const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: '713'
});

connection.connect((err)=>{
    if (err) {
        console.error('Error connection to the database', err);
        return;
    } else {
        console.log('Connected to the datbase');
    }
})