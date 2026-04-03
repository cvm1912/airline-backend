const CrudRepository = require("./CrudRepository");

const { airport } = require('../models');

class AirportRepository extends CrudRepository{
    constructor(){
        super(airport);
    }
}

module.exports = AirportRepository;