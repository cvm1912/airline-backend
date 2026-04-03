const express = require('express');
const router = express.Router();
const { flightController } = require('../../controllers');
const { createFlightRequest, updateFlightRequest } = require('../../middleware');

router.post('/create', createFlightRequest, flightController.createFlight);
router.get('/', flightController.getFlights);
router.get('/:id', flightController.getFlight);
router.patch('/:id', updateFlightRequest, flightController.updateFlight);
router.delete('/:id', flightController.destroyFlight);

module.exports = router;
