class HomeService{
    constructor(repository){
        this.repository = repository;
    }
    
    async getItems(model){
        return await this.repository.getItems(model);
    }
}

module.exports = HomeService;