const express = require('express');
const organizeRouter = require('./routes/organizerRoutes');
const app = express();

app.use(express.json());
app.use('/organizer', organizeRouter);

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})