const db = require("../models");

// Defining methods for the beachesController
module.exports = {
  findAll: function(req, res) {
      console.log(req.query)
      console.log(db)
    db.Products
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req,res) {
    console.log("-----------------------------------------------------")
    console.log(req.params.id)
      db.Products
        .findOne({where: {product_id:req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
  },
  findByCategory: function(req, res) {
    console.log(req.params.type)
    var searchTerm= req.params.type.replace("_"," ")
    console.log(searchTerm)
  db.Products
    .findAll({where: {product_category:searchTerm}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
}