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


async function getAirplane(id){
    try{
        const response = await AirplaneRepository.get(id);
        return response;
    }catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airplane found for the given id", StatusCodes.NOT_FOUND);
        }
        throw err;
    }
}
module.exports={
    createAirplane,
    getAirplanes,
    getAirplane
}   


