const express = require('express');
const { ServerConfig, logger } = require('./config/index')
const apiRoutes = require('./routes/index')


const app = express();
app.use('/api', apiRoutes )
app.listen(ServerConfig.PORT, ()=>{
    console.log(`server is running on https://localhost:${ServerConfig.PORT}`)
    logger.info("successfully started the server")
})
