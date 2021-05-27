const db = require('../models');


module.exports = {

    findAll: function(req, res) {
        db.Trip
        .find(req.query)
        .sort({start_date: -1})
        .then(foundDb => res.json(foundDb))
        .catch(err => res.status(400).json(err));
    },
    findById: function(req, res) {
        db.Trip
          .findById(req.params.id)
          .then(foundDb => res.json(foundDb))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Trip
          .create(req.body)
          .then(foundDb => res.json(foundDb))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Trip
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(foundDb => res.json(foundDb))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Trip
          .findById({ _id: req.params.id })
          .then(foundDb => foundDb.remove())
          .then(foundDb => res.json(foundDb))
          .catch(err => res.status(422).json(err));
      }

};