const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActiveWorkoutSchema = Schema({
  userId:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  workoutId: {
    type: Schema.Types.ObjectId,
    ref: "Workout",
  },

  startingDate: {
    type: Date,
    required: false,
  },

  endingDate: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model(
  "ActiveWorkout",
  ActiveWorkoutSchema,
  "activeWorkouts"
);
