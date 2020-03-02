
const { Pool } = require('pg')
const pool = new Pool({ user: 'docker',
host: 'localhost',
database: 'docker',
password: 'docker',
port: 5333,})
console.log(process.env.PG_PORT)
<<<<<<< HEAD
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
=======

module.exports = {
  query: async (text, params) => {
    return pool.query(text, params);
>>>>>>> c74789d4f043a8575ff4eac0c635767ffdab57c6
  },
}