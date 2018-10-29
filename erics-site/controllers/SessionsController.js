const db = require("../models");

// Defining methods for the SessionsController
module.exports = {
  findAll: function(req, res) {
    db.Sessions.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log(req.body)
    db.Sessions.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req,res){
      console.log(req)
      db.Sessions.findAll({where:{session_email: req.params.email}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
  }
}