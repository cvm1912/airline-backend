const express = require('express');
const { PORT } = require('./config/index')
const apiRoutes = require('./routes/index')


const app = express();
app.use('/api', apiRoutes )
app.listen(PORT, ()=>{
    console.log(`server is running on https://localhost//${PORT}`)
})
