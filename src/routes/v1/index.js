const express = require('express')
const { info } = require('../../controllers/infoController')
const airplaneRoute = require('./airplaneRoute')
const router = express.Router()
router.get('/info', info)
router.use('/airplanes', airplaneRoute)

module.exports = router;