const express = require('express');
const { PORT } = require('./config/index')
const {home, about} = require('./controllers/index')

const app = express();
app.listen(PORT, ()=>{
    console.log(`server is running on https://localhost//${PORT}`)
})
