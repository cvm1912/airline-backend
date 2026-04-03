const { airportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { logger } = require('../config');

async function createAirport(req, res) {
    try {
        const { name, code, cityId } = req.body;
        const response = await airportService.createAirport({ name, code, cityId });
        SuccessResponse.message = 'Airport created successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(201).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.error = err;
        ErrorResponse.message = 'Something went wrong while creating the airport';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function getAirports(req, res) {
    try {
        const response = await airportService.getAirports();
        SuccessResponse.message = 'Airports fetched successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.error = err;
        ErrorResponse.message = 'Something went wrong while fetching the airports';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function getAirport(req, res) {
    try {
        const response = await airportService.getAirport(req.params.id);
        SuccessResponse.message = 'Airport fetched successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.error = err;
        ErrorResponse.message = 'Something went wrong while fetching the airport';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function destroyAirport(req, res) {
    try {
        const response = await airportService.destroyAirport(req.params.id);
        SuccessResponse.message = 'Airport deleted successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.error = err;
        ErrorResponse.message = 'Something went wrong while deleting the airport';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function updateAirport(req, res) {
    try {
        const { name, code, cityId } = req.body;
        const response = await airportService.updateAirport(req.params.id, { name, code, cityId });
        SuccessResponse.message = 'Airport updated successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.error = err;
        ErrorResponse.message = 'Something went wrong while updating the airport';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};
