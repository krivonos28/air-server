const Sequelize = require('sequelize');
const express = require('express');
const cors = require('cors');
const airports = require('./routers/airports.router')
const bodyParser = require('body-parser')
const app = express();

const sequelize = new Sequelize("docker", "docker", "docker", {
  dialect: "postgres",
  host: "localhost",
  port: 5333,
  define: {
    timestamps: false
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.sequelize = sequelize;
  next();
})
app.use('/airports', airports);


app.get('/', function(req, res) {кру
  res.send('hello world');
});

app.listen(3001, () => {
    console.log('Server is running')
})
