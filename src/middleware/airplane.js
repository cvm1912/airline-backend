
const { StatusCodes } = require('http-status-codes')
const {ErrorResponse} = require('../utils/common');

async function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
         ErrorResponse.message = "Model number is required";
         ErrorResponse.error.explanation = "Please provide a model number for the airplane";
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.capacity || isNaN(req.body.capacity)) {
        ErrorResponse.message = "Capacity is required";
        ErrorResponse.error.explanation = "Please provide a capacity for the airplane";
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}