// mySQLRepository.js
const mysql = require('mysql');

class MySQLRepository {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    this.connection.connect();
  }

  async query(sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }

  async findUser(username){
    const sql = 'select * from users where $1;'
    const result = await this.query(sql, [username]);
    return result.rows;
  }

  async getItems(model) {
    const sql = 'SELECT * FROM items where field1 = $1 and field2 = $2 ';
    const result = await this.query(sql, [model.param1, model.param2]);
    return result;
  }

  // Add more methods as needed
}

module.exports = MySQLRepository;
