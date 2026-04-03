const logger = require('../config/logger');
const { cityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createCity(req, res) {
    try {
        const { name } = req.body;
        const response = await cityService.createCity({ name });
        SuccessResponse.message = 'City created successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(201).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        ErrorResponse.error = err;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function getCities(req, res) {
    try {
        const response = await cityService.getCities();
        SuccessResponse.message = 'Cities fetched successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        ErrorResponse.error = err;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function getCity(req, res) {
    try {
        const response = await cityService.getCity(req.params.id);
        SuccessResponse.message = 'City fetched successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        ErrorResponse.error = err;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function updateCity(req, res) {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        SuccessResponse.message = 'City updated successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        ErrorResponse.error = err;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function destroyCity(req, res) {
    try {
        const response = await cityService.destroyCity(req.params.id);
        SuccessResponse.message = 'City deleted successfully';
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(200).json(SuccessResponse);
    } catch(err) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        ErrorResponse.error = err;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity
};