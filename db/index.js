
// const { Pool } = require('pg')
// const pool = new Pool({ user: 'docker',
// host: 'localhost',
// database: 'docker',
// password: 'docker',
// port: 5333,})

const Sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://docker:docker@air-db:5432/docker')

// Option 1: Passing parameters separately
console.log('-------', prcocess.env.PG_HOST)
const sequelize = new Sequelize('docker', 'docker', 'docker', {
  host: 'air-db',
  port: 5432,
  dialect: 'postgres'
});


module.exports = {
  query: async (text, params) => {
    return pool.query(text, params);
  },
}

