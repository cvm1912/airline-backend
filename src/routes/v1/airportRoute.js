const { airportController } = require('../../controllers');
const { createAirportRequest, updateAirportRequest } = require('../../middleware');
const express = require('express');
const router = express.Router();

router.post('/create', createAirportRequest, airportController.createAirport);
router.get('/', airportController.getAirports);
router.get('/:id', airportController.getAirport);
router.delete('/:id', airportController.destroyAirport);
router.put('/:id',updateAirportRequest, airportController.updateAirport);

module.exports = router;