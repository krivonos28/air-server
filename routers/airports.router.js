const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/get-all-airports', async (req, res) => {
    console.log('get all airports')
    const data = await models.Airport.findAll({order: ['airport_id']});
    res.send(data)
});
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
    await models.Airport.update({ 
        airport_id: airport_id,
        altitude: altitude,
        city: city,
        country: country,
        dst:dst,
        iata: iata,
        icao: icao,
        latitude: latitude,
        longitude: longitude,
        name: name,
        source_id: source_id,
        timezone: timezone,
        type_id: type_id,
    }, {
        where: {
            airport_id: airport_id
        }
    });
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