
const { StatusCodes } = require('http-status-codes')
const {ErrorResponse} = require('../utils/common');

async function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
         ErrorResponse.message = "Name is required";
         ErrorResponse.error.explanation = "Please provide a name for the airport";
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.code) {
        ErrorResponse.message = "Code is required";
        ErrorResponse.error.explanation = "Please provide a code for the airport";
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.cityId || isNaN(req.body.cityId)) {
        ErrorResponse.message = "City ID is required";
        ErrorResponse.error.explanation = "Please provide a valid city ID for the airport";
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest
}