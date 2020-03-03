const express = require('express');
const router = express.Router();
const db = require('../db/index.js');

router.get('/get-all-airports', async (req, res) => {
    console.log('get all airports');
    const { rows: airports } = await db.query("SELECT * FROM AIRPORTS");
    res.send(airports)
})
router.put('/');
router.post('/', async (req, res) => {
    console.log('---', req.body);
    res.send('deleted')
});
router.delete('/', async (req, res) => {
    console.log('---', req.query);
    res.send('deleted')
});

module.exports = router;