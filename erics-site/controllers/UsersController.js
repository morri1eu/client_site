const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findById: function(req, res) {
    db.Users.findOne({where: {user_id:req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log(req.body)
    db.Users.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}