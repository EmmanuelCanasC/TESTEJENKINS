const express = require('express');
const router = express.Router();
const { suma } = require('./app');

router.get('/suma', (req, res) => {
    const { a, b } = req.query;

    const resultado = suma(Number(a), Number(b));

    res.json({ resultado });
});

module.exports = router;