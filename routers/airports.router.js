const express = require('express');
const router = express.Router();
const AirportModel = require('../models/airports.model')
// const db = require('../db/index.js');

router.get('/get-all-airports', async (req, res) => {
    console.log('get all airports');
    const data = await AirportModel.findAll();
    res.send(airports)
})
router.put('/', async (req, res) => {
    const {
        airport_id,
        altitude,
        city,
        country,
        dst,
        iata,
        icao,
        latitude,
        longitude,
        name,
        source_id,
        timezone,
        type_id
    } = req.body;
    const { data } = await db.query(`UPDATE AIRPORTS SET 
        airport_id = ${airport_id},
        altitude = ${altitude},
        city = ${city},
        country = ${country},
        dst = ${dst},
        iata = ${iata},
        icao = ${icao},
        latitude = ${latitude},
        longitude = ${longitude},
        name = ${name},
        source_id = ${source_id},
        timezone = ${timezone},
        type_id = ${type_id}
        where airport_id = ${airport_id}`);
    res.send('good')
});
router.post('/', async (req, res) => {
    console.log('---', req.body);
    res.send('deleted')
});
router.delete('/', async (req, res) => {
    console.log('---', req.query);
    res.send('deleted')
});

module.exports = router;