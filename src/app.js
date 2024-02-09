const express = require('express');
const testRoutes = require('./routes/testRoutes');
const eventRoutes = require('./routes/eventDbRoutes');
const app = express();

app.use(express.json());

app.use('/test', testRoutes);
app.use('/events',eventRoutes);

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})