const express = require('express');
const router = express.Router();
const { getCoordinates } = require('../controllers/LocationController');

router.post('/get-coordinates', getCoordinates);

module.exports = router;
