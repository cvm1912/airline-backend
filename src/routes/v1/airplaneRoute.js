const express = require('express');
const router = express.Router();

const { airplaneController } = require('../../controllers');
const { createRequest } = require('../../middleware');

router.post('/create', createRequest, airplaneController.createAirplane);
router.get('/', airplaneController.getAirplanes);

module.exports = router;