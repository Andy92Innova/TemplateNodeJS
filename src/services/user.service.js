class UserService {
    constructor(repository){
        this.repository = repository;
    }

    async findUser(username){
        return await this.repository.findUser(username);
    }
}

module.exports = UserService;