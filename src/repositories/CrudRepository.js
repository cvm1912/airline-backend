const Logger = require("../config/logger")
const { StatusCodes } = require("http-status-codes")
const AppError = require("../utils/error/error")

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        const response = await this.model.create(data);
        return response;
    }

    async delete(data){
        const response = await this.model.destroy({
            where: {
                id: data.id
            }
        });
        if(!response){
            throw new AppError("No record found for the given id", StatusCodes.NOT_FOUND);
            Logger.error("No record found for the given id");
        }
        return response;
    }

    async get(data){
        const response = await this.model.findByPk(data);
        if(!response){
            Logger.error("No record found for the given id");
            throw new AppError("No record found for the given id", StatusCodes.NOT_FOUND);
        }
        Logger.info("Data is successfully got from database");
        return response;
    }

    async getAll(data){
        const response = await this.model.findAll(data);
        Logger.info("Data is successfully got from database");
        return response;
    }

    async update(id, data){
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        });
        Logger.info("Data is successfully updated in database");
        return response;
    }
}

module.exports = CrudRepository;
