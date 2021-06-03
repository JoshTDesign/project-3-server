const express = require('express');
const router = express.Router();
const {Expense} = require("../models");
const tokenAuth = require("../middleware/tokenAuth")

router.get("/",(req,res)=>{
    Expense.findAll().then(expenses=>{
        res.json(expenses)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"error",err})
    })
  })
  
  router.get("/:id",(req,res)=>{
    Expense.findOne({
        where:{
            id:req.params.id
        }
    }).then(expense=>{
        res.json(expense)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"error",err})
    })
  })
  router.post("/",tokenAuth,(req,res)=>{
      Expense.create({
          name:req.body.name,
          cost:req.body.cost,
      }).then (expense=>{
          res.json(expense)
      }).catch(err=>{
          console.log(err);
          res.status(500).json({message:"error",err})
      })
  })

  router.put("/:id",tokenAuth,(req,res)=>{
    Expense.findOne({
        where:{
            id:req.params.id
        }
    }).then(expense=>{
        if(expense.UserId!== req.user.id){
            return res.status(403).json({message:"Invalid Expense!"})
        }
        Expense.update({
            name:req.body.name,
            cost:req.body.cost,
        },{
            where:{
                id:req.params.id
            }
        }).then(editExpense=>{
            res.json(editExpense)
        }).catch(err=>{
            res.status(500).json({message:"error",err})
        })
    })
})

  router.delete("/id", tokenAuth,(req,res)=>{
      Expense.findOne({
          where:{
              id:req.params.id
          }
      }).then (expense=>{
          if(expense.UserId!== req.user.id){
            return res.status(403).json({message:"Invalid Expense!"})
        }
        Expense.destroy({
            where:{
                id:req.params.id
            }
        }).then(delExpense=>{
            res.json(delExpense)
        }).catch(err=>{
            res.status(500).json({message:"error",err})
        })
    })
  })

  module.exports= router;