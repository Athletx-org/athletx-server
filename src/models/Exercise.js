const { Schema } = require("mongoose");

const ExerciseSchema = Schema({
  name: {
    type: String,
    required: true,
  },

  muscle: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Exercise", ExerciseSchema, "exercise");
