const express = require('express');
const router = express.Router();

const {airplaneController} = require('../../controllers');

router.post('/create', airplaneController.createAirplane);
router.get('/', airplaneController.getAirplanes);


module.exports = router;