const router = require("express").Router();
const productsRoutes = require("./Products");
const workoutsRoutes= require("./Workouts")
const usersRoutes= require("./Users")
const sessionsRoutes= require("./Sessions")
// products routes
router.use("/Products", productsRoutes);
router.use("/Workouts", workoutsRoutes);
router.use("/Users", usersRoutes)
router.use("/Sessions", sessionsRoutes)
module.exports = router;