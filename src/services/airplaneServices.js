const {airplaneRepository} = require("../repositories")


const AirplaneRepository = new airplaneRepository();
function createAirplane(data){
    try{
        const response = AirplaneRepository.create(data);
        return response;

    }catch(err){
        throw err;
    }
}

function getAirplanes(){
    try{
        const response = AirplaneRepository.getAll();
        return response;

    }catch(err){
        throw err;
    }
}

module.exports={
    createAirplane,
    getAirplanes
}   


