const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = Schema({
  name: {
    type: String,
    required: true,
  },

  difficulty: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  trainings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Training",
    },
  ],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = mongoose.model("Workout", WorkoutSchema, "workouts");
