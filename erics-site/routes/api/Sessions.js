const router = require("express").Router();
const sessionsController = require("../../controllers/SessionsController");

//Matches "/api/sessions"
router
    .route("/")
    .get(sessionsController.findAll)
    .post(sessionsController.create);
router
    .route("/:email")
    .get(sessionsController.findByEmail)
module.exports = router