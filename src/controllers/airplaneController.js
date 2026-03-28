const {airplaneService} = require("../services");
 
/**
 * POST: /airplanes
 * req-body: {modelNumber:'airbus320', capacity:200}
 */

function createAirplane(req,res){
    try{
        const {modelNumber, capacity } = req.body;    
        const response = airplaneService.createAirplane({modelNumber, capacity});
        res.status(201).json({
            success: true,
            message: "Airplane created successfully",
            data: response,
            error: {}
        });
    }
    catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error: err,
            data: {},
            success: false

        })
    }
}

function getAirplanes(req,res){
    try{
        const response = airplaneService.getAirplanes();
        res.status(200).json({
            success: true,
            message: "Airplanes fetched successfully",
            data: response,
            error: {}
        });
    }
    catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error: err,
            data: {},
            success: false

        })
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}

