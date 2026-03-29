const { airplaneRepository } = require("../repositories");

const AirplaneRepository = new airplaneRepository();

async function createAirplane(data) {
    try {
        const response = await AirplaneRepository.create(data);
        return response;
    } catch (err) {
        throw err;
    }
}

async function getAirplanes() {
    try {
        const response = await AirplaneRepository.getAll();
        return response;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createAirplane,
    getAirplanes
};


