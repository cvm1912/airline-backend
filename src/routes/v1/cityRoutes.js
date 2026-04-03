const { cityController } = require('../../controllers');
const { cityCreateRequest, updateCityRequest } = require('../../middleware');

const express = require('express');
const router = express.Router();

router.post('/create', cityCreateRequest, cityController.createCity);
router.get('/', cityController.getCities);
router.get('/:id', cityController.getCity);
router.patch('/:id', updateCityRequest, cityController.updateCity);
router.delete('/:id', cityController.destroyCity);

module.exports = router;