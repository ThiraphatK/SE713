const express = require('express');
const testRoutes = require('./routes/testRoutes');
const app = express();

app.use(express.json());
app.use('/test', testRoutes);

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})