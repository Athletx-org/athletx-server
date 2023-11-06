const express = require("express");
const router = express.Router({ mergeParams: true });
const exerciseController = require("../../controllers/exerciseController");
const authenticate = require("../../middleware/authJwt");

router.get("/", authenticate, exerciseController.getAllExercises);

module.exports = router;