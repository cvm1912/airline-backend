const {StatusCodes} = require("http-status-codes");
const {CityRepository} = require("../repositories");
const { logger } = require("../config");

const cityRepository = new CityRepository();

async function createCity(data){
    try{
         const response = await cityRepository.create(data);
         logger.info("City is successfully created");
         return response;
    }catch(err){
        if(err.name == "TypeError"){
            throw new AppError("cannot create a new city object", StatusCodes.INTERNAL_SERVER_ERROR);
        }else if(err.name == "SequelizeUniqueConstraintError"){
            throw new AppError("City with the given name already exists", StatusCodes.BAD_REQUEST);
        }else{
            throw err;
        }
    }
}


async function getCities(){
    try{
        const response = await cityRepository.getAll();
        return response;
    }catch(err){
        throw err;
    }
}


module.exports={
    createCity,
    getCities
}