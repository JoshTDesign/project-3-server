const express = require('express');
const router = express.Router();
const {User, Trip, Activity } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenAuth = require('../middleware/tokenAuth');
const axios = require('axios');
const env = require('dotenv');


//use the openweather api to get the latitude and longitude of a city
router.get('/lat/:city', (req, res) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.OPEN_WEATHER}`);
})

module.exports = router;