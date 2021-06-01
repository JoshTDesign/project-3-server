const express = require('express');
const router = express.Router();
const {User, Trip, Activity } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenAuth = require('../middleware/tokenAuth');
const cloudinary = require('cloudinary').v2;
const env = require('dotenv')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_SECRET,
})

router.post("/signup", (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        location: req.body.location,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        image_path: req.body.image_path
    }).then(newUser => {
        const token = jwt.sign({
            username:newUser.username,
            email:newUser.email,
            id:newUser.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"2h"
        })
        res.json({token, user:newUser })
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "an error occured", err })
    })
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            console.log('user not found')
            return res.status(403).json({ message: "auth failed" })
        } else if (!bcrypt.compareSync(req.body.password, user.password)) {
            console.log(req.body.password);
            console.log("passwords dont match")
            return res.status(403).json({ message: "auth failed" })
        } else {
            const token = jwt.sign({
                username:user.username,
                email:user.email,
                id:user.id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"2h"
            })
            res.json({token, user })
        }
    })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json({ message: "an error occured", err })
    // })
})

router.get("/secretclub", tokenAuth,(req, res) => {
    res.json(req.user);
});

router.get("/profile", tokenAuth, (req, res) => {
    res.json(req.user)
});

router.get("/dashboard",tokenAuth, (req, res) => {


 Trip.findAll({
            include: [
                {
                    model: User,
                    through: {
                        where: {
                            user_id: req.params.id,
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

router.get("/dashboard/:id", tokenAuth, (req, res) => {
    User.findOne({
        where: {
            id: req.params.id,
        },
        include: [
           {model: Trip,
            as: "creator"
        }
        ]

    }).then(userData => {
        return res.json(userData);
    }).catch(err => {
        console.log(err);
        return res.status(403).json({message:"error", err});
    })
    });

//TODO: add token auth, none currently for insomnia testing
router.get("/friends/:id", (req, res) =>{

    User.findOne({
        where: {id : req.params.id},

        include: [
            {
            model: User,
            through: {
                where: {
                    user_id: req.params.id,
                }
            },
            as: 'friend',
        }]
      
    }).then(userData => {
        return res.json(userData);
    }).catch(err => {
        console.log(err);
        return res.status(403).json({message:"error", err});
    })
});

module.exports = router;


router.put("/profilepic/:id", (req, res) => {
    console.log(req.body);
    cloudinary.uploader.upload(req.body.image, {tags: 'profile_pic'}, function (err, image) {
        console.log("** File Upload");
        if (err) { console.log(err) }
        else {
        console.log(`* ${image.public_id}`);
        console.log(`* ${image.url}`);
        User.findOne({ where: { id: req.params.id } })
        .then(user => {
            if(user) {
                user.update({
                    image_path: image.url
                }).then(updatedUser => {
                    return res.json(updatedUser);
                })
            }
        }).catch(err => {
            console.log(err);
            return res.status(403).json({message:"error", err});
        })
        }
    })
})

//TODO: add token auth, none currently for insomnia testing
router.post("/friends/:myid/:friendid", (req, res) =>{
User.findOne({where: {id: req.params.myid}})
.then(userData => {
    userData.addFriend(req.params.friendid)
    return res.json(userData);
}).catch(err => {
    console.log(err);
    return res.status(403).json({message:"error", err});
})
})
module.exports = router;
