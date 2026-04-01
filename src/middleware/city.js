const { StatusCodes } = require('http-status-codes')
const {ErrorResponse} = require('../utils/common');

async function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
         ErrorResponse.message = "City name is required";
         ErrorResponse.error.explanation = "Please provide a name for the city";
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

module.exports = { validateCreateRequest }