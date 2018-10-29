const router = require("express").Router();
const usersController = require("../../controllers/UsersController");

// Matches with "/api/users/id"
router
  .route("/id/:id")
  .get(usersController.findById)


  //Matches "/api/users"
  router
  .route("/")
  .get(usersController.findById)
  .post(usersController.create);

  module.exports= router