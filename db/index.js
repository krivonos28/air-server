
// const { Pool } = require('pg')
// const pool = new Pool({ user: 'docker',
// host: 'localhost',
// database: 'docker',
// password: 'docker',
// port: 5333,})

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('docker', 'docker', 'docker', {
  host: 'localhost',
  port: 5333,
  dialect: 'postgres' 
});


module.exports = {
  query: async (text, params) => {
    return pool.query(text, params);
  },
}

