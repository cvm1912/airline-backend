const {airplaneRepository} = require("../repositories");
const {StatusCodes} = require("http-status-codes");
const AppError = require("../utils/error/error");


const AirplaneRepository = new airplaneRepository();

async function createAirplane(data){
    try{
        const response = await AirplaneRepository.create(data);
        return response;
    }catch(err){
        if(err.name == "TypeError"){
            throw new AppError("cannot create a new airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw err;
    }
}

async function getAirplanes(){
    try{
        const response = await AirplaneRepository.getAll();
        return response;
    }catch(err){
        throw err;
    }
}

module.exports={
    createAirplane,
    getAirplanes
}   


