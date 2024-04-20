// postgreSQLRepository.js
const { Pool } = require('pg');

class PostgreSQLRepository {
  constructor() {
    this.pool = new Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
    });
  }

  async query(sql, params) {
    const client = await this.pool.connect();
    try {
      return await client.query(sql, params);
    } finally {
      client.release();
    }
  }

  async findUser(username){
    const sql = 'select * from users where $1;'
    const result = await this.query(sql, [username]);
    return result.rows;
  }

  async getItems(model) {
    const sql = 'SELECT * FROM items where field1 = $1 and field2 = $2 ';
    const result = await this.query(sql, [model.param1, model.param2]);
    return result.rows;
  }

  // Add more methods as needed
}

module.exports = PostgreSQLRepository;
