const { FlightRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/error/error');
const { logger } = require('../config');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const response = await flightRepository.create(data);
        logger.info('Flight is successfully created');
        return response;
    } catch(err) {
        if(err.name === 'TypeError') {
            throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR);
        } else if(err.name === 'SequelizeUniqueConstraintError') {
            throw new AppError('Flight with the given details already exists', StatusCodes.BAD_REQUEST);
        } else {
            throw err;
        }
    }
}

async function getFlights() {
    try {
        const response = await flightRepository.getAll();
        return response;
    } catch(err) {
        throw err;
    }
}

async function getFlight(id) {
    try {
        const response = await flightRepository.get(id);
        return response;
    } catch(err) {
        if(err.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('No flight found for the given id', StatusCodes.NOT_FOUND);
        }
        throw err;
    }
}

async function updateFlight(id, data) {
    try {
        const response = await flightRepository.update(id, data);
        return response;
    } catch(err) {
        if(err.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('No flight found for the given id', StatusCodes.NOT_FOUND);
        }
        throw err;
    }
}

async function destroyFlight(id) {
    try {
        const response = await flightRepository.delete({ id });
        return response;
    } catch(err) {
        if(err.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('No flight found for the given id', StatusCodes.NOT_FOUND);
        }
        throw err;
    }
}

module.exports = {
    createFlight,
    getFlights,
    getFlight,
    updateFlight,
    destroyFlight
};