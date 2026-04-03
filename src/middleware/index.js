const { validateCreateRequest } = require('./airplane');
const { validateCreateRequest: validateCityRequest } = require('./city');
const { validateCreateRequest: validateAirportRequest } = require('./airportMiddleware');
const { validateCreateRequest: validateFlightRequest, validateUpdateRequest: validateFlightUpdateRequest } = require('./flight');

module.exports = {
    createRequest: validateCreateRequest,
    cityCreateRequest: validateCityRequest,
    updateCityRequest: validateCityRequest,
    createAirportRequest: validateAirportRequest,
    updateAirportRequest: validateAirportRequest,
    createFlightRequest: validateFlightRequest,
    updateFlightRequest: validateFlightUpdateRequest
}