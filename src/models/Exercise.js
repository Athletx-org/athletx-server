const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = Schema({
  name: {
    type: String,
    required: true,
  },

  muscle: {
    type: String,
    required: false,
  },

  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Exercise", ExerciseSchema, "exercises");
