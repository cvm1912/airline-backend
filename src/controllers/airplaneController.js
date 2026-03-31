const logger = require("../config/logger");
const {airplaneService} = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

 
/**
 * POST: /airplanes
 * req-body: {modelNumber:'airbus320', capacity:200}
 */

async function createAirplane(req,res){
    try{
        const {modelNumber, capacity } = req.body;    
        const response = await airplaneService.createAirplane({modelNumber, capacity});
        SuccessResponse.message = "Airplane created successfully";
        SuccessResponse.data = response;
        SuccessResponse.error = {};
        SuccessResponse.success = true;
        res.status(201).json(SuccessResponse);
    }
    catch(err){
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.success = false;
        ErrorResponse.data = {};
        ErrorResponse.error = err;
        res.status(err.statusCode || 500).json(ErrorResponse);
    }
}

async function getAirplanes(req,res){
    try{
        const response = await airplaneService.getAirplanes();
        SuccessResponse.message = "Airplanes fetched successfully";
        SuccessResponse.success = true;
        SuccessResponse.error = {};
        SuccessResponse.data = response;
        res.status(200).json(SuccessResponse);
    }
    catch(err){
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(500).json(ErrorResponse);
    }
}

/**
 * GET: /airplanes/:id
 * req-body: {}
 */

async function getAirplane(req,res){
    try{
        const id = req.params.id;
        const response = await airplaneService.getAirplane(id);
        SuccessResponse.message = "Airplane fetched successfully";
        SuccessResponse.success = true;
        SuccessResponse.error = {};
        SuccessResponse.data = response;
        res.status(200).json(SuccessResponse);

    }catch(err){
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(500).json(ErrorResponse);
    }
}

/**
 * 
 * DELETE: /airplanes/:id
 * req-body: {}
 */
async function destroyAirplane(req,res){
    try{
        const id = req.params.id;
        const response = await airplaneService.destroyAirplane(id);
        SuccessResponse.message = "Airplane deleted successfully";
        SuccessResponse.success = true;
        SuccessResponse.error = {};
        SuccessResponse.data = response;
        res.status(200).json(SuccessResponse);
    }catch(err){
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = err;
        ErrorResponse.data = {};
        ErrorResponse.success = false;
        res.status(500).json(ErrorResponse);
    }
}
   

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}   
