const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = Schema({
  text: {
    type: String,
    required: true,
  },

  expiration: {
    type: Date,
    required: true,
  },

  achieved: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Goal", GoalSchema, "goals");
