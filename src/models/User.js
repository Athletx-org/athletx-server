const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema({
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

  password: {
    type: String,
    required: true,
    min: 8,
  },

  token: String,
});

module.exports = mongoose.model("User", UserSchema, "users");
