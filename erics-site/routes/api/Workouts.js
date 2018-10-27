const router = require("express").Router();
const WorkoutsController = require("../../controllers/WorkoutsController");

// Matches with "/api/products"
router
  .route("/:level/:body_part")
  .get(WorkoutsController.findWorkout)
  module.exports= router