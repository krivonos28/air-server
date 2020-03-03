
const { Pool } = require('pg')
const pool = new Pool({ user: 'docker',
host: 'localhost',
database: 'docker',
password: 'docker',
port: 5333,})
console.log(process.env.PG_PORT)

module.exports = {
  query: async (text, params) => {
    return pool.query(text, params);
  },
}