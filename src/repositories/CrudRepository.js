const Logger = require("../config/logger");
class CrudRepository{
    constructor(model){
        this.model=model;
    }


    async create(data){
        try{
            const response = await this.model.create(data);
            Logger.info("Data is successfully created in database");
            return response;

        }catch(err)
        {
            Logger.error("Something went wrong in crud repository");
            throw err;
        }
    }

      async delete(data){
        try{
            const response = await this.model.destroy({
                where: {
                    id:data.id

                }
            });
            Logger.info("Data is successfully deleted from database");
            return response;

        }catch(err)
        {
            Logger.error("Something went wrong in crud repository");
            throw err;
        }
    }

      async get(data){
        try{
            const response = await this.model.findByPk(data)
            Logger.info("Data is successfully got from database");
            return response;

        }catch(err)
        {
            Logger.error("Something went wrong in crud repository");
            throw err;
        }
    }

      async getAll(data){
        try{
            const response = await this.model.findAll(data)
            Logger.info("Data is successfully got from database");
            return response;

        }catch(err)
        {
            Logger.error("Something went wrong in crud repository");
            throw err;
        }
    }

     async update(id, data){
        try{
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            Logger.info("Data is successfully updated in database");
            return response;

        }catch(err)
        {
            Logger.error("Something went wrong in crud repository");
            throw err;
        }
    }


}

module.exports = CrudRepository;

