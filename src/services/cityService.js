const { cityRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/error/error');
const { logger } = require('../config');

const CityRepository = new cityRepository();

async function createCity(data) {
    try {
        const response = await CityRepository.create(data);
        logger.info('City is successfully created');
        return response;
    } catch(err) {
        if(err.name === 'TypeError') {
            throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
        } else if(err.name === 'SequelizeUniqueConstraintError') {
            throw new AppError('City with the given name already exists', StatusCodes.BAD_REQUEST);
        } else {
            throw err;
        }
    }
}

async function getCities() {
    try {
        const response = await CityRepository.getAll();
        return response;
    } catch(err) {
        throw err;
    }
}

async function getCity(id) {
    try {
        const response = await CityRepository.get(id);
        return response;
    } catch(err) {
        if(err.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('No city found for the given id', StatusCodes.NOT_FOUND);
        }
        throw err;
    }
}

async function updateCity(id, data) {
    try {
        const response = await CityRepository.update(id, data);
        return response;
    } catch(err) {
        if(err.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('No city found for the given id', StatusCodes.NOT_FOUND);
        }
        throw err;
    }
}

async function destroyCity(id) {
    try {
        const response = await CityRepository.delete({ id });
        return response;
    } catch(err) {
        if(err.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('No city found for the given id', StatusCodes.NOT_FOUND);
        }
        throw err;
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity
};