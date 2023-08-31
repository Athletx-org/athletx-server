const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrainingsSchema = Schema({
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "ExerciseExecution",
    },
  ],
});

module.exports = mongoose.model("Training", TrainingsSchema, "trainings");
