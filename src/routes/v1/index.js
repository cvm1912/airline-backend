const express = require('express')
const { info } = require('../../controllers/infoController')
const router = express.Router()
router.get('/info', info)

module.exports = router;