const db = require("../models");

// Defining methods for the beachesController
module.exports = {
  findWorkout: function(req, res) {
    console.log(req.params)
  db.Workouts
    .findAll({where: {
        workout_category:req.params.body_part,
        workout_level:req.params.level
    },
    order:[
        ["workout_order","ASC"]
    ]
})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}}