const { airplaneController } = require('../../controllers')
const { createRequest } = require('../../middleware');

const express = require('express')
const router = express.Router();
router.post('/create', createRequest, airplaneController.createAirplane);
router.get('/', airplaneController.getAirplanes);
router.get('/:id', airplaneController.getAirplane);
router.delete('/:id', airplaneController.destroyAirplane);

module.exports = router;