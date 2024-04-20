const HomeService = require('../services/home.service');
const PostgreSQLRepository = require('../persistences/repositories/psql.repository');
const MySQLRepository = require('../persistences/repositories/mysql.repository')

const psqlRespoitory = new PostgreSQLRepository();
const mySQLRepository = new MySQLRepository();
const homeService = new HomeService(psqlRespoitory); // here we're using pgsql as repository

const getItems = async(req,res) => {

    // if you have params use
    const model = { param1, param2 } = req.query;

    const result = await homeService.getItems(model);

    res.send(result);
}

module.exports = { getItems };