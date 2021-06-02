const express = require('express');
const router = express.Router();
const {Activity} = require("../models");
const tokenAuth = require("../middleware/tokenAuth")

router.get("/",(req,res)=>{
  Activity.findAll().then(activities=>{
      res.json(activities)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"error",err})
  })
})

router.get("/:id",(req,res)=>{
  Activity.findOne({
      where:{
          id:req.params.id
      }
  }).then(activity=>{
      res.json(activity)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"error",err})
  })
})
router.post("/",tokenAuth,(req,res)=>{
  Activity.create({
      activityName:req.body.activityName,
      description:req.body.description,
      address:req.body.address,
      activityUrl: req.body.url,
      category:req.body.category,
      cost:req.body.cost,
      reservation:req.body.reservation,
      activity_date:req.body.activity_date,
      start_time:req.body.start_time,
      end_time:req.body.end_time,
      UserId:req.user.id,
      tripId:req.body.tripId
  }).then(activity=>{
      res.json(activity)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"error",err})
  })
})

router.put("/:id",tokenAuth,(req,res)=>{
  Activity.findOne({
      where:{
          id:req.params.id
      }
  }).then(activity=>{
      if(activity.UserId!== req.user.id){
          return res.status(403).json({message:"Invalid Activity!"})
      }
      Activity.update({
          activityName:req.body.activityName,
          cost:req.body.cost,
          reservation:req.body.reservation,
          activity_date:req.body.activity_date,
          start_time:req.body.start_time,
          end_time:req.body.end_time,
      },{
          where:{
              id:req.params.id
          }
      }).then(editActivity=>{
          res.json(editActivity)
      }).catch(err=>{
          res.status(500).json({message:"error",err})
      })
  })
})
router.delete("/:id",tokenAuth,(req,res)=>{
  Activity.findOne({
      where:{
          id:req.params.id
      }
  }).then(activity=>{
      if(activity.UserId!== req.user.id){
          return res.status(403).json({message:"Invalid Activity!"})
      }
      Activity.destroy({
          where:{
              id:req.params.id
          }
      }).then(delActivity=>{
          res.json(delActivity)
      }).catch(err=>{
          res.status(500).json({message:"error",err})
      })
  })
})

module.exports = router;

