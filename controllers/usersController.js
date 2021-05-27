const express = require('express');
const router = express.Router();
const {User, Trip, Activity } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenAuth = require('../middleware/tokenAuth');


router.get("/dashboard", (req, res) => {

 Trip.findAll({
            include: [
                {
                    model: User,
                    through: {
                        where: {
                            user_id: 1,
                        }
                    },
                    as: "Trips",
                },  
                {model: Activity},
            ],
        }).then(userData => {
            return res.json(userData);
        }).catch(err => {
            console.log(err);
            return res.status(403).json({message:"error", err});
        })

})
module.exports = router;