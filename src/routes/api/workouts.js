const express = require("express");
const router = express.Router({ mergeParams: true });
const workoutsController = require("../../controllers/workoutsController");
const authenticate = require("../../middleware/authJwt");

router.get("/", authenticate, workoutsController.getAllWorkouts);
router.get("/:workoutId", workoutsController.getWorkout);
router.get("/info/current", workoutsController.getCurrentWorkout)
router.post("/", authenticate, workoutsController.createWorkout);
router.post("/current", authenticate, workoutsController.setCurrentWorkout)
router.patch("/:workoutId", authenticate, workoutsController.updateWorkout)
router.delete("/:workoutId", authenticate, workoutsController.deleteWorkout)

module.exports = router;
