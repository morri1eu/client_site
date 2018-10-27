const router = require("express").Router();
const productsRoutes = require("./Products");
const workoutsRoutes= require("./Workouts")
// products routes
router.use("/Products", productsRoutes);
router.use("/Workouts", workoutsRoutes);

module.exports = router;