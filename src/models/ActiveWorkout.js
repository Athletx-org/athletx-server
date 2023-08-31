const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActiveWorkoutSchema = Schema({
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  workoutId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workout",
  },

  startingDate: {
    type: Date,
    required: true,
  },

  endingDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model(
  "ActiveWorkout",
  ActiveWorkoutSchema,
  "activeWorkouts"
);
