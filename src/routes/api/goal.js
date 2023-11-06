const express = require("express");
const router = express.Router({ mergeParams: true });
const goalController = require("../../controllers/goalController");
const authenticate = require("../../middleware/authJwt");

router.get("/", authenticate, goalController.getAllGoals);
router.post("/", authenticate, goalController.createNewGoal);
router.patch("/:goalId", authenticate, goalController.setGoalAsAchieved);

module.exports = router;