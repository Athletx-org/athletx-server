const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseExecutionSchema = Schema({
  series: {
    type: Number,
    required: false,
  },

  reps: {
    type: Number,
    required: false,
  },

  rest: {
    type: Number,
    required: false,
  },

  duration: {
    type: Number,
    required: false,
  },

  exerciseId: {
    type: Schema.Types.ObjectId,
    ref: "Exercise",
  },
});

module.exports = mongoose.model(
  "ExerciseExecution",
  ExerciseExecutionSchema,
  "exerciseExecutions"
);
