const express = require('express')
const { info } = require('../../controllers/infoController')
const airplaneRoute = require('./airplaneRoute')
const cityRoute = require('./cityRoutes')
const router = express.Router()
router.get('/info', info)
router.use('/airplanes', airplaneRoute)
router.use('/cities', cityRoute)

module.exports = router;