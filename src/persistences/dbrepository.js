class DBRespository {
    constructor(database){
        this.database = database;
    }

    async getItems(model) {
        return await this.database.getItems(model);
    }
}

module.exports = DBRespository;