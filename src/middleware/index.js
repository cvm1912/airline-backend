const { validateCreateRequest } = require('./airplane');
const { validateCreateRequest: validateCityCreateRequest } = require('./city');

module.exports = {
    createRequest: validateCreateRequest,
    cityCreateRequest: validateCityCreateRequest
}
