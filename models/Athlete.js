const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AthleteSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      validate: [
        (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
      ],
    },

    name: {
      type: String,
      required: true,
    },

    surname: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      min: 8,
    },

    height: {
      type: Number,
      required: true
    },

    weight: {
      type: Number,
      required: true
    },

    gender: {
      type: String, 
      required: true
    },

    birthdate: {
      type: Date, 
      required: true
    },

    refresh_token: String,
  }
);

module.exports = mongoose.model("Athlete", AthleteSchema);
