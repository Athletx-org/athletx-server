const express = require("express");
const router = express.Router({ mergeParams: true });
const workoutsController = require("../../controllers/workoutsController");
const authenticate = require("../../middleware/authJwt");
router.get("/", authenticate, workoutsController.getAllWorkouts);
router.get("/:workoutId", authenticate, workoutsController.getWorkout);
router.post("/", authenticate, workoutsController.createWorkout);
router.delete("/:workoutId", authenticate, workoutsController.deleteWorkout)

module.exports = router;
