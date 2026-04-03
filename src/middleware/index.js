const { validateCreateRequest } = require('./airplane');
const { validateCreateRequest: validateCityRequest } = require('./city');
const { validateCreateRequest: validateAirportRequest } = require('./airportMiddleware');

module.exports = {
    createRequest: validateCreateRequest,
    cityCreateRequest: validateCityRequest,
    updateCityRequest: validateCityRequest,
    createAirportRequest: validateAirportRequest,
    updateAirportRequest: validateAirportRequest
}