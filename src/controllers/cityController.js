const logger = require("../config/logger");
const {cityService} = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");


/**
 * POST: /cities
 * req-body: {name:'Delhi'}
 */


async function createCity(req,res){
   try{
    const {name} = req.body;
    const response = await cityService.createCity({name});
    SuccessResponse.message = "City created successfully";
    SuccessResponse.data = response;
    SuccessResponse.error = {};
    SuccessResponse.success = true;
    res.status(201).json(SuccessResponse);
   }catch(err){
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.success = false;
    ErrorResponse.data = {};
    ErrorResponse.error = err;
    res.status(err.statusCode || 500).json(ErrorResponse);
   }
}


module.exports = {
    createCity
}