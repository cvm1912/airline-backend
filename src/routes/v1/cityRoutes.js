const { cityController } = require('../../controllers')
const { cityCreateRequest } = require('../../middleware');

const express = require('express')
const router = express.Router();
router.post('/create', cityCreateRequest, cityController.createCity);

module.exports = router;