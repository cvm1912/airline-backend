const express = require('express')
const { info } = require('../../controllers/infoController')
const airplaneRoute = require('./airplaneRoute')
const cityRoute = require('./cityRoutes')
const airportRoute = require('./airportRoute')
const flightRoute = require('./flightRoute')
const router = express.Router()
router.get('/info', info)
router.use('/airplanes', airplaneRoute)
router.use('/cities', cityRoute)
router.use('/airports', airportRoute)
router.use('/flights', flightRoute)

module.exports = router;