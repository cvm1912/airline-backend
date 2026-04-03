const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createFlight(req, res) {
    try {
        const { flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, totalSeats, boardingGate } = req.body;
        const response = await FlightService.createFlight({ flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, totalSeats, boardingGate });
        SuccessResponse.message = 'Flight created successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(201).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function getFlights(req, res) {
    try {
        const response = await FlightService.getFlights();
        SuccessResponse.message = 'Flights fetched successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function getFlight(req, res) {
    try {
        const response = await FlightService.getFlight(req.params.id);
        SuccessResponse.message = 'Flight fetched successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function updateFlight(req, res) {
    try {
        const response = await FlightService.updateFlight(req.params.id, req.body);
        SuccessResponse.message = 'Flight updated successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function destroyFlight(req, res) {
    try {
        const response = await FlightService.destroyFlight(req.params.id);
        SuccessResponse.message = 'Flight deleted successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getFlights,
    getFlight,
    updateFlight,
    destroyFlight
};
