const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserInfoSchema = Schema({


  name: {
    type: String,
    required: true,
  },

  surname: {
    type: String,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  birthdate: {
    type: Date,
    required: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  
});

module.exports = mongoose.model("UserInfo", UserInfoSchema, "usersInfo");
