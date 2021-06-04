const express = require("express");
const router = express.Router();
const { Trip, Activity, User } = require("../models");
const tokenAuth = require("../middleware/tokenAuth");

//get all trips in the database and their associated activities
router.get("/", tokenAuth, (req, res) => {
  Trip.findAll({ include: [Activity] })
    .then((trips) => {
      res.json(trips);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//get a specific trip and its associated activities based on ID
router.get("/:id", tokenAuth, (req, res) => {
  Trip.findOne({
    where: {
      id: req.params.id,
    },
    include: [Activity],
  })
    .then((trip) => {
      res.json(trip);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//create a new trip
router.post("/", tokenAuth, (req, res) => {
  console.log("tripsController: ", req.body);
  Trip.create({
    name: req.body.tripName,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    lodgingType: req.body.lodgingType,
    lodgingUrl: req.body.lodgingUrl,
    cost: req.body.cost,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    userId: req.user.id,
  })
    .then((trip) => {
      res.json(trip);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error", err });
    });
});
//update a specific trip with a matching ID
router.put("/:id", tokenAuth, (req, res) => {
  Trip.findOne({
    where: {
      id: req.params.id,
    },
  }).then((trip) => {
    if (trip.UserId !== req.user.id) {
      return res.status(403).json({ message: "Invalid Trip!" });
    }
    Trip.update(
      {
        name: req.body.name,
        cost: req.body.cost,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((editTrip) => {
        res.json(editTrip);
      })
      .catch((err) => {
        res.status(500).json({ message: "error", err });
      });
  });
});
//Delete a trip with the given ID if it matches with the user ID
router.delete("/:id/:userId", tokenAuth, (req, res) => {
  Trip.findOne({
    where: {
      id: req.params.id,
    },
  }).then((trip) => {
    console.log(trip.userId, req.params.userId);
    if (trip.userId != req.params.userId) {
      return res.status(403).json({ message: "Invalid Trip!" });
    }
    console.log("confirmed correct trip/user, deleting");
    Trip.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((delTrip) => {
        res.json(delTrip);
      })
      .catch((err) => {
        res.status(500).json({ message: "error", err });
      });
  });
});
//Add new users to an existing trip
router.put("/addUser/:tripId/:userId", (req, res) => {
  Trip.findOne({ where: { id: req.params.tripId } })
    .then((tripData) => {
      tripData.addTrips(req.params.userId);
      return res.json(tripData);
    })
    .catch((err) => {
      console.log(err);
      return res.status(403).json({ message: "error", err });
    });
});
//get all users associated with a specific trip
router.get("/allUsers/:tripId", (req, res) => {
  Trip.findOne({
    where: {
      id: req.params.tripId,
    },
    include: [{ model: User, through: "tripUser", as: "Trips" }],
  }).then((userData) => {
    res.json(userData);
  });
});
module.exports = router;
