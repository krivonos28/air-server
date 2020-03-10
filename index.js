const Sequelize = require('sequelize');
const express = require('express');
const cors = require('cors');
const airports = require('./routers/airports.router')
const bodyParser = require('body-parser')
const app = express();

const sequelize = new Sequelize('postgres://docker:docker@air-db:5432/docker')
console.log('her')
// const sequelize = new Sequelize("docker", "docker", "docker", {
//   dialect: "postgres",
//   host: "air-db",
//   port: 5432,
//   define: {
//     timestamps: false
//   }
// });
sequelize.sync().then(result=>{
  console.log(result);
})
.catch(err=> console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.sequelize = sequelize;
  next();
})
app.use('/airports', airports);


app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3001, () => {
    console.log('Server is running')
})
