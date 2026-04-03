const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

async function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = 'Flight number is required';
        ErrorResponse.error = { explanation: 'Please provide a flight number' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.airplaneId) {
        ErrorResponse.message = 'Airplane ID is required';
        ErrorResponse.error = { explanation: 'Please provide an airplane ID' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.departureAirportId) {
        ErrorResponse.message = 'Departure airport ID is required';
        ErrorResponse.error = { explanation: 'Please provide a departure airport ID' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Arrival airport ID is required';
        ErrorResponse.error = { explanation: 'Please provide an arrival airport ID' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.departureTime) {
        ErrorResponse.message = 'Departure time is required';
        ErrorResponse.error = { explanation: 'Please provide a departure time' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.totalSeats) {
        ErrorResponse.message = 'Total seats is required';
        ErrorResponse.error = { explanation: 'Please provide total seats' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.price) {
        ErrorResponse.message = 'Price is required';
        ErrorResponse.error = { explanation: 'Please provide a price' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

async function validateUpdateRequest(req, res, next) {
    if (!req.body || Object.keys(req.body).length === 0) {
        ErrorResponse.message = 'No fields provided for update';
        ErrorResponse.error = { explanation: 'Please provide at least one field to update' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = { validateCreateRequest, validateUpdateRequest };
