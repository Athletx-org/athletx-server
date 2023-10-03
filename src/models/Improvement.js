const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImprovementSchema = Schema({
  timeStamp: {
    type: Date,
    required: true
  },
  bodyWeight: {
    type: Number,
    required: true
  },
  bodyFat: {
    type: Number,
    required: true
  },
  biceps: {
    type: Number,
    required: true
  },
  chest: {
    type: Number,
    required: true
  },
  quadriceps: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Improvement", ImprovementSchema, "improvements");
