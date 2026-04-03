const { AirportRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/error/error');
const { logger } = require('../config');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const response = await airportRepository.create(data);
        return response;
    } catch(err) {
        logger.error('cannot create a new airport object');
        if(err.name === 'TypeError') {
            throw new AppError('Cannot create a new airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        } else if(err.name === 'SequelizeUniqueConstraintError') {
            throw new AppError('Airport with the given name/code already exists', StatusCodes.BAD_REQUEST);
        } else {
            throw err;
        }
    }
}


async function getAirports() {
    try {
        const response = await airportRepository.getAll();
        return response;
    } catch(err) {
        throw new AppError('Cannot fetch airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const response = await airportRepository.get(id);
        return response;
    } catch(err) {
        throw new AppError('Cannot fetch airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}   


async function destroyAirport(id) {
    try {
        const response = await airportRepository.delete({ id });
        return response;
    } catch(err) {
        throw new AppError('Cannot delete airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data) {    
    try {   
        const response = await airportRepository.update(id, data);
        return response;
    } catch(err) {
        logger.error('cannot update the airport object');
        if(err.name === 'TypeError') {
            throw new AppError('Cannot update the airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        } else if(err.name === 'SequelizeUniqueConstraintError') {
            throw new AppError('Airport with the given name/code already exists', StatusCodes.BAD_REQUEST);
        } else {
            throw err;
        }
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};
