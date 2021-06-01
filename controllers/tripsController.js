const express = require('express');
const router = express.Router();
const {Trip, Activity} = require('../models');
const tokenAuth = require("../middleware/tokenAuth")

router.get("/",tokenAuth,(req,res)=>{
    Trip.findAll(
        {include:[Activity]}
    ).then(trips=>{
        res.json(trips)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"error",err})
    })
})

router.get("/:id",tokenAuth,(req,res)=>{
    Trip.findOne({
        where:{
            id:req.params.id
        },
        include:[Activity]
    }).then(trip=>{
        res.json(trip)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"error",err})
    })
})
router.post("/",tokenAuth,(req,res)=>{
    console.log('tripsController: ', req.body);
    Trip.create({
        name:req.body.tripName,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        lodgingType:req.body.lodgingType,
        lodgingUrl:req.body.lodgingUrl,
        cost:req.body.cost,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        userId:req.user.id
    }).then(trip=>{
        res.json(trip)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"error",err})
    })
})

router.put("/:id",tokenAuth,(req,res)=>{
    Trip.findOne({
        where:{
            id:req.params.id
        }
    }).then(trip=>{
        if(trip.UserId!== req.user.id){
            return res.status(403).json({message:"Invalid Trip!"})
        }
        Trip.update({
            name:req.body.name,
            cost:req.body.cost,
            start_date:req.body.start_date,
            end_date:req.body.end_date,
        },{
            where:{
                id:req.params.id
            }
        }).then(editTrip=>{
            res.json(editTrip)
        }).catch(err=>{
            res.status(500).json({message:"error",err})
        })
    })
})
router.delete("/:id",tokenAuth,(req,res)=>{
    Trip.findOne({
        where:{
            id:req.params.id
        }
    }).then(trip=>{
        if(trip.UserId!== req.user.id){
            return res.status(403).json({message:"Invalid Trip!"})
        }
        Trip.destroy({
            where:{
                id:req.params.id
            }
        }).then(delTrip=>{
            res.json(delTrip)
        }).catch(err=>{
            res.status(500).json({message:"error",err})
        })
    })
})

module.exports = router;
