
const express = require('express');
const cors = require('cors');
const airports = require('./routers/airports.router')
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/airports', airports);

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3001, () => {
    console.log('Server is running')
})
