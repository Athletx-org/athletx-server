const express = require("express");
const router = express.Router({ mergeParams: true });
const goalController = require("../../controllers/goalController");
const authenticate = require("../../middleware/authJwt");
router.get("/", goalController.getAllGoals);
router.post("/", goalController.createNewGoal)
router.patch("/:goalId", goalController.setGoalAsAchieved)
module.exports = router;