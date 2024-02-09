const express = require('express');
const testRoutes = require('./routes/testRoutes');
const eventRoutes = require('./routes/eventDbRoutes');
const eventDbPromiseRoutes = require('./routes/eventDbPromiseRoutes');
const app = express();

app.use(express.json());

app.use('/test', testRoutes);
// app.use('/events',eventRoutes);
app.use('/events',eventDbPromiseRoutes);

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})