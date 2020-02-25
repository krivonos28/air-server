
const { Pool } = require('pg')
const pool = new Pool({ user: 'airUser',
host: 'localhost',
database: 'air1',
password: 'air123',
port: 5432,})
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}